"use client";
import { useState, useEffect, useMemo } from "react";
import ToolCard from "@/components/ToolCard";

export default function Home() {
  const [q, setQ] = useState("");
  const [tools, setTools] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/api/tools?limit=500")
      .then((r) => r.json())
      .then((d) => setTools(d.items || d))
      .catch(console.error);

    fetch("http://localhost:5005/api/tools-featured")
      .then((r) => r.json())
      .then(setFeatured)
      .catch(console.error);
  }, []);

  const results = useMemo(() => {
    if (!q) return tools;
    const s = q.toLowerCase();
    return tools.filter((t) =>
      (t.name + " " + t.description + " " + (t.tags || []).join(" "))
        .toLowerCase()
        .includes(s)
    );
  }, [q, tools]);

  return (
    <div
      className="
        min-h-screen overflow-hidden relative transition-all duration-300
        
        bg-[#f5f6fa]                 /* LIGHT */
        dark:bg-gradient-to-br 
        dark:from-slate-900 dark:via-purple-900 dark:to-slate-900  /* DARK */
      "
    >
      {/* Header Space */}
      <div className="h-16"></div>

      {/* DARK background lights */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br 
          from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>

        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 
          rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/4 right-10 w-80 h-80 bg-purple-500/10 
          rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-pink-500/10 
          rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 
          rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

          {/* ICON */}
          <div className="
            inline-flex items-center justify-center w-24 h-24 rounded-full mb-12 shadow-2xl animate-pulse
            bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600
          ">
            <span className="text-4xl">🚀</span>
          </div>

          {/* HEADING */}
          <h1
            className="
              text-6xl md:text-8xl font-black mb-8 animate-fade-in
              text-gray-900
              dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-pink-400
              dark:bg-clip-text dark:text-transparent
            "
          >
            Discover 500+ AI Tools
          </h1>

          {/* SUBTEXT */}
          <p
            className="
              text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-16 animate-fade-in delay-200
              text-gray-600 dark:text-gray-300
            "
          >
            Unleash the power of artificial intelligence. Search, filter and
            compare cutting-edge AI tools across all categories.
          </p>

          {/* SEARCH INPUT */}
          <div className="max-w-3xl mx-auto">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search AI tools..."
              className="
                w-full rounded-3xl px-8 py-6 text-xl shadow-lg transition-all

                bg-white text-gray-900 placeholder-gray-500
                dark:bg-white/10 dark:text-white dark:placeholder-gray-400 dark:backdrop-blur-xl
              "
            />
          </div>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="
        relative z-10 
        bg-white text-gray-900 
        dark:bg-white/5 dark:text-white backdrop-blur-sm
      ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-20">

            <h2
              className="
                text-5xl md:text-6xl font-bold mb-8
                text-gray-900
                dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-400
                dark:bg-clip-text dark:text-transparent
              "
            >
              Featured AI Tools
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hand-picked selection of cutting-edge AI tools
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featured.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ALL TOOLS */}
     {/* ALL AI Tools Section */}
<section
  className="
    relative z-10
    bg-[#f5f6fa] text-gray-900
    dark:bg-slate-900 dark:text-white
  "
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
        All AI Tools ({results.length})
      </h2>
      <p className="text-xl dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
        Explore our complete collection across all categories
      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map(t => (
        <ToolCard key={t.slug} tool={t} />
      ))}
    </div>
  </div>
</section>
      
    </div>
  );
}
