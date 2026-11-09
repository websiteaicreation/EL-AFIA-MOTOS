import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Shell } from "@/components/site/shell";
import { WhatsAppIcon } from "@/components/site/icons";
import { BIKES, getBike, pricesFor } from "@/lib/fleet";
import { useI18n } from "@/lib/i18n";
import { formatMoney, whatsappWith } from "@/lib/site";

export function BikePage({ slug }: { slug: string }) {
  const { t, lang, dir } = useI18n();
  const bike = getBike(slug);

  useEffect(() => {
    if (!bike) return;
    document.title = `${bike.name} | EL AFIA MOTOS`;
  }, [bike, lang]);

  if (!bike) return null;

  const prices = pricesFor(bike);
  const rows = [
    { amount: prices.daily, period: t.period.day },
    { amount: prices.weekly, period: t.period.week },
    { amount: prices.monthly, period: t.period.month },
  ];
  const features = [t.detail.f1, t.detail.f2, t.detail.f3, t.detail.f4];
  const message = [t.wa.hello, "", t.wa.want, "", `${t.wa.bike}: ${bike.name}`, "", t.wa.thanks].join("\n");
  const BackIcon = dir === "rtl" ? ChevronRight : ChevronLeft;

  return (
    <Shell>
      <article className="bg-ink px-4 pt-24 pb-20">
        <div className="mx-auto max-w-6xl">
          <Link to="/" hash="motos" className="inline-flex min-h-11 items-center gap-1 text-sm text-paper/80 hover:text-orange">
            <BackIcon className="size-4" />
            {t.detail.back}
          </Link>
          <div className="mt-6 grid items-start gap-8 lg:grid-cols-2">
            <div className={`overflow-hidden rounded-3xl ${bike.fit === "cover" ? "bg-charcoal" : "bg-mist"}`}>
              <img
                src={bike.image}
                alt={t.alt[bike.slug]}
                width={bike.width}
                height={bike.height}
                className={`aspect-video w-full lg:aspect-square ${bike.fit === "cover" ? "object-cover" : "object-contain p-6"}`}
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-orange">{bike.kind === "scooter" ? t.services.items.scooter.title : t.services.items.moto.title}</p>
              <h1 className="mt-1 font-display text-5xl tracking-wide text-paper sm:text-6xl">{bike.name}</h1>
              <p className="mt-4 text-lg text-paper/80">{t.bikes[bike.slug]}</p>
              <h2 className="mt-8 font-display text-2xl text-paper">{t.detail.prices}</h2>
              <ul className="mt-3 grid grid-cols-3 gap-2">
                {rows.map((row) => (
                  <li key={row.period} className="rounded-2xl border border-paper/10 bg-panel px-2 py-4 text-center">
                    <p className="font-display text-lg text-orange sm:text-2xl" dir="ltr">
                      {formatMoney(row.amount, lang)}
                    </p>
                    <p className="mt-1 text-xs text-muted sm:text-sm">/ {row.period}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted">{t.fleet.note}</p>
              <h2 className="mt-8 font-display text-2xl text-paper">{t.detail.features}</h2>
              <ul className="mt-3 space-y-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-paper/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-orange" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <h2 className="mt-8 font-display text-2xl text-paper">{t.detail.durations}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {Object.values(t.book.durations).map((label) => (
                  <li key={label} className="rounded-full border border-paper/15 px-3 py-2 text-sm text-paper">
                    {label}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappWith(message)} className="btn btn-orange">
                  <WhatsAppIcon className="size-5" />
                  {t.detail.book}
                </a>
                <Link to="/" hash="reserver" search={{ moto: bike.slug }} className="btn btn-ghost">
                  {t.detail.dates}
                </Link>
              </div>
            </div>
          </div>
          <h2 className="mt-16 font-display text-3xl text-paper">{t.detail.others}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {BIKES.filter((item) => item.slug !== bike.slug).map((item) => (
              <li key={item.slug}>
                <Link to="/motos/$slug" params={{ slug: item.slug }} className="flex items-center gap-3 rounded-2xl border border-paper/10 bg-panel p-3 hover:border-orange">
                  <img src={item.image} alt="" width={80} height={80} className="size-16 rounded-xl object-cover" />
                  <span className="font-display text-xl">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Shell>
  );
}

export function BikeMissing() {
  const { t } = useI18n();
  return (
    <Shell>
      <div className="mx-auto max-w-xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl text-paper">{t.missing.title}</h1>
        <p className="mt-3 text-muted">{t.missing.text}</p>
        <Link to="/" hash="motos" className="btn btn-orange mt-6">
          {t.missing.back}
        </Link>
      </div>
    </Shell>
  );
}
