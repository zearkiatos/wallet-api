import connection from "../../../persistence/MSSqlPersistence";
import BalanceRepository from "../../BalanceRepository";
import Balance from "../../domain/Balance";
import { balanceMapper, balancesMapper } from "../Adapter/BalanceAdapter";

class BalanceMSSQLRepository implements BalanceRepository {
  public async find(id: number): Promise<Balance | null> {
    const pool = await connection;
    const result =
      await pool.query`SELECT * FROM wallet_balance WHERE id = ${id}`;

    if (result.rowsAffected) {
      return balanceMapper(result.recordset[0]);
    }

    return null;
  }
  public async findByUserId(userId: number): Promise<Balance | null> {
    const pool = await connection;
    const result =
      await pool.query`SELECT * FROM wallet_balance WHERE user_id = ${userId}`;

    if (result.rowsAffected) return balanceMapper(result.recordset[0]);

    return null;
  }
  public async all(): Promise<Balance[]> {
    const pool = await connection;
    const result = pool.query`SELECT * FROM wallet_balance ORDER BY id DESC`;

    return balancesMapper((await result).recordset);
  }
  public async store(entry: Balance): Promise<void> {
    const pool = await connection;
    const now = new Date().toISOString().slice(0, 19).replace("T", " ");
    await pool.query`INSERT INTO wallet_balance(user_id, amount, created_at, updated_at) VALUES(${entry.userId}, ${entry.amount}, ${now}, ${now})`;
  }
  public async update(entry: Balance): Promise<void> {
    const pool = await connection;
    const now = new Date().toISOString().slice(0, 19).replace("T", " ");

    await pool.query`UPDATE wallet_balance SET user_id=${entry.userId}, amount=${entry.amount}, updated_at=${now} WHERE id=${entry.id}`;
  }
  public async remove(id: number): Promise<void> {
    const pool = await connection;
    await pool.query`DELETE FROM wallet_balance WHERE id=${id}`;
  }
}

export default BalanceMSSQLRepository;
