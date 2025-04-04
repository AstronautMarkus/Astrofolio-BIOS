interface SkillBarProps {
  label: string
  percentage: number
}

export function SkillBar({ label, percentage }: SkillBarProps) {
  return (
    <div className="mb-1">
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 h-2 border border-green-900">
        <div className="bg-green-500 h-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

