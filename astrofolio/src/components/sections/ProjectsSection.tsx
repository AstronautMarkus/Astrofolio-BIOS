import { ProjectCard } from "../ProjectCard"

export function ProjectsSection() {
  return (
    <div>
      <h2 className="text-xl mb-4 text-black">PROJECTS/DIGITAL.EXPERIMENTS</h2>
      <div className="space-y-4">
        <ProjectCard
          title="AbbyBot Project"
          description="Multifunctional tool for Discord with server management and entertainment system."
          technologies={["Discord.py", "Python", "MySQL"]}
          year="2023"
          githubLink="https://github.com/AbbyBot/Discord-AbbyBot"
        />
        <ProjectCard
          title="TurnoMaster"
          description="A work shift input/output manager for businesses built with Laravel + React."
          technologies={["Laravel", "React", "MySQL"]}
          year="2024"
          githubLink="https://github.com/AstronautMarkus/TurnoMaster"
        />
        <ProjectCard
          title="VicePenguins Front"
          description="A Minecraft forum for mods and plugins built with Vue + Bulma."
          technologies={["Vue", "Bulma"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/VicePenguins-front"
        />
        <ProjectCard
          title="VicePenguins Back"
          description="Backend service for the VicePenguins project, built with Flask."
          technologies={["Python", "Flask"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/VicePenguins-back"
        />
        <ProjectCard
          title="LockOurLove"
          description="A web app to lock your love with a key, built with React + Laravel."
          technologies={["React", "Laravel", "MySQL"]}
          year="2024"
          githubLink="https://github.com/AstronautMarkus/LockOurLove"
        />
        <ProjectCard
          title="FumoIndex"
          description="A website to collect information about Touhou Project fumos."
          technologies={["React", "TailwindCSS", "Laravel"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/LockOurLove"
        />
      </div>

      <h2 className="text-xl mt-10 mb-4 text-black">PROJECTS/INTERNSHIP</h2>
      <div className="space-y-4">
        <ProjectCard
          title="Multi Stock Sync"
          description="Front-end system for managing MercadoLibre businesses with warehouse and product settings."
          technologies={["React", "Chart.js", "Bootstrap", "Vite"]}
          year="2024"
          githubLink="https://github.com/AstronautMarkus/Multi-Stock-Sync"
        />
        <ProjectCard
          title="Multi Stock Sync Back"
          description="Backend system for Multi Stock Sync project, built with Laravel 11."
          technologies={["Laravel", "MySQL"]}
          year="2024"
          githubLink="https://github.com/AstronautMarkus/Multi-Stock-Sync-Back"
        />
        <ProjectCard
          title="Multi Stock API Viewer"
          description="Swagger-based API documentation for Multi Stock Sync."
          technologies={["Swagger", "Laravel"]}
          year="2024"
          githubLink="https://github.com/AstronautMarkus/Multi-Stock-API-Viewer"
        />
      </div>

      <h2 className="text-xl mt-10 mb-4 text-black">PROJECTS/UNIVERSITY</h2>
      <div className="space-y-4">
        <ProjectCard
          title="MOFUStore"
          description="E-commerce platform for buying Touhou Project fumos. Second year project at university."
          technologies={["Python", "Django", "Bootstrap", "MySQL"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/MOFUStore"
        />
        <ProjectCard
          title="CamellosFood - Repartidor"
          description="A food delivery app for Android built with Ionic + Django."
          technologies={["Ionic", "Angular", "Django"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/Camello-s-Food_repartidor"
        />
        <ProjectCard
          title="CONSTRU_MIC"
          description="An E-commerce platform for construction materials using Django + Bootstrap."
          technologies={["Django", "Bootstrap", "MySQL"]}
          year="2023"
          githubLink="https://github.com/MarcosKingsDuoc/CONSTRU_MIC"
        />
        <ProjectCard
          title="Puppies CRUD"
          description="Simple CRUD for managing puppies using Ionic and Json-Server."
          technologies={["Ionic", "Json-Server"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/Puppies_CRUD"
        />
        <ProjectCard
          title="MofuLunches Web"
          description="Flask front-end for MofuLunches admin and cooks dashboard."
          technologies={["Flask", "Bootstrap"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/MofuLunches-Web"
        />
        <ProjectCard
          title="MofuLunches API"
          description="SOA backend for MofuLunches platform supporting mobile, web and totem interfaces."
          technologies={["Python", "Flask", "MongoDB"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/MofuLunches-API"
        />
        <ProjectCard
          title="MofuLunches Totem"
          description="Electron + Arduino app for managing orders and payments."
          technologies={["Electron", "Arduino", "React"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/MofuLunches-Totem"
        />
        <ProjectCard
          title="MofuLunches ElDimon"
          description="Arduino script handling API communication for MofuLunches."
          technologies={["Arduino", "C++"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/MofuLunches-ElDimon"
        />
        <ProjectCard
          title="MofuLunches Listener"
          description="Python GUI to scan and read ElDimon API events using PyQt5."
          technologies={["Python", "PyQt5"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/MofuLunches-ElDimon_Listener"
        />
        <ProjectCard
          title="MofuLunches App"
          description="Mobile app for cooks to manage orders in MofuLunches, built with Ionic."
          technologies={["Ionic"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/MofuLunches-APP"
        />
        <ProjectCard
          title="FireStore"
          description="Ionic + Firebase app for managing plants and watering schedules."
          technologies={["Ionic", "Firebase"]}
          year="2023"
          githubLink="https://github.com/AstronautMarkus/Firestore"
        />
      </div>

      <h2 className="text-xl mt-10 mb-4 text-black">PROJECTS/COLLABORATIVE</h2>
      <div className="space-y-4">
        <ProjectCard
          title="Micelab"
          description="Open-source platform for managing and testing software projects."
          technologies={["Vue", "Firebase", "Node"]}
          year="2023"
          githubLink="https://github.com/anzar2/micelab"
        />
      </div>

      <h2 className="text-xl mt-10 mb-4 text-black">ALLIES.conf</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {["Anzar2", "AloRzs", "Juan-Pedro-Kessler", "Ki4ra1109", "Sergio-Neira"].map((friend, index) => (
          <a
            key={index}
            href={`https://github.com/${friend}`}
            target="_blank"
            className="px-4 py-3 bg-bios-dark hover:bg-bios-dark/80 border border-[#8a54a2]/30 text-center">
            <div className="text-[#acf5ff]">{friend}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
