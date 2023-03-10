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
exports.getBoughtCraftsHandler = exports.getAllSalesHandler = exports.addSalesHandler = void 0;
const sales_service_1 = require("../../services/sales/sales.service");
//logic of adding sale to the mongoDB
const addSalesHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = today.getDate();
    try {
        const { crafts, userId } = req.body;
        crafts.forEach((craft) => __awaiter(void 0, void 0, void 0, function* () {
            const newSale = {
                date,
                month,
                prodID: craft._id,
                userId,
                year,
            };
            yield (0, sales_service_1.addSalesService)(newSale);
        }));
        res.status(200).send();
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addSalesHandler = addSalesHandler;
//logic of getting all sales from the mongoDB
const getAllSalesHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sales = yield (0, sales_service_1.getAllSalesService)();
        res.status(200).send(sales);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getAllSalesHandler = getAllSalesHandler;
//logic of getting all bought crafts from the mongoDB
const getBoughtCraftsHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const boughtCrafts = yield (0, sales_service_1.getSalesByUserService)(userId);
        res.status(200).send(boughtCrafts);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getBoughtCraftsHandler = getBoughtCraftsHandler;
