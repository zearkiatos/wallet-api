interface SubscriptionCreateDTO {
  code: string;
  userId: number;
  amount: number;
  cron: string;
}

export default SubscriptionCreateDTO;
