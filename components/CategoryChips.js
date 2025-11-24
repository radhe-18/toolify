export function CategoryChips({ categories, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`rounded-full border px-3 py-1 text-sm ${value === c ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-black" : ""}`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
