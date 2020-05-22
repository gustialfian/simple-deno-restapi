import { config as env } from "https://deno.land/x/dotenv/mod.ts";
import { logger } from "./logger.ts";

const envVal = env();
logger.info(`env: ${JSON.stringify(envVal, null, 2)}`);

const DEV = "DEV";
const PROD = "PROD";

const isDev = () => envVal.APP_ENV === DEV;
const isProd = () => envVal.APP_ENV === PROD;

let db = isDev()
  ? {
    host: envVal.DB_DEV_HOST,
    port: parseInt(envVal.DB_DEV_PORT),
    name: envVal.DB_DEV_NAME,
    username: envVal.DB_DEV_USERNAME,
    password: envVal.DB_DEV_PASSWORD,
  }
  : {
    host: envVal.DB_PROD_HOST,
    port: parseInt(envVal.DB_PROD_PORT),
    name: envVal.DB_PROD_NAME,
    username: envVal.DB_PROD_USERNAME,
    password: envVal.DB_PROD_PASSWORD,
  };

const config = {
  port: parseInt(envVal.HTTP_PORT),
  db,
  isDev,
  isProd,
};

logger.info(`config: ${JSON.stringify(config, null, 2)}`);

export { config };
