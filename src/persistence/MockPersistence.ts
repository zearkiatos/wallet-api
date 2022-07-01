import BalanceBuilder from "../builders/BalanceBuilder";
const database = {
  balance: [
    new BalanceBuilder().build(),
    new BalanceBuilder().withParam("id", 2).withParam("user_id", 2).build(),
    new BalanceBuilder().withParam("id", 3).withParam("user_id", 3).build(),
  ],
  movements: [],
  subscription: [],
  _balanceId: 0,
  _movementId: 0,
  _subscriptionId: 0,
};

database._balanceId = database.balance.length;
database._movementId = database.movements.length;
database._subscriptionId = database.subscription.length;

export default database;
