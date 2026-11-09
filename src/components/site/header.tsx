import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { LangSwitch } from "@/components/site/lang-switch";
import { useI18n } from "@/lib/i18n";
import { whatsappWith } from "@/lib/site";

const LINKS = [
  { key: "home", hash: "accueil" },
  { key: "motos", hash: "motos" },
  { key: "about", hash: "apropos" },
  { key: "services", hash: "services" },
  { key: "reviews", hash: "avis" },
  { key: "contact", hash: "contact" },
] as const;

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const labels = {
    home: t.nav.home,
    motos: t.nav.motos,
    about: t.nav.about,
    services: t.nav.services,
    reviews: t.nav.reviews,
    contact: t.nav.contact,
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Logo />
        <nav className="ms-6 hidden items-center gap-5 lg:flex" aria-label="Main">
          {LINKS.map((link) => (
            <Link
              key={link.hash}
              to="/"
              hash={link.hash}
              activeOptions={{ exact: true, includeHash: true }}
              className="text-sm font-medium text-paper/80 transition-colors hover:text-orange data-[status=active]:text-orange"
            >
              {labels[link.key]}
            </Link>
          ))}
        </nav>
        <div className="ms-auto flex items-center gap-1 sm:gap-2">
          <div className="hidden md:block">
            <LangSwitch />
          </div>
          <div className="hidden sm:block">
            <a href={whatsappWith(t.wa.quick)} className="btn btn-wa h-10 min-h-10 px-4 text-sm">
              {t.nav.book}
            </a>
          </div>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-paper lg:hidden"
            aria-expanded={open}
            aria-label={open ? t.a11y.close : t.a11y.menu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-ink px-4 py-4 lg:hidden" aria-label="Mobile">
          {LINKS.map((link) => (
            <Link
              key={link.hash}
              to="/"
              hash={link.hash}
              activeOptions={{ exact: true, includeHash: true }}
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center border-b border-line text-lg font-medium text-paper"
            >
              {labels[link.key]}
            </Link>
          ))}
          <div className="mt-5 flex flex-col gap-4">
            <LangSwitch />
            <a href={whatsappWith(t.wa.quick)} className="btn btn-wa" onClick={() => setOpen(false)}>
              {t.nav.book}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
