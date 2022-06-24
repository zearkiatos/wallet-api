import { Application } from "express";
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";
import { TestService } from "./services/TestService";
import SubscriptionMySQLRepository from "./repositories/implementation/mysql/SubscriptionRepository";

const Container = (app: Application) => {
  const container = createContainer({
    injectionMode: "CLASSIC",
  });

  container.register({
    subscriptionRepository: asClass(SubscriptionMySQLRepository).scoped(),
    testService: asClass(TestService).scoped(),
  });

  app.use(scopePerRequest(container));
};

export default Container;
