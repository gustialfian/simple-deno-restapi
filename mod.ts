import { start } from "./src/app.ts";

import { createLogger } from "https://deno.land/x/deno_structured_logging/mod.ts";

const logger = createLogger();

logger.debug("Debug");
logger.info("Info");
logger.warn("Warn");
logger.error("Error");
logger.critical("Critical");

start().then(() => {
  console.log("server starting");
});
