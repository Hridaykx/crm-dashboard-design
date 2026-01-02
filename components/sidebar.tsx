"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Users,
  Package,
  IndianRupee,
  ShoppingCart,
  ClipboardList,
  Receipt,
  FolderKanban,
  FolderArchive,
  Calendar,
  MapPin,
  FileText,
  AlertCircle,
  BarChart3,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Shield,
  Sun,
  Moon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-provider"

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Contact", hasSubmenu: true },
  { icon: Package, label: "Product", hasSubmenu: true },
  { icon: IndianRupee, label: "Inquiry and Quotation", hasSubmenu: true, active: true },
  { icon: ShoppingCart, label: "Sales", hasSubmenu: true },
  { icon: ClipboardList, label: "Task", hasSubmenu: true },
  { icon: Receipt, label: "Expense Manager", hasSubmenu: true },
  { icon: FolderKanban, label: "Project Management", hasSubmenu: true },
  { icon: FolderArchive, label: "DMS", hasSubmenu: true },
  { icon: Calendar, label: "Calendar", hasSubmenu: true },
  { icon: MapPin, label: "GPS Attendance", hasSubmenu: true },
  { icon: FileText, label: "AMC Contract", hasSubmenu: true },
  { icon: AlertCircle, label: "AMC Complaint", hasSubmenu: true },
  { icon: BarChart3, label: "Customized Dashboard", hasSubmenu: true },
  { icon: BookOpen, label: "User Manual" },
]

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Inquiry and Quotation")
  const { theme, toggleTheme } = useTheme()

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border z-50 flex flex-col transition-all duration-300",
        collapsed ? "w-20" : "w-72",
      )}
    >
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-bold text-sidebar-foreground">ZINQ</h2>
              <p className="text-xs text-sidebar-foreground/60">Electronics</p>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-b border-sidebar-border">
        <button
          onClick={toggleTheme}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200",
            "bg-sidebar-accent text-sidebar-foreground hover:bg-sidebar-accent/80",
          )}
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          {!collapsed && <span className="text-sm font-medium">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
              activeItem === item.label
                ? "bg-primary text-primary-foreground"
                : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground",
            )}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            {!collapsed && (
              <>
                <span className="font-medium text-sm flex-1 text-left truncate">{item.label}</span>
                {item.hasSubmenu && <ChevronDown className="w-4 h-4 shrink-0 opacity-60" />}
              </>
            )}
          </button>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-sidebar border border-sidebar-border flex items-center justify-center text-sidebar-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-200"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
    </aside>
  )
}
