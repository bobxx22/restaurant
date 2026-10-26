import Link from "next/link";
import { phoneHref, site } from "@/data/site";
import { FacebookIcon, FlameMark, InstagramIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mt-16 bg-dark pb-24 text-white/70 sm:pb-0">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2 text-white">
            <FlameMark className="size-7 text-accent [--background:var(--dark)]" />
            <span className="font-display text-xl font-semibold">{site.name}</span>
          </Link>
          <p className="mt-2 text-sm">{site.type}</p>
        </div>

        <div className="flex flex-col gap-1 text-sm md:text-right">
          <a href={phoneHref} className="text-lg font-bold text-white hover:underline">
            {site.phone}
          </a>
          <span>{site.address}</span>
          <span>{site.hoursShort}</span>
        </div>

        <div className="flex gap-3">
          {[
            { href: site.instagram, label: "Instagram", Icon: InstagramIcon },
            { href: site.facebook, label: "Facebook", Icon: FacebookIcon },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex size-11 items-center justify-center rounded-full text-white ring-1 ring-white/20 transition hover:bg-white/10"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {site.name}. Ціни в меню вказано в гривнях.
      </div>
    </footer>
  );
}
