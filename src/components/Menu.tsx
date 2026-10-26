"use client";

import { useEffect, useRef, useState } from "react";
import { formatPrice, type MenuCategory, type MenuItem, type MenuTag } from "@/data/site";
import { QtyControl } from "./QtyControl";
import { FlameMark } from "./icons";

const tagStyles: Record<MenuTag, string> = {
  хіт: "bg-accent text-white",
  гостре: "bg-white text-red-700",
  вегетаріанське: "bg-white text-green-800",
  новинка: "bg-foreground text-white",
};

export function Menu({ menu }: { menu: MenuCategory[] }) {
  const [active, setActive] = useState(menu[0]?.id);
  const navRef = useRef<HTMLDivElement>(null);

  // підсвічуємо розділ, який зараз на екрані
  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        const first = menu.find((c) => visible.has(c.id));
        if (first) setActive(first.id);
      },
      // смуга трохи нижче шапки: розділ активний, коли його верх доходить сюди
      { rootMargin: "-140px 0px -55% 0px" },
    );
    menu.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [menu]);

  // активна кнопка категорії завжди видима в смужці
  useEffect(() => {
    const chip = navRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    const strip = navRef.current;
    if (!chip || !strip) return;
    strip.scrollTo({ left: chip.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  return (
    <section id="menu" className="pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Меню</h2>
        <p className="mt-2 max-w-xl text-muted">
          Натискайте «Хочу» — ми порахуємо суму. Замовлення прийме офіціант.
        </p>
      </div>

      <nav className="sticky top-16 z-30 mt-6 bg-background/90 backdrop-blur-md">
        <div ref={navRef} className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3">
          {menu.map((category) => (
            <a
              key={category.id}
              data-id={category.id}
              href={`#${category.id}`}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === category.id
                  ? "bg-foreground text-white"
                  : "bg-surface text-foreground ring-1 ring-line hover:ring-foreground/30"
              }`}
            >
              {category.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4">
        {menu.map((category) => (
          <div key={category.id} id={category.id} className="pt-8">
            <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{category.title}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {category.items.map((item) => (
                <DishCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DishCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex overflow-hidden rounded-2xl bg-surface ring-1 ring-line sm:flex-col sm:rounded-3xl">
      <div className="relative aspect-square w-28 shrink-0 overflow-hidden bg-background sm:aspect-[4/3] sm:w-full">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="size-full object-cover transition duration-500 hover:scale-[1.04]"
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-2 text-line">
            <FlameMark className="size-10 sm:size-14" />
          </div>
        )}
        {item.tags && (
          <div className="absolute top-2 left-2 hidden flex-wrap gap-1 sm:flex">
            {item.tags.map((tag) => (
              <span key={tag} className={`rounded-full px-2.5 py-1 text-xs font-bold shadow-sm ${tagStyles[tag]}`}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-5">
        <div className="flex items-center gap-2 text-xs text-muted">
          {item.weight}
          {item.tags?.map((tag) => (
            <span key={tag} className="font-bold text-accent sm:hidden">
              · {tag}
            </span>
          ))}
        </div>
        <h4 className="mt-0.5 leading-snug font-bold sm:mt-1 sm:text-lg">{item.name}</h4>
        {item.description && (
          <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-muted sm:mt-2 sm:text-sm">
            {item.description}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between gap-2 pt-3 sm:pt-5">
          <span className="text-lg font-extrabold whitespace-nowrap sm:text-xl">{formatPrice(item.price)}</span>
          <QtyControl id={item.id} name={item.name} size="sm" />
        </div>
      </div>
    </article>
  );
}
