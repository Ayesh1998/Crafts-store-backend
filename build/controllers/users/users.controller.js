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
exports.authenticateUserHandler = exports.addUserHandler = void 0;
const users_service_1 = require("../../services/users/users.service");
//logic of adding user to the mongoDB
const addUserHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, first_name, last_name, password, role } = req.body;
        const newUser = {
            email,
            first_name,
            last_name,
            password,
            role,
        };
        const addedUser = yield (0, users_service_1.addUserService)(newUser);
        res.status(200).send(addedUser);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addUserHandler = addUserHandler;
//user authenticating controller
const authenticateUserHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield (0, users_service_1.authenticateUserService)(email, password);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(401).send(error.message);
    }
});
exports.authenticateUserHandler = authenticateUserHandler;
