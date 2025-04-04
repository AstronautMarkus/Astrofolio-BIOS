import { ExperienceEntry } from "../ExperienceEntry"

export function ExperienceSection() {
  return (
    <div>
      <h2 className="text-xl mb-4 text-blue-400">EXPERIENCE.LOG</h2>

      <div className="space-y-6">
        <ExperienceEntry
          title="Senior Frontend Developer"
          company="Tech Innovations Inc."
          period="2021 - Present"
          responsibilities={[
            "Lead a team of 5 developers in building a next-generation SaaS platform",
            "Implemented CI/CD pipelines reducing deployment time by 40%",
            "Architected and developed reusable component library used across multiple projects",
          ]}
        />

        <ExperienceEntry
          title="Full Stack Developer"
          company="Digital Solutions LLC"
          period="2018 - 2021"
          responsibilities={[
            "Developed and maintained multiple client websites and applications",
            "Integrated third-party APIs and payment gateways",
            "Optimized database queries resulting in 30% faster page loads",
          ]}
        />

        <ExperienceEntry
          title="Junior Web Developer"
          company="WebCraft Studios"
          period="2016 - 2018"
          responsibilities={[
            "Created responsive websites for various clients",
            "Collaborated with designers to implement pixel-perfect UIs",
            "Maintained and updated existing client websites",
          ]}
        />
      </div>
    </div>
  )
}

