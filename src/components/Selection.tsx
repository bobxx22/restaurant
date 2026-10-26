"use client";

import { useEffect } from "react";
import { formatPrice, type MenuItem } from "@/data/site";
import { clearSelection, pluralDishes, setSheetOpen, useSelection, useSheetOpen } from "@/lib/selection";
import { QtyControl } from "./QtyControl";
import { CloseIcon, FlameMark, ListIcon } from "./icons";

// Панель «Ваш вибір» унизу екрана + вікно зі списком, який гість показує офіціанту.
export function Selection({ items }: { items: MenuItem[] }) {
  const selection = useSelection();
  const open = useSheetOpen();

  const chosen = items
    .filter((item) => selection[item.id])
    .map((item) => ({ ...item, qty: selection[item.id] }));
  const count = chosen.reduce((sum, item) => sum + item.qty, 0);
  const total = chosen.reduce((sum, item) => sum + item.qty * item.price, 0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSheetOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {count > 0 && !open && (
        <div className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-md sm:bottom-5">
          <button
            type="button"
            onClick={() => setSheetOpen(true)}
            className="flex w-full items-center gap-3 rounded-2xl bg-dark p-2 pl-4 text-left text-white shadow-2xl shadow-black/30 transition active:scale-[0.98]"
          >
            <ListIcon className="size-5 shrink-0 text-white/70" />
            <span className="flex-1">
              <span className="block text-xs text-white/60">Ваш вибір · {pluralDishes(count)}</span>
              <span className="block text-lg font-extrabold">{formatPrice(total)}</span>
            </span>
            <span className="rounded-xl bg-accent px-4 py-3 text-sm font-bold">Переглянути</span>
          </button>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
          <button
            type="button"
            aria-label="Закрити"
            onClick={() => setSheetOpen(false)}
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="selection-title"
            className="relative flex max-h-[88svh] w-full max-w-lg flex-col rounded-t-3xl bg-background shadow-2xl sm:rounded-3xl"
          >
            <div className="flex items-start justify-between gap-4 p-5 pb-3">
              <div>
                <h2 id="selection-title" className="font-display text-2xl font-semibold tracking-tight">
                  Ваш вибір
                </h2>
                <p className="mt-1 text-sm text-muted">Покажіть цей список офіціанту — він прийме замовлення.</p>
              </div>
              <button
                type="button"
                onClick={() => setSheetOpen(false)}
                aria-label="Закрити"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface ring-1 ring-line"
              >
                <CloseIcon />
              </button>
            </div>

            {chosen.length === 0 ? (
              <div className="px-5 pt-6 pb-10 text-center text-muted">
                Тут поки порожньо. Натисніть «Хочу» біля страви в меню.
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-line overflow-y-auto px-5">
                  {chosen.map((item) => (
                    <li key={item.id} className="flex items-center gap-3 py-3">
                      {item.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={item.image} alt="" className="size-14 shrink-0 rounded-xl object-cover" />
                      ) : (
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-surface text-line ring-1 ring-line">
                          <FlameMark className="size-7" />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="leading-snug font-bold">{item.name}</p>
                        <p className="text-sm text-muted">
                          {formatPrice(item.price)}
                          {item.qty > 1 && <> × {item.qty} = {formatPrice(item.price * item.qty)}</>}
                        </p>
                      </div>
                      <QtyControl id={item.id} name={item.name} size="sm" />
                    </li>
                  ))}
                </ul>

                <div className="border-t border-line p-5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-muted">Разом · {pluralDishes(count)}</span>
                    <span className="text-2xl font-extrabold">{formatPrice(total)}</span>
                  </div>
                  <div className="mt-4 grid grid-cols-[auto_1fr] gap-3">
                    <button
                      type="button"
                      onClick={clearSelection}
                      className="rounded-2xl px-5 py-4 font-semibold text-muted ring-1 ring-line transition hover:text-foreground"
                    >
                      Очистити
                    </button>
                    <button
                      type="button"
                      onClick={() => setSheetOpen(false)}
                      className="rounded-2xl bg-foreground py-4 font-bold text-white transition hover:bg-black"
                    >
                      Готово
                    </button>
                  </div>
                  <p className="mt-3 text-center text-xs text-muted">
                    Сума орієнтовна. Остаточний рахунок — у офіціанта.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
