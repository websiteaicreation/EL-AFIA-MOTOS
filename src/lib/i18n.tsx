import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en" | "ar";

const STORAGE_KEY = "elafia-lang";

const fr = {
  meta: {
    title: "EL AFIA MOTOS | Location moto et scooter à Tétouan",
    description:
      "Location moto Tétouan et location scooter Tétouan. Motorcycle and scooter rental in Tetouan, Morocco. EL AFIA MOTOS : Capochino, Swing, Sania, Daytona. Tarifs généraux 150 DH/jour, 900 DH/semaine, 3 500 DH/mois. Réservation WhatsApp.",
  },
  a11y: { skip: "Aller au contenu", menu: "Ouvrir le menu", close: "Fermer le menu" },
  nav: {
    home: "Accueil",
    motos: "Nos motos",
    about: "À propos",
    services: "Services",
    reviews: "Avis",
    contact: "Contact",
    book: "Réserver",
  },
  hero: {
    tagline: "Votre moto, votre liberté.",
    lead: "Découvrez Tétouan en toute liberté. Louez votre moto ou scooter avec EL AFIA MOTOS.",
    discover: "Découvrir nos motos",
    book: "Réserver sur WhatsApp",
    alt: "Scooters et moto garés au coucher du soleil à Tétouan",
  },
  trust: {
    pro: "Service professionnel",
    price: "Tarifs avantageux",
    easy: "Réservation facile",
    city: "À Tétouan",
  },
  fleet: {
    kicker: "Catalogue",
    title: "Notre flotte",
    sub: "Quatre modèles proposés à la location à Tétouan : scooters Capochino, Swing et Sania, et moto Daytona.",
    details: "Voir les détails",
    book: "Réserver",
    note: "Tarifs généraux communiqués par l'agence, appliqués à chaque modèle tant qu'un prix spécifique n'est pas indiqué. La disponibilité, la caution et les conditions sont confirmées par EL AFIA MOTOS avant la location.",
  },
  period: { day: "jour", week: "semaine", month: "mois" },
  bikes: {
    capochino: "Scooter au style rétro, confortable pour circuler dans Tétouan.",
    swing: "Scooter compact et maniable pour les trajets du quotidien.",
    sania: "Scooter urbain simple à prendre en main, pensé pour la ville.",
    daytona: "Moto au look sportif pour rouler à Tétouan et aux alentours.",
  },
  alt: {
    capochino: "Scooter Capochino couleur crème",
    swing: "Scooter Swing noir",
    sania: "Scooter Sania argent",
    daytona: "Moto Daytona orange et noire",
    rider: "Motard casqué sur une route au crépuscule",
    medina: "Architecture de la médina de Tétouan",
    road: "Route de montagne près de Tétouan",
  },
  about: {
    kicker: "L'agence",
    title: "À propos de EL AFIA MOTOS",
    p1: "EL AFIA MOTOS est une agence de location de motos et scooters basée à Tétouan, au Maroc. La sélection comprend les modèles Capochino, Swing, Sania et Daytona.",
    p2: "La mission de l'agence est simple : rendre la location accessible, pour explorer la ville ou organiser un déplacement local, avec une réservation par téléphone ou WhatsApp.",
    owner: "Propriétaire",
    address: "Adresse",
    fullAddress: "AV BNI HDIFA NR 21 KOUILMA TETOUAN, MOROCCO",
    city: "Tétouan, Maroc",
    points: {
      pro: "Service professionnel",
      range: "Motos et scooters",
      contact: "Contact direct",
    },
  },
  services: {
    kicker: "Ce que nous proposons",
    title: "Nos services",
    sub: "Uniquement les services confirmés par l'agence.",
    items: {
      moto: {
        title: "Location de motos",
        text: "La Daytona est proposée à la location pour circuler à Tétouan et aux alentours.",
      },
      scooter: {
        title: "Location de scooters",
        text: "Capochino, Swing et Sania : trois scooters pour les déplacements en ville.",
      },
      prices: {
        title: "Tarifs accessibles",
        text: "Tarif général : 150 DH par jour, 900 DH par semaine, 3 500 DH par mois.",
      },
      wa: {
        title: "Réservation WhatsApp",
        text: "Envoyez votre demande en quelques instants. L'agence confirme la disponibilité.",
      },
      help: {
        title: "Assistance client",
        text: "Une question avant ou pendant la location ? Écrivez ou appelez l'agence.",
      },
      flex: {
        title: "Durées flexibles",
        text: "Location à la journée, à la semaine ou au mois, selon les motos disponibles.",
      },
    },
  },
  book: {
    kicker: "Demande",
    title: "Réserver votre moto",
    sub: "Le formulaire ouvre une conversation WhatsApp. Aucune réservation n'est confirmée automatiquement.",
    steps: ["Choisissez la moto et les dates", "Envoyez la demande sur WhatsApp", "L'agence confirme la disponibilité"],
    name: "Votre nom",
    phone: "Téléphone",
    moto: "Choisir une moto",
    date: "Date de début",
    duration: "Durée de location",
    message: "Message",
    optional: "facultatif",
    submit: "Réserver sur WhatsApp",
    helpTitle: "Besoin d'aide ?",
    helpText: "Écrivez-nous directement sur WhatsApp.",
    error: "Indiquez votre nom, un téléphone, une moto, une date et une durée.",
    durations: {
      d1: "1 jour",
      d2: "2 jours",
      d3: "3 jours",
      w1: "1 semaine",
      w2: "2 semaines",
      m1: "1 mois",
    },
  },
  location: {
    kicker: "Agence",
    title: "Notre localisation",
    sub: "Venez nous rendre visite à l'agence, à Kouilma, Tétouan.",
    maps: "Voir sur Google Maps",
    whatsapp: "WhatsApp",
    phone: "Téléphone",
    email: "E-mail",
  },
  reviews: {
    kicker: "Témoignages",
    title: "Ce que disent nos clients",
    sub: "Aucun avis client n'est affiché tant que de vrais retours ne nous ont pas été transmis.",
    body: "Vous avez loué chez EL AFIA MOTOS ? Partagez votre expérience sur WhatsApp. Seuls les avis réels, une fois reçus, seront publiés ici.",
    cta: "Partager mon expérience",
  },
  contact: {
    kicker: "Écrire",
    title: "Contactez-nous",
    sub: "Nous répondons aux questions de location par téléphone, e-mail ou WhatsApp.",
    name: "Votre nom",
    email: "Votre e-mail",
    message: "Votre message",
    send: "Envoyer sur WhatsApp",
    error: "Indiquez votre nom et votre message.",
  },
  footer: {
    tagline: "YOUR RIDE, YOUR FREEDOM.",
    info: "Informations",
    links: "Liens rapides",
    follow: "Suivez-nous",
    rights: "© 2026 EL AFIA MOTOS. Tous droits réservés.",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
  },
  detail: {
    back: "Retour à la flotte",
    prices: "Tarifs généraux",
    features: "À retenir",
    durations: "Durées possibles",
    book: "Réserver sur WhatsApp",
    dates: "Préciser les dates",
    others: "Les autres modèles",
    f1: "Location à la journée, à la semaine ou au mois",
    f2: "Demande envoyée sur WhatsApp, avec le nom du modèle",
    f3: "Retrait à l'agence : AV BNI HDIFA NR 21, Kouilma, Tétouan",
    f4: "Le prix définitif est confirmé par l'agence avant la location",
  },
  legal: {
    title: "Mentions légales",
    privacyTitle: "Politique de confidentialité",
    intro:
      "Ce site présente EL AFIA MOTOS, agence de location de motos et scooters à Tétouan. Il ne s'agit pas d'un certificat d'immatriculation.",
    editor: "Éditeur",
    host: "Le site est une vitrine. Les demandes de location ne sont pas enregistrées dans une base de données du site : elles s'ouvrent dans WhatsApp pour être traitées par l'agence.",
    privacy:
      "La langue choisie (français, anglais ou arabe) est mémorisée uniquement dans votre navigateur. Les formulaires ne sont pas envoyés à un serveur de l'agence : ils préparent un message WhatsApp. Consultez la politique de WhatsApp pour le traitement de cette conversation. Aucune donnée personnelle n'est vendue depuis ce site.",
  },
  missing: {
    title: "Modèle introuvable",
    text: "Ce lien ne correspond à aucune moto du catalogue.",
    back: "Voir la flotte",
  },
  wa: {
    hello: "Bonjour EL AFIA MOTOS,",
    want: "Je souhaite réserver une moto.",
    name: "Nom",
    phone: "Téléphone",
    bike: "Moto",
    date: "Date de début",
    duration: "Durée",
    note: "Message",
    thanks: "Merci de me confirmer la disponibilité et le prix.",
    contactIntro: "Bonjour EL AFIA MOTOS, je vous contacte depuis le site.",
    email: "E-mail",
    review: "Bonjour EL AFIA MOTOS, je souhaite partager mon expérience de location.",
    quick: "Bonjour EL AFIA MOTOS, je souhaite des informations pour une location.",
  },
};

