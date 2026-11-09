import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Fleet } from "@/components/site/home-page";
import { Shell } from "@/components/site/shell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/catalogue")({
  component: CataloguePage,
});

function CataloguePage() {
  const { t, lang } = useI18n();
  useEffect(() => {
    document.title = `${t.nav.catalogue} | EL AFIA MOTOS`;
  }, [t]);

  return (
    <Shell>
      <div className="pt-20">
        <Fleet t={t} lang={lang} />
      </div>
    </Shell>
  );
}
