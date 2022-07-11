import MovementTypes from "../../common/Enums/MovementTypes";
interface Movement {
  id: number;
  userId: number;
  type: MovementTypes;
  amount: number;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export default Movement;