const en: typeof fr = {
  meta: {
    title: "EL AFIA MOTOS | Motorcycle and scooter rental in Tetouan",
    description:
      "Motorcycle rental Tetouan and scooter rental Tetouan. Location moto et scooter à Tétouan, Maroc. EL AFIA MOTOS: Capochino, Swing, Sania, Daytona. General rates 150 DH/day, 900 DH/week, 3,500 DH/month. Book on WhatsApp.",
  },
  a11y: { skip: "Skip to content", menu: "Open menu", close: "Close menu" },
  nav: {
    home: "Home",
    motos: "Our motorcycles",
    about: "About",
    services: "Services",
    reviews: "Reviews",
    contact: "Contact",
    book: "Book",
  },
  hero: {
    tagline: "Your ride, your freedom.",
    lead: "Discover Tetouan with freedom and comfort. Rent your favorite motorcycle or scooter with EL AFIA MOTOS.",
    discover: "Discover our motorcycles",
    book: "Book on WhatsApp",
    alt: "Scooters and a motorcycle parked at sunset in Tetouan",
  },
  trust: {
    pro: "Professional service",
    price: "Affordable prices",
    easy: "Easy booking",
    city: "Located in Tetouan",
  },
  fleet: {
    kicker: "Catalog",
    title: "Our fleet",
    sub: "Four rental models in Tetouan: Capochino, Swing and Sania scooters, and the Daytona motorcycle.",
    details: "View details",
    book: "Book",
    note: "These are the general rates supplied by the agency, shown for every model until a specific price is set. Availability, any deposit, and rental conditions are confirmed by EL AFIA MOTOS before a rental.",
  },
  period: { day: "day", week: "week", month: "month" },
  bikes: {
    capochino: "Retro-style scooter, comfortable for getting around Tetouan.",
    swing: "Compact, easy-handling scooter for everyday trips.",
    sania: "Urban scooter that is simple to ride in the city.",
    daytona: "Sport-styled motorcycle for riding in and around Tetouan.",
  },
  alt: {
    capochino: "Cream Capochino scooter",
    swing: "Black Swing scooter",
    sania: "Silver Sania scooter",
    daytona: "Orange and black Daytona motorcycle",
    rider: "Helmeted rider on a road at dusk",
    medina: "Tetouan medina architecture",
    road: "Mountain road near Tetouan",
  },
  about: {
    kicker: "The agency",
    title: "About EL AFIA MOTOS",
    p1: "EL AFIA MOTOS is a motorcycle and scooter rental agency based in Tetouan, Morocco. The selection includes Capochino, Swing, Sania, and Daytona.",
    p2: "The mission is straightforward: make renting accessible, whether you are exploring the city or arranging local transport, with booking by phone or WhatsApp.",
    owner: "Owner",
    address: "Address",
    fullAddress: "AV BNI HDIFA NR 21 KOUILMA TETOUAN, MOROCCO",
    city: "Tetouan, Morocco",
    points: {
      pro: "Professional service",
      range: "Motorcycles and scooters",
      contact: "Direct contact",
    },
  },
  services: {
    kicker: "What we offer",
    title: "Our services",
    sub: "Only services confirmed by the business.",
    items: {
      moto: {
        title: "Motorcycle rental",
        text: "The Daytona is available to rent for riding in and around Tetouan.",
      },
      scooter: {
        title: "Scooter rental",
        text: "Capochino, Swing, and Sania: three scooters for getting around the city.",
      },
      prices: {
        title: "Affordable rates",
        text: "General rate: 150 DH per day, 900 DH per week, 3,500 DH per month.",
      },
      wa: {
        title: "WhatsApp reservations",
        text: "Send a request in a few moments. The agency confirms availability.",
      },
      help: {
        title: "Customer assistance",
        text: "A question before or during the rental? Message or call the agency.",
      },
      flex: {
        title: "Flexible durations",
        text: "Rent by the day, the week, or the month, subject to availability.",
      },
    },
  },
  book: {
    kicker: "Request",
    title: "Book your motorcycle",
    sub: "The form opens a WhatsApp conversation. A reservation is not confirmed automatically.",
    steps: ["Choose the motorcycle and dates", "Send the request on WhatsApp", "The agency confirms availability"],
    name: "Your name",
    phone: "Phone",
    moto: "Select a motorcycle",
    date: "Start date",
    duration: "Rental duration",
    message: "Message",
    optional: "optional",
    submit: "Book on WhatsApp",
    helpTitle: "Need help?",
    helpText: "Message us directly on WhatsApp.",
    error: "Enter your name, a phone number, a motorcycle, a date, and a duration.",
    durations: {
      d1: "1 day",
      d2: "2 days",
      d3: "3 days",
      w1: "1 week",
      w2: "2 weeks",
      m1: "1 month",
    },
  },
  location: {
    kicker: "Agency",
    title: "Our location",
    sub: "Visit the agency in Kouilma, Tetouan.",
    maps: "Open in Google Maps",
    whatsapp: "WhatsApp",
    phone: "Phone",
    email: "Email",
  },
  reviews: {
    kicker: "Testimonials",
    title: "What our customers say",
    sub: "No customer reviews are shown until genuine feedback is provided.",
    body: "Have you rented with EL AFIA MOTOS? Share your experience on WhatsApp. Only real reviews, once received, will be published here.",
    cta: "Share my experience",
  },
  contact: {
    kicker: "Write",
    title: "Contact us",
    sub: "Rental questions are answered by phone, email, or WhatsApp.",
    name: "Your name",
    email: "Your email",
    message: "Your message",
    send: "Send on WhatsApp",
    error: "Enter your name and your message.",
  },
  footer: {
    tagline: "YOUR RIDE, YOUR FREEDOM.",
    info: "Information",
    links: "Quick links",
    follow: "Follow us",
    rights: "© 2026 EL AFIA MOTOS. All rights reserved.",
    legal: "Legal notice",
    privacy: "Privacy policy",
  },
  detail: {
    back: "Back to the fleet",
    prices: "General rates",
    features: "Good to know",
    durations: "Available durations",
    book: "Book on WhatsApp",
    dates: "Add dates",
    others: "Other models",
    f1: "Daily, weekly, or monthly rental",
    f2: "Request sent on WhatsApp, including the model name",
    f3: "Pickup at the agency: AV BNI HDIFA NR 21, Kouilma, Tetouan",
    f4: "The final price is confirmed by the agency before the rental",
  },
  legal: {
    title: "Legal notice",
    privacyTitle: "Privacy policy",
    intro:
      "This website presents EL AFIA MOTOS, a motorcycle and scooter rental agency in Tetouan. It is not a company registration certificate.",
    editor: "Publisher",
    host: "The site is a brochure. Rental requests are not stored in a database on this website: they open in WhatsApp and are handled by the agency.",
    privacy:
      "Your language choice (French, English, or Arabic) is saved only in your browser. Forms are not posted to an agency server: they prepare a WhatsApp message. See WhatsApp's policy for how that conversation is processed. No personal data is sold from this site.",
  },
  missing: {
    title: "Model not found",
    text: "This link does not match a motorcycle in the catalog.",
    back: "View the fleet",
  },
  wa: {
    hello: "Hello EL AFIA MOTOS,",
    want: "I would like to reserve a motorcycle.",
    name: "Name",
    phone: "Phone",
    bike: "Motorcycle",
    date: "Start date",
    duration: "Duration",
    note: "Message",
    thanks: "Please confirm availability and the price.",
    contactIntro: "Hello EL AFIA MOTOS, I am contacting you from the website.",
    email: "Email",
    review: "Hello EL AFIA MOTOS, I would like to share my rental experience.",
    quick: "Hello EL AFIA MOTOS, I would like information about a rental.",
  },
};

