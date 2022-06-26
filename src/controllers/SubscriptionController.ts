import { Request, Response } from "express";
import { route, GET, POST, PUT, DELETE } from "awilix-express";
import SubscriptionService from "../services/SubscriptionService";
import Subscription from "../repositories/domain/Subscription";
import BaseController from "../common/Controllers/baseController";
import { StatusCodes } from "http-status-codes";

@route("/subscriptions")
class SubscriptionController extends BaseController {
  constructor(private readonly subscriptionService: SubscriptionService) {
    super();
  }
  @GET()
  public async all(request: Request, response: Response) {
    try {
      response.send(await this.subscriptionService.all());
    } catch (ex) {
      this.handleException(ex, response);
    }
  }

  @route("/:id")
  @GET()
  public async find(request: Request, response: Response) {
    try {
      const id = parseInt(request.params.id);
      const result = await this.subscriptionService.find(id);
      if(result) {
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
      await this.subscriptionService.store({
        userId: request.body.userId,
        code: request.body.code,
        amount: request.body.amount,
        cron: request.body.cron,
      } as Subscription);
      response.send();
    } catch (ex) {
      this.handleException(ex, response);
    }
  }

  @route("/:id")
  @PUT()
  public async update(request: Request, response: Response) {
    try {
      const id = parseInt(request.params.id);
      await this.subscriptionService.update(id, {
        code: request.body.code,
        amount: request.body.amount,
        cron: request.body.cron,
      } as Subscription);
      response.send();
    } catch (ex) {
      this.handleException(ex, response);
    }
  }

  @route("/:id")
  @DELETE()
  public async remove(request: Request, response: Response) {
    try {
      const id = parseInt(request.params.id);
      await this.subscriptionService.remove(id);
      response.send();
    } catch (ex) {
      this.handleException(ex, response);
    }
  }
}

export default SubscriptionController;
