"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCraftsSchema = exports.putCraftSchema = exports.postCraftSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postCraftSchema = joi_1.default.object({
    name: joi_1.default.string().max(30).required(),
    material: joi_1.default.string().max(30).required(),
    price: joi_1.default.string(),
    description: joi_1.default.string(),
    photo: joi_1.default.string().allow(null, ''),
});
exports.putCraftSchema = joi_1.default.object({
    name: joi_1.default.string().max(30).required(),
    material: joi_1.default.string().max(30).required(),
    price: joi_1.default.string(),
    description: joi_1.default.string(),
    photo: joi_1.default.string().allow(null, ''),
    _id: joi_1.default.string().required(),
});
exports.getAllCraftsSchema = joi_1.default.array().items(joi_1.default.object({
    name: joi_1.default.string().max(30).required(),
    material: joi_1.default.string().max(30).required(),
    price: joi_1.default.string(),
    description: joi_1.default.string(),
    photo: joi_1.default.string(),
    _id: joi_1.default.string().required(),
}));
