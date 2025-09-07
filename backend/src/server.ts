import Express, { Request, Response } from "express"
import router from "./presentation/router";
import { envConfig } from "./infraestructure/EnvModule/EnvConfig";
import path from 'node:path';
import helmet from "helmet";
import cors from "cors";
import { connectionTest } from "./infraestructure/DatabaseModule/ORM/Prisma/Model/connectionTest";

const server = Express();

server.use(helmet());
server.use(cors({
    origin: "*"
}));
server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));

envConfig.load({ path: path.join(__dirname, "infraestructure", "EnvModule", "EnvFiles") });
connectionTest()
server.use(`/${process.env.BASE_URL_API}`, router);


const API_PORT = process.env.API_PORT;
const API_HOSTS = process.env.API_HOSTS?.split(",") || [];
const API_PROTOCOLS = process.env.API_PROTOCOLS?.split(",") || [];
const BASE_URL_API = process.env.BASE_URL_API;

const servers: any = [];

API_PROTOCOLS?.forEach((protocol) => {

    API_HOSTS?.forEach((host) => {

        servers.push({
            url: `${protocol}://${host}:${API_PORT}/${BASE_URL_API}/docs`,
        })

    })

})

server.use((req: Request, res: Response) => {
    res.status(404).json({
        error: "Not Found",
        message: `${req.originalUrl} not found`,
        doc: servers
    });
});


export default server;