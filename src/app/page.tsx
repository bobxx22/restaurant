import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Promos } from "@/components/Promos";
import { Selection } from "@/components/Selection";
import { ClockIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { mapsEmbedUrl, mapsSearchUrl, phoneHref, site } from "@/data/site";

export default function Home() {
  const allItems = site.menu.flatMap((category) => category.items);
  const [mainPhoto, ...sidePhotos] = site.about.images;

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Promos />
        <Menu menu={site.menu} />

        {/* Про нас */}
        <section id="about" className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {site.about.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{site.description}</p>
              <dl className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                {site.about.features.map((feature) => (
                  <div key={feature.title} className="border-l-2 border-accent pl-4">
                    <dt className="font-bold">{feature.title}</dt>
                    <dd className="mt-1 text-sm text-muted">{feature.text}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mainPhoto}
                alt={`Зала ресторану ${site.name}`}
                loading="lazy"
                className="col-span-2 aspect-[16/10] w-full rounded-3xl object-cover"
              />
              {sidePhotos.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
              ))}
            </div>
          </div>
        </section>

        {/* Контакти */}
        <section id="contacts" className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="grid overflow-hidden rounded-3xl bg-surface ring-1 ring-line md:grid-cols-2">
            <div className="p-6 sm:p-10">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Як нас знайти</h2>

              <div className="mt-8 grid gap-6">
                <div className="flex gap-4">
                  <PinIcon className="mt-0.5 size-6 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-bold">Адреса</h3>
                    <p className="text-muted">{site.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <PhoneIcon className="mt-0.5 size-6 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-bold">Телефон</h3>
                    <a href={phoneHref} className="text-muted hover:text-foreground">
                      {site.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ClockIcon className="mt-0.5 size-6 shrink-0 text-accent" />
                  <div className="flex-1">
                    <h3 className="font-bold">Графік роботи</h3>
                    <dl className="mt-1 max-w-xs">
                      {site.hours.map((row) => (
                        <div key={row.days} className="flex justify-between text-muted">
                          <dt>{row.days}</dt>
                          <dd className="tabular-nums">{row.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:flex">
                <a
                  href={phoneHref}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 font-bold text-white transition hover:bg-accent-dark"
                >
                  <PhoneIcon />
                  Забронювати столик
                </a>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold ring-1 ring-line transition hover:bg-background"
                >
                  <PinIcon />
                  Прокласти маршрут
                </a>
              </div>
            </div>

            <iframe
              src={mapsEmbedUrl}
              title={`${site.name} на карті`}
              className="h-80 w-full md:h-full md:min-h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <Footer />
      <Selection items={allItems} />
    </>
  );
}
