"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const CraftControllers = require("../controllers/index.controller");
//routes for craft data
router.post("/craft", CraftControllers.addCraftController);
router.delete("/craft/:craftId", CraftControllers.deleteCraftController);
router.put("/craft/:craftId", CraftControllers.updateCraftController);
router.get("/craft", CraftControllers.getCraftController);
module.exports = router;
