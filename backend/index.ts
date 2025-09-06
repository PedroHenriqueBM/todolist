import server from "./src/server";

const API_PORT = process.env.API_PORT;

server.listen(API_PORT, () => {
    console.log(`Server is up on port: ${API_PORT}`);
});