import Balance from "../../domain/Balance";

const balancesMapper = (balances: any[]): Balance[] =>
balances.map(
    ({ updated_at, created_at, user_id, ...balanceRest }) => ({
      ...balanceRest,
      updatedAt: updated_at,
      createdAt: created_at,
      userId: user_id,
    })
  ) as Balance[];

const balanceMapper = ({
  updated_at,
  created_at,
  user_id,
  ...balanceRest
}: any) => ({
  ...balanceRest,
  updatedAt: updated_at,
  createdAt: created_at,
  userId: user_id,
});

export { balancesMapper, balanceMapper };