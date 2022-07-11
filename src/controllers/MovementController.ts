import { Request, Response } from "express";
import { route, GET, POST } from "awilix-express";
import MovementService from "../services/MovementService";
import BaseController from "../common/Controllers/BaseController";
import { StatusCodes } from "http-status-codes";
import { MovementCreateDTO } from "../DTOs/Movement";

@route("/movements")
class MovementController extends BaseController {
  constructor(private readonly movementService: MovementService) {
    super();
  }
  @GET()
  public async all(request: Request, response: Response) {
    try {
      response.send(await this.movementService.all());
    } catch (ex) {
      this.handleException(ex, response);
    }
  }

  @route("/:id")
  @GET()
  public async find(request: Request, response: Response) {
    try {
      const id = parseInt(request.params.id);
      const result = await this.movementService.find(id);
      if (result) {
        response.send(result);
      } else {
        response.status(StatusCodes.NOT_FOUND);
        response.send();
      }
    } catch (ex) {
      this.handleException(ex, response);
    }
  }

  @POST()
  public async store(request: Request, response: Response) {
    try {
      await this.movementService.store({
        type: request.body.type,
        amount: request.body.amount,
        userId: request.body.userId,
      } as MovementCreateDTO);
      response.send();
    } catch (ex) {
      this.handleException(ex, response);
    }
  }
}

export default MovementController;
