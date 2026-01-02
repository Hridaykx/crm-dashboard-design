"use client"

import { Ticket, Users, Clock, AlertTriangle } from "lucide-react"

const stats = [
  {
    label: "Active Tickets",
    value: "47",
    icon: Ticket,
    change: "+3",
    changeType: "neutral" as const,
  },
  {
    label: "Field Engineers Online",
    value: "12",
    icon: Users,
    change: "of 15",
    changeType: "positive" as const,
  },
  {
    label: "Avg Response Time",
    value: "23",
    suffix: "min",
    icon: Clock,
    change: "-5 min",
    changeType: "positive" as const,
  },
  {
    label: "Critical Alerts",
    value: "3",
    icon: AlertTriangle,
    change: "+1",
    changeType: "negative" as const,
  },
]

export function LiveOperations() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="glass-card rounded-xl p-6 group cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                stat.changeType === "negative" ? "bg-[#ef4444]/20" : "bg-[#10b981]/20"
              }`}
            >
              <stat.icon
                className={`w-6 h-6 ${stat.changeType === "negative" ? "text-[#ef4444]" : "text-[#10b981]"}`}
              />
            </div>
            <span
              className={`text-xs font-mono px-2 py-1 rounded ${
                stat.changeType === "negative"
                  ? "bg-[#ef4444]/20 text-[#ef4444]"
                  : stat.changeType === "positive"
                    ? "bg-[#10b981]/20 text-[#10b981]"
                    : "bg-[rgba(71,85,105,0.3)] text-[#94a3b8]"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span
                className={`text-4xl font-bold font-mono ${
                  stat.changeType === "negative" ? "text-[#ef4444]" : "text-[#e2e8f0]"
                }`}
              >
                {stat.value}
              </span>
              {stat.suffix && <span className="text-lg text-[#94a3b8] font-mono">{stat.suffix}</span>}
            </div>
            <p className="text-sm text-[#94a3b8]">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
