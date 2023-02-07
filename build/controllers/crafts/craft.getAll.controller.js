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
exports.getCraft = void 0;
const crafts_schema_validation_1 = require("../../validation/crafts.schema.validation");
const craft_getAll_service_1 = require("../../services/crafts/craft.getAll.service");
//logic of getting all crafts from the mongoDB
const getCraft = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = crafts_schema_validation_1.getAllCraftsSchema.validate(res.body);
    if (error) {
        return res.status(400).send(error);
    }
    try {
        const crafts = yield (0, craft_getAll_service_1.getCraftService)();
        res.status(200).send(crafts);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getCraft = getCraft;
