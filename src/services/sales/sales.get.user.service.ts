import { ISalesModel } from "../../models/sales/sale.model.interface";
import { SALES_ERRORS } from "../../validation/errors";

const SalesModel = require("../../models/sales/sales.model");

//Get sales by user service
export const getSalesByUserService = async (userId: string): Promise<ISalesModel> => {
  try {
    return await SalesModel.find({ userId: userId }).populate("prodID").select({
      __v: 0,
      userId: 0,
    });
  } catch (error) {
    throw new Error(SALES_ERRORS.GET_ALL_ERROR);
  }
};
