import db from "../../../persistence/MockPersistence";
import Balance from "../../domain/Balance";
import Subscription from "../../domain/Subscription";
import SubscriptionRepository from "../../SubscriptionRepository";

class SubscriptionMockRepository implements SubscriptionRepository {
  public async all(): Promise<Subscription[]> {
    const subscriptions = db.subscription as Subscription[];
    return [...subscriptions];
  }
  public async find(id: number): Promise<Subscription | null> {
    const subscriptions = db.subscription as Subscription[];
    const result = subscriptions.find((subscription) => subscription.id === id);

    if (result) return { ...result };

    return null;
  }
  public async findByUserAndCode(
    userId: number,
    code: string
  ): Promise<Subscription | null> {
    const subscriptions = db.subscription as Subscription[];
    const result = subscriptions.find(
      (subscription) =>
        subscription.userId === userId && subscription.code === code
    );

    if (result) return { ...result };

    return null;
  }
  public async store(entry: Subscription): Promise<void> {
    const subscriptions = db.subscription as Subscription[];
    const now = new Date();

    db._subscriptionId++;

    subscriptions.push({
      id: db._subscriptionId,
      code: entry.code,
      amount: entry.amount,
      userId: entry.userId,
      createdAt: now,
      updatedAt: now,
    } as Subscription);
  }
  public async update(entry: Subscription): Promise<void> {
    const subscriptions = db.subscription as Subscription[];
    const now = new Date();

    const originalEntry = subscriptions.find(
      (subscription) => subscription.id === entry.id
    );

    if (originalEntry) {
      originalEntry.userId = entry.userId;
      originalEntry.amount = entry.amount;
      originalEntry.code = entry.code;
      originalEntry.updatedAt = now;
    }
  }
  public async remove(id: number): Promise<void> {
    const subscriptions = db.subscription as Balance[];
    db.subscription = subscriptions.filter(
      (subscription) => subscription.id !== id
    ) as any;
  }
}

export default SubscriptionMockRepository;
