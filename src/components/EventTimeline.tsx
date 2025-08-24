import React, { useEffect, useMemo, useState } from "react";
import { Check, Clock, Loader2, Calendar as CalendarIcon, AlertCircle, Mic, Trophy, Sparkles, Rocket } from "lucide-react";
import { events as scheduleEvents, EventItem, MilestoneType } from "@/lib/schedule";

const getMilestoneIcon = (type: MilestoneType) => {
  switch (type) {
    case 'kickoff': return <Rocket className="w-5 h-5 text-yellow-400" />;
    case 'deadline': return <AlertCircle className="w-5 h-5 text-red-400" />;
    case 'presentation': return <Mic className="w-5 h-5 text-blue-400" />;
    case 'awards': return <Trophy className="w-5 h-5 text-yellow-400" />;
    case 'ceremony': return <Sparkles className="w-5 h-5 text-purple-400" />;
    default: return <CalendarIcon className="w-5 h-5" />;
  }
};

const convertTo24Hour = (time: string): string => {
  const [timePart, modifier] = time.split(" ");
  const [h, minutes] = timePart.split(":");
  let hours = h;
  if (hours === "12") hours = "00";
  if (modifier === "PM") hours = String(parseInt(hours, 10) + 12);
  return `${hours.padStart(2, "0")}:${minutes || "00"}:00`;
};

const getEventStatus = (event: EventItem, currentTime: Date): 'upcoming' | 'ongoing' | 'completed' => {
  const eventTime = new Date(`${event.date}T${convertTo24Hour(event.time)}`);
  const now = currentTime;
  
  if (now < eventTime) return 'upcoming';
  if (now > new Date(eventTime.getTime() + 2 * 60 * 60 * 1000)) return 'completed';
  return 'ongoing';
};

const getNextEvent = (events: EventItem[], currentTime: Date) => {
  const now = currentTime;
  return events.find(event => {
    const eventTime = new Date(`${event.date}T${convertTo24Hour(event.time)}`);
    return eventTime > now;
  });
};

// EventItem type now imported from lib/schedule

interface ParticleProps {
  id: number;
  x: number;
  y: number;
  delay: number;
}

const Particle: React.FC<ParticleProps> = ({ x, y, delay }) => (
  <div
    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-75"
    style={{ left: `${x}px`, top: `${y}px`, animationDelay: `${delay}s`, animationDuration: "2s" }}
  />
);

