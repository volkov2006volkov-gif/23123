import ProjectLinks from "../components/ProjectLinks";

const steps = [
  {
    title: "1. Установи зависимости",
    detail: "npm install",
  },
  {
    title: "2. Проверь локально",
    detail: "npm run dev → / → /#/projects — HashRouter не даёт 404.",
  },
  {
    title: "3. Собери статический билд",
    detail: "npm run build — результат в /dist.",
  },
  {
    title: "4. Залей в GitHub",
    detail: "git add . → git commit → git push в main или pages-ветку.",
  },
  {
    title: "5. Включи GitHub Pages",
    detail: "Settings → Pages → Deploy from GitHub Actions (Node) или ветка /dist.",
  },
];

const checklist = [
  "HashRouter вместо BrowserRouter — без белого экрана на GitHub Pages.",
  "basename берём из import.meta.env.BASE_URL, чтобы работало и в /repo/.",
  "Проверяй в DevTools → Network, что /assets/* не 404. Если нужно, собери с base=./",
  "Держи главные ссылки в виде Link/HashLink, а не абсолютных путей.",
  "После билда открой dist/index.html локально — всё должно грузиться без сервера.",
];

const faq = [
  {
    q: "Почему белый экран?",
    a: "Чаще всего из-за BrowserRouter (нужен сервер с fallback) или из-за абсолютных путей /assets при base ≠ /. HashRouter решает первое, base=./ при билде — второе.",
  },
  {
    q: "Как поставить base для project pages?",
    a: "Можно билдить так: npm run build -- --base=./ — Vite выплюнет относительные ассеты, GH Pages их найдёт в /repo/.",
  },
  {
    q: "Куда класть dist?",
    a: "Либо в root ветки, либо настрой GitHub Actions Vite/Node workflow, чтобы выкатывать содержимое dist в Pages.",
  },
  {
    q: "Что поменять под себя?",
    a: "Тексты в src/pages/HomePage.tsx и ProjectsPage.tsx. Цвета и фон — в src/index.css или прямо в классах.",
  },
];

const metrics = [
  { label: "HashRouter", value: "#", hint: "Не требует серверного fallback" },
  { label: "Base", value: "./ или /repo/", hint: "Чтобы ассеты не 404" },
  { label: "GH Pages", value: "Free", hint: "Хостинг от GitHub" },
  { label: "Деплой", value: "<10 мин", hint: "От npm install до live" },
];

export default function HomePage() {
  return (
    <div className="space-y-16 lg:space-y-20">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.25)]" />
            Хэш-маршрутизация → нет белого экрана на GitHub Pages
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Готовый шаблон под <span className="text-gradient">GitHub Pages</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Две страницы (главная и проекты), HashRouter с корректным basename, адаптив и понятный чеклист. Просто обнови
              тексты, собери и включи Pages.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((item) => (
              <div key={item.label} className="glass rounded-2xl p-4">
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-xl font-bold text-white">{item.value}</p>
                <p className="text-xs text-slate-300">{item.hint}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://docs.github.com/pages"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Документация Pages
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#deploy"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
            >
              Шаги деплоя
            </a>
            <ProjectLinks />
          </div>
        </div>

        <div className="glass glow-ring relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-2xl">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Dev → Deploy</p>
              <p className="text-lg font-semibold text-white">Команды без сюрпризов</p>
            </div>
            <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-100">
              5 шагов
            </span>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-4 font-mono text-xs text-slate-200">
            <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.12em] text-slate-400">
              <span>Локально</span>
              <span>Старт → Билд → Пуш</span>
            </div>
            <pre className="whitespace-pre-wrap text-slate-100">
              npm install
              npm run dev
              npm run build
              git add . && git commit -m "deploy" && git push
            </pre>
          </div>

          <div className="mt-6 space-y-4" id="deploy">
            {steps.map((step) => (
              <div key={step.title} className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/80 to-indigo-500/70 text-base font-semibold text-slate-950 shadow-lg shadow-indigo-500/20">
                  {step.title.split(".")[0]}
                </div>
                <div className="space-y-1">
                  <p className="text-base font-semibold text-white">{step.title}</p>
                  <p className="text-sm text-slate-300">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Чеклист</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Как избежать белого экрана</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400">Пройдись по пунктам перед пушем — GitHub Pages поднимется без сюрпризов.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {checklist.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 text-sm font-semibold text-emerald-100">
                ✓
              </span>
              <p className="text-sm text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="glass rounded-3xl border border-white/10 p-6 shadow-2xl md:p-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">FAQ</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Ответы на частые вопросы</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" />
            GH Pages бесплатно
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-lg font-semibold text-white">{item.q}</p>
              <p className="mt-3 text-sm text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass glow-ring relative overflow-hidden rounded-3xl border border-white/10 p-8 text-center shadow-2xl">
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/25 to-indigo-500/25 blur-3xl" />
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">Готов протестировать?</h3>
        <p className="mt-3 text-sm text-slate-300">
          Открой /#/projects после билда — убедись, что маршруты работают. Затем включай GitHub Pages и делись ссылкой.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <ProjectLinks />
          <a
            href="https://github.com/new"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/35 hover:bg-white/5"
          >
            Создать репозиторий
          </a>
        </div>
      </section>
    </div>
  );
}
