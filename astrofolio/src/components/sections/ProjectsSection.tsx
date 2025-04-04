import { ProjectCard } from "../ProjectCard"

export function ProjectsSection() {
  return (
    <div>
      <h2 className="text-xl mb-4 text-blue-400">PROJECTS.DIR</h2>

      <div className="space-y-4">
        <ProjectCard
          title="E-Commerce Platform"
          description="A full-stack e-commerce solution with React, Node.js, and MongoDB."
          technologies={["React", "Node.js", "Express", "MongoDB"]}
          year="2023"
        />

        <ProjectCard
          title="Task Management App"
          description="A Kanban-style task management application with drag-and-drop functionality."
          technologies={["Next.js", "TypeScript", "Tailwind CSS", "Prisma"]}
          year="2022"
        />

        <ProjectCard
          title="Weather Dashboard"
          description="Real-time weather application with location-based forecasts and historical data."
          technologies={["React", "Redux", "Weather API", "Chart.js"]}
          year="2022"
        />

        <ProjectCard
          title="Portfolio Website"
          description="This BIOS-inspired portfolio website showcasing my projects and skills."
          technologies={["Vite", "React", "Tailwind CSS", "TypeScript"]}
          year="2023"
        />
      </div>
    </div>
  )
}

