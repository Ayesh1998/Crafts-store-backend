import { NextFunction, Request, Response } from "express";
import {
  addCraftService,
  deleteCraftService,
  getCraftService,
  updateCraftService,
} from "../../services/crafts/crafts.service";

import { CraftInterface } from "./craft.controller.interfaces";
import { getAllCraftsSchema } from "../../validation/crafts.schema.validation";

//logic of deleting an craft from the mongoDB
export const deleteCraftHandler = async (
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

//logic of updating an already existing craft in the mongoDB
export const updateCraftHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

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

//logic of adding craft to the mongoDB
export const addCraftHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {

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

//logic of getting all crafts from the mongoDB
export const getCraftHandler = async (
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
