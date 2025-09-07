import { ConnectionError } from "../../../../../domain/Core/Error/ErrorTypes/Database/ConnectionError/ConnectionError";
import prismaClient from "./prismaClient";

async function connectionTest() {
    try {

        await prismaClient.$connect();
        console.log("Conexão com o banco bem-sucedida!");
        await prismaClient.$disconnect();

    } catch (err: any) {
        console.log(new ConnectionError({
            cause: err.message,
            module: "Model/Client",
            status: 500,
        }));
        await prismaClient.$disconnect();
        process.exit(1);

    }
}



export { connectionTest };
