import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Content API routes
  app.get("/api/content/:sectionKey", async (req, res) => {
    try {
      const { sectionKey } = req.params;
      const content = await storage.getContentSection(sectionKey);
      
      if (!content) {
        return res.status(404).json({ message: "Content section not found" });
      }
      
      res.json(content);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/content", async (req, res) => {
    try {
      const sections = await storage.getContentSections();
      res.json(sections);
    } catch (error) {
      console.error("Error fetching content sections:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
