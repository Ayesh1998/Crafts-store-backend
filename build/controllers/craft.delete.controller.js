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
exports.deleteCraft = void 0;
const craft_delete_service_1 = require("../services/craft.delete.service");
//logic of deleting an craft from the mongoDB
const deleteCraft = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { craftId } = req.params;
    try {
        const deletedCraft = yield (0, craft_delete_service_1.deleteCraftService)(craftId);
        res.status(200).send(deletedCraft);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deleteCraft = deleteCraft;
