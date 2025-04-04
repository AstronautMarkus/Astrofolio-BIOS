import { useEffect, useState } from "react";

export interface LanguageStat {
  name: string;
  percent: number;
  color: string;
}

export function useStats() {
  const [stats, setStats] = useState<LanguageStat[]>([]);

  useEffect(() => {
    async function fetchStats() {
      const response = await fetch("https://wakatime.com/share/@AstronautMarkus/9f65ae2a-59ac-4588-900e-221e5480a2e2.json");
      const data = await response.json();
      setStats(data.data);
    }

    fetchStats();
  }, []);

  return stats;
}
