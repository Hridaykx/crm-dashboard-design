"use client"

import { Clock, MapPin, AlertTriangle, CheckCircle2, Timer } from "lucide-react"

const tickets = [
  {
    id: "#4892",
    title: "Camera offline - Main Entrance",
    location: "Westfield Mall, Gate A",
    priority: "critical",
    status: "unassigned",
    time: "2 min ago",
  },
  {
    id: "#4891",
    title: "Motion sensor malfunction",
    location: "TechPark Building 3",
    priority: "high",
    status: "in-progress",
    assignee: "Mike R.",
    time: "15 min ago",
  },
  {
    id: "#4890",
    title: "Scheduled maintenance check",
    location: "City Bank HQ",
    priority: "normal",
    status: "scheduled",
    assignee: "Sarah K.",
    time: "1 hr ago",
  },
  {
    id: "#4889",
    title: "DVR storage full alert",
    location: "Metro Station North",
    priority: "high",
    status: "in-progress",
    assignee: "John D.",
    time: "2 hr ago",
  },
  {
    id: "#4888",
    title: "New installation request",
    location: "Sunrise Apartments",
    priority: "normal",
    status: "pending",
    time: "3 hr ago",
  },
]

const priorityColors = {
  critical: "bg-[#ef4444] text-white",
  high: "bg-[#f59e0b] text-[#0f172a]",
  normal: "bg-[#10b981] text-[#0f172a]",
}

const statusIcons = {
  unassigned: AlertTriangle,
  "in-progress": Timer,
  scheduled: Clock,
  pending: Clock,
  completed: CheckCircle2,
}

const statusColors = {
  unassigned: "text-[#ef4444]",
  "in-progress": "text-[#f59e0b]",
  scheduled: "text-[#10b981]",
  pending: "text-[#94a3b8]",
  completed: "text-[#10b981]",
}

export function TicketsList() {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-4 border-b border-[rgba(71,85,105,0.4)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-[#e2e8f0]">Incoming Tickets</h2>
          <span className="bg-[#10b981]/20 text-[#10b981] text-xs font-mono px-2 py-1 rounded">LIVE</span>
        </div>
        <button className="tactile-button text-sm font-semibold px-4 py-2 rounded-lg text-[#0f172a]">View All</button>
      </div>
      <div className="divide-y divide-[rgba(71,85,105,0.4)] max-h-[400px] overflow-y-auto">
        {tickets.map((ticket) => {
          const StatusIcon = statusIcons[ticket.status as keyof typeof statusIcons]
          return (
            <div
              key={ticket.id}
              className="p-4 hover:bg-[rgba(71,85,105,0.2)] transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-[#94a3b8]">{ticket.id}</span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded ${
                      priorityColors[ticket.priority as keyof typeof priorityColors]
                    }`}
                  >
                    {ticket.priority.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#94a3b8]">
                  <Clock className="w-3 h-3" />
                  {ticket.time}
                </div>
              </div>
              <h3 className="font-medium text-[#e2e8f0] mb-1 group-hover:text-[#10b981] transition-colors">
                {ticket.title}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-[#94a3b8]">
                  <MapPin className="w-3 h-3" />
                  {ticket.location}
                </div>
                <div className="flex items-center gap-2">
                  {ticket.assignee && <span className="text-xs text-[#94a3b8]">{ticket.assignee}</span>}
                  <StatusIcon className={`w-4 h-4 ${statusColors[ticket.status as keyof typeof statusColors]}`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
