import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/site/icons";
import { useI18n } from "@/lib/i18n";
import { ADDRESS, EMAIL, OWNER, PHONE_DISPLAY, PHONE_TEL, SOCIAL, WHATSAPP_URL } from "@/lib/site";

const QUICK = [
  { key: "home", hash: "accueil" },
  { key: "motos", hash: "motos" },
  { key: "about", hash: "apropos" },
  { key: "services", hash: "services" },
  { key: "contact", hash: "contact" },
] as const;

export function Footer() {
  const { t } = useI18n();
  const labels = {
    home: t.nav.home,
    motos: t.nav.motos,
    about: t.nav.about,
    services: t.nav.services,
    contact: t.nav.contact,
  };

  return (
    <footer className="relative border-t border-paper/10 bg-ink">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <img src="/media/logo.png" alt="EL AFIA MOTOS" className="h-20 w-auto" />
          <p className="mt-4 text-sm font-semibold tracking-widest text-orange">{t.footer.tagline}</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-paper">{t.footer.links}</h2>
          <ul className="mt-3 space-y-2">
            {QUICK.map((link) => (
              <li key={link.hash}>
                <Link to="/" hash={link.hash} activeOptions={{ exact: true, includeHash: true }} className="text-sm text-muted hover:text-orange">
                  {labels[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-paper/15 bg-charcoal p-5">
          <h2 className="font-display text-xl text-paper">{t.footer.info}</h2>
          <p className="mt-3 text-sm text-muted">EL AFIA MOTOS</p>
          <p className="text-sm text-muted">
            {t.about.owner}: {OWNER}
          </p>
          <p className="mt-2 text-sm text-paper" dir="ltr">
            {ADDRESS}
          </p>
          <p className="mt-2 text-sm">
            <a className="text-paper hover:text-orange" href={`tel:${PHONE_TEL}`} dir="ltr">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="text-sm">
            <a className="text-paper hover:text-orange" href={`mailto:${EMAIL}`} dir="ltr">
              {EMAIL}
            </a>
          </p>
          <h2 className="mt-6 font-display text-xl text-paper">{t.footer.follow}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Social href={SOCIAL.facebook} label="Facebook">
              <FacebookIcon className="size-5" />
            </Social>
            <Social href={SOCIAL.instagram} label="Instagram">
              <InstagramIcon className="size-5" />
            </Social>
            <Social href={SOCIAL.tiktok} label="TikTok">
              <TikTokIcon className="size-5" />
            </Social>
            <Social href={WHATSAPP_URL} label="WhatsApp">
              <WhatsAppIcon className="size-5" />
            </Social>
            <Social href={`tel:${PHONE_TEL}`} label={t.location.phone}>
              <Phone className="size-5" />
            </Social>
            <Social href={`mailto:${EMAIL}`} label="Gmail">
              <Mail className="size-5" />
            </Social>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-3 border-t border-paper/10 px-4 pt-5 pb-24 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
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
      className="grid size-11 place-items-center rounded-full border border-paper/20 text-paper transition-colors hover:border-orange hover:text-orange"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
