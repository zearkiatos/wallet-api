import connection from "../../../persistence/MySqlPersistence";
import Subscription from "../../domain/Subscription";
import SubscriptionRepository from "../SubscriptionRepository";
import { subscriptionsMapper, subscriptionMapper } from "./SubscriptionAdapter";
class SubscriptionMySQLRepository implements SubscriptionRepository {
  public async all(): Promise<Subscription[]> {
    const [rows]: any[] = await connection.execute(
      "SELECT * FROM wallet_subscription ORDER BY id DESC"
    );

    return subscriptionsMapper(rows);
  }

  public async find(id: number): Promise<Subscription | null> {
    const [rows]: any[] = await connection.execute(
      `SELECT * FROM wallet_subscription WHERE id = ${id}`
    );

    if (rows.length) return subscriptionMapper(rows[0]);

    return null;
  }

  public async store(entry: Subscription): Promise<void> {
    const now = new Date();
    await connection.execute(
      `INSERT INTO wallet_subscription(user_id, code, amount, cron, created_at, updated_at) VALUES(${entry.userId},${entry.code}, ${entry.amount},${entry.cron}, ${now}, ${now})`
    );
  }

  public async update(entry: Subscription): Promise<void> {
    const now = new Date();
    await connection.execute(
      `UPDATE wallet_subscription SET user_id=${entry.userId}, code=${entry.code}, amount=${entry.amount}, cron=${entry.cron}, updated_at=${now} WHERE id=${entry.id}`
    );
  }

  public async remove(id: number): Promise<void> {
    await connection.execute(`DELETE FROM wallet_subscription WHERE id=${id}`);
  }

  public async findByUserAndCode(
    userId: number,
    code: string
  ): Promise<Subscription | null> {
    const [rows]: any[] = await connection.execute(
      `SELECT * FROM wallet_subscription WHERE user_id = ${userId} AND code=${code}`
    );

    if (rows.length) return subscriptionMapper(rows[0]);

    return null;
  }
}

export default SubscriptionMySQLRepository;
