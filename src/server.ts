import { config } from "./config/config";
import express from "express";

const server = express();

server.listen(config.server.port);
console.log(`Server started in port ${config.server.port}`);

export default server;
