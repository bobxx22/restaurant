import { site } from "@/data/site";

export function Promos() {
  return (
    <section id="promo" className="mx-auto max-w-7xl pt-10 sm:pt-14">
      <h2 className="px-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">Акції</h2>

      {/* на телефоні гортаються вбік, на комп'ютері стоять у ряд */}
      <div className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-1 sm:gap-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {site.promos.map((promo) => {
          const light = promo.theme === "light";
          return (
            <article
              key={promo.title}
              className="relative isolate aspect-[16/10] w-[86%] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[60%] lg:w-auto"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={promo.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-20 size-full object-cover"
              />
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-r ${
                  light ? "from-[#f3ece2] via-[#f3ece2]/70 to-transparent" : "from-black/75 via-black/40 to-transparent"
                }`}
              />
              <div className={`flex h-full max-w-[70%] flex-col justify-end p-5 sm:max-w-[62%] sm:p-6 ${light ? "text-foreground" : "text-white"}`}>
                <h3 className="font-display text-lg leading-tight font-semibold sm:text-2xl">{promo.title}</h3>
                <p className={`mt-2 text-sm leading-snug ${light ? "text-foreground/75" : "text-white/80"}`}>
                  {promo.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
