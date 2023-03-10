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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUserService = exports.addUserService = void 0;
const errors_1 = require("../../validation/errors");
const user_model_1 = __importDefault(require("../../models/users/user.model"));
//Save new user service
const addUserService = ({ email, first_name, last_name, password, role, }) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new user_model_1.default({
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
//User authenticating service
const authenticateUserService = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    let existingUser;
    try {
        existingUser = yield user_model_1.default.findOne({ email: email });
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
