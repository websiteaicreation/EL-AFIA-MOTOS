import type { ReactNode } from "react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { useI18n } from "@/lib/i18n";

export function Shell({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-20 focus:z-50 focus:rounded-full focus:bg-orange focus:px-4 focus:py-2 focus:text-ink"
      >
        {t.a11y.skip}
      </a>
      <Header />
      <main id="contenu">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
