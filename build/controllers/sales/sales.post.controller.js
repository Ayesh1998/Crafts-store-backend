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
exports.addSales = void 0;
const sales_post_service_1 = require("../../services/sales/sales.post.service");
const sales_schema_validations_1 = require("../../validation/sales.schema.validations");
//logic of adding sale to the mongoDB
const addSales = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { error, value } = sales_schema_validations_1.salesSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }
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
            yield (0, sales_post_service_1.addSalesService)(newSale);
        }));
        res.status(200).send();
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addSales = addSales;
