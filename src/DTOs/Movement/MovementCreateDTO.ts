import MovementTypes from "../../common/Enums/MovementTypes";

interface MovementCreateDTO {
  type: MovementTypes;
  userId: number;
  amount: number;
}

export default MovementCreateDTO;
