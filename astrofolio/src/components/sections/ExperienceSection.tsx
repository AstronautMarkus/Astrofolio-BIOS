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

      <div className="mt-8">
        <h2 className="text-xl mb-4 text-black">TECH.STACK.csv</h2>
        <table className="table-auto border-collapse border border-gray-400 w-full text-left bg-bios-dark">
          <thead>
            <tr className="text-bios-warning">
              <th className="border border-gray-400 px-4 py-2">Category</th>
              <th className="border border-gray-400 px-4 py-2">Technologies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Languages</td>
              <td className="border border-gray-400 px-4 py-2">Python, TypeScript, PHP</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Frameworks</td>
              <td className="border border-gray-400 px-4 py-2">Django, React, Laravel, Bootstrap, TailwindCSS, Vue, Vite, Electron, Bulma, Ionic</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Tools</td>
              <td className="border border-gray-400 px-4 py-2">Git, GitHub, Visual Studio Code, Postman, Arduino IDE</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Databases</td>
              <td className="border border-gray-400 px-4 py-2">MySQL, SQLite, Oracle, Cassandra, MongoDB</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Infrastructure & DevOps</td>
              <td className="border border-gray-400 px-4 py-2">Linux, Apache, Nginx, Docker, SystemD, UFW, GNU Bash, Node.js, Firebase</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Favorite Distros</td>
              <td className="border border-gray-400 px-4 py-2">Arch, Fedora, EndeavourOS, Manjaro, Debian, Oracle Linux, Ubuntu Server</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

