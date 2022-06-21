import express, { Application, Response, Request } from "express";
import { loadControllers } from "awilix-express";
import { container } from "./container";
import { TestService } from "./services/TestService";

const app: Application = express();

app.get("/", (request: Request, response: Response) => {
  response.send("Running... 🤖");
});

app.use(loadControllers("controllers/*.ts", { cwd: __dirname }));

export default app;
