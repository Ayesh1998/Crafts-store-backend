import {ICraftModel} from "../models/craft.model.interfaces";
import {ERRORS} from "../validation/errors";

const CraftModel = require("../models/craft.model");

//Remove craft service
export const deleteCraftService = async (id: string): Promise<ICraftModel> => {
    try {
        return await CraftModel.findByIdAndRemove(id);
    } catch (error) {
        throw new Error(ERRORS.DELETE_ERROR);
    }
};