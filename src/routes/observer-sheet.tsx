import { createFileRoute } from "@tanstack/react-router";
import { MaterialShell, SheetHeader } from "@/components/MaterialShell";
import { observerClosingQuestion, observerRows } from "@/lib/activity-data";

export const Route = createFileRoute("/observer-sheet")({
  head: () => ({
    meta: [
      { title: "ملحق ٤ — وثيقة المراقب | الممر المهني" },
      {
        name: "description",
        content:
          "وثيقة المراقب بمقاس A4: جدول المقاعد الأربعة لتسجيل العبارة كما سمعتها والمبدأ الظاهر والحد أو الخطوة التالية.",
      },
      { property: "og:title", content: "ملحق ٤ — وثيقة المراقب" },
      { property: "og:description", content: "أداة ملاحظة مهنية جاهزة للطباعة." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ObserverSheet,
});

function ObserverSheet() {
  return (
    <MaterialShell
      num="ملحق ٤"
      title="وثيقة المراقب"
      audience="للمشاركين"
      note="صفحة A4 عمودية، مساحات كتابة واسعة لتسجيل العبارة كما سمعتها."
    >
      <div className="sheet flex flex-col">
        <SheetHeader num="ملحق ٤" title="وثيقة المراقب" />

        <div className="mb-6 flex flex-wrap items-end justify-between gap-6 rounded-xl border border-border bg-secondary/60 px-6 py-4">
          <div className="flex min-w-[95mm] items-end gap-3">
            <span className="whitespace-nowrap text-[12pt] font-bold text-foreground">
              اسم المراقب:
            </span>
            <span className="flex-1 border-b-2 border-dotted border-rule pb-1" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[12pt] font-bold text-foreground">الجولة:</span>
            <span className="flex items-center gap-2 text-[12pt] font-bold text-foreground">
              <span className="inline-block h-5 w-5 border-2 border-rule" aria-hidden="true" /> ١
            </span>
            <span className="flex items-center gap-2 text-[12pt] font-bold text-foreground">
              <span className="inline-block h-5 w-5 border-2 border-rule" aria-hidden="true" /> ٢
            </span>
          </div>
        </div>

        <table className="doc-table text-[11pt]">
          <colgroup>
            <col style={{ width: "8mm" }} />
            <col style={{ width: "24mm" }} />
            <col style={{ width: "70mm" }} />
            <col style={{ width: "30mm" }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>م</th>
              <th>المقعد</th>
              <th>ماذا قال المشارك؟ (العبارة كما سمعتها)</th>
              <th>المبدأ الظاهر</th>
              <th>الحد أو الخطوة التالية</th>
            </tr>
          </thead>
          <tbody>
            {observerRows.map((r) => (
              <tr key={r.no} style={{ height: "38mm" }}>
                <td className="text-center font-bold text-primary">{r.no}</td>
                <td className="font-bold">{r.seat}</td>
                <td />
                <td />
                <td />
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-7">
          <p className="text-[12pt] font-bold text-primary">سؤال ختامي:</p>
          <p className="mt-1 text-[12pt] leading-7 text-foreground">{observerClosingQuestion}</p>
          <div className="mt-4 space-y-0">
            <div className="write-line" />
            <div className="write-line" />
            <div className="write-line" />
          </div>
        </div>
      </div>
    </MaterialShell>
  );
}
