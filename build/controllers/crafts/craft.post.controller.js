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
exports.addCraft = void 0;
const craft_post_service_1 = require("../../services/crafts/craft.post.service");
const crafts_schema_validation_1 = require("../../validation/crafts.schema.validation");
//logic of adding craft to the mongoDB
const addCraft = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = crafts_schema_validation_1.postCraftSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }
    try {
        const { description, material, name, price, photo } = req.body;
        const newCraft = {
            description,
            material,
            name,
            price,
            photo,
        };
        const addedCraft = yield (0, craft_post_service_1.addCraftService)(newCraft);
        res.status(200).send(addedCraft);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addCraft = addCraft;
