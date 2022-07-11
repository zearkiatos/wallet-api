import connection from "../../../persistence/MySqlPersistence";
import BalanceRepository from "../../BalanceRepository";
import Balance from "../../domain/Balance";
import { balanceMapper, balancesMapper } from "../Adapter/BalanceAdapter";

class BalanceMySQLRepository implements BalanceRepository {
  public async find(id: number): Promise<Balance | null> {
    const [rows]: any[] = await connection.execute(
      `SELECT * FROM wallet_balance WHERE id = ${id}`
    );

    if (rows.length) return balanceMapper(rows[0]);

    return null;
  }
  public async findByUserId(userId: number): Promise<Balance | null> {
    const [rows]: any[] = await connection.execute(
      `SELECT * FROM wallet_balance WHERE user_id = ${userId}`
    );

    if (rows.length) return balanceMapper(rows[0]);

    return null;
  }
  public async all(): Promise<Balance[]> {
    const [rows]: any[] = await connection.execute(
      "SELECT * FROM wallet_balance ORDER BY id DESC"
    );

    return balancesMapper(rows);
  }
  public async store(entry: Balance): Promise<void> {
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    await connection.execute(
      `INSERT INTO wallet_balance(user_id, amount, created_at, updated_at) VALUES(${entry.userId}, ${entry.amount}, '${now}', '${now}')`
    );
  }
  public async update(entry: Balance): Promise<void> {
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    await connection.execute(
      `UPDATE wallet_balance SET user_id=${entry.userId}, amount=${entry.amount}, updated_at='${now}' WHERE id=${entry.id}`
    );
  }
  public async remove(id: number): Promise<void> {
    await connection.execute(`DELETE FROM wallet_balance WHERE id=${id}`);
  }
}

export default BalanceMySQLRepository;
