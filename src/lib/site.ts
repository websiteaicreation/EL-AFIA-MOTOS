export const PHONE_DISPLAY = "+212 604 598 662";
export const PHONE_TEL = "+212604598662";
export const WHATSAPP_URL = "https://wa.me/212604598662";
export const EMAIL = "elafiamoto@gmail.com";
export const ADDRESS = "AV BNI HDIFA NR 21 KOUILMA TETOUAN, MOROCCO";
export const ADDRESS_LINE = "AV BNI HDIFA NR 21 KOUILMA TETOUAN";
export const OWNER = "AYOUB EL AFIA";
export const MAPS_LINK = "https://share.google/7mUBtzXFnzIClYhin";
export const MAPS_EMBED = "https://maps.google.com/maps?q=EL+AFIA+MOTOS&z=17&output=embed";

export const SOCIAL = {
  facebook: "https://www.facebook.com/elafiamotos",
  instagram: "https://www.instagram.com/elafiamotos",
  tiktok: "https://www.tiktok.com/elafiamotos",
} as const;

export function whatsappWith(text: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}

export function formatMoney(amount: number, lang: "fr" | "en" | "ar") {
  const locale = lang === "ar" ? "ar-MA" : lang === "en" ? "en-US" : "fr-MA";
  const formatted = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(amount);
  return lang === "ar" ? `${formatted} درهم` : `${formatted} DH`;
}

export function formatInputDate(iso: string, lang: "fr" | "en" | "ar") {
  if (!iso) return "";
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  const date = new Date(year, month - 1, day);
  const locale = lang === "ar" ? "ar-MA" : lang === "en" ? "en-GB" : "fr-FR";
  return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(date);
}
