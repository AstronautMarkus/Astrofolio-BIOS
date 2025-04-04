import React from "react"

export default function Header({ location }: { location: { pathname: string } }) {
  return (
    <header className="bg-bios-dark text-bios-text p-2 mb-4 border-b border-bios-border">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">http://astronautmarkus.dev{location.pathname}</h1>
        <p className="text-xs">{new Date().toLocaleString()}</p>
      </div>
    </header>
  )
}
