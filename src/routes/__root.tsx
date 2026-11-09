import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { I18nProvider } from "@/lib/i18n";
import appCss from "../styles.css?url";

const BUSINESS = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "EL AFIA MOTOS",
  description:
    "Location de motos et scooters à Tétouan, Maroc. Tarifs généraux : 150 MAD par jour, 900 MAD par semaine, 3 500 MAD par mois.",
  telephone: "+212604598662",
  email: "elafiamoto@gmail.com",
  currenciesAccepted: "MAD",
  address: {
    "@type": "PostalAddress",
    streetAddress: "AV BNI HDIFA NR 21 KOUILMA",
    addressLocality: "Tétouan",
    addressCountry: "MA",
  },
  founder: { "@type": "Person", name: "AYOUB EL AFIA" },
  areaServed: { "@type": "City", name: "Tétouan" },
  sameAs: [
    "https://www.facebook.com/elafiamotos",
    "https://www.instagram.com/elafiamotos",
    "https://www.tiktok.com/elafiamotos",
  ],
  makesOffer: {
    "@type": "Offer",
    priceCurrency: "MAD",
    price: "150",
    description: "Tarif général à la journée. Semaine : 900 MAD. Mois : 3500 MAD. Disponibilité confirmée par l'agence.",
  },
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EL AFIA MOTOS | Location moto et scooter à Tétouan" },
      {
        name: "description",
        content:
          "Location moto Tétouan et location scooter Tétouan. Motorcycle and scooter rental in Tetouan, Morocco. Capochino, Swing, Sania, Daytona. 150 DH/jour. Réservation WhatsApp.",
      },
      { name: "theme-color", content: "#080808" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@500;700&family=Oswald:wght@500;600;700&family=Outfit:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preload", as: "image", href: "/media/hero.jpg" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(BUSINESS) }],
  }),
  component: () => (
    <html lang="fr" dir="ltr" suppressHydrationWarning className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body className="bg-ink font-sans text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <I18nProvider>
            <Outlet />
          </I18nProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
