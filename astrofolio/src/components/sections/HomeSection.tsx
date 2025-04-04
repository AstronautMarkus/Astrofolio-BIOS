interface HomeSectionProps {
  showCursor: boolean
}

export function HomeSection({ showCursor }: HomeSectionProps) {
  return (
    <div className="h-full">
      <div className="text-xl mb-6">
        <span className="text-blue-400">&gt;</span> Welcome to Astrofolio...
        {showCursor && <span className="text-green-500">▋</span>}
      </div>

      <p className="mb-4">
        <span className="text-blue-400">&gt;</span> User: <span className="text-yellow-400">Marcos Reyes</span>
      </p>
      <p className="mb-4">
        <span className="text-blue-400">&gt;</span> Alias: <span className="text-yellow-400">astronautmarkus</span>
      </p>
      <p className="mb-4">
        <span className="text-blue-400">&gt;</span> Role: <span className="text-yellow-400">Full Stack Developer</span>
      </p>

      <p className="mb-4">
        <span className="text-blue-400">&gt;</span> System Status: <span className="text-yellow-400">Operational</span>
      </p>

      <p className="mb-4">
        <span className="text-blue-400">&gt;</span> Use the navigation menu to access <span className="text-yellow-400">Skills</span>, <span className="text-yellow-400">Projects</span>, and <span className="text-yellow-400">Experience</span>.
      </p>
    </div>
  )
}

