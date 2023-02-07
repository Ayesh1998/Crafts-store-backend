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
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
let newCraft;
let randomNo = Math.floor(Math.random() * (324234234 - 234335)) + 324234234;
describe(`User Tests Suites`, () => {
    test(`Create User.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = {
            email: "user" + randomNo + "@gmail.com",
            password: "12345",
            role: "user",
            first_name: "Ayesh",
            last_name: "Lakshan",
        };
        const res = yield (0, supertest_1.default)(app_1.default).post("/api/user").send(userData);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("_id");
    }));
    test(`Authenticate user.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = {
            email: "user" + randomNo + "@gmail.com",
            password: "12345",
        };
        const res = yield (0, supertest_1.default)(app_1.default)
            .post("/api/user/authenticate")
            .send(userData);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("_id");
    }));
});
describe(`Craft Tests Suites`, () => {
    test(`Get Crafts`, () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default).get("/api/craft").send();
        expect(res.status).toBe(200);
    }));
    test(`Add Craft - All fields have value.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const craftData = {
            name: "Spoon",
            material: "Husk",
            price: "100",
            description: "Description",
            photo: "http://www.spoon.com",
        };
        const res = yield (0, supertest_1.default)(app_1.default).post("/api/craft").send(craftData);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("_id");
        let tempNewCraft = res.body;
        delete tempNewCraft.__v;
        newCraft = tempNewCraft;
    }));
    test(`Add Craft - Required fields missing.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const craftData = {
            material: "Husk",
            price: "100",
            description: "Description",
            photo: "http://www.spoon.com",
        };
        const res = yield (0, supertest_1.default)(app_1.default).post("/api/craft").send(craftData);
        expect(res.status).toBe(400);
    }));
    test(`Update Craft - All fields have value.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const craftData = Object.assign(Object.assign({}, newCraft), { name: "Broom" });
        const res = yield (0, supertest_1.default)(app_1.default)
            .put(`/api/craft/${newCraft._id}`)
            .send(craftData);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("_id");
    }));
    test(`Delete Craft`, () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default).delete(`/api/craft/${newCraft._id}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("_id");
    }));
});
