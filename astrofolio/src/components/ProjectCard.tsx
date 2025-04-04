interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  year: string
}

export function ProjectCard({ title, description, technologies, year }: ProjectCardProps) {
  return (
    <div className="border border-green-500 p-4 bg-gray-900 hover:bg-gray-800">
      <div className="flex justify-between mb-2">
        <h3 className="text-yellow-400">{title}</h3>
        <span className="text-gray-500">{year}</span>
      </div>
      <p className="mb-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-800 text-green-400 px-2 py-1 text-xs border border-green-500">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

