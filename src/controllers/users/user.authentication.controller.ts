import { NextFunction, Request, Response } from "express";

import { authenticateUserSchema } from "../../validation/users.schema.validation";
import { authenticateUserService } from "../../services/users/user.authenticate.service";

//user authenticating controller
export const authenticateUser = async (
  req: Request,
  res: any,
  next: NextFunction
): Promise<Response | void> => {
  const { error, value } = authenticateUserSchema.validate(res.body);
  if (error) {
    return res.status(400).send(error);
  }
  const { email, password } = req.body;

  try {
    const user = await authenticateUserService(email, password);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(401).send(error.message);
  }
};
