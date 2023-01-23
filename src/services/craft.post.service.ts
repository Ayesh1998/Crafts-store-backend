import {CraftInterface} from "../controllers/craft.controller.interfaces";
import {ICraftModel} from "../models/craft.model.interfaces";
import {ERRORS} from "../validation/errors";

const CraftModel = require("../models/craft.model");

//Save new craft service
export const addCraftService = async ({description,material,name,price, photo}
    :CraftInterface): Promise<ICraftModel> => {
   const newCraft = new CraftModel({description,material,name,price, photo});
   try {
       return await newCraft.save();
   } catch (error) {
       throw new Error(ERRORS.POST_ERROR);
   }
};