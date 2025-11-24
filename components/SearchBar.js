export default function SearchBar({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-md rounded-xl border px-4 py-2 outline-none focus:ring"
      placeholder="Search tools, tags, features..."
      aria-label="Search tools"
    />
  );
}
