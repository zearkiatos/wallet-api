interface Subscription {
  id: number;
  code: string;
  userId: number;
  amount: number;
  cron: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export default Subscription;
