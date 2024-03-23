import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { env } from "hono/adapter";
import { config } from "dotenv";

import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { authors, books } from "./schema";

config({ path: ".env" });
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello, this is a catalog of books!");
});

app.get("/authors", async (c) => {
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c);
  const sql = neon(DATABASE_URL);
  const db = drizzle(sql);

  const output = await db.select().from(authors);
  return c.json(output);
});

app.get("/books/:authorId", async (c) => {
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c);
  const sql = neon(DATABASE_URL);
  const db = drizzle(sql);

  const authorId = c.req.param("authorId");
  const output = await db
    .select()
    .from(books)
    .where(eq(books.authorId, Number(authorId)));
  return c.json(output);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
