import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from '../../../../package.json';
import { envConfig } from "../../../infraestructure/EnvModule/EnvConfig";
import path from 'node:path'


const docRouter = Router();
envConfig.load({ path: path.join(__dirname, "..", "..", "..", "infraestructure", "EnvModule", "EnvFiles") })

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: process.env.PROJECT_NAME || "undefined",
            version: version || "undefined",
            description: process.env.PROJECT_DESCRIPTION || "undefined",
        },
    },
    apis: ["./src/presentation/routes/**/*.ts"]
};
const specs = swaggerJsdoc(options);


docRouter.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));




export { docRouter };