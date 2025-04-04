import { ExperienceEntry } from "../ExperienceEntry"

export function ExperienceSection() {
  return (
    <div>
      <h2 className="text-xl mb-4 text-black">EXPERIENCE.log</h2>

      <div className="space-y-6">
        <ExperienceEntry
          title="FrontEnd + BackEnd Developer, Professional Internship"
          company="LastDon Practice Center"
          period="DEC 2024 - FEB 2025"
          responsibilities={[
            "Development of a web application with connection to the MercadoLibre API.",
            "FrontEnd development with React and Bootstrap CSS.",
            "BackEnd development with Laravel and MySQL.",
            "Mentoring new interns with technologies such as Git, GitHub React, Bootstrap CSS, and Laravel.",
            "Collaboration with office tasks and stock organization.",
          ]}
        />
      </div>
    </div>
  )
}

