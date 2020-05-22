import { start } from "./src/app.ts";
import { logger } from "./src/logger.ts";
import { config } from "./src/config.ts";

start().then(() => {
  logger.info(`server starting: localhost:${config.port}`);
});
