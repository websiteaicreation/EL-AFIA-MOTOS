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
    <svg viewBox="0 0 88 36" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 25.2a7.2 7.2 0 1 0 14.4 0 7.2 7.2 0 0 0-14.4 0Zm2.5 0a4.7 4.7 0 1 1 9.4 0 4.7 4.7 0 0 1-9.4 0ZM63.2 25.2a7.2 7.2 0 1 0 14.4 0 7.2 7.2 0 0 0-14.4 0Zm2.5 0a4.7 4.7 0 1 1 9.4 0 4.7 4.7 0 0 1-9.4 0Z"
      />
      <path
        fill="currentColor"
        d="M22.4 23.8h8.2l2.2-5.2h5.1c1.3 0 2.5.6 3.3 1.6l2.1 2.7h6.6l3.6-4.4c.7-.9 1.8-1.4 2.9-1.4h3.4v2.2h-2.8c-.4 0-.7.2-1 .5l-2.6 3.1H42.7l-1.6-2.1h-4.4l-1.9 4.6H22.4Z"
      />
      <path
        fill="currentColor"
        d="M31.2 18.2 35.8 13c1.6-1.8 4.1-2.5 6.4-1.7 1.6.5 2.8 1.7 3.4 3.3l.6 1.8h-6.1l-1.8-1.5c-.6-.5-1.5-.5-2.1.1L34 17.4h-2.8Z"
      />
      <path d="M0 21.5h7.2" stroke="#FF8500" strokeWidth="2" strokeLinecap="round" />
      <path d="M0 25.2h4.4" stroke="#FF8500" strokeWidth="1.4" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}
