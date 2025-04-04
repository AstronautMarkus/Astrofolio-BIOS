import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"

import Sidebar from "./components/Sidebar"

export function Layout() {
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
        <Sidebar />

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
