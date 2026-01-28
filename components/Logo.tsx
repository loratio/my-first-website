import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light" | "blue";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 60, height: 24 },
    md: { width: 80, height: 32 },
    lg: { width: 120, height: 48 },
  };

  const { width, height } = sizes[size];

  const logoSrc = {
    dark: "/logo-dark.png",
    light: "/logo-white.png",
    blue: "/logo-blue.png",
  };

  return (
    <Link href="/" className="block transition-opacity hover:opacity-80">
      <Image
        src={logoSrc[variant]}
        alt="tio"
        width={width}
        height={height}
        priority
        className="h-auto"
        style={{ width: "auto", height: size === "sm" ? 24 : size === "md" ? 32 : 48 }}
      />
    </Link>
  );
}
