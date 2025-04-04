import React, { useState, useEffect } from "react";

export default function Header({ location }: { location: { pathname: string } }) {
  const displayPath = location.pathname === "/" ? "" : location.pathname;
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-bios-dark text-bios-text p-2 mb-4 border-b border-bios-border">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xs sm:text-xl">
          https://astronautmarkus.dev{displayPath}
        </h1>
        <p className="text-xs">{currentTime}</p>
      </div>
    </header>
  );
}
