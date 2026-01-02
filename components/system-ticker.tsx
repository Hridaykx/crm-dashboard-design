"use client"

import { AlertTriangle, CheckCircle2, Info, Camera, HardDrive, Wifi } from "lucide-react"

const logs = [
  { type: "error", icon: Camera, message: "Cam-04 disconnected at Westfield Mall", time: "2 min ago" },
  { type: "info", icon: Info, message: "Ticket #4892 created - Camera offline", time: "2 min ago" },
  { type: "success", icon: CheckCircle2, message: "Mike R. arrived at TechPark Building 3", time: "5 min ago" },
  { type: "warning", icon: HardDrive, message: "DVR storage at 85% - Metro Station North", time: "8 min ago" },
  { type: "success", icon: Wifi, message: "Cam-12 back online at City Bank HQ", time: "12 min ago" },
  { type: "info", icon: Info, message: "Scheduled maintenance started - City Bank HQ", time: "15 min ago" },
  { type: "error", icon: AlertTriangle, message: "Motion sensor alert - TechPark Building 3", time: "18 min ago" },
  { type: "success", icon: CheckCircle2, message: "Ticket #4885 resolved by Emma L.", time: "25 min ago" },
]

const typeColors = {
  error: "text-[#ef4444]",
  warning: "text-[#f59e0b]",
  success: "text-[#10b981]",
  info: "text-[#94a3b8]",
}

const typeBg = {
  error: "bg-[#ef4444]/10",
  warning: "bg-[#f59e0b]/10",
  success: "bg-[#10b981]/10",
  info: "bg-[rgba(71,85,105,0.3)]",
}

export function SystemTicker() {
  // Double the logs for seamless scrolling
  const duplicatedLogs = [...logs, ...logs]

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-3 border-b border-[rgba(71,85,105,0.4)] flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#10b981] pulse-dot" />
        <h3 className="text-sm font-medium text-[#94a3b8]">System Logs</h3>
        <span className="text-xs font-mono text-[#64748b]">Real-time feed</span>
      </div>
      <div className="overflow-hidden">
        <div className="ticker-scroll flex items-center gap-6 py-3 px-4">
          {duplicatedLogs.map((log, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg shrink-0 ${typeBg[log.type as keyof typeof typeBg]}`}
            >
              <log.icon className={`w-4 h-4 ${typeColors[log.type as keyof typeof typeColors]}`} />
              <span className="text-sm text-[#e2e8f0] whitespace-nowrap">{log.message}</span>
              <span className="text-xs text-[#64748b] whitespace-nowrap">• {log.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
