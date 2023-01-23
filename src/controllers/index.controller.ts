import { deleteCraft } from "./craft.delete.controller";
import { getCraft } from "./craft.getAll.controller";
import { addCraft } from "./craft.post.controller";
import { updateCraft } from "./craft.put.controller";

const addCraftController = addCraft;
const getCraftController = getCraft;
const updateCraftController = updateCraft;
const deleteCraftController = deleteCraft;

module.exports = {
  addCraftController,
  getCraftController,
  updateCraftController,
  deleteCraftController,
};
