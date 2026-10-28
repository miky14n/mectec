import { SITE } from "@/config/site";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="14" fill="#0B4EA2" />
      <circle
        cx="32"
        cy="32"
        r="21"
        fill="none"
        stroke="#fff"
        strokeOpacity=".25"
        strokeWidth="3"
        strokeDasharray="6 4.99"
      />
      <path
        d="M24 18h10.5c5 0 8 2.6 8 6.6 0 2.6-1.4 4.4-3.6 5.2 2.9.7 4.8 2.9 4.8 6 0 4.4-3.3 7.2-8.6 7.2H24V18Zm6 10h3.6c1.8 0 2.8-.9 2.8-2.4s-1-2.3-2.8-2.3H30V28Zm0 10h4.3c2 0 3.1-1 3.1-2.6s-1.1-2.6-3.1-2.6H30V38Z"
        fill="#fff"
      />
      <path d="M44 46h8v4h-8z" fill="#E53935" />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="leading-none">
        <span className="block text-lg font-bold tracking-tight text-foreground">
          {SITE.name}
        </span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/50">
          {SITE.tagline}
        </span>
      </span>
    </span>
  );
}
