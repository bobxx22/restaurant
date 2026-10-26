import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
        <p className="font-display text-7xl font-bold text-accent">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold">Сторінку не знайдено</h1>
        <p className="mt-3 text-muted">Можливо, посилання застаріло. Поверніться на головну або перегляньте меню.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="rounded-xl border border-line px-6 py-3 font-semibold">
            На головну
          </Link>
          <Link href="/#menu" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white">
            Переглянути меню
          </Link>
        </div>
      </main>
    </>
  );
}
