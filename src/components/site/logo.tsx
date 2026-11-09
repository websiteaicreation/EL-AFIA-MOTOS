import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" hash="accueil" className="inline-flex min-w-0 shrink items-center rounded-md">
      <img src="/media/logo.png" alt="EL AFIA MOTOS" className="h-11 w-auto max-w-[5.5rem] object-contain sm:h-14 sm:max-w-none" />
    </Link>
  );
}
