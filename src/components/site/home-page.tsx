import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  BadgeDollarSign,
  Bike,
  CalendarRange,
  Headset,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Mail,
  Wallet,
} from "lucide-react";
import { Shell } from "@/components/site/shell";
import { WhatsAppIcon } from "@/components/site/icons";
import { BIKES, pricesFor, type BikeSlug } from "@/lib/fleet";
import { useI18n, type Dictionary } from "@/lib/i18n";
import {
  EMAIL,
  MAPS_EMBED,
  MAPS_LINK,
  OWNER,
  PHONE_DISPLAY,
  PHONE_TEL,
  formatInputDate,
  formatMoney,
  whatsappWith,
} from "@/lib/site";

const DURATION_KEYS = ["d1", "d2", "d3", "w1", "w2", "m1"] as const;

export function HomePage({ initialMoto }: { initialMoto?: BikeSlug }) {
  const { t, lang } = useI18n();

  useEffect(() => {
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.description);
  }, [t]);

  return (
    <Shell>
      <Hero t={t} />
      <Fleet t={t} lang={lang} />
      <About t={t} />
      <Services t={t} />
      <Booking t={t} lang={lang} initialMoto={initialMoto} />
      <Location t={t} />
      <Reviews t={t} />
      <Contact t={t} />
    </Shell>
  );
}

function Hero({ t }: { t: Dictionary }) {
  return (
    <>
      <section id="accueil" className="relative isolate flex h-[50svh] items-center justify-center overflow-hidden">
        <img
          src="/media/hero.jpg"
          alt={t.hero.alt}
          width={1672}
          height={941}
          className="absolute inset-0 h-full w-full object-cover object-[center_62%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-5 text-center">
          <p className="font-display text-3xl leading-none tracking-wide text-paper sm:text-6xl">EL AFIA</p>
          <p className="font-display text-3xl leading-none tracking-wide text-orange sm:text-6xl">MOTOS</p>
          <p className="mx-auto mt-2 max-w-xl text-sm font-medium text-paper sm:text-xl">{t.hero.tagline}</p>
          <p className="mx-auto mt-1 hidden max-w-xl text-sm text-paper/85 sm:block">{t.hero.lead}</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <a href="#motos" className="btn btn-orange h-10 min-h-10 px-4 text-sm">
              {t.hero.discover}
            </a>
            <a href="#reserver" className="btn btn-ghost h-10 min-h-10 px-4 text-sm">
              <WhatsAppIcon className="size-4" />
              {t.hero.book}
            </a>
          </div>
        </div>
      </section>
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 bg-ink px-4 py-4 lg:grid-cols-4">
        <Trust icon={<ShieldCheck className="size-5" />} label={t.trust.pro} />
        <Trust icon={<BadgeDollarSign className="size-5" />} label={t.trust.price} />
        <Trust icon={<MessageCircle className="size-5" />} label={t.trust.easy} />
        <Trust icon={<MapPin className="size-5" />} label={t.trust.city} />
      </ul>
    </>
  );
}

function Trust({ icon, label }: { icon: ReactNode; label: string }) {
  return (
      <li className="flex min-w-0 items-center gap-3 rounded-2xl border border-paper/20 bg-ink/60 px-3 py-3 backdrop-blur-md">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-orange/15 text-orange">{icon}</span>
      <span className="text-sm font-medium text-paper">{label}</span>
    </li>
  );
}

