import express from "express";
const router = express.Router();
const CraftControllers = require("../controllers/index.controller");

//routes for craft data
router.post("/craft", CraftControllers.addCraftController);
router.delete("/craft/:craftId", CraftControllers.deleteCraftController);
router.put("/craft/:craftId", CraftControllers.updateCraftController);
router.get("/craft", CraftControllers.getCraftController);

export = router;
