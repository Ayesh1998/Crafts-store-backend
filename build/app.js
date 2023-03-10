"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const craft_routes_1 = __importDefault(require("./routes/craft.routes"));
const sales_routes_1 = __importDefault(require("./routes/sales.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_connection_1 = require("./config/db.connection");
const cors_1 = __importDefault(require("cors"));
const error_handler_1 = require("./middleware/error.handler");
const logger_1 = require("./middleware/logger");
const morgan_1 = __importDefault(require("morgan"));
const server_1 = __importDefault(require("./server"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
//starting the express server
const app = server_1.default;
(0, db_connection_1.connectDb)();
//adding middleware
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((req, res, next) => {
    logger_1.logger.info({
        message: "Incoming request",
        method: req.method,
        url: req.originalUrl,
        ip: req.ip,
        body: req.body,
    });
    next();
});
app.use("/api", craft_routes_1.default);
app.use("/api", user_routes_1.default);
app.use("/api", sales_routes_1.default);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(error_handler_1.errorHandler);
exports.default = app;
