import {CRAFT_ERRORS} from "../../validation/errors";
import {CraftInterface} from "../../controllers/crafts/craft.controller.interfaces";
import CraftModel from "../../models/crafts/craft.model";
import {ICraftModel} from "../../models/crafts/craft.model.interfaces";

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

interface UpdateArgsInterface {
    filter: {_id: string},
    options: {new: boolean},
    data: CraftInterface,
}

//Update craft service
export const updateCraftService = async ({filter,options,data}: UpdateArgsInterface )
            : Promise<ICraftModel | null> => {
    try {
        return await CraftModel.findOneAndUpdate(filter, data, options);
    } catch (error) {
        throw new Error(CRAFT_ERRORS.UPDATE_ERROR);
    }
};

//Get all craft service
export const getCraftService = async (): Promise<ICraftModel[]> => {
    try {
        return await CraftModel.find().select({"__v": 0,});
    } catch (error) {
        throw new Error(CRAFT_ERRORS.GET_ERROR);
    }
};

//Remove craft service
export const deleteCraftService = async (id: string): Promise<ICraftModel | null> => {
    try {
        return await CraftModel.findByIdAndRemove(id);
    } catch (error) {
        throw new Error(CRAFT_ERRORS.DELETE_ERROR);
    }
};