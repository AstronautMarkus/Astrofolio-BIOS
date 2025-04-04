import { useStats } from "../hooks/UseStats";

export function StatsSection() {
  const { stats, codingActivity } = useStats();

  return (
    <div>
      <h2 className="text-xl mb-4 text-black">STATS.dat</h2>

      <h3 className="text-lg font-bold mb-2 text-black">LANG_USAGE.LOG [last 7 days] </h3>
      <div
        className="border border-bios-border p-4 mb-4 bg-bios-dark"
        style={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc" }}
      >
        {stats.length > 0 ? (
          <ul>
            {stats.map((stat) => (
              <li key={stat.name} className="mb-2">
                <span
                  className="inline-block w-4 h-4 mr-2"
                  style={{ backgroundColor: stat.color }}
                ></span>
                {stat.name}: {stat.percent.toFixed(2)}%
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading most languages used...</p>
        )}
      </div>

      <h3 className="text-lg font-bold mb-2 text-black">CODING_ACTIVITY.LOG [all time]</h3>
      <div
        className="border border-bios-border p-4 bg-bios-dark"
        style={{ border: "1px solid #ccc" }}
      >
        {codingActivity ? (
          <ul>
            <li>Total Time: {codingActivity.human_readable_total}</li>
            <li>Daily Average: {codingActivity.human_readable_daily_average}</li>
          </ul>
        ) : (
          <p>Loading coding activity...</p>
        )}
      </div>
    </div>
  );
}