export function HomeSection() {
  return (
    <div className="h-full">
      <div className="text-xl mb-6">
        <span className="text-bios-highlight">&gt;</span> Welcome to my portfolio
      </div>

      <pre className="text-bios-text mb-6">astronautmarkus</pre>

      <p className="mb-4">
        <span className="text-bios-highlight">&gt;</span> I am a{" "}
        <span className="text-bios-warning">Full Stack Developer</span> with a passion for creating elegant solutions.
      </p>

      <p className="mb-4">
        <span className="text-bios-highlight">&gt;</span> Navigate through the menu to explore my skills, projects, and
        experience.
      </p>

      <p className="text-xs text-bios-inactive mt-8">
        * This portfolio is designed to mimic old computer BIOS interfaces.
      </p>
    </div>
  )
}

