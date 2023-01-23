import {ICraftModel} from "../models/craft.model.interfaces";
import {ERRORS} from "../validation/errors";

const CraftModel = require("../models/craft.model");

//Get all craft service
export const getCraftService = async (): Promise<ICraftModel> => {
    try {
        return await CraftModel.find().select({"__v": 0,});
    } catch (error) {
        throw new Error(ERRORS.GET_ERROR);
    }
};