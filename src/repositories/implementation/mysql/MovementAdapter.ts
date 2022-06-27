import Movement from "../../domain/Movement";

const movementsMapper = (movements: any[]): Movement[] =>
movements.map(
    ({ updated_at, created_at, user_id, ...movementRest }) => ({
      ...movementRest,
      updatedAt: updated_at,
      createdAt: created_at,
      userId: user_id,
    })
  ) as Movement[];

const movementMapper = ({
  updated_at,
  created_at,
  user_id,
  ...movementRest
}: any) => ({
  ...movementRest,
  updatedAt: updated_at,
  createdAt: created_at,
  userId: user_id,
});

export { movementsMapper, movementMapper };