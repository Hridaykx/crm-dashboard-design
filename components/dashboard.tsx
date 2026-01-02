"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"

export function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen grid-background flex">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <main className={`flex-1 p-6 transition-all duration-300 ${sidebarCollapsed ? "ml-20" : "ml-72"}`}>
        <div className="max-w-[1800px] mx-auto space-y-6">
          {/* All page content has been cleared, leaving only the Sidebar and the container */}
        </div>
      </main>
    </div>
  )
}
