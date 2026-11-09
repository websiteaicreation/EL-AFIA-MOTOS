import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/site/icons";

export function Logo() {
  return (
    <Link to="/" hash="accueil" className="inline-flex min-w-0 shrink items-center gap-2 text-paper">
      <Mark className="h-8 w-[4.6rem] shrink-0 sm:h-9 sm:w-20" />
      <span className="h-7 w-px shrink-0 bg-paper/25" aria-hidden="true" />
      <span className="font-display leading-none">
        <span className="block text-[0.68rem] tracking-[0.18em] sm:text-xs sm:tracking-[0.22em]">EL AFIA</span>
        <span className="mt-1 block text-sm tracking-[0.16em] text-orange sm:text-base sm:tracking-[0.2em]">MOTOS</span>
      </span>
    </Link>
  );
}
