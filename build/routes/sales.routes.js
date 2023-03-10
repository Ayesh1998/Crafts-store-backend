"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sales_controller_1 = require("../controllers/sales/sales.controller");
const express_1 = __importDefault(require("express"));
const sales_schema_validations_1 = require("../validation/sales.schema.validations");
const validate_body_1 = require("../middleware/validate.body");
const router = express_1.default.Router();
//routes for sales data
router.post("/sales/addNewSales", (0, validate_body_1.validateBody)(sales_schema_validations_1.salesSchema), sales_controller_1.addSalesHandler);
router.get("/sales/:userId", sales_controller_1.getBoughtCraftsHandler);
router.get("/sales", sales_controller_1.getAllSalesHandler);
exports.default = router;
