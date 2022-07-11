import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import ApplicationException from "../Exceptions/ApplicationException";
abstract class BaseController {
  handleException(error: any, response: Response) {
    if (error instanceof ApplicationException) {
      response.status(StatusCodes.BAD_REQUEST);
      response.send();
    } else {
      throw new Error(error);
    }
  }
}

export default BaseController;
