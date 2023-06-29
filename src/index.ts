import "reflect-metadata";
import app from "./app";
import { DBDataSource } from "./config/data.source";

async function main() {
  try {
    await DBDataSource.initialize();
    app.listen(3001);
    console.log("Server is running on port 3001");
  } catch (error) {
    console.error("An error occurred during initialization:", error);
    process.exit(1);
  }
}

main();
