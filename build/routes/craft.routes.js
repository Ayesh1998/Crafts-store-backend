"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crafts_controller_1 = require("../controllers/crafts/crafts.controller");
const crafts_schema_validation_1 = require("../validation/crafts.schema.validation");
const express_1 = __importDefault(require("express"));
const validate_body_1 = require("../middleware/validate.body");
const router = express_1.default.Router();
//routes for craft data
router.post("/craft", (0, validate_body_1.validateBody)(crafts_schema_validation_1.postCraftSchema), crafts_controller_1.addCraftHandler);
router.delete("/craft/:craftId", crafts_controller_1.deleteCraftHandler);
router.put("/craft/:craftId", (0, validate_body_1.validateBody)(crafts_schema_validation_1.putCraftSchema), crafts_controller_1.updateCraftHandler);
router.get("/craft", crafts_controller_1.getCraftHandler);
exports.default = router;
