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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSalesService = void 0;
const errors_1 = require("../../validation/errors");
;
const SalesModel = require("../../models/sales/sales.model");
//Save new sales service
const addSalesService = ({ date, month, year, prodID, userId }) => __awaiter(void 0, void 0, void 0, function* () {
    const newSale = new SalesModel({
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