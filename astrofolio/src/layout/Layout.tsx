import { Outlet, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

export function Layout() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <div className="relative h-screen flex flex-col bg-bios-dark text-bios-text font-mono p-2 md:p-4">

      <Header location={location} />

      {isMobile && (
        <div className="md:hidden flex justify-between items-center mb-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-bios-panel text-black px-2 py-1 border border-bios-border z-20"
          >
            {menuOpen ? "X" : ">_"}
          </button>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden relative">
        {isMobile ? (
          menuOpen && (
            <div className="absolute z-20 top-0 left-0 w-full h-full">
              <Sidebar mobileOpen />
            </div>
          )
        ) : (
          <Sidebar />
        )}

        <main className="flex-1 bg-bios-panel p-4 border border-bios-border overflow-auto z-10">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}
