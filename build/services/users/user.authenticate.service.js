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
exports.authenticateUserService = void 0;
const errors_1 = require("../../validation/errors");
const UserModel = require("../../models/users/user.model");
//User authenticating service
const authenticateUserService = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    let existingUser;
    try {
        existingUser = yield UserModel.findOne({ email: email });
    }
    catch (err) {
        throw new Error(errors_1.USER_ERRORS.AUTHENTICATING_ERROR);
    }
    if (!existingUser || existingUser.password !== password) {
        throw new Error(errors_1.USER_ERRORS.AUTHENTICATING_ERROR);
    }
    return existingUser;
});
exports.authenticateUserService = authenticateUserService;
