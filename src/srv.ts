import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import itemsHandler from "./itemsHandler.ts";

async function registerGlobalMiddleware(app: Application) {
}

async function registerRouter(app: Application) {
  const router = new Router();
  router
    .get("/", helloWorldHandler())
    .get("/item", itemsHandler.get());

  app.use(router.routes());
  app.use(router.allowedMethods());
}

function helloWorldHandler() {
  return (context: Context) => {
    context.response.body = "Hello World form helloWorldHandler";
  };
}

export default {
  registerGlobalMiddleware,
  registerRouter,
};
