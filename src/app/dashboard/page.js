import DashboardShell from "@/components/layout/dashboard-shell";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-3xl p-8 text-white">
          <p className="text-sm uppercase tracking-wider text-indigo-100">
            Leadership Vision
          </p>

          <h1 className="text-4xl font-bold mt-3 leading-tight max-w-3xl">
            Building a more connected, collaborative and innovative workplace experience.
          </h1>

          <p className="mt-4 text-indigo-100 max-w-2xl">
            Empowering teams across departments with better visibility,
            engagement and shared organizational goals.
          </p>

          <button className="mt-6 bg-white text-slate-900 px-5 py-3 rounded-xl font-medium hover:bg-slate-100 transition">
            Explore Updates
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {[
            {
              title: "Employees",
              value: "1,248",
            },
            {
              title: "Departments",
              value: "18",
            },
            {
              title: "Recognition Posts",
              value: "324",
            },
            {
              title: "Upcoming Events",
              value: "12",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-3 text-slate-900">
                {item.value}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}