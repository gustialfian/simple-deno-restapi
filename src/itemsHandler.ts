import { Context } from "https://deno.land/x/oak/context.ts";
import { getClient } from "./database.ts";

function get() {
  return async (context: Context) => {
    const data = await findAll();
    context.response.body = JSON.stringify(data, null, 2)
  };
}

async function findAll() {
  const client = await getClient();

  const sql = `select * from item;`;
  const result = await client.query(sql);
  console.log(result.rows);
  return result.rowsOfObjects();
}

export default {
  get,
}
