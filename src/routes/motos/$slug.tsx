import { createFileRoute, notFound } from "@tanstack/react-router";
import { BikeMissing, BikePage } from "@/components/site/bike-page";
import { getBike } from "@/lib/fleet";

export const Route = createFileRoute("/motos/$slug")({
  loader: ({ params }) => {
    const bike = getBike(params.slug);
    if (!bike) throw notFound();
    return { slug: bike.slug };
  },
  head: ({ params }) => {
    const bike = getBike(params.slug);
    const name = bike?.name ?? "EL AFIA MOTOS";
    return {
      meta: [
        { title: `${name} | Location moto Tétouan | EL AFIA MOTOS` },
        {
          name: "description",
          content: `Louez ${name} à Tétouan avec EL AFIA MOTOS. Tarif général : 150 DH/jour, 900 DH/semaine, 3 500 DH/mois. Réservation WhatsApp.`,
        },
      ],
    };
  },
  notFoundComponent: BikeMissing,
  component: Page,
});

function Page() {
  const { slug } = Route.useLoaderData();
  return <BikePage slug={slug} />;
}
