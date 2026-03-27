import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition duration-150 ${
    isActive
      ? "border-white/0 bg-white text-slate-900 shadow-lg shadow-cyan-500/20"
      : "border-white/15 text-slate-100 hover:border-white/30 hover:bg-white/5"
  }`;

const base = (import.meta.env.BASE_URL ?? "").replace(/\/$/, "");

export default function App() {
  return (
    <HashRouter basename={base}>
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute left-[-10%] top-[-20%] h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="absolute right-[-12%] top-[10%] h-96 w-96 rounded-full bg-violet-500/20 blur-[140px]" />
          <div className="absolute bottom-[-12%] left-[20%] h-72 w-72 rounded-full bg-emerald-400/15 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.06),rgba(2,6,23,0))]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 lg:pb-24">
          <header className="mb-12 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 via-slate-200 to-white text-sm font-semibold text-slate-900 shadow-xl shadow-slate-300/40">
                GH
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-100">GitHub Pages Hash Starter</p>
                <p className="text-xs text-slate-400">HashRouter + Vite + Tailwind</p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-3">
              <NavLink to="/" className={navLinkClass} end>
                Главная
              </NavLink>
              <NavLink to="/projects" className={navLinkClass}>
                Проекты
              </NavLink>
              <a
                href="#deploy"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/60 hover:bg-emerald-300/10"
              >
                Как задеплоить
              </a>
            </nav>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://docs.github.com/pages"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                rel="noreferrer"
              >
                Docs ↗
              </a>
              <a
                href="https://pages.github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
              >
                GitHub Pages
              </a>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
