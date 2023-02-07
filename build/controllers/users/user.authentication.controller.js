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
exports.authenticateUser = void 0;
const users_schema_validation_1 = require("../../validation/users.schema.validation");
const user_authenticate_service_1 = require("../../services/users/user.authenticate.service");
//user authenticating controller
const authenticateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = users_schema_validation_1.authenticateUserSchema.validate(res.body);
    if (error) {
        return res.status(400).send(error);
    }
    const { email, password } = req.body;
    try {
        const user = yield (0, user_authenticate_service_1.authenticateUserService)(email, password);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(401).send(error.message);
    }
});
exports.authenticateUser = authenticateUser;
