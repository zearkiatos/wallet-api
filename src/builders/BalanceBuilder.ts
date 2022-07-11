import BaseBuilder from "./BaseBuilder";

class BalanceBuilder extends BaseBuilder {
  public id: number;
  public userId = 1;
  public amount = 100;
  public createdAt: Date;
  public updatedAt: Date;
  constructor() {
    super();
    this.id = 1;
    this.userId = 1;
    this.amount = 100;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  withId(id: number) {
    this.id = id;
    return this;
  }

  withUserId(userId: number) {
    this.userId = userId;
    return this;
  }

  withAmount(amount: number) {
    this.amount = amount;
    return this;
  }

  withCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
    return this;
  }

  withUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
    return this;
  }
}

export default BalanceBuilder;
