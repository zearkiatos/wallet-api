import { Request, Response } from "express";
import { route, GET } from "awilix-express";
import config from "../config";

@route("/")
class DefaultController {
  @GET()
  public index(request: Request, response: Response): void {
    response.send({
      NODE_ENV: config.ENVIRONMENT,
      APP_ENV: config.APP_ENV,
    });
  }
}

export default DefaultController;
