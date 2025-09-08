import server from "./src/server";

const API_PORT = process.env.API_PORT;
const API_HOSTS = process.env.API_HOSTS?.split(",") || [];
const API_PROTOCOLS = process.env.API_PROTOCOLS?.split(",") || [];
const BASE_URL_API = process.env.BASE_URL_API;

server.listen(API_PORT, () => {

    console.log(`Server is up on port: ${API_PORT}`);
    console.log(`Documentation links:\n`);

    API_PROTOCOLS?.forEach((protocol) => {

        console.log(`\t${protocol}:`)

        API_HOSTS?.forEach((host) => {
            console.log(`\t\t${protocol}://${host}:${API_PORT}/${BASE_URL_API}/docs`);
        })

        console.log("\n")
    })


});