"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (_err, _req, _res, _next) => {
    return _res.status(500).json({
        errors: [
            {
                message: " Something went wrong",
                error: _err,
            },
        ],
    });
};
exports.errorHandler = errorHandler;
