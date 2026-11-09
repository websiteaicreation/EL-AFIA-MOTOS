import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" hash="accueil" className="inline-flex items-center rounded-md">
      <img src="/media/logo.png" alt="EL AFIA MOTOS" className="h-14 w-auto" />
    </Link>
  );
}
