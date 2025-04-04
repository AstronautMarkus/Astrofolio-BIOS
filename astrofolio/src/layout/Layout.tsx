import { Outlet, useLocation } from "react-router-dom"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

export function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-bios-dark text-bios-text font-mono p-4 flex flex-col">
      <Header location={location} />
      <div className="flex flex-col md:flex-row flex-1 gap-4">
        <Sidebar />
        <main className="flex-1 bg-bios-panel p-4 border border-bios-border overflow-auto">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}
