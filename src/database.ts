import { Client } from "https://deno.land/x/postgres/mod.ts";

let client: Client;

export async function setup(db: DbConfig) {
  client = new Client({
    user: db.username,
    password: db.password,
    database: db.name,
    hostname: db.host,
    port: db.port,
  });
  await client.connect();
  console.log("db connected");
}

interface DbConfig {
  host: string;
  username: string;
  password: string;
  name: string;
  port: number;
}

export async function getClient(): Promise<Client> {
  if (!client) {
    throw "client not yet setup";
  }
  return client;
}

export default {
  setup,
  getClient,
};
