import {
  addSalesHandler,
  getAllSalesHandler,
  getBoughtCraftsHandler,
} from "../controllers/sales/sales.controller";

import express from "express";
import { salesSchema } from "../validation/sales.schema.validations";
import { validateBody } from "../middleware/validate.body";

const router = express.Router();

//routes for sales data
router.post("/sales/addNewSales", validateBody(salesSchema), addSalesHandler);
router.get("/sales/:userId", getBoughtCraftsHandler);
router.get("/sales", getAllSalesHandler);

export default router;
