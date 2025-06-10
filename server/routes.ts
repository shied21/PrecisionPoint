import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { log } from "./vite";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Pages information for navigation
  app.get('/api/pages', (_req: Request, res: Response) => {
    log("Pages API accessed", "api");
    res.status(200).json({
      home: { path: '/', title: 'Home' },
      projects: { path: '/projects', title: 'Projects' },
      partners: { path: '/partners', title: 'Partners' },
      contact: { path: '/#contact', title: 'Contact' }
    });
  });

  // API endpoint to get projects
  app.get('/api/projects', (_req: Request, res: Response) => {
    log("Projects API accessed", "api");
    res.status(200).json([
      {
        id: 1,
        title: "Commercial Waterproofing",
        description: "Complete waterproofing solution for commercial buildings",
        image: "commercial-building.jpg"
      },
      {
        id: 2,
        title: "Residential Foundation Repair",
        description: "Expert foundation repair and waterproofing for homes",
        image: "residential-home.jpg"
      },
      {
        id: 3,
        title: "Industrial Facility Protection",
        description: "Comprehensive waterproofing for industrial facilities",
        image: "industrial-facility.jpg"
      }
    ]);
  });

  // API endpoint to get partners
  app.get('/api/partners', (_req: Request, res: Response) => {
    log("Partners API accessed", "api");
    res.status(200).json([
      {
        id: 1,
        name: "BuildTech Solutions",
        logo: "buildtech.png"
      },
      {
        id: 2,
        name: "StructurePro",
        logo: "structurepro.png"
      },
      {
        id: 3,
        name: "WaterGuard Systems",
        logo: "waterguard.png"
      }
    ]);
  });

  // Create HTTP server
  const httpServer = createServer(app);
  
  return httpServer;
}
