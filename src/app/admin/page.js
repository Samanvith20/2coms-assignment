import DashboardShell from "@/components/layout/dashboard-shell";

import {
  Activity,
  Users,
  Megaphone,
  ShieldAlert,
} from "lucide-react";

export default function AdminPage() {
  return (
    <DashboardShell>
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Admin Command Center
          </h1>

          <p className="text-slate-500 mt-2">
            Monitor engagement, announcements and organization activity.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {[
            {
              title: "Active Employees",
              value: "1,248",
              icon: Users,
            },
            {
              title: "Engagement Rate",
              value: "87%",
              icon: Activity,
            },
            {
              title: "Announcements",
              value: "42",
              icon: Megaphone,
            },
            {
              title: "Pending Moderation",
              value: "12",
              icon: ShieldAlert,
            },
          ].map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Icon size={24} />
                </div>

                <p className="text-slate-500 mt-5 text-sm">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-2">
                  {card.value}
                </h2>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="col-span-2 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Announcement Management
                </h2>

                <p className="text-slate-500 mt-2">
                  Publish and prioritize organization-wide updates.
                </p>
              </div>

              <button className="h-11 px-5 rounded-2xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition">
                Create Announcement
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Quarterly leadership townhall scheduled for Friday.",
                "New AI innovation initiative launched across engineering teams.",
                "Updated hybrid work policy shared with all employees.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl p-5 flex items-center justify-between"
                >
                  <p className="text-slate-700">
                    {item}
                  </p>

                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-xs font-medium">
                    Published
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Moderation Queue
            </h2>

            <p className="text-slate-500 mt-2">
              Posts requiring review.
            </p>

            <div className="space-y-4 mt-8">
              {[
                "Duplicate engagement post detected.",
                "Flagged comment under recognition thread.",
                "Department event awaiting approval.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl p-4"
                >
                  <p className="text-sm text-slate-700">
                    {item}
                  </p>

                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 h-10 rounded-xl bg-slate-900 text-white text-sm">
                      Review
                    </button>

                    <button className="flex-1 h-10 rounded-xl bg-slate-100 text-slate-700 text-sm">
                      Dismiss
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}