import { createFileRoute } from "@tanstack/react-router";
import { MaterialShell, SheetHeader } from "@/components/MaterialShell";
import { principles, responseModel, trainerKeyNote, trainerKeyRows } from "@/lib/activity-data";

export const Route = createFileRoute("/trainer-key")({
  head: () => ({
    meta: [
      { title: "ملحق ٦ — مفتاح المدرّب | الممر المهني" },
      {
        name: "description",
        content:
          "مرجع المدرّب: المبدأ الأوضح والحد المهني والخطوة التالية لكل موقف، مع الرد المهني في ثلاثة أجزاء.",
      },
      { property: "og:title", content: "ملحق ٦ — مفتاح المدرّب" },
      { property: "og:description", content: "مرجع خاص بالمدرّب لا يُعرض قبل الخطوة الثالثة." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrainerKey,
});

function TrainerKey() {
  return (
    <MaterialShell
      num="ملحق ٦"
      title="مفتاح المدرّب"
      audience="للمدرّب فقط"
      note={trainerKeyNote}
    >
      <div className="sheet flex flex-col">
        <SheetHeader num="ملحق ٦" title="مفتاح المدرّب" />

        <div className="mb-5 rounded-xl border-r-4 border-primary bg-secondary/60 px-5 py-4">
          <p className="text-[11pt] leading-7 text-foreground">{trainerKeyNote}</p>
        </div>

        <table className="doc-table text-[10pt]">
          <colgroup>
            <col style={{ width: "34mm" }} />
            <col style={{ width: "30mm" }} />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>الموقف</th>
              <th>المبدأ الأوضح</th>
              <th>الحد المهني</th>
              <th>الخطوة التالية</th>
            </tr>
          </thead>
          <tbody>
            {trainerKeyRows.map((r) => (
              <tr key={r.situation}>
                <td className="font-bold text-foreground">{r.situation}</td>
                <td className="font-bold text-primary">{r.principle}</td>
                <td className="leading-6">{r.boundary}</td>
                <td className="leading-6">{r.nextStep}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sheet flex flex-col">
        <SheetHeader num="ملحق ٦" title="الرد المهني في ثلاثة أجزاء" />

        <div className="flex flex-col gap-4">
          {responseModel.map((r) => (
            <div
              key={r.part}
              className="rounded-2xl border border-border bg-card px-6 py-5 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3">
                <span className="path-rail h-2 w-12" aria-hidden="true" />
                <p className="text-[13pt] font-bold text-primary">{r.part}</p>
              </div>
              <p className="mt-3 text-[13pt] leading-8 text-foreground">{r.example}</p>
            </div>
          ))}
        </div>

        <div className="mt-9">
          <h3 className="text-[14pt] font-bold text-foreground">
            ما يبحث عنه المراقب في الرد
          </h3>
          <table className="doc-table mt-4 text-[10.5pt]">
            <colgroup>
              <col style={{ width: "36mm" }} />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>البطاقة</th>
                <th>ما يبحث عنه المراقب في الرد</th>
              </tr>
            </thead>
            <tbody>
              {principles.map((p) => (
                <tr key={p.name}>
                  <td className="font-bold text-primary">{p.name}</td>
                  <td className="leading-6">{p.observerLooksFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MaterialShell>
  );
}
