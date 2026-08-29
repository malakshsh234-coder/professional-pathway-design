import { createFileRoute } from "@tanstack/react-router";
import { MaterialShell } from "@/components/MaterialShell";
import { seats } from "@/lib/activity-data";

export const Route = createFileRoute("/seat-cards")({
  head: () => ({
    meta: [
      { title: "ملحق ١ — بطاقات المقاعد الأربعة | الممر المهني" },
      {
        name: "description",
        content: "أربع بطاقات مقاعد كبيرة جاهزة للطباعة: متعلّم، زميل، وليّ أمر، طرف خارجي.",
      },
      { property: "og:title", content: "ملحق ١ — بطاقات المقاعد الأربعة" },
      { property: "og:description", content: "بطاقات المقاعد الأربعة لنشاط الممر المهني." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SeatCards,
});

function SeatCards() {
  return (
    <MaterialShell
      num="ملحق ١"
      title="بطاقات المقاعد الأربعة"
      audience="للمشاركين"
      note="بطاقة واحدة في كل صفحة A4، تُطبع وتُوضع على كل مقعد."
    >
      {seats.map((seat, i) => (
        <div key={seat.no} className="sheet flex flex-col">
          <div className="flex items-center justify-between">
            <span className="station-chip">الممر المهني</span>
            <span className="path-rail h-2 w-24" aria-hidden="true" />
          </div>

          <div className="cut-card mt-8 flex flex-1 flex-col items-center justify-center gap-10 px-8 py-10">
            <div className="flex items-center gap-3">
              {seats.map((_, j) => (
                <span
                  key={j}
                  className={
                    j === i
                      ? "h-4 w-4 rounded-full bg-primary"
                      : "h-4 w-4 rounded-full border-2 border-rule"
                  }
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="text-[26pt] font-bold text-muted-foreground">{seat.no}</p>

            <p className="text-center text-[86pt] font-bold leading-none text-foreground">
              {seat.name}
            </p>

            <span className="path-rail h-3 w-40" aria-hidden="true" />
          </div>
        </div>
      ))}
    </MaterialShell>
  );
}
