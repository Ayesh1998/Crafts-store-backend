"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Controllers = require("../controllers/index.controller");
//routes for sales data
router.post("/sales/addNewSales", Controllers.addSalesController);
router.get("/sales/:userId", Controllers.getBoughtCraftsController);
router.get("/sales", Controllers.getAllSalesController);
module.exports = router;
