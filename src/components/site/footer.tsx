import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/site/icons";
import { Logo } from "@/components/site/logo";
import { useI18n } from "@/lib/i18n";
import { EMAIL, OWNER, PHONE_DISPLAY, PHONE_TEL, SOCIAL, WHATSAPP_URL } from "@/lib/site";

const QUICK = [
  { key: "home", to: "/", hash: "accueil" },
  { key: "catalogue", to: "/catalogue", hash: undefined },
  { key: "about", to: "/about", hash: undefined },
  { key: "services", to: "/", hash: "services" },
  { key: "contact", to: "/contact", hash: undefined },
] as const;

export function Footer() {
  const { t } = useI18n();
  const labels = {
    home: t.nav.home,
    catalogue: t.nav.catalogue,
    about: t.nav.about,
    services: t.nav.services,
    contact: t.nav.contact,
  };

  return (
    <footer className="relative overflow-hidden border-t border-paper/10 bg-ink">
      <svg className="pointer-events-none absolute end-0 top-0 h-16 w-48 text-orange sm:h-20 sm:w-64" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="28,0 100,0 100,40 0,40" fill="currentColor" />
      </svg>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14">
        <Logo />
        <p className="mt-4 text-xs font-semibold tracking-[0.28em] text-orange">{t.footer.tagline}</p>
        <div className="mt-10 rounded-3xl border border-paper/10 bg-charcoal p-6 sm:p-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-xs font-semibold tracking-[0.22em] text-orange uppercase">{t.footer.info}</h2>
              <p className="mt-4 font-display text-2xl tracking-wide text-paper">EL AFIA MOTOS</p>
              <p className="mt-2 text-sm text-muted">
                {t.about.owner}: {OWNER}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-balance text-paper">{t.about.fullAddress}</p>
              <p className="mt-3 text-sm">
                <a className="text-paper transition-colors hover:text-orange" href={`tel:${PHONE_TEL}`} dir="ltr">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="text-sm">
                <a className="text-paper transition-colors hover:text-orange" href={`mailto:${EMAIL}`} dir="ltr">
                  {EMAIL}
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-[0.22em] text-orange uppercase">{t.footer.links}</h2>
              <ul className="mt-4 space-y-1">
                {QUICK.map((link) => (
                  <li key={link.key}>
                    <Link to={link.to} hash={link.hash} className="inline-flex min-h-10 items-center text-sm tracking-wide text-paper/80 transition-colors hover:text-orange">
                      {labels[link.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-paper/10 pt-6">
            <h2 className="text-xs font-semibold tracking-[0.22em] text-orange uppercase">{t.footer.follow}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <Social href={SOCIAL.facebook} label="Facebook">
                <FacebookIcon className="size-4" />
              </Social>
              <Social href={SOCIAL.instagram} label="Instagram">
                <InstagramIcon className="size-4" />
              </Social>
              <Social href={SOCIAL.tiktok} label="TikTok">
                <TikTokIcon className="size-4" />
              </Social>
              <Social href={WHATSAPP_URL} label="WhatsApp">
                <WhatsAppIcon className="size-4" />
              </Social>
              <Social href={`tel:${PHONE_TEL}`} label={t.location.phone}>
                <Phone className="size-4" />
              </Social>
              <Social href={`mailto:${EMAIL}`} label="Gmail">
                <Mail className="size-4" />
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-3 border-t border-paper/10 px-4 pt-5 pb-24 text-xs tracking-wide text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{t.footer.rights}</p>
        <p className="flex gap-4">
          <Link to="/mentions" className="hover:text-orange">
            {t.footer.legal}
          </Link>
          <Link to="/mentions" hash="confidentialite" className="hover:text-orange">
            {t.footer.privacy}
          </Link>
        </p>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-paper/15 text-paper transition-colors hover:border-orange hover:text-orange"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
