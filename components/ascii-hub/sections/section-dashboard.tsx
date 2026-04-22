"use client"

import { motion } from "framer-motion"
import { progressData } from "@/lib/sections-data"
import { BookOpen, Trophy, Clock, Target } from "lucide-react"

const shadow = "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"

const stats = [
  { label: "Courses Enrolled", value: "6", icon: BookOpen },
  { label: "Hours Learned", value: "47", icon: Clock },
  { label: "Quizzes Completed", value: "12", icon: Target },
  { label: "Achievements", value: "8", icon: Trophy },
]

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="relative h-2 w-full bg-secondary">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-y-0 left-0 bg-foreground"
      />
      <div className="absolute inset-0 flex">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-background last:border-r-0" />
        ))}
      </div>
    </div>
  )
}

function AsciiAvatar() {
  return (
    <pre className="font-mono text-[8px] leading-[10px] text-foreground md:text-[10px] md:leading-[12px]">
{`  ┌─────────┐
  │  ○   ○  │
  │    ▽    │
  │  ╲___╱  │
  └─────────┘`}
    </pre>
  )
}

export function SectionDashboard() {
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
            Your Progress
          </span>
        </div>
        <h2 className="font-pixel-line text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Student Dashboard
        </h2>
        <p className="max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
          Track your learning journey, monitor progress across courses, and celebrate your achievements.
        </p>
      </motion.div>

      {/* Dashboard Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-border lg:row-span-2"
          style={{ boxShadow: shadow }}
        >
          <div className="border-b border-border px-4 py-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Student Profile
            </span>
          </div>
          <div className="flex flex-col items-center p-6">
            <div className="mb-4 border border-border p-4">
              <AsciiAvatar />
            </div>
            <h3 className="font-pixel text-lg text-foreground">STUDENT_01</h3>
            <span className="font-mono text-xs text-muted-foreground">Level 12 Programmer</span>
            
            <div className="mt-6 w-full">
              <div className="mb-2 flex items-center justify-between font-mono text-xs">
                <span className="text-muted-foreground">XP Progress</span>
                <span className="text-foreground">2,450 / 3,000</span>
              </div>
              <ProgressBar progress={82} />
            </div>

            <div className="mt-6 grid w-full grid-cols-2 gap-4">
              <div className="border border-border p-3 text-center">
                <span className="block font-pixel text-2xl text-foreground">15</span>
                <span className="font-mono text-[10px] text-muted-foreground">Day Streak</span>
              </div>
              <div className="border border-border p-3 text-center">
                <span className="block font-pixel text-2xl text-foreground">#42</span>
                <span className="font-mono text-[10px] text-muted-foreground">Rank</span>
              </div>
            </div>

            <div className="mt-6 w-full border border-border p-4">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Recent Badges
              </span>
              <div className="flex gap-2">
                {["[PY]", "[JS]", "[GIT]", "[SQL]"].map((badge) => (
                  <span
                    key={badge}
                    className="border border-foreground px-2 py-1 font-mono text-[10px] text-foreground"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="border border-border p-4"
                style={{ boxShadow: shadow }}
              >
                <stat.icon className="mb-2 h-4 w-4 text-muted-foreground" />
                <span className="block font-pixel text-3xl text-foreground">{stat.value}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-border lg:col-span-2"
          style={{ boxShadow: shadow }}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Learning Progress
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">6 Active</span>
          </div>
          <div className="divide-y divide-border">
            {progressData.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-4 p-4"
              >
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-mono text-sm text-foreground">{item.title}</span>
                    <span className="font-mono text-xs text-muted-foreground">{item.progress}%</span>
                  </div>
                  <ProgressBar progress={item.progress} />
                  <div className="mt-1 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-muted-foreground">{item.category}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">{item.lastActivity}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Activity Feed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 border border-border"
        style={{ boxShadow: shadow }}
      >
        <div className="border-b border-border px-4 py-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Recent Activity
          </span>
        </div>
        <div className="p-4">
          <pre className="font-mono text-xs leading-relaxed text-muted-foreground">
{`[Today 14:32]     Completed lesson: "Git Branching Strategies"
[Today 12:15]     Joined study group: "Algorithm Aces"
[Yesterday]       Achieved badge: [SQL] - Database Fundamentals
[Yesterday]       Scored 92% on "Python Basics Quiz"
[3 days ago]      Started course: "Web Development"
[1 week ago]      Reached Level 12! +500 XP`}
          </pre>
        </div>
      </motion.div>
    </div>
  )
}
