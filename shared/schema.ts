import { pgTable, text, serial, uuid, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const content_sections = pgTable("content_sections", {
  id: uuid("id").primaryKey().defaultRandom(),
  section_key: text("section_key").notNull().unique(),
  title: text("title"),
  content: text("content"),
  image_url: text("image_url"),
  created_at: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContentSectionSchema = createInsertSchema(content_sections);
export const updateContentSectionSchema = createInsertSchema(content_sections).partial();

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ContentSection = typeof content_sections.$inferSelect;
export type InsertContentSection = z.infer<typeof insertContentSectionSchema>;
export type UpdateContentSection = z.infer<typeof updateContentSectionSchema>;
