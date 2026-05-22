"use client";

import { Bell, Menu, Search } from "lucide-react";

export default function TopNavbar({ setSidebarOpen }) {
  return (
    <header className="h-[80px] bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition"
        >
          <Menu size={20} className="text-slate-700" />
        </button>

        <div className="relative hidden md:block w-[320px]">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search employees, updates..."
            className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell className="text-slate-600" size={22} />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
            SR
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">
              Samanvith Reddy
            </p>

            <p className="text-xs text-slate-500">
              Product Engineer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}