const ar: typeof fr = {
  meta: {
    title: "EL AFIA MOTOS | كراء الدراجات النارية والسكوتر في تطوان",
    description:
      "كراء دراجة نارية في تطوان وكراء سكوتر في تطوان. Location moto Tetouan. EL AFIA MOTOS: Capochino وSwing وSania وDaytona. الأسعار العامة 150 درهم لليوم و900 درهم للأسبوع و3500 درهم للشهر. الحجز عبر واتساب.",
  },
  a11y: { skip: "الانتقال إلى المحتوى", menu: "فتح القائمة", close: "إغلاق القائمة" },
  nav: {
    home: "الرئيسية",
    motos: "دراجاتنا",
    about: "من نحن",
    services: "الخدمات",
    reviews: "الآراء",
    contact: "اتصل بنا",
    book: "احجز",
  },
  hero: {
    tagline: "دراجتك، حريتك.",
    lead: "اكتشف تطوان بحرية وراحة. استأجر دراجتك النارية أو سكوترك مع EL AFIA MOTOS.",
    discover: "اكتشف دراجاتنا",
    book: "احجز عبر واتساب",
    alt: "سكوترات ودراجة عند غروب الشمس في تطوان",
  },
  trust: {
    pro: "خدمة مهنية",
    price: "أسعار مناسبة",
    easy: "حجز سهل",
    city: "في تطوان",
  },
  fleet: {
    kicker: "الكتالوج",
    title: "أسطولنا",
    sub: "أربعة نماذج للكراء في تطوان: سكوترات Capochino وSwing وSania، ودراجة Daytona.",
    details: "عرض التفاصيل",
    book: "احجز",
    note: "هذه أسعار عامة قدّمتها الوكالة، وتُعرض لكل النماذج إلى أن يُحدَّد سعر خاص. التوفر والضمانة وشروط الكراء يؤكدها EL AFIA MOTOS قبل الكراء.",
  },
  period: { day: "يوم", week: "أسبوع", month: "شهر" },
  bikes: {
    capochino: "سكوتر بطابع كلاسيكي، مريح للتنقل داخل تطوان.",
    swing: "سكوتر مدمج وسهل القيادة للتنقلات اليومية.",
    sania: "سكوتر حضري بسيط ومناسب للمدينة.",
    daytona: "دراجة بطابع رياضي للتنقل في تطوان ومحيطها.",
  },
  alt: {
    capochino: "سكوتر Capochino بلون كريمي",
    swing: "سكوتر Swing أسود",
    sania: "سكوتر Sania فضي",
    daytona: "دراجة Daytona برتقالية وسوداء",
    rider: "سائق بخوذة على طريق عند الغروب",
    medina: "عمارة مدينة تطوان القديمة",
    road: "طريق جبلي قرب تطوان",
  },
  about: {
    kicker: "الوكالة",
    title: "عن EL AFIA MOTOS",
    p1: "EL AFIA MOTOS وكالة لكراء الدراجات النارية والسكوترات في تطوان بالمغرب. التشكيلة تضم Capochino وSwing وSania وDaytona.",
    p2: "هدف الوكالة واضح: جعل الكراء سهلًا وفي المتناول، سواء لاستكشاف المدينة أو لتنقل محلي، مع الحجز عبر الهاتف أو واتساب.",
    owner: "المالك",
    address: "العنوان",
    fullAddress: "شارع بني حديفة رقم 21 كويلما تطوان، المغرب",
    city: "تطوان، المغرب",
    points: {
      pro: "خدمة مهنية",
      range: "دراجات وسكوترات",
      contact: "تواصل مباشر",
    },
  },
  services: {
    kicker: "ما نقدمه",
    title: "خدماتنا",
    sub: "فقط الخدمات التي تؤكدها الوكالة.",
    items: {
      moto: {
        title: "كراء الدراجات",
        text: "دراجة Daytona متاحة للكراء للتنقل في تطوان ومحيطها.",
      },
      scooter: {
        title: "كراء السكوتر",
        text: "Capochino وSwing وSania: ثلاثة سكوترات للتنقل داخل المدينة.",
      },
      prices: {
        title: "أسعار في المتناول",
        text: "السعر العام: 150 درهم لليوم، و900 درهم للأسبوع، و3500 درهم للشهر.",
      },
      wa: {
        title: "الحجز عبر واتساب",
        text: "أرسل طلبك خلال لحظات. الوكالة تؤكد التوفر.",
      },
      help: {
        title: "مساعدة الزبناء",
        text: "سؤال قبل الكراء أو خلاله؟ راسل الوكالة أو اتصل بها.",
      },
      flex: {
        title: "مدد مرنة",
        text: "كراء باليوم أو بالأسبوع أو بالشهر، حسب الدراجات المتوفرة.",
      },
    },
  },
  book: {
    kicker: "طلب",
    title: "احجز دراجتك",
    sub: "يفتح النموذج محادثة واتساب. لا يُؤكد الحجز تلقائيًا.",
    steps: ["اختر الدراجة والتاريخ", "أرسل الطلب عبر واتساب", "الوكالة تؤكد التوفر"],
    name: "اسمك",
    phone: "الهاتف",
    moto: "اختر دراجة",
    date: "تاريخ البداية",
    duration: "مدة الكراء",
    message: "رسالة",
    optional: "اختياري",
    submit: "احجز عبر واتساب",
    helpTitle: "تحتاج مساعدة؟",
    helpText: "راسلنا مباشرة على واتساب.",
    error: "أدخل الاسم والهاتف والدراجة والتاريخ والمدة.",
    durations: {
      d1: "يوم واحد",
      d2: "يومان",
      d3: "3 أيام",
      w1: "أسبوع",
      w2: "أسبوعان",
      m1: "شهر",
    },
  },
  location: {
    kicker: "الوكالة",
    title: "موقعنا",
    sub: "زوروا الوكالة في كويلمة، تطوان.",
    maps: "افتح في خرائط جوجل",
    whatsapp: "واتساب",
    phone: "الهاتف",
    email: "البريد",
  },
  reviews: {
    kicker: "آراء",
    title: "ماذا يقول الزبناء",
    sub: "لا تُعرض آراء الزبناء قبل أن تصلنا تجارب حقيقية.",
    body: "استأجرت من EL AFIA MOTOS؟ شارك تجربتك عبر واتساب. لن يُنشر هنا إلا رأي حقيقي بعد استلامه.",
    cta: "مشاركة تجربتي",
  },
  contact: {
    kicker: "راسلنا",
    title: "اتصل بنا",
    sub: "نجيب عن أسئلة الكراء عبر الهاتف أو البريد أو واتساب.",
    name: "اسمك",
    email: "بريدك",
    message: "رسالتك",
    send: "إرسال عبر واتساب",
    error: "أدخل اسمك ورسالتك.",
  },
  footer: {
    tagline: "YOUR RIDE, YOUR FREEDOM.",
    info: "معلومات",
    links: "روابط سريعة",
    follow: "تابعنا",
    rights: "© 2026 EL AFIA MOTOS. جميع الحقوق محفوظة.",
    legal: "معلومات قانونية",
    privacy: "سياسة الخصوصية",
  },
  detail: {
    back: "العودة إلى الأسطول",
    prices: "الأسعار العامة",
    features: "معلومات مفيدة",
    durations: "المدد المتاحة",
    book: "احجز عبر واتساب",
    dates: "تحديد التواريخ",
    others: "النماذج الأخرى",
    f1: "كراء باليوم أو بالأسبوع أو بالشهر",
    f2: "يُرسل الطلب عبر واتساب مع اسم النموذج",
    f3: "الاستلام من الوكالة: AV BNI HDIFA NR 21، كويلمة، تطوان",
    f4: "السعر النهائي تؤكده الوكالة قبل الكراء",
  },
  legal: {
    title: "معلومات قانونية",
    privacyTitle: "سياسة الخصوصية",
    intro: "يعرّف هذا الموقع بوكالة EL AFIA MOTOS لكراء الدراجات والسكوترات في تطوان. وهو ليس شهادة تسجيل رسمية.",
    editor: "الناشر",
    host: "الموقع واجهة تعريف. طلبات الكراء لا تُحفظ في قاعدة بيانات على الموقع: تُفتح في واتساب وتتولاها الوكالة.",
    privacy:
      "لغة العرض (الفرنسية أو الإنجليزية أو العربية) تُحفظ في متصفحك فقط. النماذج لا تُرسل إلى خادم الوكالة، بل تجهّز رسالة واتساب. راجع سياسة واتساب بخصوص هذه المحادثة. لا يُباع أي معطى شخصي من هذا الموقع.",
  },
  missing: {
    title: "النموذج غير موجود",
    text: "هذا الرابط لا يطابق أي دراجة في الكتالوج.",
    back: "عرض الأسطول",
  },
  wa: {
    hello: "مرحبا EL AFIA MOTOS،",
    want: "أود حجز دراجة.",
    name: "الاسم",
    phone: "الهاتف",
    bike: "الدراجة",
    date: "تاريخ البداية",
    duration: "المدة",
    note: "رسالة",
    thanks: "المرجو تأكيد التوفر والسعر.",
    contactIntro: "مرحبا EL AFIA MOTOS، أتواصل معكم من الموقع.",
    email: "البريد",
    review: "مرحبا EL AFIA MOTOS، أرغب في مشاركة تجربة الكراء.",
    quick: "مرحبا EL AFIA MOTOS، أرغب في معلومات حول الكراء.",
  },
};

export type Dictionary = typeof fr;

const dictionaries: Record<Lang, Dictionary> = { fr, en, ar };

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Dictionary;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en" || stored === "ar") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <I18nContext.Provider value={{ lang, dir: lang === "ar" ? "rtl" : "ltr", t: dictionaries[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export const LANGS: { id: Lang; label: string }[] = [
  { id: "fr", label: "FR" },
  { id: "en", label: "EN" },
  { id: "ar", label: "AR" },
];
