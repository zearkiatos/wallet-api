import BalanceBuilder from "../builders/BalanceBuilder";
const database = {
  balance: [
    new BalanceBuilder().build(),
    new BalanceBuilder().withId(2).withUserId(2).build(),
    new BalanceBuilder().withId(3).withUserId(3).build(),
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
