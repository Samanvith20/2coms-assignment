import DashboardShell from "@/components/layout/dashboard-shell";
import { Heart, MessageCircle, Share2 } from "lucide-react";

import { feedPosts } from "@/data/feed";

export default function FeedPage() {
  return (
    <DashboardShell>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Company Feed
          </h1>

          <p className="text-slate-500 mt-2">
            Latest updates, achievements and leadership announcements.
          </p>
        </div>

        <div className="space-y-6">
          {feedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm"
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                    {post.author[0]}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {post.author}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {post.role} • {post.department}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-slate-700 leading-relaxed">
                  {post.content}
                </p>
              </div>

              <img
                src={post.image}
                alt="feed"
                className="w-full h-[340px] object-cover"
              />

              <div className="p-6 flex items-center justify-between border-t border-slate-100">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-slate-600 hover:text-red-500 transition">
                    <Heart size={20} />
                    {post.likes}
                  </button>

                  <button className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition">
                    <MessageCircle size={20} />
                    {post.comments}
                  </button>

                  <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
                    <Share2 size={20} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}