"use client"

import { motion } from "framer-motion"
import { Github, Mail, Phone, ArrowUp } from "lucide-react"

const ASCII_LOGO = `
 ██████╗██████╗ 
██╔════╝██╔══██╗
██║     ██████╔╝
██║     ██╔═══╝ 
╚██████╗██║     
 ╚═════╝╚═╝     `

const links = [
  { name: "Dashboard", href: "#dashboard" },
  { name: "Schedule", href: "#schedule" },
  { name: "Resources", href: "#resources" },
  { name: "Courses", href: "#courses" },
]

const contactInfo = [
  { name: "(781) 522-3000", icon: Phone, href: "tel:+17815223000" },
  { name: "support@codepath-cs.edu", icon: Mail, href: "mailto:support@codepath-cs.edu" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.replace("#", ""))
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* ASCII Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <pre
              className="mb-4 font-mono text-[8px] leading-[10px] text-foreground/40 md:text-[10px] md:leading-[12px]"
              aria-label="CodePath CS ASCII logo"
              role="img"
            >
              {ASCII_LOGO}
            </pre>
            <p className="mt-4 max-w-md font-mono text-xs leading-relaxed text-muted-foreground">
              CodePath CS Hub is a peer-to-peer Computer Science learning platform
              created by students, for students. Master programming, algorithms,
              and web development through collaborative learning.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Python", "JavaScript", "React", "SQL", "Git"].map((tech) => (
                <span
                  key={tech}
                  className="border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Quick Links
            </span>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="group flex items-center gap-3 py-1 font-mono text-sm text-muted-foreground transition-all duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none text-left"
                >
                  <span>{link.name}</span>
                  <span className="ml-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {"->"}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Contact
            </span>
            <div className="flex flex-col gap-2">
              {contactInfo.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 py-1 font-mono text-sm text-muted-foreground transition-all duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none"
                >
                  <contact.icon size={14} />
                  <span>{contact.name}</span>
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 font-mono text-xs text-muted-foreground transition-all duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none"
              aria-label="Back to top"
            >
              <ArrowUp size={12} />
              <span>BACK TO TOP</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <span className="font-mono text-[10px] text-muted-foreground">
            {"// "} CodePath CS Hub &mdash; FBLA Website Design 2025-2026
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            Created by students, for students.
          </span>
        </div>
      </div>
    </footer>
  )
}
