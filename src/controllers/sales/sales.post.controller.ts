import { NextFunction, Request, Response } from "express";
import {
  SalesInterface,
  SalesReqInterface,
} from "./sales.controller.interfaces";

import { addSalesService } from "../../services/sales/sales.post.service";
import { salesSchema } from "../../validation/sales.schema.validations";

//logic of adding sale to the mongoDB
export const addSales = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  console.log(req.body);

  const { error, value } = salesSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error);
  }

  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();

  try {
    const { crafts, userId }: SalesReqInterface = req.body;

    crafts.forEach(async (craft) => {
      const newSale: SalesInterface = {
        date,
        month,
        prodID: craft._id,
        userId,
        year,
      };

      await addSalesService(newSale);
    });

    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};
