type Props = { className?: string };

export function FacebookIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 8.5h2.6V5.4h-2.6c-2 0-3.5 1.5-3.5 3.6v1.8H8.2v3.1h2.5V21h3.2v-6.9h2.6l.8-3.1h-3.4V9.2c0-.5.3-.7.8-.7z"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M14 3h2.3c.3 1.7 1.4 3.1 3 3.9V9.2c-1.2-.1-2.3-.5-3.3-1.1v6.5c0 3.3-2.6 5.7-5.8 5.7S4.4 17.9 4.4 14.6 7 8.9 10.2 8.9c.4 0 .7 0 1.1.1v2.5c-.3-.2-.7-.2-1.1-.2-1.8 0-3.2 1.5-3.2 3.3s1.4 3.3 3.2 3.3 3.2-1.5 3.2-3.3V3z"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 3.5A8.4 8.4 0 0 0 3.7 11.8c0 1.48.39 2.92 1.13 4.19L3.6 20.5l4.64-1.21a8.5 8.5 0 0 0 3.8.9h.01a8.4 8.4 0 0 0 0-16.8zm4.9 11.85c-.2.58-1.2 1.1-1.68 1.17-.43.06-.98.1-1.58-.1-.36-.12-.82-.28-1.41-.54-2.48-1.07-4.1-3.56-4.22-3.73-.12-.16-1-1.33-1-2.54s.64-1.8.86-2.05c.22-.24.47-.3.63-.3h.45c.14 0 .34-.05.53.41.2.48.67 1.66.73 1.78.06.12.1.27.02.44-.08.17-.12.27-.25.42-.13.15-.26.32-.37.44-.12.12-.25.25-.11.49.15.24.65 1.07 1.4 1.73.96.85 1.76 1.11 2.01 1.24.25.12.4.1.55-.06.15-.17.63-.73.8-.99.17-.25.34-.21.56-.12.23.08 1.46.69 1.71.82.25.12.42.19.48.29.06.11.06.61-.14 1.19z"
      />
    </svg>
  );
}

export function Mark({ className }: Props) {
  return (
    <svg viewBox="0 0 64 40" className={className} fill="none" aria-hidden="true">
      <circle cx="14" cy="28" r="8" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="28" r="8" stroke="currentColor" strokeWidth="3" />
      <path
        d="M14 28h8l5-12h8l4 7h7M27 16l-4-6h9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
