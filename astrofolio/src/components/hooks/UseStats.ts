import { useEffect, useState } from "react";

export interface LanguageStat {
  name: string;
  percent: number;
  color: string;
}

export interface CodingActivity {
  human_readable_total: string;
  human_readable_daily_average: string;
}

export function useStats() {
  const [stats, setStats] = useState<LanguageStat[]>([]);
  const [codingActivity, setCodingActivity] = useState<CodingActivity | null>(null);

  useEffect(() => {
    async function fetchStats() {
      const langResponse = await fetch("https://wakatime.com/share/@AstronautMarkus/9f65ae2a-59ac-4588-900e-221e5480a2e2.json");
      const langData = await langResponse.json();
      setStats(langData.data);

      const activityResponse = await fetch("https://wakatime.com/share/@AstronautMarkus/1c89a3f5-2551-4118-9919-7b6f1faeb125.json");
      const activityData = await activityResponse.json();
      const grandTotal = activityData.data.grand_total;
      setCodingActivity({
        human_readable_total: grandTotal.human_readable_total,
        human_readable_daily_average: grandTotal.human_readable_daily_average,
      });
    }

    fetchStats();
  }, []);

  return { stats, codingActivity };
}
