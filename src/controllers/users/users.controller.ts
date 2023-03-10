import { NextFunction, Request, Response } from "express";
import { addUserService, authenticateUserService } from "../../services/users/users.service";

import { UserInterface } from "./user.controller.interfaces";

//logic of adding user to the mongoDB
export const addUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {

  try {
    const { email, first_name, last_name, password, role } = req.body;
    const newUser: UserInterface = {
      email,
      first_name,
      last_name,
      password,
      role,
    };

    const addedUser = await addUserService(newUser);
    res.status(200).send(addedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

//user authenticating controller
export const authenticateUserHandler = async (
  req: Request,
  res: any,
  next: NextFunction
): Promise<Response | void> => {

  const { email, password } = req.body;

  try {
    const user = await authenticateUserService(email, password);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(401).send(error.message);
  }
};
