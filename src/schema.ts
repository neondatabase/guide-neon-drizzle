import { pgTable, integer, serial, text, timestamp } from "drizzle-orm/pg-core";

export const authors = pgTable("authors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  bio: text("bio"),
  country: text("country"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const books = pgTable("books", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  authorId: integer("author_id").references(() => authors.id),
  created_at: timestamp("created_at").notNull().defaultNow(),
});
