import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/site/icons";

export function Logo() {
  return (
    <Link to="/" hash="accueil" className="inline-flex min-w-0 shrink items-center gap-2 rounded-md">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-orange text-ink sm:size-10">
        <Mark className="h-5 w-7" />
      </span>
      <span className="font-display text-[0.95rem] leading-none tracking-wide sm:text-lg">
        <span className="block text-paper">EL AFIA</span>
        <span className="block text-orange">MOTOS</span>
      </span>
    </Link>
  );
}
