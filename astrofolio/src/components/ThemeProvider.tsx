import type { ReactNode } from "react"

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <div className="min-h-screen bg-bios-dark">{children}</div>
}

