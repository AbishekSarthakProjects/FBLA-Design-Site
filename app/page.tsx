import { Navigation } from "@/components/ascii-hub/navigation"
import { HeroSection } from "@/components/ascii-hub/hero-section"
import { SectionDashboard } from "@/components/ascii-hub/sections/section-dashboard"
import { SectionSchedule } from "@/components/ascii-hub/sections/section-schedule"
import { SectionResources } from "@/components/ascii-hub/sections/section-resources"
import { DomainSection } from "@/components/ascii-hub/domain-section"
import { TechTicker } from "@/components/ascii-hub/tech-ticker"
import { PseudoTerminal } from "@/components/ascii-hub/pseudo-terminal"
import { Footer } from "@/components/ascii-hub/footer"
import { techSections } from "@/lib/sections-data"

// Sarthak: Main entry point for the FBLA hub.
// Abishek: Ensuring the hero section scales correctly on smaller laptops.
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <HeroSection />

        <TechTicker />

        {/* Student Dashboard Section */}
        <section id="dashboard" className="border-b border-border">
          <SectionDashboard />
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="border-b border-border">
          <SectionSchedule />
        </section>

        {/* Resources Section */}
        <section id="resources" className="border-b border-border">
          <SectionResources />
        </section>

        {/* Courses Section Header */}
        <section id="courses" className="border-b border-border bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-muted-foreground">{">"}</span>
                <div className="h-[1px] w-12 bg-border" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  8 Comprehensive Modules
                </span>
              </div>
              <h2 className="font-pixel-line text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                Course Catalog
              </h2>
              <p className="max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
                Explore our comprehensive Computer Science curriculum covering everything from
                programming fundamentals to advanced topics like AI and cybersecurity.
              </p>
            </div>
          </div>
        </section>

        {/* Course Sections */}
        {techSections.map((section, index) => (
          <DomainSection
            key={section.id}
            section={section}
            index={index}
          />
        ))}

        <PseudoTerminal />
      </main>

      <Footer />
    </div>
  )
}
