"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUserSchema = exports.postUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postUserSchema = joi_1.default.object({
    email: joi_1.default.string().max(30).required(),
    password: joi_1.default.string().max(30).required(),
    role: joi_1.default.string(),
    first_name: joi_1.default.string(),
    last_name: joi_1.default.string(),
});
exports.authenticateUserSchema = joi_1.default.array().items(joi_1.default.object({
    email: joi_1.default.string().max(30).required(),
    password: joi_1.default.string().max(30).required(),
}));
