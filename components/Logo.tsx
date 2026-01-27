import Link from "next/link";

interface LogoProps {
  variant?: "default" | "light";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "default", showText = true, size = "md" }: LogoProps) {
  const primaryColor = variant === "default" ? "#1a4d3e" : "#ffffff";
  const accentColor = "#c9707d";

  const sizes = {
    sm: { icon: 32, text: "text-xl" },
    md: { icon: 40, text: "text-2xl" },
    lg: { icon: 56, text: "text-3xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Custom Logo Mark */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:scale-105"
      >
        {/* Elegant circle frame */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke={primaryColor}
          strokeWidth="1.5"
          fill="none"
        />

        {/* Stylized "L" with serif details */}
        <path
          d="M16 12V36H32"
          stroke={primaryColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Decorative serif on L */}
        <path
          d="M13 12H19"
          stroke={primaryColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Elegant smile curve - the orthodontic touch */}
        <path
          d="M18 28C20 31 28 31 30 28"
          stroke={accentColor}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Small decorative dot accent */}
        <circle
          cx="34"
          cy="36"
          r="2"
          fill={accentColor}
        />
      </svg>

      {/* Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`${text} font-semibold tracking-wide font-[family-name:var(--font-cormorant)]`}
            style={{ color: primaryColor }}
          >
            Lora Ortho
          </span>
          <span
            className="text-[10px] tracking-[0.2em] uppercase font-light"
            style={{ color: variant === "default" ? "rgba(26, 77, 62, 0.6)" : "rgba(255, 255, 255, 0.7)" }}
          >
            Orthodontics
          </span>
        </div>
      )}
    </Link>
  );
}
