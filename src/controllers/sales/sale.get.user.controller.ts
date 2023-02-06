import { NextFunction, Request, Response } from "express";

import { getSalesByUserService } from "../../services/sales/sales.get.user.service";

//logic of getting all bought crafts from the mongoDB
export const getBoughtCrafts = async (
  req: Request,
  res: any,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { userId } = req.params;
    console.log(userId);
    
    const boughtCrafts = await getSalesByUserService(userId);
    res.status(200).send(boughtCrafts);
  } catch (error) {
    res.status(500).send(error);
  }
};
