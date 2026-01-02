"use client"

import { useState } from "react"
import { Maximize2, ZoomIn, ZoomOut, Layers } from "lucide-react"

const engineers = [
  { id: 1, name: "Mike R.", status: "active", x: 25, y: 35, ticket: "#4891" },
  { id: 2, name: "Sarah K.", status: "active", x: 65, y: 55, ticket: "#4890" },
  { id: 3, name: "John D.", status: "active", x: 45, y: 25, ticket: "#4889" },
  { id: 4, name: "Emma L.", status: "idle", x: 80, y: 70 },
  { id: 5, name: "Chris P.", status: "active", x: 15, y: 65, ticket: "#4887" },
  { id: 6, name: "Anna S.", status: "offline", x: 55, y: 80 },
]

const statusColors = {
  active: "#10b981",
  idle: "#f59e0b",
  offline: "#ef4444",
}

export function LiveMap() {
  const [hoveredEngineer, setHoveredEngineer] = useState<number | null>(null)

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-4 border-b border-[rgba(71,85,105,0.4)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-[#e2e8f0]">Live Map</h2>
          <span className="bg-[#10b981]/20 text-[#10b981] text-xs font-mono px-2 py-1 rounded flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] pulse-dot" />
            TRACKING
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg bg-[rgba(71,85,105,0.3)] text-[#94a3b8] hover:text-[#10b981] hover:bg-[rgba(71,85,105,0.5)] transition-all">
            <ZoomOut className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg bg-[rgba(71,85,105,0.3)] text-[#94a3b8] hover:text-[#10b981] hover:bg-[rgba(71,85,105,0.5)] transition-all">
            <ZoomIn className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg bg-[rgba(71,85,105,0.3)] text-[#94a3b8] hover:text-[#10b981] hover:bg-[rgba(71,85,105,0.5)] transition-all">
            <Layers className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg bg-[rgba(71,85,105,0.3)] text-[#94a3b8] hover:text-[#10b981] hover:bg-[rgba(71,85,105,0.5)] transition-all">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Map Area */}
      <div className="relative h-[340px] bg-[#0f172a] overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(71, 85, 105, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(71, 85, 105, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />

        {/* City blocks (simplified) */}
        <div className="absolute inset-4">
          <div className="absolute w-20 h-16 bg-[rgba(71,85,105,0.2)] rounded left-[10%] top-[20%]" />
          <div className="absolute w-24 h-20 bg-[rgba(71,85,105,0.2)] rounded left-[35%] top-[10%]" />
          <div className="absolute w-28 h-14 bg-[rgba(71,85,105,0.2)] rounded left-[60%] top-[25%]" />
          <div className="absolute w-20 h-24 bg-[rgba(71,85,105,0.2)] rounded left-[20%] top-[50%]" />
          <div className="absolute w-32 h-16 bg-[rgba(71,85,105,0.2)] rounded left-[45%] top-[55%]" />
          <div className="absolute w-16 h-20 bg-[rgba(71,85,105,0.2)] rounded left-[75%] top-[60%]" />
        </div>

        {/* Engineer dots */}
        {engineers.map((engineer) => (
          <div
            key={engineer.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${engineer.x}%`, top: `${engineer.y}%` }}
            onMouseEnter={() => setHoveredEngineer(engineer.id)}
            onMouseLeave={() => setHoveredEngineer(null)}
          >
            {/* Glow effect */}
            <div
              className="absolute w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
              style={{
                background: `radial-gradient(circle, ${statusColors[engineer.status as keyof typeof statusColors]}40 0%, transparent 70%)`,
              }}
            />
            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full ${engineer.status === "active" ? "pulse-dot" : ""}`}
              style={{ backgroundColor: statusColors[engineer.status as keyof typeof statusColors] }}
            />

            {/* Tooltip */}
            {hoveredEngineer === engineer.id && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[rgba(30,41,59,0.95)] backdrop-blur-sm border border-[rgba(71,85,105,0.4)] rounded-lg whitespace-nowrap z-20">
                <p className="text-sm font-medium text-[#e2e8f0]">{engineer.name}</p>
                <p
                  className="text-xs capitalize"
                  style={{ color: statusColors[engineer.status as keyof typeof statusColors] }}
                >
                  {engineer.status}
                </p>
                {engineer.ticket && <p className="text-xs text-[#94a3b8] mt-1">Working on {engineer.ticket}</p>}
              </div>
            )}
          </div>
        ))}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 glass-card rounded-lg px-3 py-2 flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span className="text-xs text-[#94a3b8]">Active</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
            <span className="text-xs text-[#94a3b8]">Idle</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="text-xs text-[#94a3b8]">Offline</span>
          </div>
        </div>
      </div>
    </div>
  )
}
