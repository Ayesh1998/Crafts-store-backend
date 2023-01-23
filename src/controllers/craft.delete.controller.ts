import { NextFunction, Request, Response } from "express";
import { deleteCraftService } from "../services/craft.delete.service";

//logic of deleting an craft from the mongoDB
export const deleteCraft = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { craftId } = req.params;

  try {
    const deletedCraft = await deleteCraftService(craftId);
    res.status(200).send(deletedCraft);
  } catch (error) {
    res.status(500).send(error);
  }
};
