"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { LiveOperations } from "./live-operations"
import { TicketsList } from "./tickets-list"
import { LiveMap } from "./live-map"
import { SystemTicker } from "./system-ticker"

export function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen grid-background flex">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <main className={`flex-1 p-6 transition-all duration-300 ${sidebarCollapsed ? "ml-20" : "ml-72"}`}>
        <div className="max-w-[1800px] mx-auto space-y-6">
          {/* Header */}
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <span className="text-primary neon-text">ZINQ</span>
                <span className="text-muted-foreground font-normal">|</span>
                <span className="text-muted-foreground text-lg font-normal">Command Center</span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-[#10b981] pulse-dot" />
                <span className="text-sm font-mono text-[#10b981]">SYSTEM ONLINE</span>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Last Sync</p>
                <p className="text-sm font-mono text-foreground">{new Date().toLocaleTimeString()}</p>
              </div>
            </div>
          </header>

          {/* Live Operations Strip */}
          <LiveOperations />

          {/* Main Content - Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TicketsList />
            <LiveMap />
          </div>

          {/* System Logs Ticker */}
          <SystemTicker />
        </div>
      </main>
    </div>
  )
}
