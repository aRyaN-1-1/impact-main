import { drizzle } from "drizzle-orm/node-postgres";
import { users, content_sections, type User, type InsertUser, type ContentSection, type InsertContentSection, type UpdateContentSection } from "@shared/schema";
import { eq } from "drizzle-orm";
import pg from "pg";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getContentSections(): Promise<ContentSection[]>;
  getContentSection(sectionKey: string): Promise<ContentSection | undefined>;
  createContentSection(section: InsertContentSection): Promise<ContentSection>;
  updateContentSection(sectionKey: string, section: UpdateContentSection): Promise<ContentSection | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async getContentSections(): Promise<ContentSection[]> {
    return await db.select().from(content_sections).orderBy(content_sections.section_key);
  }

  async getContentSection(sectionKey: string): Promise<ContentSection | undefined> {
    const result = await db.select().from(content_sections).where(eq(content_sections.section_key, sectionKey)).limit(1);
    return result[0];
  }

  async createContentSection(section: InsertContentSection): Promise<ContentSection> {
    const result = await db.insert(content_sections).values(section).returning();
    return result[0];
  }

  async updateContentSection(sectionKey: string, section: UpdateContentSection): Promise<ContentSection | undefined> {
    const result = await db.update(content_sections)
      .set({ ...section, updated_at: new Date() })
      .where(eq(content_sections.section_key, sectionKey))
      .returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();
