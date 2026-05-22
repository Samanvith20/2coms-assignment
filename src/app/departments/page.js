import DashboardShell from "@/components/layout/dashboard-shell";

import { Building2, FolderKanban, Users } from "lucide-react";

import { departments } from "@/data/departments";

export default function DepartmentsPage() {
  return (
    <DashboardShell>
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Departments
          </h1>

          <p className="text-slate-500 mt-2">
            Explore business units, ongoing initiatives and team impact.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {departments.map((department) => (
            <div
              key={department.id}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Building2 size={28} />
              </div>

              <h2 className="text-2xl font-bold mt-6 text-slate-900">
                {department.name}
              </h2>

              <p className="text-slate-600 mt-4 leading-relaxed">
                {department.description}
              </p>

              <div className="flex items-center gap-8 mt-8">
                <div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Users size={16} />
                    Employees
                  </div>

                  <p className="text-2xl font-bold mt-2">
                    {department.employees}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <FolderKanban size={16} />
                    Projects
                  </div>

                  <p className="text-2xl font-bold mt-2">
                    {department.projects}
                  </p>
                </div>
              </div>

              <button className="mt-8 h-11 px-5 rounded-2xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition">
                Explore Department
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}