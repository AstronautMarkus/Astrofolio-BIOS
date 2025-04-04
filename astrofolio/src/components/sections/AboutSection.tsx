import { SkillBar } from "../SkillBar"

export function AboutSection() {
  return (
    <div>
      <h2 className="text-xl mb-4 text-blue-400">ABOUT.ME</h2>

      <div className="border border-green-500 p-4 mb-4">
        <p className="mb-2">
          <span className="text-yellow-400">NAME:</span> astronautmarkus
        </p>
        <p className="mb-2">
          <span className="text-yellow-400">OCCUPATION:</span> Full Stack Developer
        </p>
        <p className="mb-2">
          <span className="text-yellow-400">LOCATION:</span> San Francisco, CA
        </p>
      </div>

      <h3 className="text-lg mb-2 text-blue-400">SKILLS.DAT</h3>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <SkillBar label="JavaScript" percentage={90} />
        <SkillBar label="React" percentage={85} />
        <SkillBar label="Node.js" percentage={80} />
        <SkillBar label="TypeScript" percentage={75} />
        <SkillBar label="Next.js" percentage={85} />
        <SkillBar label="Tailwind" percentage={90} />
      </div>

      <h3 className="text-lg mb-2 text-blue-400">BIO.TXT</h3>
      <div className="border border-green-500 p-4 bg-black">
        <p className="mb-2">
          I am a passionate developer with over 5 years of experience building web applications. My journey began with
          HTML and CSS, and I've since expanded my toolkit to include modern frameworks and technologies.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies, contributing to open source, or hiking in the
          great outdoors.
        </p>
      </div>
    </div>
  )
}

