import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Contact } from "@/components/site/home-page";
import { Shell } from "@/components/site/shell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  useEffect(() => {
    document.title = `${t.nav.contact} | EL AFIA MOTOS`;
  }, [t]);

  return (
    <Shell>
      <div className="pt-20">
        <Contact t={t} />
      </div>
    </Shell>
  );
}
