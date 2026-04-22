"use client"

import { motion } from "framer-motion"

const TECH_ITEMS = [
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "SQL",
  "Git",
  "Algorithms",
  "Data Structures",
  "Machine Learning",
  "Cybersecurity",
  "HTML/CSS",
  "TypeScript",
  "PostgreSQL",
  "TensorFlow",
  "Node.js",
  "Docker",
]

export function TechTicker() {
  return (
    <div className="overflow-hidden border-y border-border py-3" aria-label="Skills and technologies ticker">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-xs text-muted-foreground"
          >
            {item}
            <span className="ml-8 text-border">{"///"}</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
