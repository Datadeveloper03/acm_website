import express, { Express } from "express";
import http from "http";
import { storage } from "./storage";
import { insertEventSchema, insertTeamMemberSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  const server = http.createServer(app);

  // Add your API routes here
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Team Members
  app.get("/api/team", async (_req, res) => {
    const members = await storage.getAllTeamMembers();
    res.json(members);
  });

  app.get("/api/team/:id", async (req, res) => {
    const member = await storage.getTeamMember(Number(req.params.id));
    if (!member) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.json(member);
  });

  // Events
  app.get("/api/events", async (_req, res) => {
    const events = await storage.getAllEvents();
    res.json(events);
  });

  app.get("/api/events/upcoming", async (_req, res) => {
    const events = await storage.getUpcomingEvents();
    res.json(events);
  });

  app.get("/api/events/past", async (_req, res) => {
    const events = await storage.getPastEvents();
    res.json(events);
  });

  app.get("/api/events/:id", async (req, res) => {
    const event = await storage.getEvent(Number(req.params.id));
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  });

  return server;
}