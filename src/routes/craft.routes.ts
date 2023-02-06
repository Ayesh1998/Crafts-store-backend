import express from "express";
const router = express.Router();
const Controllers = require("../controllers/index.controller");

//routes for craft data
router.post("/craft", Controllers.addCraftController);
router.delete("/craft/:craftId", Controllers.deleteCraftController);
router.put("/craft/:craftId", Controllers.updateCraftController);
router.get("/craft", Controllers.getCraftController);

export = router;
