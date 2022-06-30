import BalanceBuilder from "../builders/BalanceBuilder";
const database = {
  balance: [
    new BalanceBuilder().build()
  ],
  movements: [],
  subscription: [],
  _balanceId: 0,
  _movementId: 0,
  _subscriptionId: 0,
};
