import db from "../../../persistence/MockPersistence";
import BalanceRepository from "../../BalanceRepository";
import Balance from "../../domain/Balance";

class BalanceMockRepository implements BalanceRepository {
  public async findByUserId(userId: number): Promise<Balance | null> {
    const balances = db.balance as Balance[];
    const result = balances.find((balance) => balance.userId === userId);

    if (result) return { ...result };

    return null;
  }
  public async find(id: number): Promise<Balance | null> {
    const balances = db.balance as Balance[];
    const result = balances.find((balance) => balance.id === id);

    if (result) return { ...result };

    return null;
  }
  public async all(): Promise<Balance[]> {
    const balances = db.balance as Balance[];
    return [...balances];
  }
  public async store(entry: Balance): Promise<void> {
    const balances = db.balance as Balance[];
    const now = new Date();

    db._balanceId++;

    balances.push({
      id: db._balanceId,
      amount: entry.amount,
      userId: entry.userId,
      createdAt: now,
      updatedAt: now,
    } as Balance);
  }
  public async update(entry: Balance): Promise<void> {
    const balances = db.balance as Balance[];
    const now = new Date();

    const originalEntry = balances.find((balance) => balance.id === entry.id);

    if (originalEntry) {
      originalEntry.userId = entry.userId;
      originalEntry.amount = entry.amount;
      originalEntry.updatedAt = now;
    }
  }
  public async remove(id: number): Promise<void> {
    const balances = db.balance as Balance[];
    db.balance = balances.filter((balance) => balance.id !== id) as any;
  }
}

export default BalanceMockRepository;
