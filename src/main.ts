import { SERVER_PORT } from "./config";

import * as server from "./server";

async function main() {
    await server.start(SERVER_PORT);
    console.log(`Server started at http://localhost:${SERVER_PORT}`);
}

main().catch(error => console.error(error));