"use client";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";

export default function ToolCard({ tool }) {
  const favKey = "favorites";
  const favs = typeof window !== "undefined" ? JSON.parse(localStorage.getItem(favKey) || "[]") : [];
  const isFav = favs.includes(tool.slug);

  const toggleFav = () => {
    const cur = JSON.parse(localStorage.getItem(favKey) || "[]");
    const next = isFav ? cur.filter(s => s !== tool.slug) : [...cur, tool.slug];
    localStorage.setItem(favKey, JSON.stringify(next));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="group rounded-2xl border bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-4 transition hover:shadow-xl hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="size-12 overflow-hidden rounded-xl ring-1 ring-black/10">
            {tool.icon ? <img src={tool.icon} alt={tool.name} className="size-12 object-cover" /> :
              <div className="grid place-items-center size-12 bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-extrabold text-lg">{tool.name?.[0]}</div>}
          </div>
          <div className="min-w-0">
            <Link href={`/tools/${tool.slug}`} className="block truncate text-base font-semibold hover:underline">
              {tool.name}
            </Link>
            <div className="mt-1 flex items-center gap-2 text-xs opacity-75">
              <span className="rounded-full bg-gray-200 dark:bg-zinc-800 px-2 py-0.5">{tool.category}</span>
              <span className="rounded-full bg-gray-200 dark:bg-zinc-800 px-2 py-0.5">{tool.pricing}</span>
              {tool.verified && <span className="rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 px-2 py-0.5">Verified</span>}
            </div>
          </div>
        </div>
        <button onClick={toggleFav} className={`rounded-lg border p-1 ${isFav ? "bg-yellow-100 dark:bg-yellow-900" : ""}`} title={isFav ? "Remove favorite" : "Add favorite"}>
          <Star size={16} className={isFav ? "fill-current" : ""} />
        </button>
      </div>

      <p className="mt-3 line-clamp-3 text-sm opacity-90">{tool.description}</p>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs opacity-70">⭐ {tool.rating ?? "-"} • {tool.votes ?? 0} votes</div>
        <Link href={`/tools/${tool.slug}`} className="inline-flex items-center gap-1 text-sm font-medium hover:underline">
          Visit <ExternalLink size={14} />
        </Link>
      </div>
    </div>
  );
}