import { Link } from "react-router-dom";

const projects = [
  {
    title: "UI Kit для портфолио",
    description: "Коллекция карточек, шапок и CTA-блоков под GitHub Pages с тёмной темой.",
    stack: ["Vite", "Tailwind", "HashRouter"],
    url: "https://github.com",
  },
  {
    title: "Сайт-резюме",
    description: "Одностраничник с секциями об опыте, навыках и ссылками на репозитории.",
    stack: ["React", "TypeScript", "GH Actions"],
    url: "https://github.com",
  },
  {
    title: "Лендинг продукта",
    description: "Секции герой, преимущества, цены и FAQ. Готов к публикации через Pages.",
    stack: ["SEO ready", "Responsive", "PWA ready"],
    url: "https://github.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">#/projects</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Примеры проектов</h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Маршрут доступен с хэшом: /#/projects. Проверь после билда — если страница открывается, GitHub Pages настроен
            правильно.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/35 hover:bg-white/5"
        >
          ← На главную
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="glass rounded-3xl border border-white/10 p-6 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 transition hover:bg-white/20"
              >
                GitHub ↗
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass glow-ring flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 p-6 text-sm text-slate-100">
        <div>
          <p className="text-base font-semibold text-white">Как проверить маршруты в Pages?</p>
          <p className="text-slate-300">Собери → залей → открой https://username.github.io/repo/#/projects. Если видно эту страницу — всё ок.</p>
        </div>
        <Link
          to="/"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          Вернуться и настроить деплой
        </Link>
      </div>
    </div>
  );
}
