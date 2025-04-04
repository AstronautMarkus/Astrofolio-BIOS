import { useState } from "react"
import { Terminal, Code, User, Briefcase, Mail } from "lucide-react"
import { NavItem } from "../components/NavItem"
import { Outlet, useLocation } from "react-router-dom"

export function Layout() {
  const [currentSection, setCurrentSection] = useState("home")
  const location = useLocation()

  return (
    <div className="min-h-screen bg-bios-dark text-bios-text font-mono p-4 flex flex-col">
      <header className="bg-bios-dark text-bios-text p-2 mb-4 border-b border-bios-border">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">http://astronautmarkus.dev{location.pathname}</h1>
          <p className="text-xs">{new Date().toLocaleString()}</p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-1 gap-4">
        <nav className="text-black bg-bios-panel p-2 md:w-48 space-y-1 border border-bios-border">
          <NavItem
            icon={<Terminal size={16} />}
            label="Home"
            active={location.pathname === "/"}
            to="/"
          />
          <NavItem
            icon={<User size={16} />}
            label="About"
            active={location.pathname === "/about"}
            to="/about"
          />
          <NavItem
            icon={<Code size={16} />}
            label="Projects"
            active={location.pathname === "/projects"}
            to="/projects"
          />
          <NavItem
            icon={<Briefcase size={16} />}
            label="Experience"
            active={location.pathname === "/experience"}
            to="/experience"
          />
          <NavItem
            icon={<Mail size={16} />}
            label="Contact"
            active={location.pathname === "/contact"}
            to="/contact"
          />
        </nav>

        <main className="flex-1 bg-bios-panel p-4 border border-bios-border overflow-auto">
          <Outlet />
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
