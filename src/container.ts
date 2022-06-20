import { createContainer, asClass } from "awilix";
import { TestService } from "./services/TestService";

const container = createContainer();

container.register({
  TestService: asClass(TestService).scoped(),
});

export { container };
