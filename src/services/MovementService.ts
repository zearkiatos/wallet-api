import BalanceRepository from "../repositories/BalanceRepository";
import MovementRepository from "../repositories/MovementRepository";
import Movement from "../repositories/domain/Movement";
import { MovementCreateDTO } from "../DTOs/Movement";
import MovementTypes from "../common/Enums/MovementTypes";
import ApplicationException from "../common/Exceptions/ApplicationException";
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
    } else if (entry.type === MovementTypes.OUTCOME) {
    } else {
      throw new ApplicationException("Invalid movement yupe supplied");
    }
  }
}

export default MovementService;
