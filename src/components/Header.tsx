import Link from "next/link";
import { phoneHref, site } from "@/data/site";
import { SelectionButton } from "./SelectionButton";
import { FlameMark, PhoneIcon } from "./icons";

const nav = [
  { href: "/#menu", label: "Меню" },
  { href: "/#promo", label: "Акції" },
  { href: "/#about", label: "Про нас" },
  { href: "/#contacts", label: "Контакти" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <FlameMark className="size-7 text-accent" />
          <span className="font-display text-xl font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-[15px] font-semibold lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneHref}
            aria-label={`Подзвонити ${site.phone}`}
            className="flex h-11 items-center gap-2 rounded-full bg-surface px-3 font-semibold ring-1 ring-line transition hover:ring-foreground/30 sm:px-4"
          >
            <PhoneIcon className="size-[18px]" />
            <span className="hidden text-sm sm:inline">{site.phone}</span>
          </a>
          <SelectionButton />
        </div>
      </div>
    </header>
  );
}
