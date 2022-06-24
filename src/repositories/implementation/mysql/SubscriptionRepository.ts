import connection from "../../../persistence/MySqlPersistence";
import Subscription from "../../domain/Subscription";
import { subscriptionsMapper, subscriptionMapper } from "./SubscriptionAdapter";
class SubscriptionRepository {
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
}

export default SubscriptionRepository;
