import express from "express";

const router = express.Router();
const Controllers = require("../controllers/index.controller");

//routes for sales data
router.post("/sales/addNewSales", Controllers.addSalesController);
router.get("/sales/:userId", Controllers.getBoughtCraftsController);
router.get("/sales", Controllers.getAllSalesController);

export = router;
