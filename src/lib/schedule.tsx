import { Calendar, Clock, Coffee, Rocket, Sparkles, Trophy, Users } from "lucide-react";
import type React from "react";

export type MilestoneType = "kickoff" | "deadline" | "presentation" | "awards" | "ceremony";

export interface EventItem {
  id: string;
  time: string;
  title: string;
  description: string;
  date: string; // ISO date e.g., 2025-09-18
  icon?: React.ReactNode;
  isMilestone?: boolean;
  milestoneType?: MilestoneType;
}

export const events: EventItem[] = [
  // Day 1 - September 18, 2025
  { id: "1", time: "9:00 AM", title: "Check-in & Welcome", description: "Check-in and welcome ceremony", date: "2025-09-18", icon: <Users className="w-5 h-5" /> },
  { id: "2", time: "10:00 AM", title: "Opening Ceremony", description: "Keynote speeches and event introduction", date: "2025-09-18", icon: <Sparkles className="w-5 h-5" />, isMilestone: true, milestoneType: "ceremony" },
  { id: "3", time: "11:00 AM", title: "Problem Statement Release", description: "Challenge domains and requirements unveiled", date: "2025-09-18", icon: <Calendar className="w-5 h-5" /> },
  { id: "4", time: "12:00 PM", title: "🚀 Hackathon Begins!", description: "24-hour coding sprint officially starts", date: "2025-09-18", icon: <Rocket className="w-5 h-5" />, isMilestone: true, milestoneType: "kickoff" },
  { id: "5", time: "1:00 PM", title: "Lunch Break", description: "Networking lunch and team discussions", date: "2025-09-18", icon: <Coffee className="w-5 h-5" /> },
  { id: "6", time: "3:00 PM", title: "Mentor Sessions Begin", description: "One-on-one guidance from industry experts", date: "2025-09-18", icon: <Users className="w-5 h-5" /> },
  { id: "7", time: "7:00 PM", title: "Dinner & Networking", description: "Evening meal and team collaboration", date: "2025-09-18", icon: <Coffee className="w-5 h-5" /> },
  { id: "8", time: "11:00 PM", title: "Midnight Fuel", description: "Coffee, snacks, and late-night coding energy", date: "2025-09-18", icon: <Coffee className="w-5 h-5" /> },

  // Day 2 - September 19, 2025
  { id: "9", time: "8:00 AM", title: "Breakfast", description: "Morning refreshments and final sprint preparation", date: "2025-09-19", icon: <Coffee className="w-5 h-5" /> },
  { id: "10", time: "10:00 AM", title: "Final Sprint", description: "Last push to complete projects and demos", date: "2025-09-19", icon: <Rocket className="w-5 h-5" /> },
  { id: "11", time: "12:00 PM", title: "Submissions Close", description: "Final project submissions deadline", date: "2025-09-19", icon: <Clock className="w-5 h-5" />, isMilestone: true, milestoneType: "deadline" },
  { id: "12", time: "1:00 PM", title: "Lunch Break", description: "Relaxation before presentations", date: "2025-09-19", icon: <Coffee className="w-5 h-5" /> },
  { id: "13", time: "2:00 PM", title: "Project Presentations", description: "Teams showcase their innovations to judges", date: "2025-09-19", icon: <Users className="w-5 h-5" />, isMilestone: true, milestoneType: "presentation" },
  { id: "14", time: "4:00 PM", title: "Judging & Evaluation", description: "Expert panel evaluates all submissions", date: "2025-09-19", icon: <Trophy className="w-5 h-5" /> },
  { id: "15", time: "5:00 PM", title: "🏆 Results & Awards", description: "Winner announcements and prize distribution", date: "2025-09-19", icon: <Trophy className="w-5 h-5" />, isMilestone: true, milestoneType: "awards" },
  { id: "16", time: "6:00 PM", title: "🎉 Closing Ceremony", description: "Celebration and networking wrap-up", date: "2025-09-19", icon: <Sparkles className="w-5 h-5" />, isMilestone: true, milestoneType: "ceremony" },
];
