import {CRAFT_ERRORS} from "../../validation/errors";
import {ICraftModel} from "../../models/crafts/craft.model.interfaces";

const CraftModel = require("../../models/crafts/craft.model");

//Get all craft service
export const getCraftService = async (): Promise<ICraftModel> => {
    try {
        return await CraftModel.find().select({"__v": 0,});
    } catch (error) {
        throw new Error(CRAFT_ERRORS.GET_ERROR);
    }
};