"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const craft_post_controller_1 = require("./crafts/craft.post.controller");
const sales_post_controller_1 = require("./sales/sales.post.controller");
const user_post_controller_1 = require("./users/user.post.controller");
const user_authentication_controller_1 = require("./users/user.authentication.controller");
const craft_delete_controller_1 = require("./crafts/craft.delete.controller");
const sale_getAll_controller_1 = require("./sales/sale.getAll.controller");
const sale_get_user_controller_1 = require("./sales/sale.get.user.controller");
const craft_getAll_controller_1 = require("./crafts/craft.getAll.controller");
const craft_put_controller_1 = require("./crafts/craft.put.controller");
const addCraftController = craft_post_controller_1.addCraft;
const getCraftController = craft_getAll_controller_1.getCraft;
const updateCraftController = craft_put_controller_1.updateCraft;
const deleteCraftController = craft_delete_controller_1.deleteCraft;
const addUserController = user_post_controller_1.addUser;
const authenticateUserController = user_authentication_controller_1.authenticateUser;
const addSalesController = sales_post_controller_1.addSales;
const getBoughtCraftsController = sale_get_user_controller_1.getBoughtCrafts;
const getAllSalesController = sale_getAll_controller_1.getAllSales;
module.exports = {
    addCraftController,
    getCraftController,
    updateCraftController,
    deleteCraftController,
    addUserController,
    authenticateUserController,
    addSalesController,
    getBoughtCraftsController,
    getAllSalesController
};
