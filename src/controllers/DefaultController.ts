import { Request, Response } from "express";
import { route, GET } from "awilix-express";

@route("/")
class DefaultController {
  @GET()
  public index(request: Request, response: Response): void {
    response.send('running... 🤖');
  }
}

export default DefaultController;
