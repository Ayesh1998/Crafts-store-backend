import {CRAFT_ERRORS} from "../../validation/errors";
import {CraftInterface} from "../../controllers/crafts/craft.controller.interfaces";
import {ICraftModel} from "../../models/crafts/craft.model.interfaces";

const CraftModel = require("../../models/crafts/craft.model");

//Save new craft service
export const addCraftService = async ({description,material,name,price, photo}
    :CraftInterface): Promise<ICraftModel> => {
   const newCraft = new CraftModel({description,material,name,price, photo});
   try {
       return await newCraft.save();
   } catch (error) {
       throw new Error(CRAFT_ERRORS.POST_ERROR);
   }
};