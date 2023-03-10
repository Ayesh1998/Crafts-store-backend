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
exports.getSalesByUserService = exports.getAllSalesService = exports.addSalesService = void 0;
const errors_1 = require("../../validation/errors");
const sales_model_1 = __importDefault(require("../../models/sales/sales.model"));
//Save new sales service
const addSalesService = ({ date, month, year, prodID, userId }) => __awaiter(void 0, void 0, void 0, function* () {
    const newSale = new sales_model_1.default({
        date, month, year, prodID, userId
    });
    try {
        return yield newSale.save();
    }
    catch (error) {
        throw new Error(errors_1.SALES_ERRORS.POST_ERROR);
    }
});
exports.addSalesService = addSalesService;
//Get sales service
const getAllSalesService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield sales_model_1.default.find()
            .populate("prodID")
            .populate("userId")
            .select({
            __v: 0,
            // userId: 0,
        });
    }
    catch (error) {
        throw new Error(errors_1.SALES_ERRORS.GET_ALL_ERROR);
    }
});
exports.getAllSalesService = getAllSalesService;
//Get sales by user service
const getSalesByUserService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield sales_model_1.default.find({ userId: userId }).populate("prodID").select({
            __v: 0,
            userId: 0,
        });
    }
    catch (error) {
        throw new Error(errors_1.SALES_ERRORS.GET_ALL_ERROR);
    }
});
exports.getSalesByUserService = getSalesByUserService;
