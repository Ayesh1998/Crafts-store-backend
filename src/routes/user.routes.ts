import express from "express";

const router = express.Router();
const Controllers = require("../controllers/index.controller");

//routes for user data
router.post("/user", Controllers.addUserController);
router.post("/user/authenticate", Controllers.authenticateUserController);

export = router;