// Rich, animated schedule timeline adapted from besttest-main to fit the astral site
const EventTimeline: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  const events = useMemo(() => {
    return scheduleEvents.map(event => ({
      ...event,
      status: getEventStatus(event, currentTime)
    }));
  }, [currentTime]);

  const nextEvent = getNextEvent(events, currentTime);
  const currentEvent = events.find(event => getEventStatus(event, currentTime) === 'ongoing');

  // Update current time every second for live updates
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Force re-render by updating a dummy state
      setParticles(prev => [...prev]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Generate particles for subtle motion
  useEffect(() => {
    const generateParticles = () => {
      const arr: ParticleProps[] = [];
      for (let i = 0; i < 20; i++) {
        arr.push({ id: i, x: Math.random() * 60 - 30, y: Math.random() * 200, delay: Math.random() * 2 });
      }
      setParticles(arr);
    };
    generateParticles();
    const t = setInterval(generateParticles, 4000);
    return () => clearInterval(t);
  }, []);

  const convertTo24Hour = (time: string): string => {
    const [timePart, modifier] = time.split(" ");
    const [h, minutes] = timePart.split(":");
    let hours = h;
    if (hours === "12") hours = "00";
    if (modifier === "PM") hours = String(parseInt(hours, 10) + 12);
    return `${hours.padStart(2, "0")}:${minutes || "00"}:00`;
  };

  const getEventStatusForDisplay = (event: EventItem): "completed" | "ongoing" | "upcoming" => {
    const eventDateTime = new Date(`${event.date}T${convertTo24Hour(event.time)}`);
    const now = currentTime;
    const eventEndTime = new Date(eventDateTime.getTime() + 2 * 60 * 60 * 1000); // Assume 2 hour event duration
    
    if (now > eventEndTime) return "completed";
    if (now >= eventDateTime && now <= eventEndTime) return "ongoing";
    return "upcoming";
  };

  const getMilestoneStyles = (milestoneType: string) => {
    switch (milestoneType) {
      case "kickoff":
        return { gradient: "from-orange-500 via-red-500 to-pink-500", glow: "shadow-orange-500/50", border: "border-orange-400/60", text: "text-orange-300" };
      case "deadline":
        return { gradient: "from-red-500 via-rose-500 to-red-600", glow: "shadow-red-500/60", border: "border-red-400/70", text: "text-red-300" };
      case "presentation":
        return { gradient: "from-blue-500 via-indigo-500 to-purple-500", glow: "shadow-blue-500/50", border: "border-blue-400/60", text: "text-blue-300" };
      case "awards":
        return { gradient: "from-yellow-400 via-amber-500 to-orange-500", glow: "shadow-yellow-500/70", border: "border-yellow-400/80", text: "text-yellow-300" };
      case "ceremony":
        return { gradient: "from-purple-500 via-pink-500 to-rose-500", glow: "shadow-purple-500/60", border: "border-purple-400/70", text: "text-purple-300" };
      default:
        return { gradient: "from-gray-500 to-gray-600", glow: "shadow-gray-500/30", border: "border-gray-400/40", text: "text-gray-300" };
    }
  };

  const formatTimeDisplay = (date: Date) => {
    // Format time (e.g., "11:30:45 PM")
    const timeString = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    
    // Format date (e.g., "Sunday, August 24, 2025")
    const dateString = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    return { timeString, dateString };
  };

  const eventsByDay = events.reduce((acc, e) => {
    const date = new Date(e.date);
    const dayKey = date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    (acc[dayKey] ||= []).push(e);
    return acc;
  }, {} as Record<string, EventItem[]>);

  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <section id="schedule" className="py-20 px-6 relative">

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-yellow-300 to-purple-400 bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
              <Clock className="w-6 h-6" />
              <span>{formatTimeDisplay(currentTime).timeString}</span>
              <span className="text-sm text-gray-400 ml-1">IST</span>
            </div>
            <div className="text-lg text-gray-300">
              {formatTimeDisplay(currentTime).dateString}
            </div>
          </div>
        </div>

        {/* Quick-jump day anchors */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {Object.keys(eventsByDay).map((day) => {
            const id = `day-${slugify(day)}`;
            return (
              <a key={day} href={`#${id}`} className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm border border-white/20">
                {day}
              </a>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative pt-8">
          {/* Main timeline line with glow - moved down to avoid overlapping with date */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-8 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-yellow-400 to-purple-500 shadow-lg shadow-purple-500/50 z-0">
            {particles.map((p) => (
              <Particle key={p.id} {...p} />
            ))}
          </div>

          {Object.entries(eventsByDay).map(([day, dayEvents]) => (
            <div key={day} id={`day-${slugify(day)}`} className="mb-16 scroll-mt-24">
              {/* Day header with increased spacing */}
              <div className="flex justify-center mb-8 -mt-2 relative z-10">
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-600 to-yellow-500 text-white px-8 py-3 rounded-full shadow-2xl font-bold text-lg relative z-10">
                    {day}
                  </div>
                  {/* Add a subtle background to ensure text is readable */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-full -z-0"></div>
                </div>
              </div>

              {/* Events for this day */}
              {dayEvents.map((event, index) => {
                const status = getEventStatus(event);
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={event.id}
                    className={`relative flex items-center mb-12 ${event.isMilestone ? "milestone-event" : ""} ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-20">
                      {event.isMilestone ? (
                        <div
                          className={`relative w-10 h-10 rounded-full border-4 border-white shadow-2xl transition-all duration-500 bg-gradient-to-r ${getMilestoneStyles(event.milestoneType!).gradient} ${getMilestoneStyles(event.milestoneType!).glow} ${status === "completed" ? "animate-pulse scale-110" : ""} ${status === "current" ? "animate-bounce scale-125" : ""}`}
                        >
                          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-spin" />
                          <div className="absolute -inset-4 rounded-full border-2 border-white/30 animate-ping" />
                        </div>
                      ) : (
                        <div
                          className={`relative w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                            status === "completed"
                              ? "bg-gradient-to-r from-green-400 to-green-600 animate-pulse shadow-green-400/50"
                              : status === "current"
                              ? "bg-gradient-to-r from-yellow-400 to-orange-500 animate-bounce shadow-yellow-400/75"
                              : "bg-gradient-to-r from-gray-400 to-gray-600"
                          }`}
                        >
                          {status === "completed" && (
                            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                          )}
                          {status === "current" && (
                            <div className="absolute -inset-2 rounded-full border-2 border-yellow-400 animate-pulse" />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Milestone special effects */}
                    {event.isMilestone && (
                      <>
                        <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 pointer-events-none">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${getMilestoneStyles(event.milestoneType!).gradient} animate-ping opacity-60`}
                              style={{
                                left: `${Math.cos((i * 45 * Math.PI) / 180) * 30}px`,
                                top: `${Math.sin((i * 45 * Math.PI) / 180) * 30}px`,
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: "2s",
                              }}
                            />
                          ))}
                        </div>
                        <div
                          className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 -z-10 w-20 h-20 rounded-full opacity-30 animate-pulse bg-gradient-to-r ${getMilestoneStyles(event.milestoneType!).gradient} blur-xl`}
                        />
                      </>
                    )}

                    {/* Event card */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                      <div
                        className={`relative p-6 rounded-2xl shadow-2xl transition-all duration-500 cursor-pointer event-card ${
                          event.isMilestone ? 'milestone' : ''
                        } ${
                          event.isMilestone
                            ? `bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 border-2 ${getMilestoneStyles(event.milestoneType!).border} ${getMilestoneStyles(event.milestoneType!).glow} backdrop-blur-sm ${status === "current" ? "scale-105" : ""} ${status === "completed" ? "milestone-completed" : ""}`
                            : status === "completed"
                            ? "bg-gradient-to-br from-green-800/50 to-green-900/50 border border-green-400/30 shadow-green-400/20"
                            : status === "current"
                            ? "bg-gradient-to-br from-yellow-800/50 to-orange-900/50 border border-yellow-400/50 shadow-yellow-400/30"
                            : "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-600/30"
                        }`}
                      >
                        {event.isMilestone && (
                          <div
                            className={`absolute -top-4 -right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getMilestoneStyles(event.milestoneType!).gradient} text-white shadow-lg animate-bounce z-10`}
                          >
                            ⭐ MILESTONE
                          </div>
                        )}

                        <div
                          className={`absolute -top-3 left-6 px-4 py-1 rounded-full text-sm font-bold ${
                            event.isMilestone
                              ? `bg-gradient-to-r ${getMilestoneStyles(event.milestoneType!).gradient} text-white shadow-lg`
                              : status === "completed"
                              ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                              : status === "current"
                              ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                              : "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
                          }`}
                        >
                          {event.time}
                        </div>

                        <div className="flex items-start gap-4 mt-2">
                          <div
                            className={`p-3 rounded-full transition-all duration-300 ${
                              event.isMilestone
                                ? `bg-gradient-to-r ${getMilestoneStyles(event.milestoneType!).gradient} text-white shadow-lg scale-110`
                                : status === "completed"
                                ? "bg-green-500/20 text-green-400"
                                : status === "current"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-gray-500/20 text-gray-400"
                            }`}
                          >
                            {event.icon}
                          </div>
                          <div className="flex-1">
                            <h3
                              className={`font-bold text-xl mb-2 transition-all duration-300 ${
                                event.isMilestone
                                  ? `${getMilestoneStyles(event.milestoneType!).text} text-2xl font-extrabold tracking-wide`
                                  : status === "completed"
                                  ? "text-green-300"
                                  : status === "current"
                                  ? "text-yellow-300"
                                  : "text-gray-300"
                              }`}
                            >
                              {event.title}
                            </h3>
                            <p
                              className={`transition-all duration-300 ${
                                event.isMilestone
                                  ? "text-white/90 font-medium"
                                  : status === "completed"
                                  ? "text-green-200/80"
                                  : status === "current"
                                  ? "text-yellow-200/80"
                                  : "text-gray-400"
                              }`}
                            >
                              {event.description}
                            </p>
                          </div>
                        </div>

                        {event.isMilestone && (
                          <>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse pointer-events-none" />
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500/0 via-yellow-300/20 to-purple-500/0 blur transition-opacity opacity-40" />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary">* Schedule is subject to change. Please check back for updates.</p>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
