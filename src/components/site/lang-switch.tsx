import { LANGS, useI18n, type Lang } from "@/lib/i18n";

export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div className={`inline-flex items-center gap-1 ${className}`} role="group" aria-label="Language">
      {LANGS.map((item) => {
        const active = item.id === lang;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setLang(item.id as Lang)}
            className={`min-h-11 min-w-11 rounded-full px-2 text-sm font-semibold ${
              active ? "bg-orange text-ink" : "text-paper/80 hover:text-paper"
            }`}
            aria-pressed={active}
            lang={item.id}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
