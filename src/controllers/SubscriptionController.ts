import { Request, Response } from "express";
import { route, GET, POST, PUT, DELETE } from "awilix-express";
import SubscriptionService from "../services/SubscriptionService";
import Subscription from "../repositories/domain/Subscription";

@route("/subscriptions")
class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}
  @GET()
  public async all(request: Request, response: Response) {
    response.send(await this.subscriptionService.all());
  }

  @route(":id")
  @GET()
  public async find(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    response.send(await this.subscriptionService.find(id));
  }

  @POST()
  public async store(request: Request, response: Response) {
    await this.subscriptionService.store({
      userId: request.body.userId,
      code: request.body.code,
      amount: request.body.amount,
      cron: request.body.cron,
    } as Subscription);
    response.send();
  }

  @route(":id")
  @PUT()
  public async update(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    await this.subscriptionService.update(id, {
      code: request.body.code,
      amount: request.body.amount,
      cron: request.body.cron,
    } as Subscription);
    response.send();
  }

  @route(":id")
  @DELETE()
  public async remove(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    await this.subscriptionService.remove(id);
    response.send();
  }
}

export default SubscriptionController;
