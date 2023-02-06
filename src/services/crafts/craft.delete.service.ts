import {CRAFT_ERRORS} from "../../validation/errors";
import {ICraftModel} from "../../models/crafts/craft.model.interfaces";

const CraftModel = require("../../models/crafts/craft.model");

//Remove craft service
export const deleteCraftService = async (id: string): Promise<ICraftModel> => {
    try {
        return await CraftModel.findByIdAndRemove(id);
    } catch (error) {
        throw new Error(CRAFT_ERRORS.DELETE_ERROR);
    }
};