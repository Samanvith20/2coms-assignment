import DashboardShell from "@/components/layout/dashboard-shell";

import {
  Search,
  FileText,
  BookOpen,
  Download,
} from "lucide-react";

import { knowledgeResources } from "@/data/knowledge";

export default function KnowledgeHubPage() {
  return (
    <DashboardShell>
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Knowledge Hub
            </h1>

            <p className="text-slate-500 mt-2">
              Access organization resources, documentation and internal knowledge.
            </p>
          </div>

          <div className="relative w-[320px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search resources..."
              className="w-full h-12 rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "Policies",
              count: "24 Docs",
              icon: FileText,
            },
            {
              title: "Training",
              count: "18 Resources",
              icon: BookOpen,
            },
            {
              title: "Downloads",
              count: "1.2K",
              icon: Download,
            },
            {
              title: "Departments",
              count: "18 Teams",
              icon: BookOpen,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Icon size={24} />
                </div>

                <p className="text-slate-500 mt-5 text-sm">
                  {item.title}
                </p>

                <h2 className="text-2xl font-bold mt-2 text-slate-900">
                  {item.count}
                </h2>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {knowledgeResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
                  <FileText size={24} />
                </div>

                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium">
                  {resource.category}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-6">
                {resource.title}
              </h2>

              <p className="text-slate-600 mt-4 leading-relaxed">
                {resource.description}
              </p>

              <div className="flex gap-4 mt-8">
                <button className="flex-1 h-11 rounded-2xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition">
                  View Resource
                </button>

                <button className="w-11 h-11 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition">
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}