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
      className={`flex items-center gap-2 w-full text-left p-1 hover:bg-gray-800 ${
        active ? "bg-blue-900 text-white" : ""
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

