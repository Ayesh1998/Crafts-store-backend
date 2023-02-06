import { IUserModel } from "../../models/users/user.model.interfaces";
import { USER_ERRORS } from "../../validation/errors";

const UserModel = require("../../models/users/user.model");

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
