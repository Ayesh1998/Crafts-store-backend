import {CraftInterface} from "../../controllers/crafts/craft.controller.interfaces";
import {CRAFT_ERRORS} from "../../validation/errors";
import {ICraftModel} from "../../models/crafts/craft.model.interfaces";

const CraftModel = require("../../models/crafts/craft.model");

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
        throw new Error(CRAFT_ERRORS.UPDATE_ERROR);
    }
};