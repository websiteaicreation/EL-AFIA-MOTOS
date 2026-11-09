import { WhatsAppIcon } from "@/components/site/icons";
import { useI18n } from "@/lib/i18n";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppFloat() {
  const { t } = useI18n();
  return (
    <a
      href={WHATSAPP_URL}
      className="wa-pulse fixed bottom-5 end-5 z-40 grid size-14 place-items-center rounded-full bg-wa text-wa-ink shadow-lg"
      aria-label={t.nav.book}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}
