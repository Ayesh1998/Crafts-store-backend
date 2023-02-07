"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALES_ERRORS = exports.CRAFT_ERRORS = exports.USER_ERRORS = void 0;
var USER_ERRORS;
(function (USER_ERRORS) {
    USER_ERRORS["POST_ERROR"] = "New user added unsuccessful!";
    USER_ERRORS["AUTHENTICATING_ERROR"] = "Login user unsuccessful!";
})(USER_ERRORS = exports.USER_ERRORS || (exports.USER_ERRORS = {}));
var CRAFT_ERRORS;
(function (CRAFT_ERRORS) {
    CRAFT_ERRORS["UPDATE_ERROR"] = "Updating craft unsuccessful!";
    CRAFT_ERRORS["POST_ERROR"] = "New craft added unsuccessful!";
    CRAFT_ERRORS["GET_ERROR"] = "Fetching craft unsuccessful!";
    CRAFT_ERRORS["DELETE_ERROR"] = "Removing craft unsuccessful!";
})(CRAFT_ERRORS = exports.CRAFT_ERRORS || (exports.CRAFT_ERRORS = {}));
var SALES_ERRORS;
(function (SALES_ERRORS) {
    SALES_ERRORS["POST_ERROR"] = "New sales added unsuccessful!";
    SALES_ERRORS["GET_ALL_ERROR"] = "Fetching sales unsuccessful!";
})(SALES_ERRORS = exports.SALES_ERRORS || (exports.SALES_ERRORS = {}));
