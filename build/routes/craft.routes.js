"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Controllers = require("../controllers/index.controller");
//routes for craft data
router.post("/craft", Controllers.addCraftController);
router.delete("/craft/:craftId", Controllers.deleteCraftController);
router.put("/craft/:craftId", Controllers.updateCraftController);
router.get("/craft", Controllers.getCraftController);
module.exports = router;
