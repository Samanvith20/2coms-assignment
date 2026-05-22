"use client";

import { useState } from "react";

import Sidebar from "./sidebar";
import TopNavbar from "./top-navbar";

export default function DashboardShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar sidebarOpen={sidebarOpen} />

      <div className="flex-1">
        <TopNavbar setSidebarOpen={setSidebarOpen} />

        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}