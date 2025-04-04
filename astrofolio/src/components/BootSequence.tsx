export function BootSequence({ phase }: { phase: number }) {
  return (
    <div className="min-h-screen bg-black text-white font-mono p-8 flex flex-col justify-start">
      {phase >= 0 && (
        <div className="mb-4">
          <h1 className="text-2xl mb-2">ASTRONAUTMARKUS_PORTFOLIO V3.0</h1>
          <p>Copyright (C) {new Date().getFullYear()}</p>
          <p>All Rights Reserved</p>
        </div>
      )}

      {phase >= 1 && (
        <div className="mb-4">
          <p>Performing system check...</p>
          <p>CPU: AMD Ryzen 3 2200G (4) @ 3.50 GHz</p>
          <p>GPU: AMD Radeon Vega 8 Graphics [Integrated]</p>
          <p>Memory: 7.82 GiB / 21.00 GiB (37%)</p>
          <p>Swap: 0 B / 10.79 GiB (0%)</p>
          <p>Disk (/): 19.23 GiB / 66.74 GiB (29%)</p>
          <p>Disk (/home): 3.36 GiB / 32.55 GiB (10%)</p>
          <p>Disk (/mnt/hdd-reyes_01): 1022.75 MiB / 1.79 TiB (0%)</p>
          <p>Local IP: 192.168.1.169/24</p>
        </div>
      )}

      {phase >= 2 && (
        <div className="mb-4">
          <p>Initializing portfolio components...</p>
          <p>Projects module: Loaded</p>
          <p>Experience module: Loaded</p>
          <p>Skills module: Loaded</p>
        </div>
      )}

      {phase >= 3 && (
        <div className="mb-4">
          <p>Loading design system...</p>
          <p>Tailwind CSS: Initialized</p>
          <p>Typography: Monospace</p>
          <p>Color Scheme: Retro Terminal</p>
        </div>
      )}

      {phase >= 4 && (
        <div className="mb-4">
          <p>System boot complete.</p>
          <p>Entering portfolio interface...</p>
          <div className="mt-2 animate-pulse">Press any key to continue</div>
        </div>
      )}
    </div>
  )
}

