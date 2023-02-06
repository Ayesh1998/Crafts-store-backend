import { CRAFT_ERRORS, SALES_ERRORS } from "../../validation/errors";

import { ISalesModel } from "../../models/sales/sale.model.interface";

const SalesModel = require("../../models/sales/sales.model");

//Get sales service
export const getAllSalesService = async (): Promise<ISalesModel> => {
  try {
    return await SalesModel.find()
      .populate("prodID")
      .populate("userId")
      .select({
        __v: 0,
        // userId: 0,
      });
  } catch (error) {
    throw new Error(SALES_ERRORS.GET_ALL_ERROR);
  }
};
