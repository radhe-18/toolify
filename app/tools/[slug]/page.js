"use client";
import { useEffect, useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ToolPage({ params }) {
  const [tool, setTool] = useState(null);
  const [alts, setAlts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth");
      return;
    }

    const load = async ()=>{
      const t = await fetch(`http://localhost:5000/api/tools/${params.slug}`, { cache: "no-store" }).then(r=>r.json());
      setTool(t);
      const a = await fetch(`http://localhost:5000/api/tools/${params.slug}/alternatives`).then(r=>r.json());
      setAlts(a);
      const f = await fetch("http://localhost:5000/api/tools-featured").then(r=>r.json());
      setFeatured(f);
    };
    load();
  }, [params.slug, router]);

  if(!tool) return (
    <div className="py-10">
      {/* Header Spacer for Fixed Header */}
      <div className="h-16"></div>
      Loading...
    </div>
  );

  return (
    <div>
      {/* Header Spacer for Fixed Header */}
      <div className="h-16"></div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* main */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl border p-6 bg-white/60 dark:bg-zinc-900/60">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="size-14 overflow-hidden rounded-2xl ring-1 ring-black/10">
                  {tool.icon ? <img src={tool.icon} alt={tool.name} className="size-14 object-cover" /> :
                    <div className="grid place-items-center size-14 bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-extrabold text-xl">{tool.name?.[0]}</div>}
                </div>
                <div className="min-w-0">
                  <h1 className="truncate text-2xl font-bold">{tool.name}</h1>
                  <div className="mt-1 text-sm opacity-80">{tool.category} • {tool.pricing} • {tool.company}</div>
                </div>
              </div>
              <div className="shrink-0 text-sm text-right">
                <div className="flex items-center justify-end gap-1 font-medium">
                  <Star size={16} /> {tool.rating ?? "-"} <span className="opacity-70">({tool.votes ?? 0})</span>
                </div>
                <div className="opacity-70">Save • Share</div>
              </div>
            </div>
            <p className="mt-4 opacity-90">{tool.longDescription || tool.description}</p>
          </div>

          {/* Alternatives */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold">AI Alternatives</h2>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {alts.map(t => (
                <Link key={t.slug} href={`/tools/${t.slug}`} className="rounded-2xl border p-3 hover:shadow">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-neutral-200 dark:bg-neutral-800 grid place-items-center">
                      {t.icon ? <img src={t.icon} alt={t.name} className="size-10 rounded-xl" /> : <span className="font-bold">{t.name[0]}</span>}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-medium">{t.name}</div>
                      <div className="text-xs opacity-70">{t.category} • {t.pricing}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* right column */}
        <aside className="space-y-4">
          <div className="overflow-hidden rounded-3xl ring-1 ring-black/10">
            {tool.image ? <img src={tool.image} alt={tool.name} className="w-full object-cover" /> :
              <div className="aspect-video grid place-items-center bg-neutral-100 dark:bg-neutral-800">No image</div>}
          </div>
          <a href={tool.url} target="_blank" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-white dark:bg-white dark:text-black">
            Visit website <ExternalLink size={16} />
          </a>

          {/* Featured section on sidebar */}
          <div className="rounded-3xl border p-4">
            <div className="mb-2 font-semibold">Featured AI Tools</div>
            <div className="space-y-2">
              {featured.slice(0,6).map(t => (
                <Link key={t.slug} href={`/tools/${t.slug}`} className="flex items-center gap-3 rounded-xl p-2 hover:bg-black/5 dark:hover:bg-white/5">
                  <div className="size-8 rounded-lg overflow-hidden ring-1 ring-black/10">
                    {t.icon ? <img src={t.icon} alt={t.name} className="size-8 object-cover" /> : <div className="grid place-items-center size-8 bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-bold">{t.name[0]}</div>}
                  </div>
                  <div className="truncate text-sm">{t.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
