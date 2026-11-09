/**
 * Rental catalog for EL AFIA MOTOS.
 *
 * EDIT PRICES HERE.
 * GENERAL_PRICES are the agency-wide rates supplied by the business.
 * To set a model-specific rate later, add `prices` on that bike only.
 * Do not publish deposits, insurance, or mileage limits until the owner confirms them.
 */
export const GENERAL_PRICES = {
  daily: 150,
  weekly: 900,
  monthly: 3500,
} as const;

export type Prices = { daily: number; weekly: number; monthly: number };

export type BikeSlug = "capochino" | "swing" | "sania" | "daytona";

export type Bike = {
  slug: BikeSlug;
  name: string;
  image: string;
  width: number;
  height: number;
  fit: "contain" | "cover";
  kind: "scooter" | "moto";
  prices?: Prices;
};

export const BIKES: Bike[] = [
  {
    slug: "capochino",
    name: "Capochino",
    image: "/media/capochino.jpg",
    width: 1100,
    height: 1100,
    fit: "contain",
    kind: "scooter",
  },
  {
    slug: "swing",
    name: "Swing",
    image: "/media/swing.jpg",
    width: 1100,
    height: 1100,
    fit: "contain",
    kind: "scooter",
  },
  {
    slug: "sania",
    name: "Sania",
    image: "/media/sania.jpg",
    width: 1100,
    height: 1100,
    fit: "contain",
    kind: "scooter",
  },
  {
    slug: "daytona",
    name: "Daytona",
    image: "/media/daytona.jpg",
    width: 1600,
    height: 900,
    fit: "cover",
    kind: "moto",
  },
];

export const BIKE_SLUGS = BIKES.map((bike) => bike.slug);

export function isBikeSlug(value: unknown): value is BikeSlug {
  return typeof value === "string" && BIKE_SLUGS.some((slug) => slug === value);
}

export function getBike(slug: string) {
  return BIKES.find((bike) => bike.slug === slug);
}

export function pricesFor(bike: Bike): Prices {
  return bike.prices ?? GENERAL_PRICES;
}
