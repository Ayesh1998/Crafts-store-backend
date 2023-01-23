import { NextFunction, Request, Response } from "express";
import { getCraftService } from "../services/craft.getAll.service";
import { getAllCraftsSchema } from "../validation/schema.validation";

//logic of getting all crafts from the mongoDB
export const getCraft = async (
  req: Request,
  res: any,
  next: NextFunction
): Promise<Response | void> => {
  const { error, value } = getAllCraftsSchema.validate(res.body);
  if (error) {
    return res.status(400).send(error);
  }

  try {
    const crafts = await getCraftService();
    res.status(200).send(crafts);
  } catch (error) {
    res.status(500).send(error);
  }
};
