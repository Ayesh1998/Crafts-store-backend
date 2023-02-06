import { NextFunction, Request, Response } from "express";

import { UserInterface } from "./user.controller.interfaces";
import { addUserService } from "../../services/users/user.post.service";
import { postUserSchema } from "../../validation/users.schema.validation";

//logic of adding user to the mongoDB
export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  console.log(req.body);
  
  const { error, value } = postUserSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error);
  }

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
