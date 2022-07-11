import connection from "../../../persistence/MSSqlPersistence";
import Subscription from "../../domain/Subscription";
import SubscriptionRepository from "../../SubscriptionRepository";
import {
  subscriptionsMapper,
  subscriptionMapper,
} from "../Adapter/SubscriptionAdapter";
class SubscriptionMSSQLRepository implements SubscriptionRepository {
  public async all(): Promise<Subscription[]> {
    const pool = await connection;
    const result =
      await pool.query`SELECT * FROM wallet_subscription ORDER BY id DESC`;

    return subscriptionsMapper(result.recordset);
  }

  public async find(id: number): Promise<Subscription | null> {
    const pool = await connection;
    const result =
      await pool.query`SELECT * FROM wallet_subscription WHERE id = ${id}`;

    if (result.rowsAffected) {
      return subscriptionMapper(result.recordset[0]);
    }

    return null;
  }

  public async store(entry: Subscription): Promise<void> {
    const pool = await connection;
    const now = new Date().toISOString().slice(0, 19).replace("T", " ");

    await pool.query`INSERT INTO wallet_subscription(user_id, code, amount, cron, created_at, updated_at) VALUES(${entry.userId},${entry.code}, ${entry.amount},${entry.cron}, ${now}, ${now})`;
  }

  public async update(entry: Subscription): Promise<void> {
    const pool = await connection;
    const now = new Date().toISOString().slice(0, 19).replace("T", " ");

    await pool.query`UPDATE wallet_subscription SET user_id=${entry.userId}, code=${entry.code}, amount=${entry.amount}, cron=${entry.cron}, updated_at=${now} WHERE id=${entry.id}`;
  }

  public async remove(id: number): Promise<void> {
    const pool = await connection;
    await pool.query`DELETE FROM wallet_subscription WHERE id=${id}`;
  }

  public async findByUserAndCode(
    userId: number,
    code: string
  ): Promise<Subscription | null> {
    const pool = await connection;
    const result =
      await pool.query`SELECT * FROM wallet_subscription WHERE user_id = ${userId} AND code=${code}`;

    if (result.rowsAffected) return subscriptionMapper(result.recordset[0]);

    return null;
  }
}

export default SubscriptionMSSQLRepository;
