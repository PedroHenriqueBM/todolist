import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from '../../../../package.json';
import { envConfig } from "../../../infraestructure/EnvModule/EnvConfig";
import path from 'node:path'


const docRouter = Router();
envConfig.load({ path: path.join(__dirname, "..", "..", "..", "infraestructure", "EnvModule", "EnvFiles") })


const API_PORT = process.env.API_PORT;
const API_HOSTS = process.env.API_HOSTS?.split(",") || [];
const API_PROTOCOLS = process.env.API_PROTOCOLS?.split(",") || [];
const BASE_URL_API = process.env.BASE_URL_API;


const servers: any = [];

API_PROTOCOLS?.forEach((protocol) => {

    API_HOSTS?.forEach((host) => {

        servers.push({
            url: `${protocol}://${host}:${API_PORT}/${BASE_URL_API}`,
        })

    })

})


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: process.env.PROJECT_NAME || "undefined",
            version: version || "undefined",
            description: process.env.PROJECT_DESCRIPTION || "undefined",
        },
        servers: servers
    },
    apis: ["./src/presentation/routes/**/*.ts"],

};
const specs = swaggerJsdoc(options);


docRouter.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));




export { docRouter };