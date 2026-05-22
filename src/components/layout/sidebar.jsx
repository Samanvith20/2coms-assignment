
"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Newspaper,
  Trophy,
  Users,
  Building2,
  BookOpen,
  CalendarDays,
  Shield,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Feed",
    icon: Newspaper,
    href: "/feed",
  },
  {
    title: "Recognition",
    icon: Trophy,
    href: "/recognition",
  },
  {
    title: "Employees",
    icon: Users,
    href: "/employees",
  },
  {
    title: "Departments",
    icon: Building2,
    href: "/departments",
  },
  {
    title: "Knowledge Hub",
    icon: BookOpen,
    href: "/knowledge-hub",
  },
  {
    title: "Events",
    icon: CalendarDays,
    href: "/events",
  },
  {
    title: "Admin",
    icon: Shield,
    href: "/admin",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar({ sidebarOpen }) {
  return (
    <aside
      className={`fixed lg:static top-0 left-0 z-50 min-block-0.5h-screen bg-slate-900 overflow-y-auto text-white border-r border-slate-800 transition-all duration-300 ${
        sidebarOpen ? "w-[260px]" : "w-0 lg:w-[22.50px]"
      } overflow-hidden`}
    >
      <div className="p-6">
        <div className="mb-10">
          <h1
            className={`font-bold tracking-tight transition-all ${
              sidebarOpen ? "text-2xl" : "text-xl"
            }`}
          >
            NS
          </h1>

          {sidebarOpen && (
            <p className="text-slate-400 text-sm mt-1">
              Corporate Intranet
            </p>
          )}
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-all duration-200 text-slate-200 hover:text-white"
              >
                <Icon size={20} />

                {sidebarOpen && (
                  <span className="text-sm font-medium whitespace-nowrap">
                    {item.title}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}