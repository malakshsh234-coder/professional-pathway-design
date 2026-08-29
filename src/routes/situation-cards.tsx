import { createFileRoute } from "@tanstack/react-router";
import { MaterialShell } from "@/components/MaterialShell";
import { situationSets } from "@/lib/activity-data";

export const Route = createFileRoute("/situation-cards")({
  head: () => ({
    meta: [
      { title: "ملحق ٢ — بطاقات المواقف | الممر المهني" },
      {
        name: "description",
        content:
          "بطاقات المواقف: الجولة الأولى، الجولة الثانية البديلة، والمواقف الاحتياطية للمجموعة ج — جاهزة للطباعة والقص.",
      },
      { property: "og:title", content: "ملحق ٢ — بطاقات المواقف" },
      { property: "og:description", content: "بطاقات مواقف نشاط الممر المهني بثلاث مجموعات." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SituationCards,
});

function SituationCards() {
  return (
    <MaterialShell
      num="ملحق ٢"
      title="بطاقات المواقف"
      audience="للمشاركين"
      note="كل مجموعة في صفحة مستقلة: بطاقتان في الصفحة تُقصّان بسهولة. نص الطلب هو العنصر البارز، وتعليمات صاحب المقعد أصغر."
    >
      {situationSets.map((set) =>
        [0, 1].map((chunk) => (
          <div key={`${set.id}-${chunk}`} className="sheet flex flex-col">
            <div className="mb-6 flex items-start justify-between gap-4 border-b-2 border-primary/25 pb-4">
              <div>
                <p className="text-[11pt] font-bold text-primary">ملحق ٢ — بطاقات المواقف</p>
                <h2 className="text-[17pt] font-bold leading-tight text-foreground">
                  {set.title}
                </h2>
              </div>
              <span className="station-chip">الممر المهني</span>
            </div>

            <p className="mb-5 text-[10pt] leading-6 text-muted-foreground">{set.note}</p>

            <div className="flex flex-1 flex-col gap-6">
              {set.items.slice(chunk * 2, chunk * 2 + 2).map((item) => (
                <article
                  key={item.request}
                  className="cut-card flex flex-1 flex-col gap-5 px-8 py-7"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-lg bg-primary px-4 py-1.5 text-[13pt] font-bold text-primary-foreground">
                      {item.seat}
                    </span>
                    <span className="path-rail h-1.5 w-20" aria-hidden="true" />
                  </div>

                  <p className="text-[19pt] font-bold leading-[1.7] text-foreground">
                    {item.request}
                  </p>

                  <div className="mt-auto rounded-xl border border-dashed border-rule bg-secondary/70 px-5 py-3">
                    <p className="text-[9pt] font-bold text-muted-foreground">
                      تعليمات لصاحب المقعد
                    </p>
                    <p className="mt-1 text-[11pt] leading-6 text-foreground">
                      {item.instruction}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )),
      )}
    </MaterialShell>
  );
}
