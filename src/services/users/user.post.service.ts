import { USER_ERRORS } from "../../validation/errors";
import { UserInterface } from "../../controllers/users/user.controller.interfaces";
import { IUserModel } from "../../models/users/user.model.interfaces";

const UserModel = require("../../models/users/user.model");

//Save new user service
export const addUserService = async ({
  email,
  first_name,
  last_name,
  password,
  role,
}: UserInterface): Promise<IUserModel> => {

  const newUser = new UserModel({
    email,
    first_name,
    last_name,
    password,
    role,
  });

  try {
    return await newUser.save();
  } catch (error) {
    throw new Error(USER_ERRORS.POST_ERROR);
  }
};
