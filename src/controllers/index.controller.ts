import { addCraft } from "./crafts/craft.post.controller";
import { addSales } from "./sales/sales.post.controller";
import { addUser } from "./users/user.post.controller";
import { authenticateUser } from "./users/user.authentication.controller";
import { deleteCraft } from "./crafts/craft.delete.controller";
import { getAllSales } from "./sales/sale.getAll.controller";
import { getBoughtCrafts } from "./sales/sale.get.user.controller";
import { getCraft } from "./crafts/craft.getAll.controller";
import { updateCraft } from "./crafts/craft.put.controller";

const addCraftController = addCraft;
const getCraftController = getCraft;
const updateCraftController = updateCraft;
const deleteCraftController = deleteCraft;

const addUserController = addUser;
const authenticateUserController = authenticateUser;

const addSalesController = addSales;
const getBoughtCraftsController = getBoughtCrafts;
const getAllSalesController = getAllSales;

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
