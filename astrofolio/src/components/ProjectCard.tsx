interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  year: string
  githubLink: string
}

export function ProjectCard({ title, description, technologies, year, githubLink }: ProjectCardProps) {
  return (
    <div className="border border-bios-border p-4 bg-bios-dark hover:bg-bios-dark/80">
      <div className="flex justify-between mb-2">
        <h3 className="text-bios-warning">{title}</h3>
        <span className="text-bios-inactive">{year}</span>
      </div>
      <p className="mb-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-bios-dark text-bios-highlight px-2 py-1 text-xs border border-bios-border">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-bios-highlight border border-bios-border px-4 py-2 text-sm hover:bg-bios-dark/70"
      >
        View on GitHub
      </a>
    </div>
  )
}

