import { ISalesModel } from "../../models/sales/sale.model.interface";
import { SALES_ERRORS } from "../../validation/errors";
import { SalesInterface } from "../../controllers/sales/sales.controller.interfaces";
import SalesModel from "../../models/sales/sales.model";

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

//Get sales service
export const getAllSalesService = async (): Promise<ISalesModel[]> => {
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

//Get sales by user service
export const getSalesByUserService = async (userId: string): Promise<ISalesModel[]> => {
  try {
    return await SalesModel.find({ userId: userId }).populate("prodID").select({
      __v: 0,
      userId: 0,
    });
  } catch (error) {
    throw new Error(SALES_ERRORS.GET_ALL_ERROR);
  }
};