function Fleet({ t, lang }: { t: Dictionary; lang: "fr" | "en" | "ar" }) {
  return (
    <section id="motos" className="scroll-mt-20 bg-ink px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={t.fleet.kicker} title={t.fleet.title} sub={t.fleet.sub} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {BIKES.map((bike) => {
            const prices = pricesFor(bike);
            const blurb = t.bikes[bike.slug];
            return (
              <article key={bike.slug} className="overflow-hidden rounded-3xl bg-paper text-ink shadow-xl">
                <div className={`aspect-square ${bike.fit === "cover" ? "bg-ink" : "bg-mist"}`}>
                  <img
                    src={bike.image}
                    alt={t.alt[bike.slug]}
                    width={bike.width}
                    height={bike.height}
                    className={`h-full w-full ${bike.fit === "cover" ? "object-cover" : "object-contain p-4"}`}
                    loading="lazy"
                  />
                </div>
                <div className="px-5 pb-5">
                  <h3 className="font-display text-3xl tracking-wide">{bike.name}</h3>
                  <p className="mt-1 text-sm text-ink/70">{blurb}</p>
                  <ul className="mt-4 space-y-1 text-sm">
                    <PriceLine amount={prices.daily} period={t.period.day} lang={lang} />
                    <PriceLine amount={prices.weekly} period={t.period.week} lang={lang} />
                    <PriceLine amount={prices.monthly} period={t.period.month} lang={lang} />
                  </ul>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    <Link to="/motos/$slug" params={{ slug: bike.slug }} className="btn btn-line">
                      {t.fleet.details}
                    </Link>
                    <Link to="/" hash="reserver" search={{ moto: bike.slug }} className="btn btn-orange">
                      {t.fleet.book}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">{t.fleet.note}</p>
      </div>
    </section>
  );
}

function PriceLine({ amount, period, lang }: { amount: number; period: string; lang: "fr" | "en" | "ar" }) {
  return (
    <li>
      <span className="font-semibold tabular-nums" dir="ltr">
        {formatMoney(amount, lang)}
      </span>
      <span className="text-ink/60"> / {period}</span>
    </li>
  );
}

function About({ t }: { t: Dictionary }) {
  const points = [
    { icon: <ShieldCheck className="size-5" />, label: t.about.points.pro },
    { icon: <Bike className="size-5" />, label: t.about.points.range },
    { icon: <Headset className="size-5" />, label: t.about.points.contact },
  ];
  return (
    <section id="apropos" className="scroll-mt-20 bg-charcoal px-4 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-widest text-orange">{t.about.kicker}</p>
          <h2 className="mt-2 font-display text-4xl text-paper sm:text-5xl">{t.about.title}</h2>
          <p className="mt-4 text-paper/85">{t.about.p1}</p>
          <p className="mt-3 text-paper/85">{t.about.p2}</p>
          <div className="mt-6 rounded-3xl border border-paper/10 bg-ink p-5">
            <p className="text-sm text-muted">{t.about.owner}</p>
            <p className="font-display text-2xl tracking-wide text-paper">{OWNER}</p>
            <p className="mt-4 text-sm text-muted">{t.about.address}</p>
            <p className="text-paper">{t.about.fullAddress}</p>
          </div>
          <ul className="mt-5 grid grid-cols-3 gap-3">
            {points.map((point) => (
              <li key={point.label} className="rounded-2xl border border-paper/10 bg-panel px-2 py-4 text-center">
                <span className="mx-auto grid size-10 place-items-center rounded-full bg-orange/15 text-orange">{point.icon}</span>
                <span className="mt-2 block text-xs font-medium text-paper sm:text-sm">{point.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            src="/media/rider.jpg"
            alt={t.alt.rider}
            width={1000}
            height={1333}
            className="aspect-3/4 w-full rounded-3xl object-cover"
            loading="lazy"
          />
          <span className="absolute -start-3 -top-3 hidden size-16 rounded-2xl bg-orange sm:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function Services({ t }: { t: Dictionary }) {
  const items = [
    { icon: <Bike className="size-5" />, ...t.services.items.moto },
    { icon: <Bike className="size-5" />, ...t.services.items.scooter },
    { icon: <Wallet className="size-5" />, ...t.services.items.prices },
    { icon: <WhatsAppIcon className="size-5" />, ...t.services.items.wa },
    { icon: <Headset className="size-5" />, ...t.services.items.help },
    { icon: <CalendarRange className="size-5" />, ...t.services.items.flex },
  ];
  return (
    <section id="services" className="scroll-mt-20 relative isolate overflow-hidden px-4 py-20">
      <img src="/media/road.jpg" alt="" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading kicker={t.services.kicker} title={t.services.title} sub={t.services.sub} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="rounded-3xl border border-paper/10 bg-ink/75 p-6 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1">
              <span className="grid size-12 place-items-center rounded-full bg-orange text-ink">{item.icon}</span>
              <h3 className="mt-4 font-display text-2xl text-paper">{item.title}</h3>
              <p className="mt-2 text-sm text-paper/75">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Booking({ t, lang, initialMoto }: { t: Dictionary; lang: "fr" | "en" | "ar"; initialMoto?: BikeSlug }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [moto, setMoto] = useState(initialMoto ?? "");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState(false);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    if (initialMoto) setMoto(initialMoto);
  }, [initialMoto]);

  useEffect(() => {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    setMinDate(local.toISOString().slice(0, 10));
  }, []);

  function submit(event: FormEvent) {
    event.preventDefault();
    const durationLabel = DURATION_KEYS.includes(duration as (typeof DURATION_KEYS)[number])
      ? t.book.durations[duration as (typeof DURATION_KEYS)[number]]
      : "";
    const bikeName = BIKES.find((bike) => bike.slug === moto)?.name ?? "";
    if (name.trim().length < 2 || phone.trim().length < 6 || !bikeName || !date || !durationLabel) {
      setError(true);
      return;
    }
    setError(false);
    const lines = [
      t.wa.hello,
      "",
      t.wa.want,
      "",
      `${t.wa.name}: ${name.trim()}`,
      `${t.wa.phone}: ${phone.trim()}`,
      `${t.wa.bike}: ${bikeName}`,
      `${t.wa.date}: ${formatInputDate(date, lang)}`,
      `${t.wa.duration}: ${durationLabel}`,
    ];
    if (note.trim()) lines.push(`${t.wa.note}: ${note.trim()}`);
    lines.push("", t.wa.thanks);
    window.location.assign(whatsappWith(lines.join("\n")));
  }

  return (
    <section id="reserver" className="scroll-mt-20 bg-charcoal px-4 py-20">
      <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-widest text-orange">{t.book.kicker}</p>
          <h2 className="mt-2 font-display text-4xl text-paper sm:text-5xl">{t.book.title}</h2>
          <p className="mt-3 text-paper/75">{t.book.sub}</p>
          <ol className="mt-5 grid gap-2 sm:grid-cols-3">
            {t.book.steps.map((step, index) => (
              <li key={step} className="rounded-2xl border border-paper/10 bg-ink px-3 py-3 text-sm text-paper">
                <span className="font-display text-orange">{index + 1}</span> {step}
              </li>
            ))}
          </ol>
          <form onSubmit={submit} className="mt-6 space-y-3 rounded-3xl bg-paper p-5 text-ink" noValidate>
            <label className="block text-sm font-medium">
              {t.book.name}
              <input className="field mt-1" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label className="block text-sm font-medium">
              {t.book.phone}
              <input className="field mt-1" name="phone" type="tel" autoComplete="tel" dir="ltr" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>
            <label className="block text-sm font-medium">
              {t.book.moto}
              <select className="field mt-1" name="moto" value={moto} onChange={(e) => setMoto(e.target.value)} required>
                <option value="">{t.book.moto}</option>
                {BIKES.map((bike) => (
                  <option key={bike.slug} value={bike.slug}>
                    {bike.name}
                  </option>
                ))}
              </select>
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                {t.book.date}
                <input className="field mt-1" type="date" name="date" min={minDate || undefined} value={date} onChange={(e) => setDate(e.target.value)} required />
              </label>
              <label className="block text-sm font-medium">
                {t.book.duration}
                <select className="field mt-1" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required>
                  <option value="">{t.book.duration}</option>
                  {DURATION_KEYS.map((key) => (
                    <option key={key} value={key}>
                      {t.book.durations[key]}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="block text-sm font-medium">
              {t.book.message} <span className="font-normal text-ink/50">({t.book.optional})</span>
              <textarea className="field mt-1 min-h-24 py-3" name="message" value={note} onChange={(e) => setNote(e.target.value)} />
            </label>
            {error ? (
              <p role="alert" className="text-sm font-medium text-orange-deep">
                {t.book.error}
              </p>
            ) : null}
            <button type="submit" className="btn btn-orange w-full">
              <WhatsAppIcon className="size-5" />
              {t.book.submit}
            </button>
          </form>
        </div>
        <div className="relative min-h-96 overflow-hidden rounded-3xl">
          <img src="/media/rider.jpg" alt={t.alt.rider} width={1000} height={1333} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <a href={whatsappWith(t.wa.quick)} className="grid size-16 place-items-center rounded-full bg-wa text-wa-ink">
              <WhatsAppIcon className="size-9" />
            </a>
            <p className="mt-4 font-display text-3xl text-paper">{t.book.helpTitle}</p>
            <p className="text-paper/85">{t.book.helpText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location({ t }: { t: Dictionary }) {
  return (
    <section id="localisation" className="scroll-mt-20 bg-ink px-4 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-widest text-orange">{t.location.kicker}</p>
          <h2 className="mt-2 font-display text-4xl text-paper sm:text-5xl">{t.location.title}</h2>
          <p className="mt-3 text-paper/75">{t.location.sub}</p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-orange" />
              <span>{t.about.fullAddress}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-5 text-orange" />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-orange" dir="ltr">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <WhatsAppIcon className="size-5 text-wa" />
              <a href={whatsappWith(t.wa.quick)} className="hover:text-orange">
                {t.location.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-5 text-orange" />
              <a href={`mailto:${EMAIL}`} className="hover:text-orange" dir="ltr">
                {EMAIL}
              </a>
            </li>
          </ul>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-orange mt-6">
            {t.location.maps}
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-paper/10 bg-panel">
          <iframe title={t.location.title} src={MAPS_EMBED} className="h-64 w-full sm:h-80 lg:h-[28rem]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}

function Reviews({ t }: { t: Dictionary }) {
  return (
    <section id="avis" className="scroll-mt-20 bg-charcoal px-4 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl border border-paper/10 bg-ink px-6 py-12 text-center">
        <p className="text-sm font-semibold tracking-widest text-orange">{t.reviews.kicker}</p>
        <h2 className="mt-2 font-display text-4xl text-paper sm:text-5xl">{t.reviews.title}</h2>
        <p className="mt-3 text-paper/70">{t.reviews.sub}</p>
        <p className="mt-4 text-paper/85">{t.reviews.body}</p>
        <a href={whatsappWith(t.wa.review)} className="btn btn-orange mt-6">
          {t.reviews.cta}
        </a>
      </div>
    </section>
  );
}

function Contact({ t }: { t: Dictionary }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  function submit(event: FormEvent) {
    event.preventDefault();
    if (name.trim().length < 2 || message.trim().length < 2) {
      setError(true);
      return;
    }
    const text = [t.wa.hello, "", t.wa.contactIntro, "", `${t.wa.name}: ${name.trim()}`, email.trim() ? `${t.wa.email}: ${email.trim()}` : "", `${t.wa.note}: ${message.trim()}`]
      .filter((line) => line !== "")
      .join("\n");
    window.location.assign(whatsappWith(text));
  }

  return (
    <section id="contact" className="scroll-mt-20 relative isolate overflow-hidden px-4 py-20">
      <img src="/media/medina.jpg" alt={t.alt.medina} width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-widest text-orange">{t.contact.kicker}</p>
          <h2 className="mt-2 font-display text-4xl text-paper sm:text-5xl">{t.contact.title}</h2>
          <p className="mt-3 max-w-md text-paper/80">{t.contact.sub}</p>
        </div>
        <form onSubmit={submit} className="space-y-3 rounded-3xl bg-paper p-5 text-ink" noValidate>
          <label className="block text-sm font-medium">
            {t.contact.name}
            <input className="field mt-1" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label className="block text-sm font-medium">
            {t.contact.email} <span className="font-normal text-ink/50">({t.book.optional})</span>
            <input className="field mt-1" type="email" name="email" autoComplete="email" dir="ltr" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="block text-sm font-medium">
            {t.contact.message}
            <textarea className="field mt-1 min-h-28 py-3" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </label>
          {error ? (
            <p role="alert" className="text-sm font-medium text-orange-deep">
              {t.contact.error}
            </p>
          ) : null}
          <button type="submit" className="btn btn-orange w-full">
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}

function SectionHeading({ kicker, title, sub }: { kicker: string; title: string; sub: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-widest text-orange">{kicker}</p>
      <h2 className="mt-2 font-display text-4xl text-paper sm:text-5xl">{title}</h2>
      <p className="mt-3 text-muted">{sub}</p>
    </div>
  );
}
