import { NextFunction, Request, Response } from "express";

import { getAllSalesService } from "../../services/sales/sales.getAll.service";

//logic of getting all sales from the mongoDB
export const getAllSales = async (
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
