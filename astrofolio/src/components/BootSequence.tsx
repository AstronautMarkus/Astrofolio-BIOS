export function BootSequence({ phase }: { phase: number }) {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8 flex flex-col justify-start">
      {phase >= 0 && (
        <div className="mb-4">
          <h1 className="text-2xl mb-2">PORTFOLIO BIOS v1.0</h1>
          <p>Copyright (C) 2023-{new Date().getFullYear()}</p>
          <p>All Rights Reserved</p>
        </div>
      )}

      {phase >= 1 && (
        <div className="mb-4">
          <p>Performing system check...</p>
          <p>CPU: Intel i7 @ 3.40GHz</p>
          <p>Memory Test: 16384K OK</p>
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

