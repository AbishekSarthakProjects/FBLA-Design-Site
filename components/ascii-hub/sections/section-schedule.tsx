"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { tutoringSessions, studyGroups } from "@/lib/sections-data"
import { Calendar, Users, Clock, User } from "lucide-react"

const shadow = "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function LevelBadge({ level }: { level: "Beginner" | "Intermediate" | "Advanced" }) {
  const styles = {
    Beginner: "border-foreground/30 text-foreground/70",
    Intermediate: "border-foreground/60 text-foreground/90",
    Advanced: "border-foreground bg-foreground text-background",
  }
  return (
    <span className={`border px-2 py-0.5 font-mono text-[10px] ${styles[level]}`}>
      {level.toUpperCase()}
    </span>
  )
}

function SpotIndicator({ spots, maxSpots }: { spots: number; maxSpots: number }) {
  const percentage = ((maxSpots - spots) / maxSpots) * 100
  const isFull = spots === 0
  const isAlmostFull = spots <= 3 && spots > 0

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-1 ${
              i < Math.ceil(percentage / 20)
                ? isFull
                  ? "bg-muted-foreground"
                  : isAlmostFull
                  ? "bg-foreground animate-pulse"
                  : "bg-foreground"
                : "bg-secondary"
            }`}
          />
        ))}
      </div>
      <span className={`font-mono text-[10px] ${isFull ? "text-muted-foreground" : isAlmostFull ? "text-foreground" : "text-muted-foreground"}`}>
        {isFull ? "FULL" : `${spots} spots`}
      </span>
    </div>
  )
}

export function SectionSchedule() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"tutoring" | "groups">("tutoring")

  const filteredSessions = selectedDay
    ? tutoringSessions.filter((s) => s.date === selectedDay)
    : tutoringSessions

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col gap-4"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-muted-foreground">{">"}</span>
          <div className="h-[1px] w-12 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Live Sessions
          </span>
        </div>
        <h2 className="font-pixel-line text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Tutoring Schedule
        </h2>
        <p className="max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
          Join live tutoring sessions led by teachers and peer tutors, or collaborate with study groups.
        </p>
      </motion.div>

      {/* Tab Switcher */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 flex gap-2"
      >
        <button
          onClick={() => setActiveTab("tutoring")}
          className={`flex items-center gap-2 border px-4 py-2 font-mono text-xs transition-all duration-200 ${
            activeTab === "tutoring"
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
          }`}
        >
          <User size={14} />
          TUTORING SESSIONS
        </button>
        <button
          onClick={() => setActiveTab("groups")}
          className={`flex items-center gap-2 border px-4 py-2 font-mono text-xs transition-all duration-200 ${
            activeTab === "groups"
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
          }`}
        >
          <Users size={14} />
          STUDY GROUPS
        </button>
      </motion.div>

      {activeTab === "tutoring" ? (
        <>
          {/* Day Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 border border-border"
            style={{ boxShadow: shadow }}
          >
            <div className="border-b border-border px-4 py-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Filter by Day
              </span>
            </div>
            <div className="flex flex-wrap gap-2 p-4">
              <button
                onClick={() => setSelectedDay(null)}
                className={`border px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
                  selectedDay === null
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                ALL
              </button>
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`border px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
                    selectedDay === day
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {day.toUpperCase().slice(0, 3)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Sessions Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredSessions.map((session, i) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group border border-border transition-all duration-200 hover:border-foreground"
                style={{ boxShadow: shadow }}
              >
                <div className="flex items-center justify-between border-b border-border px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} className="text-muted-foreground" />
                    <span className="font-mono text-[10px] text-muted-foreground">{session.date}</span>
                  </div>
                  <LevelBadge level={session.level} />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-pixel text-sm text-foreground">{session.title}</h3>
                  <div className="mb-4 flex flex-col gap-1">
                    <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <User size={12} />
                      <span>{session.tutor}</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <Clock size={12} />
                      <span>{session.time}</span>
                    </div>
                  </div>
                  <div className="mb-4 border-l-2 border-border pl-3">
                    <span className="font-mono text-[10px] text-muted-foreground">{session.topic}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <SpotIndicator spots={session.spots} maxSpots={session.maxSpots} />
                    <button
                      disabled={session.spots === 0}
                      className={`border px-3 py-1 font-mono text-[10px] transition-all duration-200 ${
                        session.spots === 0
                          ? "cursor-not-allowed border-border text-muted-foreground"
                          : "border-foreground text-foreground hover:bg-foreground hover:text-background"
                      }`}
                    >
                      {session.spots === 0 ? "FULL" : "JOIN"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        /* Study Groups */
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {studyGroups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group border border-border transition-all duration-200 hover:border-foreground"
              style={{ boxShadow: shadow }}
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-2">
                <div className="flex items-center gap-2">
                  <Users size={12} className="text-muted-foreground" />
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {group.members}/{group.maxMembers} members
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">{group.frequency}</span>
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-pixel text-sm text-foreground">{group.name}</h3>
                <div className="mb-4 border-l-2 border-border pl-3">
                  <span className="font-mono text-[10px] text-muted-foreground">{group.topic}</span>
                </div>
                <div className="mb-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <Calendar size={12} />
                  <span>Next: {group.nextMeeting}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-1">
                    {Array.from({ length: Math.min(group.members, 4) }).map((_, idx) => (
                      <div
                        key={idx}
                        className="flex h-6 w-6 items-center justify-center border border-border bg-secondary font-mono text-[8px] text-muted-foreground"
                      >
                        {String.fromCharCode(65 + idx)}
                      </div>
                    ))}
                    {group.members > 4 && (
                      <div className="flex h-6 w-6 items-center justify-center border border-border bg-secondary font-mono text-[8px] text-muted-foreground">
                        +{group.members - 4}
                      </div>
                    )}
                  </div>
                  <button
                    disabled={group.members >= group.maxMembers}
                    className={`border px-3 py-1 font-mono text-[10px] transition-all duration-200 ${
                      group.members >= group.maxMembers
                        ? "cursor-not-allowed border-border text-muted-foreground"
                        : "border-foreground text-foreground hover:bg-foreground hover:text-background"
                    }`}
                  >
                    {group.members >= group.maxMembers ? "FULL" : "JOIN"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Weekly Calendar ASCII */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 border border-border"
        style={{ boxShadow: shadow }}
      >
        <div className="border-b border-border px-4 py-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Weekly Overview
          </span>
        </div>
        <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-muted-foreground">
{`┌────────────────────────────────────────────────────────────────────────────────────┐
│  WEEK OF APRIL 14-20, 2026                                                         │
├──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────────────┤
│  MON     │  TUE     │  WED     │  THU     │  FRI     │  SAT     │                  │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────────────┤
│ 3:30 PM  │ 4:00 PM  │ 3:00 PM  │ 4:00 PM  │ 3:30 PM  │ 12:00 PM │  [  ] Available  │
│ Python   │ Algo     │ React    │ SQL      │ CTF      │ LeetCode │  [██] Tutoring   │
│ Basics   │ Solving  │ Deep     │ Master   │ Prep     │ Practice │  [▒▒] Study Grp  │
│ [██]     │ [██]     │ [██]     │ [██]     │ [██]     │ [██]     │                  │
│          │          │          │          │          │          │                  │
│ 4:00 PM  │ 5:00 PM  │ 3:30 PM  │ 4:00 PM  │ 3:00 PM  │          │  6 Sessions      │
│ Python   │ Algo     │ Web      │ Security │ ML       │          │  5 Study Groups  │
│ Pioneers │ Aces     │ Wizards  │ Squad    │ Explorers│          │                  │
│ [▒▒]     │ [▒▒]     │ [▒▒]     │ [▒▒]     │ [▒▒]     │          │                  │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────────────┘`}
        </pre>
      </motion.div>
    </div>
  )
}
