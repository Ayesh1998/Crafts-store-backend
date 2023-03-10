import { NextFunction, Request, Response } from "express";
import {
  SalesInterface,
  SalesReqInterface,
} from "./sales.controller.interfaces";
import { addSalesService, getAllSalesService, getSalesByUserService } from "../../services/sales/sales.service";

import { salesSchema } from "../../validation/sales.schema.validations";

//logic of adding sale to the mongoDB
export const addSalesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {

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

//logic of getting all sales from the mongoDB
export const getAllSalesHandler = async (
  req: Request,
  res: any,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const sales = await getAllSalesService();
    res.status(200).send(sales);
  } catch (error) {
    res.status(500).send(error);
  }
};

//logic of getting all bought crafts from the mongoDB
export const getBoughtCraftsHandler = async (
  req: Request,
  res: any,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { userId } = req.params;
    
    const boughtCrafts = await getSalesByUserService(userId);
    res.status(200).send(boughtCrafts);
  } catch (error) {
    res.status(500).send(error);
  }
};
