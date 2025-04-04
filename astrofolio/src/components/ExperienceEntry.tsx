interface ExperienceEntryProps {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

export function ExperienceEntry({ title, company, period, responsibilities }: ExperienceEntryProps) {
  return (
    <div className="border border-green-500 p-4 bg-gray-900">
      <div className="flex justify-between mb-2">
        <h3 className="text-yellow-400">{title}</h3>
        <span className="text-gray-500">{period}</span>
      </div>
      <p className="text-blue-400 mb-2">{company}</p>
      <ul className="list-disc list-inside space-y-1">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

