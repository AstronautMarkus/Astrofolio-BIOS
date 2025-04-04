"use client"

import { useState, useEffect } from "react"
import { Terminal, Code, User, Briefcase, Mail } from "lucide-react"
import { BootSequence } from "./BootSequence"
import { HomeSection } from "./sections/HomeSection"
import { AboutSection } from "./sections/AboutSection"
import { ProjectsSection } from "./sections/ProjectsSection"
import { ExperienceSection } from "./sections/ExperienceSection"
import { ContactSection } from "./sections/ContactSection"
import { NavItem } from "./NavItem"

export function BiosPortfolio() {
  const [bootPhase, setBootPhase] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {

    const bootSequence = setTimeout(
      () => {
        if (bootPhase < 5) {
          setBootPhase(bootPhase + 1)
        }
      },
      bootPhase === 0 ? 1000 : 500,
    )

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearTimeout(bootSequence)
      clearInterval(cursorInterval)
    }
  }, [bootPhase])

  if (bootPhase < 5) {
    return <BootSequence phase={bootPhase} />
  }

  return (
    <div className="min-h-screen bg-bios-dark text-bios-text font-mono p-4 flex flex-col">
      <header className="bg-bios-dark text-bios-text p-2 mb-4 border-b border-bios-border">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">http://astronautmarkus.dev</h1>
          <p className="text-xs">{new Date().toLocaleString()}</p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-1 gap-4">
        <nav className="bg-bios-panel p-2 md:w-48 space-y-1 border border-bios-border">
          <NavItem
            icon={<Terminal size={16} />}
            label="Home"
            active={currentSection === "home"}
            onClick={() => setCurrentSection("home")}
          />
          <NavItem
            icon={<User size={16} />}
            label="About"
            active={currentSection === "about"}
            onClick={() => setCurrentSection("about")}
          />
          <NavItem
            icon={<Code size={16} />}
            label="Projects"
            active={currentSection === "projects"}
            onClick={() => setCurrentSection("projects")}
          />
          <NavItem
            icon={<Briefcase size={16} />}
            label="Experience"
            active={currentSection === "experience"}
            onClick={() => setCurrentSection("experience")}
          />
          <NavItem
            icon={<Mail size={16} />}
            label="Contact"
            active={currentSection === "contact"}
            onClick={() => setCurrentSection("contact")}
          />
        </nav>

        <main className="flex-1 bg-bios-panel p-4 border border-bios-border overflow-auto">
          {currentSection === "home" && <HomeSection showCursor={showCursor} />}
          {currentSection === "about" && <AboutSection />}
          {currentSection === "projects" && <ProjectsSection />}
          {currentSection === "experience" && <ExperienceSection />}
          {currentSection === "contact" && <ContactSection />}
        </main>
      </div>

      <footer className="bg-bios-panel p-2 mt-4 text-black text-xs border border-bios-border">
        <div className="flex justify-between">
          <span>F1: Help | F10: Save | ESC: Exit</span>
          <span>© {new Date().getFullYear()} | AstronautMarkus_Astrofolio V3.0</span>
        </div>
      </footer>
    </div>
  )
}

