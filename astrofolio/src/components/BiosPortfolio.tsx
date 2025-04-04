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
      bootPhase === 0 ? 2000 : 2000,
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
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 flex flex-col">
      <header className="bg-blue-900 text-white p-2 mb-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">./astrofolio V3.0</h1>
          <p className="text-xs">{new Date().toLocaleString()}</p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-1 gap-4">
        <nav className="bg-gray-900 p-2 md:w-48 space-y-1">
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

        <main className="flex-1 bg-gray-900 p-4 border border-green-500 overflow-auto">
          {currentSection === "home" && <HomeSection showCursor={showCursor} />}
          {currentSection === "about" && <AboutSection />}
          {currentSection === "projects" && <ProjectsSection />}
          {currentSection === "experience" && <ExperienceSection />}
          {currentSection === "contact" && <ContactSection />}
        </main>
      </div>

      <footer className="bg-gray-900 p-2 mt-4 text-xs">
        <div className="flex justify-between">
          <span>Press F1 for Help | F10 to Save | ESC to Exit</span>
          <span>© {new Date().getFullYear()} | Portfolio BIOS v1.0</span>
        </div>
      </footer>
    </div>
  )
}

