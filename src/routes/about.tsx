import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { About } from "@/components/site/home-page";
import { Shell } from "@/components/site/shell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  useEffect(() => {
    document.title = `${t.nav.about} | EL AFIA MOTOS`;
  }, [t]);

  return (
    <Shell>
      <div className="pt-20">
        <About t={t} />
      </div>
    </Shell>
  );
}
