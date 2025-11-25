export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="opacity-70">© {new Date().getFullYear()} AI Tools Directory</p>
        <p className="opacity-70">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
