import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "./config.ts";
import database from "./database.ts";
import srv from "./server.ts";

export async function start() {
  const app = new Application();
  await database.setup(config.db);
  srv.registerGlobalMiddleware(app);
  srv.registerRouter(app);
  app.listen({ port: config.port });
}
