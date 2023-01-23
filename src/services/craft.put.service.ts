import {CraftInterface} from "../controllers/craft.controller.interfaces";
import {ICraftModel} from "../models/craft.model.interfaces";
import {ERRORS} from "../validation/errors";

const CraftModel = require("../models/craft.model");

interface UpdateArgsInterface {
    filter: {_id: string},
    options: {new: boolean},
    data: CraftInterface,
}

//Update craft service
export const updateCraftService = async ({filter,options,data}: UpdateArgsInterface )
            : Promise<ICraftModel> => {
    try {
        return await CraftModel.findOneAndUpdate(filter, data, options);
    } catch (error) {
        throw new Error(ERRORS.UPDATE_ERROR);
    }
};