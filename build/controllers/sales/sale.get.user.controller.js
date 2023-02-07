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
exports.getBoughtCrafts = void 0;
const sales_get_user_service_1 = require("../../services/sales/sales.get.user.service");
//logic of getting all bought crafts from the mongoDB
const getBoughtCrafts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        console.log(userId);
        const boughtCrafts = yield (0, sales_get_user_service_1.getSalesByUserService)(userId);
        res.status(200).send(boughtCrafts);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getBoughtCrafts = getBoughtCrafts;
