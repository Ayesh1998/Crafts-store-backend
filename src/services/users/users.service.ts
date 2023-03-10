import { IUserModel } from "../../models/users/user.model.interfaces";
import { USER_ERRORS } from "../../validation/errors";
import { UserInterface } from "../../controllers/users/user.controller.interfaces";
import UserModel from "../../models/users/user.model";

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

//User authenticating service
export const authenticateUserService = async (
  email: string,
  password: string
): Promise<IUserModel> => {
  let existingUser;

  try {
    existingUser = await UserModel.findOne({ email: email });
  } catch (err) {
    throw new Error(USER_ERRORS.AUTHENTICATING_ERROR);
  }

  if (!existingUser || existingUser.password !== password) {
    throw new Error(USER_ERRORS.AUTHENTICATING_ERROR);
  }

  return existingUser;
};
