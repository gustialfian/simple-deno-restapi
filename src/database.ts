import { Client } from "https://deno.land/x/postgres/mod.ts";

let client: Client;

export async function setup(db: DbConfig) {
  client = new Client({
    user: "sandbox",
    password: "sandbox",
    database: "sandbox",
    hostname: "localhost",
    port: 5432,
  });
  await client.connect();
  console.log("db connected");
}

interface DbConfig {
  host: string;
  username: string;
  password: string;
  name: string;
}

export async function getClient() {
  if (!client) {
    throw "client not yet setup";
  }
  return client;
}

export default {
  setup,
  getClient,
};
