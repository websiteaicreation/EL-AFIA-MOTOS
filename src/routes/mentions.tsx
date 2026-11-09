import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Shell } from "@/components/site/shell";
import { useI18n } from "@/lib/i18n";
import { ADDRESS, EMAIL, OWNER, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const Route = createFileRoute("/mentions")({
  component: MentionsPage,
});

function MentionsPage() {
  const { t } = useI18n();
  useEffect(() => {
    document.title = `${t.legal.title} | EL AFIA MOTOS`;
  }, [t]);

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-4 py-28">
        <h1 className="font-display text-4xl text-paper sm:text-5xl">{t.legal.title}</h1>
        <p className="mt-4 text-paper/80">{t.legal.intro}</p>
        <h2 className="mt-8 font-display text-2xl text-orange">{t.legal.editor}</h2>
        <p className="mt-2">EL AFIA MOTOS</p>
        <p>
          {t.about.owner}: {OWNER}
        </p>
        <p dir="ltr">{ADDRESS}</p>
        <p>
          <a className="hover:text-orange" href={`tel:${PHONE_TEL}`} dir="ltr">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p>
          <a className="hover:text-orange" href={`mailto:${EMAIL}`} dir="ltr">
            {EMAIL}
          </a>
        </p>
        <p className="mt-4 text-paper/80">{t.legal.host}</p>
        <h2 id="confidentialite" className="mt-10 scroll-mt-24 font-display text-2xl text-orange">
          {t.legal.privacyTitle}
        </h2>
        <p className="mt-3 text-paper/80">{t.legal.privacy}</p>
      </article>
    </Shell>
  );
}
