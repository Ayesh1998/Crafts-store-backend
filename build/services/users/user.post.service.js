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
exports.addUserService = void 0;
const errors_1 = require("../../validation/errors");
const UserModel = require("../../models/users/user.model");
//Save new user service
const addUserService = ({ email, first_name, last_name, password, role, }) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new UserModel({
        email,
        first_name,
        last_name,
        password,
        role,
    });
    try {
        return yield newUser.save();
    }
    catch (error) {
        throw new Error(errors_1.USER_ERRORS.POST_ERROR);
    }
});
exports.addUserService = addUserService;
