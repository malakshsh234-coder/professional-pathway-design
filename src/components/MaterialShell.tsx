import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  num: string;
  title: string;
  note?: string;
  audience: string;
  children: ReactNode;
};

export function MaterialShell({ num, title, note, audience, children }: Props) {
  return (
    <div className="min-h-screen bg-background pb-16" dir="rtl">
      <header className="no-print sticky top-0 z-10 border-b border-border bg-card/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="path-rail h-9 w-1.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold text-muted-foreground">{num}</p>
              <h1 className="text-lg font-bold text-foreground">{title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="station-chip">{audience}</span>
            <button
              onClick={() => window.print()}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              طباعة
            </button>
            <Link
              to="/"
              className="rounded-lg border border-border px-4 py-2 text-sm font-bold text-foreground transition hover:bg-secondary"
            >
              الملحقات
            </Link>
          </div>
        </div>
        {note ? (
          <p className="mx-auto max-w-5xl px-5 pb-4 text-sm leading-7 text-muted-foreground">
            {note}
          </p>
        ) : null}
      </header>

      <main className="mx-auto mt-8 w-fit space-y-8 px-4">{children}</main>
    </div>
  );
}

export function SheetHeader({
  num,
  title,
  hint,
}: {
  num: string;
  title: string;
  hint?: string;
}) {
  return (
    <div className="mb-6 flex items-start justify-between gap-4 border-b-2 border-primary/25 pb-4">
      <div>
        <p className="text-[11pt] font-bold text-primary">{num}</p>
        <h2 className="text-[19pt] font-bold leading-tight text-foreground">{title}</h2>
      </div>
      <div className="flex items-center gap-2 pt-2">
        <span className="path-rail h-2 w-14" aria-hidden="true" />
        <span className="text-[10pt] font-bold text-muted-foreground">الممر المهني</span>
      </div>
      {hint ? <span className="sr-only">{hint}</span> : null}
    </div>
  );
}
