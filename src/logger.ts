import { createLogger } from "https://deno.land/x/deno_structured_logging/mod.ts";
import {
  consoleSink,
  fileSink,
} from "https://deno.land/x/deno_structured_logging/sinks/mod.ts";

export const logger = createLogger({
  sinks: [consoleSink(), fileSink("out.log")],
});
