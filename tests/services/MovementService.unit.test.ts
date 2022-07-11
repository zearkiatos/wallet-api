import assert from "assert";
import MovementTypes from "../../src/common/Enums/MovementTypes";
import { MovementCreateDTO } from "../../src/DTOs/Movement";
import BalanceMockRepository from "../../src/repositories/implementation/mock/BalanceMockRepository";
import MovementMockRepository from "../../src/repositories/implementation/mock/MovementMockRepository";
import MovementService from "../../src/services/MovementService";

const movementService = new MovementService(
  new MovementMockRepository(),
  new BalanceMockRepository()
);

describe("Unit test suite for Movement Service", () => {
  describe("Test for store methods", () => {
    it("Should registry an income movement", async () => {
      await movementService.store({
        userId: 1,
        type: MovementTypes.INCOME,
        amount: 200,
      } as MovementCreateDTO);
    });

    it("Should registry an outcome movement", async () => {
      await movementService.store({
        userId: 1,
        type: MovementTypes.OUTCOME,
        amount: 200,
      } as MovementCreateDTO);
    });

    it("Should registry an outcome movement with insufficient balance", async () => {
      try {
        await movementService.store({
          userId: 1,
          type: MovementTypes.OUTCOME,
          amount: 200,
        } as MovementCreateDTO);
      } catch (ex: any) {
        assert.equal(ex.message, "User does not have enough balace.");
      }
    });

    it("Should registry an unexpecter movement ", async () => {
      try {
        await movementService.store({
          userId: 1,
          amount: 200,
        } as MovementCreateDTO);
      } catch (ex: any) {
        assert.equal(ex.message, "Invalid movement yupe supplied");
      }
    });
  });
});
