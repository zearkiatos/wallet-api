import { Application } from "express";
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";
import { TestService } from "./services/TestService";
import SubscriptionMySQLRepository from "./repositories/implementation/mysql/SubscriptionMySQLRepository";
import SubscriptionService from "./services/SubscriptionService";
import MovementMySQLRepository from "./repositories/implementation/mysql/MovementMySQLRepository";
import BalanceMySQLRepository from "./repositories/implementation/mysql/BalanceMySQLRepository";
import MovementService from "./services/MovementService";

const Container = (app: Application) => {
  const container = createContainer({
    injectionMode: "CLASSIC",
  });

  container.register({
    subscriptionRepository: asClass(SubscriptionMySQLRepository).scoped(),
    movementRepository: asClass(MovementMySQLRepository).scoped(),
    balanceRepository: asClass(BalanceMySQLRepository).scoped(),
    subscriptionService: asClass(SubscriptionService).scoped(),
    movementService: asClass(MovementService).scoped(),
    testService: asClass(TestService).scoped(),
  });

  app.use(scopePerRequest(container));
};

export default Container;
