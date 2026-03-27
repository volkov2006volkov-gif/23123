import { Link } from "react-router-dom";

export default function ProjectLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        Смотреть проекты →
      </Link>
      <span className="text-xs text-slate-400">/projects работает даже на GitHub Pages (HashRouter)</span>
    </div>
  );
}
