"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { resources } from "@/lib/sections-data"
import { Play, BookOpen, FileQuestion, Download, Check, Filter, Search } from "lucide-react"

const shadow = "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"

const resourceTypes = [
  { id: "all", label: "ALL", icon: null },
  { id: "video", label: "VIDEOS", icon: Play },
  { id: "lesson", label: "LESSONS", icon: BookOpen },
  { id: "quiz", label: "QUIZZES", icon: FileQuestion },
  { id: "download", label: "DOWNLOADS", icon: Download },
]

const topics = [
  "All Topics",
  "Programming Fundamentals",
  "Algorithms & Data Structures",
  "Web Development",
  "Database Systems",
  "Cybersecurity Basics",
  "Intro to AI & ML",
  "Git & Collaboration",
]

function TypeIcon({ type }: { type: string }) {
  const icons = {
    video: Play,
    lesson: BookOpen,
    quiz: FileQuestion,
    download: Download,
  }
  const Icon = icons[type as keyof typeof icons]
  return Icon ? <Icon size={14} /> : null
}

function DifficultyBadge({ difficulty }: { difficulty: "Beginner" | "Intermediate" | "Advanced" }) {
  const styles = {
    Beginner: "border-foreground/30 text-foreground/70",
    Intermediate: "border-foreground/60 text-foreground/90",
    Advanced: "border-foreground bg-foreground text-background",
  }
  return (
    <span className={`border px-2 py-0.5 font-mono text-[10px] ${styles[difficulty]}`}>
      {difficulty.toUpperCase()}
    </span>
  )
}

export function SectionResources() {
  const [activeType, setActiveType] = useState("all")
  const [activeTopic, setActiveTopic] = useState("All Topics")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredResources = resources.filter((resource) => {
    const matchesType = activeType === "all" || resource.type === activeType
    const matchesTopic = activeTopic === "All Topics" || resource.topic === activeTopic
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.topic.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesTopic && matchesSearch
  })

  const stats = {
    videos: resources.filter((r) => r.type === "video").length,
    lessons: resources.filter((r) => r.type === "lesson").length,
    quizzes: resources.filter((r) => r.type === "quiz").length,
    downloads: resources.filter((r) => r.type === "download").length,
  }

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
            Learning Materials
          </span>
        </div>
        <h2 className="font-pixel-line text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Resources Library
        </h2>
        <p className="max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
          Access videos, interactive lessons, quizzes, and downloadable materials to support your learning journey.
        </p>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {[
          { label: "Videos", value: stats.videos, icon: Play },
          { label: "Lessons", value: stats.lessons, icon: BookOpen },
          { label: "Quizzes", value: stats.quizzes, icon: FileQuestion },
          { label: "Downloads", value: stats.downloads, icon: Download },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 border border-border p-4"
            style={{ boxShadow: shadow }}
          >
            <stat.icon className="h-5 w-5 text-muted-foreground" />
            <div>
              <span className="block font-pixel text-2xl text-foreground">{stat.value}</span>
              <span className="font-mono text-[10px] text-muted-foreground">{stat.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 border border-border"
        style={{ boxShadow: shadow }}
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-2">
          <Filter size={12} className="text-muted-foreground" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Filters
          </span>
        </div>
        <div className="p-4">
          {/* Search */}
          <div className="mb-4 flex items-center gap-2 border border-border px-3 py-2">
            <Search size={14} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>

          {/* Type Filter */}
          <div className="mb-4 flex flex-wrap gap-2">
            {resourceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`flex items-center gap-1.5 border px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
                  activeType === type.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {type.icon && <type.icon size={12} />}
                {type.label}
              </button>
            ))}
          </div>

          {/* Topic Filter */}
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={`border px-3 py-1 font-mono text-[10px] transition-all duration-200 ${
                  activeTopic === topic
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {topic.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Results Count */}
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          Showing {filteredResources.length} of {resources.length} resources
        </span>
      </div>

      {/* Resources Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((resource, i) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="group border border-border transition-all duration-200 hover:border-foreground"
            style={{ boxShadow: shadow }}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-2">
              <div className="flex items-center gap-2">
                <TypeIcon type={resource.type} />
                <span className="font-mono text-[10px] uppercase text-muted-foreground">
                  {resource.type}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {resource.completed && (
                  <div className="flex items-center gap-1 text-foreground">
                    <Check size={12} />
                    <span className="font-mono text-[10px]">DONE</span>
                  </div>
                )}
                <DifficultyBadge difficulty={resource.difficulty} />
              </div>
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-pixel text-sm text-foreground">{resource.title}</h3>
              <div className="mb-4 border-l-2 border-border pl-3">
                <span className="font-mono text-[10px] text-muted-foreground">{resource.topic}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {resource.duration || `${resource.questions} questions` || resource.fileSize}
                </span>
                <button className="border border-foreground px-3 py-1 font-mono text-[10px] text-foreground transition-all duration-200 hover:bg-foreground hover:text-background">
                  {resource.type === "video"
                    ? "WATCH"
                    : resource.type === "lesson"
                    ? "READ"
                    : resource.type === "quiz"
                    ? "START"
                    : "DOWNLOAD"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredResources.length === 0 && (
        <div className="border border-border p-12 text-center" style={{ boxShadow: shadow }}>
          <pre className="mb-4 font-mono text-xs text-muted-foreground">
{`  ┌─────────────────┐
  │   NO RESULTS    │
  │                 │
  │   ¯\\_(ツ)_/¯   │
  │                 │
  └─────────────────┘`}
          </pre>
          <p className="font-mono text-sm text-muted-foreground">
            No resources match your filters. Try adjusting your search criteria.
          </p>
        </div>
      )}

      {/* Interactive Tools Preview */}
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
            Interactive Tools
          </span>
        </div>
        <div className="grid md:grid-cols-3">
          <div className="border-b border-border p-6 md:border-b-0 md:border-r">
            <h4 className="mb-2 font-pixel text-sm text-foreground">Code Playground</h4>
            <pre className="mb-4 font-mono text-[10px] text-muted-foreground">
{`def hello():
    print("Hello!")
>>> Hello!`}
            </pre>
            <button className="w-full border border-foreground py-2 font-mono text-[10px] text-foreground transition-all duration-200 hover:bg-foreground hover:text-background">
              OPEN PLAYGROUND
            </button>
          </div>
          <div className="border-b border-border p-6 md:border-b-0 md:border-r">
            <h4 className="mb-2 font-pixel text-sm text-foreground">Algorithm Visualizer</h4>
            <pre className="mb-4 font-mono text-[10px] text-muted-foreground">
{`[3,1,4] -> [1,3,4]
Sorting...
Swaps: 2`}
            </pre>
            <button className="w-full border border-foreground py-2 font-mono text-[10px] text-foreground transition-all duration-200 hover:bg-foreground hover:text-background">
              VISUALIZE ALGORITHMS
            </button>
          </div>
          <div className="p-6">
            <h4 className="mb-2 font-pixel text-sm text-foreground">SQL Sandbox</h4>
            <pre className="mb-4 font-mono text-[10px] text-muted-foreground">
{`SELECT * FROM
students WHERE
grade = 'A';`}
            </pre>
            <button className="w-full border border-foreground py-2 font-mono text-[10px] text-foreground transition-all duration-200 hover:bg-foreground hover:text-background">
              TRY SQL QUERIES
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
