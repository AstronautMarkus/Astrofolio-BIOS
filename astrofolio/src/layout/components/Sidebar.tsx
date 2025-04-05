import { NavItem } from '../../components/NavItem'
import { Terminal, Code, User, Briefcase, Mail, ChartBar } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

interface SidebarProps {
  mobileOpen?: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen = false }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const navItemsRef = useRef<HTMLAnchorElement[]>([])

  const navItems = [
    { icon: <Terminal size={16} />, label: "Home", to: "/" },
    { icon: <User size={16} />, label: "About", to: "/about" },
    { icon: <Code size={16} />, label: "Projects", to: "/projects" },
    { icon: <Briefcase size={16} />, label: "Experience", to: "/experience" },
    { icon: <Mail size={16} />, label: "Contact", to: "/contact" },
    { icon: <ChartBar size={16} />, label: "Stats", to: "/stats" },
  ]

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        setFocusedIndex((prev) => (prev === null ? 0 : (prev + 1) % navItems.length))
      } else if (event.key === "ArrowUp") {
        setFocusedIndex((prev) => (prev === null ? navItems.length - 1 : (prev - 1 + navItems.length) % navItems.length))
      } else if (event.key === "Enter" && focusedIndex !== null) {
        const selectedItem = navItems[focusedIndex]
        navigate(selectedItem.to)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [focusedIndex, navItems, navigate])

  useEffect(() => {
    if (focusedIndex !== null && navItemsRef.current[focusedIndex]) {
      navItemsRef.current[focusedIndex].focus()
    }
  }, [focusedIndex])

  const baseClass = "bg-bios-panel text-black space-y-1 border border-bios-border"
  const overlayClass = "w-full h-full p-4 md:hidden absolute top-0 left-0 z-30"
  const desktopClass = "hidden md:block md:w-48 p-2"

  return (
    <nav className={`${baseClass} ${mobileOpen ? overlayClass : desktopClass}`}>
      {navItems.map((item, index) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          active={location.pathname === item.to}
          to={item.to}
          ref={(el) => (navItemsRef.current[index] = el!)}
        />
      ))}
    </nav>
  )
}

export default Sidebar
