import { NextFunction, Request, Response } from "express";

import { CraftInterface } from "./craft.controller.interfaces";
import { addCraftService } from "../../services/crafts/craft.post.service";
import { postCraftSchema } from "../../validation/crafts.schema.validation";

//logic of adding craft to the mongoDB
export const addCraft = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { error, value } = postCraftSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error);
  }

  try {
    const { description, material, name, price, photo } = req.body;
    const newCraft: CraftInterface = {
      description,
      material,
      name,
      price,
      photo,
    };

    const addedCraft = await addCraftService(newCraft);
    res.status(200).send(addedCraft);
  } catch (error) {
    res.status(500).send(error);
  }
};
