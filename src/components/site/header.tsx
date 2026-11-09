import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { LangSwitch } from "@/components/site/lang-switch";
import { useI18n } from "@/lib/i18n";
import { whatsappWith } from "@/lib/site";

const PAGES = [
  { key: "about", to: "/about" },
  { key: "catalogue", to: "/catalogue" },
  { key: "contact", to: "/contact" },
] as const;

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const labels = {
    about: t.nav.about,
    catalogue: t.nav.catalogue,
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
      if (event.key === "Escape") {
        setOpen(false);
        setMenuOpen(false);
      }
    }
    function onPointer(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-3 px-4">
        <Logo />
        <nav className="ms-6 hidden items-center gap-5 lg:flex" aria-label="Main">
          <Link to="/" hash="accueil" className="text-sm font-medium text-paper/80 transition-colors hover:text-orange">
            {t.nav.home}
          </Link>
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-paper/80 transition-colors hover:text-orange"
              aria-expanded={menuOpen}
              aria-haspopup="true"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {t.nav.menu}
              <ChevronDown className={`size-4 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
            </button>
            {menuOpen ? (
              <div className="absolute start-0 top-full z-50 mt-2 min-w-52 overflow-hidden rounded-2xl border border-paper/10 bg-charcoal py-2 shadow-xl">
                {PAGES.map((page) => (
                  <Link
                    key={page.to}
                    to={page.to}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-11 items-center px-4 text-sm font-medium text-paper hover:bg-paper/5 hover:text-orange"
                  >
                    {labels[page.key]}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Link to="/" hash="services" className="text-sm font-medium text-paper/80 transition-colors hover:text-orange">
            {t.nav.services}
          </Link>
        </nav>
        <div className="ms-auto flex shrink-0 items-center gap-1">
          <LangSwitch />
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
        <nav className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-ink px-4 py-4 lg:hidden" aria-label="Mobile">
          <Link to="/" hash="accueil" onClick={() => setOpen(false)} className="flex min-h-14 items-center border-b border-line text-lg font-medium text-paper">
            {t.nav.home}
          </Link>
          <p className="mt-4 text-xs font-semibold tracking-widest text-orange">{t.nav.menu}</p>
          {PAGES.map((page) => (
            <Link
              key={page.to}
              to={page.to}
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center border-b border-line text-lg font-medium text-paper"
            >
              {labels[page.key]}
            </Link>
          ))}
          <Link to="/" hash="services" onClick={() => setOpen(false)} className="flex min-h-14 items-center border-b border-line text-lg font-medium text-paper">
            {t.nav.services}
          </Link>
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
