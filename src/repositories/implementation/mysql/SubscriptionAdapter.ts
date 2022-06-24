import Subscription from "../../domain/Subscription";

const subscriptionsMapper = (subscriptions: any[]): Subscription[] =>
  subscriptions.map(
    ({ updated_at, created_at, user_id, ...subscriptionRest }) => ({
      ...subscriptionRest,
      updatedAt: updated_at,
      createdAt: created_at,
      userId: user_id,
    })
  ) as Subscription[];

const subscriptionMapper = ({
  updated_at,
  created_at,
  user_id,
  ...subscriptionRest
}: any) => ({
  ...subscriptionRest,
  updatedAt: updated_at,
  createdAt: created_at,
  userId: user_id,
});

export { subscriptionsMapper, subscriptionMapper };
