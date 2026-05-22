import DashboardShell from "@/components/layout/dashboard-shell";

import { Trophy } from "lucide-react";

import { recognitions } from "@/data/recognition";

export default function RecognitionPage() {
  return (
    <DashboardShell>
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Recognition Wall
          </h1>

          <p className="text-slate-500 mt-2">
            Celebrating achievements and employee excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {recognitions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Trophy />
              </div>

              <h2 className="text-2xl font-bold mt-6 text-slate-900">
                {item.employee}
              </h2>

              <p className="text-indigo-600 font-medium mt-2">
                {item.award}
              </p>

              <p className="text-slate-600 mt-4 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}