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
exports.addUser = void 0;
const user_post_service_1 = require("../../services/users/user.post.service");
const users_schema_validation_1 = require("../../validation/users.schema.validation");
//logic of adding user to the mongoDB
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { error, value } = users_schema_validation_1.postUserSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }
    try {
        const { email, first_name, last_name, password, role } = req.body;
        const newUser = {
            email,
            first_name,
            last_name,
            password,
            role,
        };
        const addedUser = yield (0, user_post_service_1.addUserService)(newUser);
        res.status(200).send(addedUser);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addUser = addUser;
