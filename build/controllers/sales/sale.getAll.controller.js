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
exports.getAllSales = void 0;
const sales_getAll_service_1 = require("../../services/sales/sales.getAll.service");
//logic of getting all sales from the mongoDB
const getAllSales = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sales = yield (0, sales_getAll_service_1.getAllSalesService)();
        res.status(200).send(sales);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getAllSales = getAllSales;
