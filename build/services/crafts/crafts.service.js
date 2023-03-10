"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCraftService = exports.getCraftService = exports.updateCraftService = exports.addCraftService = void 0;
const errors_1 = require("../../validation/errors");
const craft_model_1 = __importDefault(require("../../models/crafts/craft.model"));
//Save new craft service
const addCraftService = ({ description, material, name, price, photo }) => __awaiter(void 0, void 0, void 0, function* () {
    const newCraft = new craft_model_1.default({ description, material, name, price, photo });
    try {
        return yield newCraft.save();
    }
    catch (error) {
        throw new Error(errors_1.CRAFT_ERRORS.POST_ERROR);
    }
});
exports.addCraftService = addCraftService;
//Update craft service
const updateCraftService = ({ filter, options, data }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield craft_model_1.default.findOneAndUpdate(filter, data, options);
    }
    catch (error) {
        throw new Error(errors_1.CRAFT_ERRORS.UPDATE_ERROR);
    }
});
exports.updateCraftService = updateCraftService;
//Get all craft service
const getCraftService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield craft_model_1.default.find().select({ "__v": 0, });
    }
    catch (error) {
        throw new Error(errors_1.CRAFT_ERRORS.GET_ERROR);
    }
});
exports.getCraftService = getCraftService;
//Remove craft service
const deleteCraftService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield craft_model_1.default.findByIdAndRemove(id);
    }
    catch (error) {
        throw new Error(errors_1.CRAFT_ERRORS.DELETE_ERROR);
    }
});
exports.deleteCraftService = deleteCraftService;
