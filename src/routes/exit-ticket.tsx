import { createFileRoute } from "@tanstack/react-router";
import { MaterialShell, SheetHeader } from "@/components/MaterialShell";
import { exitTicketItems } from "@/lib/activity-data";

export const Route = createFileRoute("/exit-ticket")({
  head: () => ({
    meta: [
      { title: "ملحق ٥ — بطاقة الخروج | الممر المهني" },
      {
        name: "description",
        content:
          "بطاقة خروج بأربع مساحات تأمّل: المبدأ المطبَّق، العلاقة التي تحتاج تطويرًا، جملة الرفض المهنية، وموقف الاستشارة أو التوثيق.",
      },
      { property: "og:title", content: "ملحق ٥ — بطاقة الخروج" },
      { property: "og:description", content: "بطاقة خروج أنيقة جاهزة للطباعة." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExitTicket,
});

function ExitTicket() {
  return (
    <MaterialShell
      num="ملحق ٥"
      title="بطاقة الخروج"
      audience="للمشاركين"
      note="مساحات كتابة واسعة لأربعة بنود، ويمكن قصّ البطاقة من الإطار المنقّط."
    >
      <div className="sheet flex flex-col">
        <SheetHeader num="ملحق ٥" title="بطاقة الخروج" />

        <div className="cut-card flex flex-1 flex-col gap-6 px-8 py-8">
          <div className="flex flex-wrap items-end gap-8">
            <div className="flex min-w-[70mm] flex-1 items-end gap-3">
              <span className="text-[12pt] font-bold text-foreground">الاسم:</span>
              <span className="flex-1 border-b-2 border-dotted border-rule pb-1" />
            </div>
            <div className="flex min-w-[50mm] flex-1 items-end gap-3">
              <span className="text-[12pt] font-bold text-foreground">التاريخ:</span>
              <span className="flex-1 border-b-2 border-dotted border-rule pb-1" />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-5">
            {exitTicketItems.map((item, i) => (
              <section
                key={item}
                className="flex flex-1 flex-col rounded-xl border border-border bg-secondary/40 px-5 py-4"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-[10pt] font-bold text-primary-foreground">
                    {["١", "٢", "٣", "٤"][i]}
                  </span>
                  <p className="text-[12.5pt] font-bold leading-7 text-foreground">{item}</p>
                </div>
                <div className="mt-3 flex-1 space-y-0">
                  <div className="write-line" />
                  <div className="write-line" />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </MaterialShell>
  );
}
