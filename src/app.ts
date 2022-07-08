import express, { Application } from "express";
import { loadControllers } from "awilix-express";
import { expressjwt as jwt } from "express-jwt";
import LoadContainer from "./container";
import config from "./config";

const app: Application = express();
app.use(express.json());

LoadContainer(app);

if (config.JWT_SECRET_KEY) {
  app.use(
    jwt({
      secret: config.JWT_SECRET_KEY,
      algorithms: ["HS256"],
    }).unless({
      path: ['/', '/check']
    })
  );
}

app.use(loadControllers("controllers/*.ts", { cwd: __dirname }));

export default app;
