export function AboutSection() {
  return (
    <div>
      <h2 className="text-xl mb-4 text-black">ABOUT.ME</h2>

      <div className="border border-bios-border p-4 mb-4 bg-bios-dark">
        <p className="mb-2">
          <span className="text-bios-warning">NAME:</span> astronautmarkus
        </p>
        <p className="mb-2">
          <span className="text-bios-warning">OCCUPATION:</span> Full Stack Developer
        </p>
        <p className="mb-2">
          <span className="text-bios-warning">LOCATION:</span> Santiago, Chile
        </p>
      </div>
      
      <h3 className="text-lg mb-2 text-black">BIO.TXT</h3>
      <div className="flex flex-col md:flex-row border border-bios-border p-4 bg-bios-dark">
        <div className="md:order-2 md:ml-4 flex-shrink-0">
          <img src="/img/profile.jpg" alt="" className="w-32 h-32 border border-bios-border object-cover filter grayscale pixelate"/>
        </div>
        <div className="md:order-1 flex-grow">
            <p className="mb-2 text-gray-300">
            I'm a passionate Full Stack Developer who loves creating things, especially web applications. I enjoy learning new technologies and improving my skills. I'm always looking for new challenges and opportunities to grow as a developer.
            <br />
            <br />
            It all started when I was 18 and unsure of what to study. I impulsively chose the "Programming Analyst" career at <a href="https://www.duoc.cl" className="text-bios-warning" target="_blank">Duoc UC</a>. Initially, I struggled and felt lost, often relying on others. However, after my second year, I decided to work independently, leading teams and managing projects on my own.
            <br />
            <br />
            Over time, I started programming for the love of it and, of course, to earn some extra money, always aiming to improve. My ultimate goal is to direct the development of a video game, inspired by figures like Hideo Kojima, but with my own passion and vision.
            <br />
            <br />
            Regarding my skills, I have strong proficiency in Python and TypeScript, and I enjoy working with React and Laravel. I also have experience with databases like MySQL and MongoDB. I'm constantly learning and striving to enhance my abilities.
            <br />
            <br />
            Feel free to explore my projects and experience in the left section. See you soon!
            <br />
            <br />
            <span className="text-bios-warning">P.S:</span> Don't forget to check out my CV, which you can download in the experience section.
            </p>
        </div>
      </div>
    </div>
  )
}

