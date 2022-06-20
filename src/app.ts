import express, { Application, Response, Request } from 'express';
import { container } from "./container";
import { TestService } from "./services/TestService";

const app: Application = express();

app.get("/", (request: Request, response: Response) => {
  response.send("Running... 🤖");
});

const testService = container.resolve<TestService>("TestService");

console.log(testService.get());

export default app;
