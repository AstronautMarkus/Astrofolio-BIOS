"use client"

import type { ReactNode } from "react"

interface NavItemProps {
  icon: ReactNode
  label: string
  active: boolean
  onClick: () => void
}

export function NavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      className={`flex items-center gap-2 w-full text-left p-1 hover:bg-bios-dark hover:text-bios-highlight ${
        active ? "bg-bios-dark text-bios-highlight" : ""
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

