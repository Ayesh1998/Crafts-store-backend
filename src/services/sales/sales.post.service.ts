import { ISalesModel } from "../../models/sales/sale.model.interface";
import { SALES_ERRORS } from "../../validation/errors";
import { SalesInterface } from "../../controllers/sales/sales.controller.interfaces";

;

const SalesModel = require("../../models/sales/sales.model");

//Save new sales service
export const addSalesService = async ({
  date, month, year, prodID, userId
}: SalesInterface): Promise<ISalesModel> => {

  const newSale = new SalesModel({
    date, month, year, prodID, userId
  });

  try {
    return await newSale.save();
  } catch (error) {
    throw new Error(SALES_ERRORS.POST_ERROR);
  }
};
