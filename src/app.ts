import CraftRoutes from "./routes/craft.routes";
import SalesRoutes from "./routes/sales.routes";
import UserRoutes from "./routes/user.routes";
import bodyParser from "body-parser";
import { connectDb } from "./config/db.connection";
import cors from "cors";
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
app.use("/api", CraftRoutes);
app.use("/api", UserRoutes);
app.use("/api", SalesRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default app;
