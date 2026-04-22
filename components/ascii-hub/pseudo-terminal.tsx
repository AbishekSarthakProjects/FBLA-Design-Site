"use client"

import { useState, useRef, useEffect, type KeyboardEvent } from "react"
import { motion } from "framer-motion"

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  help       - Show this message",
    "  courses    - List all CS courses",
    "  progress   - View your learning progress",
    "  schedule   - Show tutoring schedule",
    "  resources  - List learning resources",
    "  about      - About CodePath CS Hub",
    "  clear      - Clear terminal",
    "  ascii      - Show ASCII art",
    "  contact    - Contact information",
  ],
  courses: [
    "01  Algorithms & Data Structures",
    "02  Programming Fundamentals",
    "03  Web Development",
    "04  Database Systems",
    "05  Cybersecurity Basics",
    "06  Intro to AI & ML",
    "07  Git & Collaboration",
    "08  Competitive Programming",
  ],
  progress: [
    "Student: STUDENT_01 | Level: 12",
    "─────────────────────────────",
    "Programming Fundamentals  [████████░░] 78%",
    "Algorithms & Data Struct  [████░░░░░░] 45%",
    "Web Development           [██████░░░░] 62%",
    "Database Systems          [██░░░░░░░░] 23%",
    "Git & Collaboration       [█████████░] 91%",
    "─────────────────────────────",
    "Total XP: 2,450 | Streak: 15 days",
  ],
  schedule: [
    "TUTORING SESSIONS THIS WEEK:",
    "─────────────────────────────",
    "MON 3:30 PM  Python Basics         [8 spots]",
    "TUE 4:00 PM  Algorithm Solving     [3 spots]",
    "WED 3:00 PM  React Deep Dive       [12 spots]",
    "THU 4:00 PM  SQL Masterclass       [5 spots]",
    "FRI 3:30 PM  CTF Prep              [2 spots]",
    "SAT 12:00 PM LeetCode Practice     [15 spots]",
  ],
  resources: [
    "LEARNING RESOURCES:",
    "─────────────────────────────",
    "Videos:    4 available",
    "Lessons:   4 available",
    "Quizzes:   4 available",
    "Downloads: 4 available",
    "─────────────────────────────",
    "Type 'resources --type video' for videos",
  ],
  about: [
    "CodePath CS Hub v2.0.0",
    "",
    "A peer-to-peer Computer Science learning",
    "platform created by students, for students.",
    "",
    "Features:",
    "  - 8 comprehensive CS courses",
    "  - Live tutoring sessions",
    "  - Collaborative study groups",
    "  - Interactive coding challenges",
    "",
    "Built for FBLA Website Design 2025-2026",
  ],
  ascii: [
    "",
    "   ██████╗ ██████╗ ██████╗ ███████╗",
    "  ██╔════╝██╔═══██╗██╔══██╗██╔════╝",
    "  ██║     ██║   ██║██║  ██║█████╗  ",
    "  ██║     ██║   ██║██║  ██║██╔══╝  ",
    "  ╚██████╗╚██████╔╝██████╔╝███████╗",
    "   ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝",
    "  ██████╗  █████╗ ████████╗██╗  ██╗",
    "  ██╔══██╗██╔══██╗╚══██╔══╝██║  ██║",
    "  ██████╔╝███████║   ██║   ███████║",
    "  ██╔═══╝ ██╔══██║   ██║   ██╔══██║",
    "  ██║     ██║  ██║   ██║   ██║  ██║",
    "  ╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝",
    "",
  ],
  contact: [
    "CONTACT INFORMATION:",
    "─────────────────────────────",
    "Phone:    (781) 522-3000",
    "Email:    support@codepath-cs.edu",
    "Discord:  discord.gg/codepath",
    "GitHub:   github.com/codepath-cs",
    "",
    "Office Hours: Mon-Fri 3:00-5:00 PM",
  ],
}

interface TerminalLine {
  type: "input" | "output" | "ascii"
  content: string
}

export function PseudoTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Welcome to CodePath CS Hub Terminal v2.0.0" },
    { type: "output", content: 'Type "help" for available commands.' },
    { type: "output", content: "" },
  ])
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    const baseLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: `$ ${cmd}` },
    ]

    if (trimmed === "clear") {
      setLines([])
      setInput("")
      return
    }

    if (trimmed === "ascii") {
      setLines([...baseLines, { type: "output", content: "" }])
      setInput("")
      const asciiLines = COMMANDS["ascii"]
      asciiLines.forEach((line, i) => {
        setTimeout(() => {
          setLines((prev) => [...prev, { type: "ascii", content: line }])
        }, i * 60)
      })
      return
    }

    const newLines: TerminalLine[] = [...baseLines]
    const response = COMMANDS[trimmed]
    if (response) {
      response.forEach((line) => {
        newLines.push({ type: "output", content: line })
      })
    } else if (trimmed === "") {
      // do nothing
    } else {
      newLines.push({ type: "output", content: `command not found: ${trimmed}` })
      newLines.push({ type: "output", content: 'Type "help" for available commands.' })
    }

    newLines.push({ type: "output", content: "" })
    setLines(newLines)
    setInput("")
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(input)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24"
    >
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-muted-foreground">{">"}</span>
          <div className="h-[1px] w-12 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Interactive
          </span>
        </div>
        <h2 className="font-pixel-line text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Terminal
        </h2>
        <p className="max-w-prose font-mono text-sm leading-relaxed text-muted-foreground">
          Explore the learning hub. Type commands to discover courses, check your progress, and more.
        </p>
      </div>

      <div
        className="border border-border"
        onClick={() => inputRef.current?.focus()}
        role="application"
        aria-label="Interactive learning hub terminal"
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <div className="h-2.5 w-2.5 bg-foreground" />
          <div className="h-2.5 w-2.5 bg-muted-foreground/50" />
          <div className="h-2.5 w-2.5 bg-muted-foreground/30" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            codepath-cs ~ interactive
          </span>
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          className="h-80 overflow-y-auto bg-secondary/20 p-4"
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className={`font-mono text-xs leading-relaxed ${
                line.type === "input"
                  ? "text-foreground"
                  : line.type === "ascii"
                  ? "text-foreground brightness-125"
                  : "text-muted-foreground"
              }`}
            >
              {line.content || "\u00A0"}
            </div>
          ))}

          {/* Input line */}
          <div className="relative flex items-center font-mono text-xs text-foreground">
            <span className="mr-1">{"$"}</span>
            <span>{input}</span>
            <span className="animate-blink">{"█"}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="absolute inset-0 h-full w-full cursor-default border-none bg-transparent opacity-0 outline-none"
              aria-label="Terminal input"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}
