interface ExperienceEntryProps {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

export function ExperienceEntry({ title, company, period, responsibilities }: ExperienceEntryProps) {
  return (
    <div className="border border-bios-border p-4 bg-bios-dark">
      <div className="flex justify-between mb-2">
        <h3 className="text-bios-warning">{title}</h3>
        <span className="text-bios-inactive">{period}</span>
      </div>
      <p className="text-bios-highlight mb-2">{company}</p>
      <ul className="list-disc list-inside space-y-1">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

