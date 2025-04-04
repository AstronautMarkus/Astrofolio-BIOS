interface HomeSectionProps {
  showCursor: boolean
}

export function HomeSection({ showCursor }: HomeSectionProps) {
  return (
    <div className="h-full">
      <div className="text-xl mb-6">
        <span className="text-blue-400">&gt;</span> Welcome to my portfolio
        {showCursor && <span className="text-green-500">▋</span>}
      </div>

      <pre className="text-amber-400 mb-6">astronautmarkus</pre>

      <p className="mb-4">
        <span className="text-blue-400">&gt;</span> I am a <span className="text-yellow-400">Full Stack Developer</span>{" "}
        with a passion for creating elegant solutions.
      </p>

      <p className="mb-4">
        <span className="text-blue-400">&gt;</span> Navigate through the menu to explore my skills, projects, and
        experience.
      </p>

      <p className="text-xs text-gray-500 mt-8">
        * This portfolio is designed to mimic old computer BIOS and terminal interfaces.
      </p>
    </div>
  )
}

