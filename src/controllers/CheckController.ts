import { Request, Response } from "express";
import { route, GET } from "awilix-express";
import config from "../config";
import { TestService } from "../services/TestService";

@route("/check")
class CheckController {
  constructor(private readonly testService: TestService) {}
  @GET()
  public index(request: Request, response: Response): void {
    response.send({
      NODE_ENV: config.ENVIRONMENT,
      APP_ENV: config.APP_ENV,
    });
  }

  @route("/test")
  @GET()
  public test(request: Request, response: Response): void {
    response.send(this.testService.get());
  }
}

export default CheckController;
