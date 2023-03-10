import {
  addCraftHandler,
  deleteCraftHandler,
  getCraftHandler,
  updateCraftHandler,
} from "../controllers/crafts/crafts.controller";
import {
  postCraftSchema,
  putCraftSchema,
} from "../validation/crafts.schema.validation";

import express from "express";
import { validateBody } from "../middleware/validate.body";

const router = express.Router();

//routes for craft data
router.post("/craft", validateBody(postCraftSchema), addCraftHandler);
router.delete("/craft/:craftId", deleteCraftHandler);
router.put("/craft/:craftId", validateBody(putCraftSchema), updateCraftHandler);
router.get("/craft", getCraftHandler);

export default router;