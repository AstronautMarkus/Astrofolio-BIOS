export function ContactSection() {
  return (
    <div>
      <h2 className="text-xl mb-4 text-black">CONTACT.sys</h2>

      <div className="border border-bios-border p-4 mb-6 bg-bios-dark">
        <p className="mb-2">
          <span className="text-bios-warning">EMAIL:</span> 
          <a href="mailto:astronautmarkus@gmail.com" target="_blank">astronautmarkus@gmail.com</a>
        </p>
        <p className="mb-2">
          <span className="text-bios-warning">GITHUB:</span> 
          <a href="https://github.com/astronautmarkus" target="_blank">github.com/astronautmarkus</a>
        </p>
        <p className="mb-2">
          <span className="text-bios-warning">LINKEDIN:</span> 
          <a href="https://linkedin.com/in/markusreyes" target="_blank">linkedin.com/in/markusreyes</a>
        </p>
        <p>
          <span className="text-bios-warning">LOCATION:</span> 
          <a href="https://www.google.com/maps/place/Santiago,+Chile" target="_blank">Santiago, Chile</a>
        </p>
      </div>

      <h2 className="text-xl mb-4 text-black">MESSAGE.log</h2>
      <div className="border border-bios-border p-4 mb-6 bg-bios-dark">
        <p>Hi, These are my main ways of contact. If you're interested in collaborating with me on a project or something, I invite you to send me a message through whichever you prefer. See you later.</p>
      </div>

    </div>
  )
}

