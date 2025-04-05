import type { ReactNode, ForwardedRef } from "react"
import { Link } from "react-router-dom"
import { forwardRef } from "react"

interface NavItemProps {
  icon: ReactNode
  label: string
  active: boolean
  to: string
}

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ icon, label, active, to }: NavItemProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <Link
        to={to}
        ref={ref}
        className={`flex items-center gap-2 w-full text-left p-1 hover:bg-bios-dark hover:text-bios-warning ${
          active ? "bg-bios-dark text-bios-warning" : ""
        }`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    )
  }
)

NavItem.displayName = "NavItem"

