"use client";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import ToolCard from "@/components/ToolCard";
import Filters from "@/components/Filters";

export default function Explore() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [q, setQ] = useState("");
  const [tools, setTools] = useState([]);
  const [category, setCategory] = useState("");
  const [pricing, setPricing] = useState("Any");
  const [trending, setTrending] = useState("All");
  const [verified, setVerified] = useState("All");
  const [rating, setRating] = useState("Any");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth");
      return;
    }
    setUser(true);

    fetch("http://localhost:5005/api/tools?limit=500")
      .then((r) => r.json())
      .then((d) => setTools(d.items || d))
      .catch(console.error);
  }, [router]);

  const allCategories = useMemo(
    () => ["All", ...new Set(tools.map((t) => t.category))],
    [tools]
  );

  const allTags = useMemo(
    () => [...new Set(tools.flatMap((t) => t.tags || []))],
    [tools]
  );

  const filteredTools = useMemo(() => {
    let filtered = tools;

    // SEARCH
    if (q) {
      const s = q.toLowerCase();
      filtered = filtered.filter((t) =>
        (t.name +
          " " +
          t.description +
          " " +
          (t.tags || []).join(" ")).toLowerCase().includes(s)
      );
    }

    // CATEGORY
    if (category) {
      filtered = filtered.filter((t) => t.category === category);
    }

    // PRICING
    if (pricing !== "Any") {
      filtered = filtered.filter((t) => t.pricing === pricing);
    }

    // TAGS
    if (tags.length > 0) {
      filtered = filtered.filter((t) =>
        tags.some((tag) => t.tags?.includes(tag))
      );
    }

    return filtered;
  }, [q, category, pricing, tags, tools]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 relative overflow-hidden">

      {/* HEADER SPACER */}
      <div className="h-16"></div>

      {/* BACKGROUND ANIMATION */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20"></div>

        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-500"></div>
      </div>

      {/* SEARCH BAR */}
      <section className="relative z-10 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search AI tools..."
              className="relative w-full rounded-3xl border-0 px-8 py-6 bg-white/60 dark:bg-white/10 backdrop-blur-xl shadow-2xl text-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative z-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xl:flex-row gap-8">

            {/* FILTER SIDEBAR */}
            <aside className="w-full xl:w-80 flex-shrink-0 order-2 xl:order-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Filters
                </h3>
                <Filters
                  category={category}
                  onCategory={setCategory}
                  pricing={pricing}
                  onPricing={setPricing}
                  trending={trending}
                  onTrending={setTrending}
                  verified={verified}
                  onVerified={setVerified}
                  rating={rating}
                  onRating={setRating}
                  tags={tags}
                  onTags={setTags}
                  allTags={allTags}
                  allCategories={allCategories.slice(1)}
                  count={filteredTools.length}
                />
              </div>
            </aside>

            {/* TOOLS GRID */}
            <main className="flex-1 order-1 xl:order-2">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Explore AI Tools
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Discover and filter through our comprehensive collection of AI tools.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTools.map((t) => (
                  <ToolCard key={t.slug} tool={t} />
                ))}
              </div>
            </main>

          </div>
        </div>
      </section>
    </div>
  );
}
