"use client";

import { setSheetOpen, useSelection } from "@/lib/selection";
import { ListIcon } from "./icons";

export function SelectionButton() {
  const selection = useSelection();
  const count = Object.values(selection).reduce((sum, qty) => sum + qty, 0);

  return (
    <button
      type="button"
      onClick={() => setSheetOpen(true)}
      aria-label={count ? `Мій вибір: ${count}` : "Мій вибір"}
      className="relative flex size-11 items-center justify-center rounded-full bg-surface ring-1 ring-line transition hover:ring-foreground/30"
    >
      <ListIcon />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-white">
          {count}
        </span>
      )}
    </button>
  );
}
