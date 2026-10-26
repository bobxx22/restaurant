import { phoneHref, site } from "@/data/site";
import { HeroEffects } from "./HeroEffects";
import { ClockIcon, MenuBookIcon, PhoneIcon, PinIcon } from "./icons";

export function Hero() {
  const { hero } = site;

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="relative isolate mx-auto h-[calc(100svh-5.5rem)] max-h-[760px] min-h-[540px] max-w-7xl overflow-hidden rounded-[28px] bg-dark text-white md:h-[640px] md:min-h-0">
        {/* фото під відео: видно, поки відео вантажиться */}
        <picture>
          <source media="(min-width: 768px)" srcSet={hero.posterDesktop} />
          <img src={hero.posterMobile} alt="" className="absolute inset-0 -z-20 size-full object-cover" />
        </picture>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 -z-20 size-full object-cover"
        >
          <source media="(min-width: 768px)" src={hero.videoDesktop} type="video/mp4" />
          <source src={hero.videoMobile} type="video/mp4" />
        </video>

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/25 to-black/10 md:bg-gradient-to-r md:from-black/75 md:via-black/30 md:to-transparent" />
        <HeroEffects />

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:top-0 md:flex md:max-w-2xl md:flex-col md:justify-center md:p-14">
          <p className="text-sm font-semibold text-white/75">
            {site.type} · {site.address.split(", ").at(-1)}
          </p>
          <h1 className="mt-3 font-display text-[2.1rem] leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl md:text-[3.6rem]">
            {site.tagline}
          </h1>

          <div className="mt-8 grid gap-3 sm:flex">
            <a
              href="#menu"
              className="flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-lg font-bold text-foreground transition hover:bg-background"
            >
              <MenuBookIcon className="size-6" />
              Переглянути меню
            </a>
            <a
              href={phoneHref}
              className="flex items-center justify-center gap-3 rounded-2xl bg-white/12 px-7 py-4 text-lg font-semibold ring-1 ring-white/25 backdrop-blur-md transition hover:bg-white/20"
            >
              <PhoneIcon className="size-5" />
              Забронювати столик
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
            <span className="flex items-center gap-2">
              <ClockIcon className="size-4" />
              {site.hoursShort}
            </span>
            <span className="flex items-center gap-2">
              <PinIcon className="size-4" />
              {site.address}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
