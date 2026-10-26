"use client";

import { setQty, useSelection } from "@/lib/selection";
import { MinusIcon, PlusIcon } from "./icons";

export function QtyControl({ id, name, size = "md" }: { id: string; name: string; size?: "sm" | "md" }) {
  const qty = useSelection()[id] ?? 0;
  const h = size === "sm" ? "h-9" : "h-10";

  if (qty === 0) {
    return (
      <button
        type="button"
        onClick={() => setQty(id, 1)}
        aria-label={`Додати «${name}» до вибору`}
        className={`${h} rounded-full px-5 text-sm font-bold ring-1 ring-foreground/15 transition hover:bg-foreground hover:text-white hover:ring-foreground active:scale-95`}
      >
        Хочу
      </button>
    );
  }

  return (
    <div className={`${h} flex items-center rounded-full bg-accent text-white`}>
      <button
        type="button"
        onClick={() => setQty(id, qty - 1)}
        aria-label={`Менше «${name}»`}
        className={`flex ${h} w-10 items-center justify-center rounded-full transition hover:bg-black/10 active:scale-90`}
      >
        <MinusIcon />
      </button>
      <span className="min-w-6 text-center text-sm font-bold tabular-nums" aria-live="polite">
        {qty}
      </span>
      <button
        type="button"
        onClick={() => setQty(id, qty + 1)}
        aria-label={`Більше «${name}»`}
        className={`flex ${h} w-10 items-center justify-center rounded-full transition hover:bg-black/10 active:scale-90`}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
