import Subscription from "./domain/Subscription";

interface SubscriptionRepository {
  all(): Promise<Subscription[]>;

  find(id: number): Promise<Subscription | null>;

  store(entry: Subscription): Promise<void>;

  update(entry: Subscription): Promise<void>;

  remove(id: number): Promise<void>;

  findByUserAndCode(userId: number, code: string): Promise<Subscription | null>;
}

export default SubscriptionRepository;
