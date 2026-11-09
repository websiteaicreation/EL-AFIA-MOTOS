import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/site/icons";

export function Logo() {
  return (
    <Link to="/" hash="accueil" className="inline-flex items-center gap-2.5 rounded-full">
      <span className="grid size-10 place-items-center rounded-full bg-orange text-ink">
        <Mark className="size-7" />
      </span>
      <span className="font-display text-lg leading-none tracking-wide">
        <span className="block text-paper">EL AFIA</span>
        <span className="block text-orange">MOTOS</span>
      </span>
    </Link>
  );
}
