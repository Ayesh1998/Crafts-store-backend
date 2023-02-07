"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.salesSchema = joi_1.default.object({
    userId: joi_1.default.string().required(),
    crafts: joi_1.default.array().items({
        name: joi_1.default.string().max(30).required(),
        material: joi_1.default.string().max(30).required(),
        price: joi_1.default.string(),
        description: joi_1.default.string(),
        photo: joi_1.default.string().allow(null, ''),
        _id: joi_1.default.string().required(),
        sales: joi_1.default.array().items(joi_1.default.number()),
    }),
});
