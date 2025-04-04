import { NavItem } from '../../components/NavItem'
import { Terminal, Code, User, Briefcase, Mail, ChartBar } from "lucide-react"
import { useLocation } from "react-router-dom"

interface SidebarProps {
  mobileOpen?: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen = false }) => {
  const location = useLocation()

  const baseClass = "bg-bios-panel text-black space-y-1 border border-bios-border"
  const overlayClass = "w-full h-full p-4 md:hidden absolute top-0 left-0 z-30"
  const desktopClass = "hidden md:block md:w-48 p-2"

  return (
    <nav className={`${baseClass} ${mobileOpen ? overlayClass : desktopClass}`}>
      <NavItem icon={<Terminal size={16} />} label="Home" active={location.pathname === "/"} to="/" />
      <NavItem icon={<User size={16} />} label="About" active={location.pathname === "/about"} to="/about" />
      <NavItem icon={<Code size={16} />} label="Projects" active={location.pathname === "/projects"} to="/projects" />
      <NavItem icon={<Briefcase size={16} />} label="Experience" active={location.pathname === "/experience"} to="/experience" />
      <NavItem icon={<Mail size={16} />} label="Contact" active={location.pathname === "/contact"} to="/contact" />
      <NavItem icon={<ChartBar size={16} />} label="Stats" active={location.pathname === "/stats"} to="/stats" />
    </nav>
  )
}

export default Sidebar
