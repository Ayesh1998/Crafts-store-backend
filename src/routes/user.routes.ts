import { addUserHandler, authenticateUserHandler } from "../controllers/users/users.controller";
import { authenticateUserSchema, postUserSchema } from "../validation/users.schema.validation";

import express from "express";
import { validateBody } from "../middleware/validate.body";

const router = express.Router();

//routes for user data
router.post("/user", validateBody(postUserSchema), addUserHandler);
router.post("/user/authenticate", validateBody(authenticateUserSchema), authenticateUserHandler);

export default router;
