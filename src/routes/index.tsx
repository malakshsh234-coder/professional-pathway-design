import { createFileRoute, Link } from "@tanstack/react-router";
import { appendices } from "@/lib/activity-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الممر المهني — ملاحق النشاط 301-LO2-AC2.5" },
      {
        name: "description",
        content:
          "ملاحق نشاط الممر المهني: بطاقات المقاعد والمواقف والمبادئ، ووثيقة المراقب، وبطاقة الخروج، ومفتاح المدرّب — جاهزة للطباعة.",
      },
      { property: "og:title", content: "الممر المهني — ملاحق النشاط" },
      {
        property: "og:description",
        content: "ستة ملاحق مصمّمة وجاهزة للطباعة لنشاط الممر المهني.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex items-center gap-3">
            <span className="path-rail h-2 w-24" aria-hidden="true" />
            <span className="station-chip">٣٠١ — معيار التقييم ٢.٥</span>
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
            الممر المهني
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            أربعة مقاعد، ستة مبادئ، ملاحظة وتحليل، ثم خطوة مهنية تالية.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["متعلّم", "زميل", "وليّ أمر", "طرف خارجي"].map((s, i) => (
              <div
                key={s}
                className="flex items-center gap-3 rounded-xl border border-border bg-secondary/60 px-5 py-3"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {["١", "٢", "٣", "٤"][i]}
                </span>
                <span className="text-base font-bold text-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-2xl font-bold text-foreground">الملحقات</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {appendices.map((a) => (
            <Link
              key={a.to}
              to={a.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <span
                className="path-rail absolute inset-y-6 right-0 w-1.5 opacity-70"
                aria-hidden="true"
              />
              <div className="pr-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-bold text-primary">{a.num}</p>
                  <span className="station-chip">{a.audience}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-foreground">{a.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
