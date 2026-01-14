export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Iygeal Anozie. Backend Engineer.</p>

        <p className="text-slate-600">
          Django · Express · PostgreSQL · Cloud Deployments
        </p>
      </div>
    </footer>
  );
}
