import { createFileRoute } from "@tanstack/react-router";
import { MaterialShell } from "@/components/MaterialShell";
import { principles, principlesNote } from "@/lib/activity-data";

export const Route = createFileRoute("/principle-cards")({
  head: () => ({
    meta: [
      { title: "ملحق ٣ — بطاقات المبادئ الستة | الممر المهني" },
      {
        name: "description",
        content:
          "ست بطاقات مبادئ متساوية الحجم لكل مشارك: الاحترام، الموثوقية، النزاهة، السرية، العدالة، عدم التحيّز.",
      },
      { property: "og:title", content: "ملحق ٣ — بطاقات المبادئ الستة" },
      { property: "og:description", content: "بطاقات المبادئ الستة جاهزة للطباعة والرفع." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrincipleCards,
});

function PrincipleCards() {
  return (
    <MaterialShell
      num="ملحق ٣"
      title="بطاقات المبادئ الستة"
      audience="للمشاركين"
      note={principlesNote}
    >
      {[0, 1, 2].map((chunk) => (
        <div key={chunk} className="sheet flex flex-col">
          <div className="mb-6 flex items-center justify-between border-b-2 border-primary/25 pb-4">
            <div>
              <p className="text-[11pt] font-bold text-primary">ملحق ٣</p>
              <h2 className="text-[17pt] font-bold text-foreground">بطاقات المبادئ الستة</h2>
            </div>
            <span className="station-chip">الممر المهني</span>
          </div>

          <div className="flex flex-1 flex-col gap-6">
            {principles.slice(chunk * 2, chunk * 2 + 2).map((p) => (
              <div
                key={p.name}
                className="cut-card flex flex-1 flex-col items-center justify-center gap-8 px-8 py-8"
              >
                <span className="path-rail h-2 w-28" aria-hidden="true" />
                <p className="text-center text-[60pt] font-bold leading-none text-foreground">
                  {p.name}
                </p>
                <span className="path-rail h-2 w-28" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </MaterialShell>
  );
}
