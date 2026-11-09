import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home-page";
import { isBikeSlug, type BikeSlug } from "@/lib/fleet";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { moto?: BikeSlug } => ({
    moto: isBikeSlug(search.moto) ? search.moto : undefined,
  }),
  component: Home,
});

function Home() {
  const { moto } = Route.useSearch();
  return <HomePage initialMoto={moto} />;
}
