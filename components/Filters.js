"use client";

export default function Filters({
  category,
  onCategory,
  pricing,
  onPricing,
  trending,
  onTrending,
  verified,
  onVerified,
  rating,
  onRating,
  tags,
  onTags,
  allTags,
  allCategories,
  count
}) {
  const toggleTag = (tg) => {
    if (tags.includes(tg)) onTags(tags.filter((t) => t !== tg));
    else onTags([...tags, tg]);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border 
        border-gray-300 dark:border-white/20 
        bg-white/70 dark:bg-white/5 
        backdrop-blur-sm p-4 transition">
      
      {/* CATEGORY */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-800 dark:text-white">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => onCategory(e.target.value)}
          className="w-full rounded-xl border 
          border-gray-300 dark:border-white/20 
          bg-white dark:bg-white/10 
          text-gray-800 dark:text-white 
          px-3 py-2 text-sm focus:ring-2 
          focus:ring-blue-400 transition"
        >
          <option value="" className="dark:bg-gray-800 dark:text-white">
            All
          </option>

          {allCategories.map((cat) => (
            <option
              key={cat}
              value={cat}
              className="dark:bg-gray-800 dark:text-white"
            >
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* PRICING */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-800 dark:text-white">
          Pricing
        </label>

        <select
          value={pricing}
          onChange={(e) => onPricing(e.target.value)}
          className="w-full rounded-xl border 
          border-gray-300 dark:border-white/20 
          bg-white dark:bg-white/10 
          text-gray-800 dark:text-white px-3 py-2 text-sm 
          focus:ring-2 focus:ring-blue-400 transition"
        >
          <option className="dark:bg-gray-800 dark:text-white">Any</option>
          <option className="dark:bg-gray-800 dark:text-white">Free</option>
          <option className="dark:bg-gray-800 dark:text-white">Freemium</option>
          <option className="dark:bg-gray-800 dark:text-white">Paid</option>
        </select>
      </div>

      {/* TRENDING */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-800 dark:text-white">
          Trending
        </label>

        <select
          value={trending}
          onChange={(e) => onTrending(e.target.value)}
          className="w-full rounded-xl border 
          border-gray-300 dark:border-white/20 
          bg-white dark:bg-white/10 
          text-gray-800 dark:text-white px-3 py-2 text-sm 
          focus:ring-2 focus:ring-blue-400 transition"
        >
          <option className="dark:bg-gray-800 dark:text-white">All</option>
          <option className="dark:bg-gray-800 dark:text-white">Most Popular</option>
          <option className="dark:bg-gray-800 dark:text-white">Highest Rated</option>
          <option className="dark:bg-gray-800 dark:text-white">Newest</option>
        </select>
      </div>

      {/* VERIFIED */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-800 dark:text-white">
          Verification
        </label>

        <select
          value={verified}
          onChange={(e) => onVerified(e.target.value)}
          className="w-full rounded-xl border 
          border-gray-300 dark:border-white/20 
          bg-white dark:bg-white/10 
          text-gray-800 dark:text-white px-3 py-2 text-sm 
          focus:ring-2 focus:ring-blue-400 transition"
        >
          <option className="dark:bg-gray-800 dark:text-white">All</option>
          <option className="dark:bg-gray-800 dark:text-white">Verified Only</option>
        </select>
      </div>

      {/* RATING */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-800 dark:text-white">
          Minimum Rating
        </label>

        <select
          value={rating}
          onChange={(e) => onRating(e.target.value)}
          className="w-full rounded-xl border 
          border-gray-300 dark:border-white/20 
          bg-white dark:bg-white/10 
          text-gray-800 dark:text-white px-3 py-2 text-sm 
          focus:ring-2 focus:ring-blue-400 transition"
        >
          <option className="dark:bg-gray-800 dark:text-white">Any</option>
          <option className="dark:bg-gray-800 dark:text-white">4+ Stars</option>
          <option className="dark:bg-gray-800 dark:text-white">3+ Stars</option>
          <option className="dark:bg-gray-800 dark:text-white">2+ Stars</option>
        </select>
      </div>

      {/* TAGS */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-800 dark:text-white">
          Tags
        </label>

        <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
          {allTags.slice(0, 20).map((tg) => (
            <button
              key={tg}
              onClick={() => toggleTag(tg)}
              className={`rounded-full border 
              border-gray-300 dark:border-white/20 
              px-3 py-1 text-sm 
              hover:bg-gray-200 dark:hover:bg-white/20 
              transition-colors whitespace-nowrap
              ${
                tags.includes(tg)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white"
              }`}
            >
              #{tg}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTS COUNT */}
      <div className="text-sm opacity-70 text-gray-800 dark:text-white border-t 
      border-gray-300 dark:border-white/20 pt-2">
        {count} results
      </div>
    </div>
  );
}
