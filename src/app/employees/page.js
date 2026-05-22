import DashboardShell from "@/components/layout/dashboard-shell";

import { Search, MapPin } from "lucide-react";

import { employees } from "@/data/employees";

export default function EmployeesPage() {
  return (
    <DashboardShell>
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Employee Directory
            </h1>

            <p className="text-slate-500 mt-2">
              Discover colleagues across departments and teams.
            </p>
          </div>

          <div className="relative w-[320px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search employees..."
              className="w-full h-12 rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-lg font-semibold">
                  {employee.name[0]}
                </div>

                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium">
                  {employee.department}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mt-5">
                {employee.name}
              </h2>

              <p className="text-slate-500 mt-1">
                {employee.role}
              </p>

              <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">
                <MapPin size={16} />
                {employee.location}
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {employee.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button className="w-full mt-6 h-11 rounded-2xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}