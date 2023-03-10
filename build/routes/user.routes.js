"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = require("../controllers/users/users.controller");
const users_schema_validation_1 = require("../validation/users.schema.validation");
const express_1 = __importDefault(require("express"));
const validate_body_1 = require("../middleware/validate.body");
const router = express_1.default.Router();
//routes for user data
router.post("/user", (0, validate_body_1.validateBody)(users_schema_validation_1.postUserSchema), users_controller_1.addUserHandler);
router.post("/user/authenticate", (0, validate_body_1.validateBody)(users_schema_validation_1.authenticateUserSchema), users_controller_1.authenticateUserHandler);
exports.default = router;
