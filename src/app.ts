import express, { Application } from "express";
import { loadControllers } from "awilix-express";
import LoadContainer from "./container";

const app: Application = express();

LoadContainer(app);

app.use(loadControllers("controllers/*.ts", { cwd: __dirname }));

export default app;
