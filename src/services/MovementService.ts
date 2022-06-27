import BalanceRepository from "../repositories/BalanceRepository";
import MovementRepository from "../repositories/MovementRepository";
import Movement from "../repositories/domain/Movement";
import { MovementCreateDTO } from "../DTOs/Movement";
import MovementTypes from "../common/Enums/MovementTypes";
import ApplicationException from "../common/Exceptions/ApplicationException";
import Balance from "../repositories/domain/Balance";
class MovementService {
  constructor(
    private readonly movementRepository: MovementRepository,
    private readonly balanceRepository: BalanceRepository
  ) {}

  public async find(id: number): Promise<Movement | null> {
    return await this.movementRepository.find(id);
  }

  public async all(): Promise<Movement[]> {
    return await this.movementRepository.all();
  }

  public async store(entry: MovementCreateDTO): Promise<void> {
    const balance = await this.balanceRepository.findByUserId(entry.userId);

    if (entry.type === MovementTypes.INCOME) {
      this.income(entry, balance);
    } else if (entry.type === MovementTypes.OUTCOME) {
      this.outcome(entry, balance);
    } else {
      throw new ApplicationException("Invalid movement yupe supplied");
    }
  }

  public async income(entry: MovementCreateDTO, balance: Balance | null) {
    if (!balance) {
      await this.balanceRepository.store({
        amount: entry.amount,
        userId: entry.userId,
      } as Balance);
    } else {
      balance.amount += entry.amount;
      await this.balanceRepository.update(balance);
    }

    await this.movementRepository.store(entry as Movement);
  }

  public async outcome(entry: MovementCreateDTO, balance: Balance | null) {
    if (!balance || balance.amount < entry.amount) {
      throw new ApplicationException("User does not have enough balace.");
    }
    else {
        balance.amount -= entry.amount;
        await this.balanceRepository.update(balance);
        await this.movementRepository.store(entry as Movement);
    }
  }
}

export default MovementService;
