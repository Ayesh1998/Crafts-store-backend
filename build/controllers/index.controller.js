"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const craft_delete_controller_1 = require("./craft.delete.controller");
const craft_getAll_controller_1 = require("./craft.getAll.controller");
const craft_post_controller_1 = require("./craft.post.controller");
const craft_put_controller_1 = require("./craft.put.controller");
const addCraftController = craft_post_controller_1.addCraft;
const getCraftController = craft_getAll_controller_1.getCraft;
const updateCraftController = craft_put_controller_1.updateCraft;
const deleteCraftController = craft_delete_controller_1.deleteCraft;
module.exports = {
    addCraftController,
    getCraftController,
    updateCraftController,
    deleteCraftController,
};
