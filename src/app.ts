import CraftRoutes from "./routes/craft.routes";
import SalesRoutes from "./routes/sales.routes";
import UserRoutes from "./routes/user.routes";
import bodyParser from "body-parser";
import { connectDb } from "./config/db.connection";
import cors from "cors";
import { errorHandler } from "./middleware/error.handler";
import { logger } from "./middleware/logger";
import morgan from "morgan";
import server from "./server";
import swaggerDoc from "./swagger.json";
import swaggerUi from "swagger-ui-express";

//starting the express server
const app = server;
connectDb();

//adding middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use((req, res, next) => {
  logger.info({
    message: "Incoming request",
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    body: req.body,
  });
  next();
});

app.use("/api", CraftRoutes);
app.use("/api", UserRoutes);
app.use("/api", SalesRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(errorHandler);

export default app;
