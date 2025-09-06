import server from "./src/server";

const API_PORT = process.env.API_PORT;
const API_PROTOCOL = process.env.API_PROTOCOL;


server.listen(API_PORT, () => {
    console.log(`Server is up on port: ${API_PORT}`);
    console.log(`Documentation: $`)
});