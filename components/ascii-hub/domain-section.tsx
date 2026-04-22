"use client"

import type { TechSection } from "@/lib/sections-data"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface DomainSectionProps {
  section: TechSection
  index: number
}

const shadow = "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"

function TerminalDemo({ commands }: { commands: string[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    if (!isInView) return
    let i = 0
    const interval = setInterval(() => {
      if (i < commands.length) {
        const currentLine = commands[i]
        i++
        setLines((prev) => [...prev, currentLine])
      } else {
        clearInterval(interval)
      }
    }, 200)
    return () => clearInterval(interval)
  }, [isInView, commands])

  return (
    <div ref={ref} className="bg-background p-4 font-mono text-xs leading-relaxed text-foreground">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={
            line.startsWith("$")
              ? "text-foreground"
              : line.includes("PASSED") || line.includes("[OK]")
              ? "text-foreground font-bold"
              : "text-muted-foreground"
          }
        >
          {line}
        </motion.div>
      ))}
      {lines.length < commands.length && (
        <span className="animate-blink inline-block text-foreground">{"_"}</span>
      )}
    </div>
  )
}

export function DomainSection({ section, index }: DomainSectionProps) {
  const isEven = index % 2 === 0

  return (
    <section id={section.id} className="relative border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        {/* Section label with ghost number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 flex items-end gap-6"
        >
          <span className="font-pixel-line text-6xl font-bold leading-none text-foreground/[0.08] md:text-8xl lg:text-9xl">
            {section.number}
          </span>
          <div className="flex-1 pb-2">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className={`grid gap-8 lg:grid-cols-2 ${isEven ? "" : "lg:grid-flow-dense"}`}>
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col gap-6 ${isEven ? "" : "lg:col-start-2"}`}
          >
            <div>
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {section.subtitle}
              </span>
              <h2 className="font-pixel-line text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {section.title}
              </h2>
            </div>
            <p className="font-mono text-sm leading-relaxed text-muted-foreground">
              {section.description}
            </p>

            {/* Specs */}
            <div className="border border-border" style={{ boxShadow: shadow }}>
              <div className="border-b border-border px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Course Details
                </span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-border">
                {section.specs.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className={`p-4 ${i >= 2 ? "border-t border-border" : ""}`}
                  >
                    <span className="block font-mono text-[10px] text-muted-foreground">
                      {spec.label}
                    </span>
                    <span className="font-mono text-xs font-bold text-foreground">
                      {spec.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="group flex w-fit items-center gap-2 border border-foreground bg-foreground px-6 py-3 font-mono text-sm text-background transition-all duration-200 hover:bg-transparent hover:text-foreground">
              Start Learning
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                {"->"}
              </span>
            </button>
          </motion.div>

          {/* Visual Panel */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`flex flex-col gap-4 ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}
          >
            {/* ASCII Art */}
            <div className="border border-border" style={{ boxShadow: shadow }}>
              <div className="flex items-center gap-2 border-b border-border px-4 py-2">
                <div className="h-1.5 w-1.5 bg-foreground" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Concept Diagram
                </span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-muted-foreground">
                {section.ascii}
              </pre>
            </div>

            {/* Terminal Demo */}
            <div className="border border-border" style={{ boxShadow: shadow }}>
              <div className="flex items-center justify-between border-b border-border bg-foreground px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 border border-background/30 bg-background" />
                    <div className="h-2.5 w-2.5 border border-background/30 bg-background/60" />
                    <div className="h-2.5 w-2.5 border border-background/30 bg-background/30" />
                  </div>
                  <span className="font-mono text-xs text-background">
                    demo@codepath:~
                  </span>
                </div>
                <span className="font-mono text-[10px] text-background/50">interactive</span>
              </div>
              <TerminalDemo commands={section.commands} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
