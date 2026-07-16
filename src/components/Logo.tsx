import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
  onClick?: () => void;
};

export default function Logo({ className = "", priority = false, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      onClick={onClick}
      aria-label="Georgia Trailer Outlet home"
    >
      <Image
        src={site.logoUrl}
        alt="Georgia Trailer Outlet"
        width={200}
        height={140}
        priority={priority}
        className="h-12 w-auto object-contain sm:h-14"
      />
    </Link>
  );
}
