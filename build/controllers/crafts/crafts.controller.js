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
exports.getCraftHandler = exports.addCraftHandler = exports.updateCraftHandler = exports.deleteCraftHandler = void 0;
const crafts_service_1 = require("../../services/crafts/crafts.service");
const crafts_schema_validation_1 = require("../../validation/crafts.schema.validation");
//logic of deleting an craft from the mongoDB
const deleteCraftHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { craftId } = req.params;
    try {
        const deletedCraft = yield (0, crafts_service_1.deleteCraftService)(craftId);
        res.status(200).send(deletedCraft);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deleteCraftHandler = deleteCraftHandler;
//logic of updating an already existing craft in the mongoDB
const updateCraftHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { craftId } = req.params;
    const filter = { _id: craftId };
    const opts = { new: true };
    try {
        const updatedCraft = yield (0, crafts_service_1.updateCraftService)({
            filter,
            options: opts,
            data: req.body,
        });
        res.status(200).send(updatedCraft);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.updateCraftHandler = updateCraftHandler;
//logic of adding craft to the mongoDB
const addCraftHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description, material, name, price, photo } = req.body;
        const newCraft = {
            description,
            material,
            name,
            price,
            photo,
        };
        const addedCraft = yield (0, crafts_service_1.addCraftService)(newCraft);
        res.status(200).send(addedCraft);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addCraftHandler = addCraftHandler;
//logic of getting all crafts from the mongoDB
const getCraftHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = crafts_schema_validation_1.getAllCraftsSchema.validate(res.body);
    if (error) {
        return res.status(400).send(error);
    }
    try {
        const crafts = yield (0, crafts_service_1.getCraftService)();
        res.status(200).send(crafts);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getCraftHandler = getCraftHandler;
