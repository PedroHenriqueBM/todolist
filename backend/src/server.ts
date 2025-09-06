import Express from "express"
import router from "./presentation/router";
import { envConfig } from "./infraestructure/EnvModule/EnvConfig";
import path from 'node:path';

const server = Express();
envConfig.load({ path: path.join(__dirname, "infraestructure", "EnvModule", "EnvFiles") })


server.use(router);

export default server;