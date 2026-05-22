import DashboardShell from "@/components/layout/dashboard-shell";

import { CalendarDays, MapPin } from "lucide-react";

import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <DashboardShell>
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Events & Engagement
          </h1>

          <p className="text-slate-500 mt-2">
            Explore organization activities, celebrations and upcoming experiences.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium">
                    {event.type}
                  </span>

                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <CalendarDays size={16} />
                    {event.date}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-5">
                  {event.title}
                </h2>

                <p className="text-slate-600 mt-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 mt-5 text-sm text-slate-500">
                  <MapPin size={16} />
                  Hyderabad Headquarters
                </div>

                <button className="w-full mt-7 h-11 rounded-2xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition">
                  View Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}