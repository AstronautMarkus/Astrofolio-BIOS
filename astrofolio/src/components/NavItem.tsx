"use client"

import type { ReactNode } from "react"
import { Link } from "react-router-dom"

interface NavItemProps {
  icon: ReactNode
  label: string
  active: boolean
  to: string
}

export function NavItem({ icon, label, active, to }: NavItemProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 w-full text-left p-1 hover:bg-bios-dark hover:text-bios-warning ${
        active ? "bg-bios-dark text-bios-warning" : ""
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

