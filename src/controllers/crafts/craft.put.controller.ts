import { NextFunction, Request, Response } from "express";

import { putCraftSchema } from "../../validation/crafts.schema.validation";
import { updateCraftService } from "../../services/crafts/craft.put.service";

//logic of updating an already existing craft in the mongoDB
export const updateCraft = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error, value } = putCraftSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error);
  }

  const { craftId } = req.params;
  const filter = { _id: craftId };
  const opts = { new: true };

  try {
    const updatedCraft = await updateCraftService({
      filter,
      options: opts,
      data: req.body,
    });
    res.status(200).send(updatedCraft);
  } catch (error) {
    res.status(500).send(error);
  }
};
