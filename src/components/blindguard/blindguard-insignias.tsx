export function BlindGuardEmblem({ className = "size-44" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 280" aria-hidden="true" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-core" x1="62" y1="35" x2="260" y2="248" gradientUnits="userSpaceOnUse"><stop stopColor="#7dd3fc" /><stop offset=".52" stopColor="#2563eb" /><stop offset="1" stopColor="#0b1d3a" /></linearGradient>
        <linearGradient id="bg-wing" x1="24" y1="120" x2="296" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#60a5fa" stopOpacity=".08" /><stop offset=".5" stopColor="#93c5fd" stopOpacity=".75" /><stop offset="1" stopColor="#60a5fa" stopOpacity=".08" /></linearGradient>
        <filter id="bg-glow" x="0" y="0" width="320" height="280" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="12" /></filter>
      </defs>
      <path d="m160 38 73 25v55c0 57-29 95-73 122-44-27-73-65-73-122V63Z" fill="#3b82f6" fillOpacity=".3" filter="url(#bg-glow)" />
      <path d="M89 84 22 62l38 39-38 1 67 34 23-19Zm142 0 67-22-38 39 38 1-67 34-23-19Z" fill="url(#bg-wing)" stroke="#93c5fd" strokeOpacity=".44" strokeWidth="2" />
      <path d="m34 64 53 32M39 101l53 25m194-62-53 32m48 5-53 25" stroke="#bfdbfe" strokeOpacity=".48" strokeWidth="2" />
      <path d="m160 27 82 28v64c0 65-33 109-82 139-49-30-82-74-82-139V55Z" fill="#07101f" stroke="url(#bg-core)" strokeWidth="3" />
      <path d="m160 42 66 23v54c0 52-26 88-66 114-40-26-66-62-66-114V65Z" fill="url(#bg-core)" fillOpacity=".24" stroke="#93c5fd" strokeOpacity=".62" strokeWidth="2" />
      <path d="m160 62 46 16v40c0 35-17 60-46 81-29-21-46-46-46-81V78Z" stroke="#dbeafe" strokeOpacity=".5" />
      <text x="160" y="132" textAnchor="middle" fill="#f8fafc" fontSize="34" fontWeight="800" letterSpacing="3" fontFamily="Arial, sans-serif">BG</text>
      <path d="m151 148 9 9 9-9" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RangeInsignia({ letter, color, accentColor, className }: { letter: string; color: string; accentColor?: string; className?: string }) {
  const shieldId = `range-shield-${letter}`;
  const wingId = `range-wing-${letter}`;
  return (
    <svg viewBox="0 0 220 180" role="img" aria-label={`Insignia BlindGuard ${letter}`} className={`relative z-10 transition duration-300 group-hover:scale-105 ${className ?? "h-36 w-44"}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={shieldId} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={color} stopOpacity=".9" /><stop offset="1" stopColor={color} stopOpacity=".28" /></linearGradient>
        <linearGradient id={wingId} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={color} stopOpacity=".08" /><stop offset="1" stopColor={color} stopOpacity=".72" /></linearGradient>
      </defs>
      <path d="M78 58 13 40l34 29-30 1 51 26 18-7Z" fill={`url(#${wingId})`} stroke={color} strokeOpacity=".35" />
      <path d="m142 58 65-18-34 29 30 1-51 26-18-7Z" fill={`url(#${wingId})`} stroke={color} strokeOpacity=".35" />
      <path d="m23 42 44 21M30 68l38 16M197 42l-44 21m37 5-38 16" fill="none" stroke={color} strokeOpacity=".5" strokeWidth="2" />
      <path d="M110 19 166 39v43c0 38-22 64-56 82-34-18-56-44-56-82V39Z" fill="#07101f" stroke={accentColor ?? color} strokeWidth="3" />
      <path d="M110 29 156 45v37c0 30-16 51-46 68-30-17-46-38-46-68V45Z" fill={`url(#${shieldId})`} fillOpacity=".23" stroke={color} strokeOpacity=".65" />
      <path d="M110 35v106" stroke={color} strokeOpacity=".24" />
      <text x="110" y="101" textAnchor="middle" fill="#f8fafc" fontSize="55" fontWeight="800" fontFamily="Arial, sans-serif">{letter}</text>
      <path d="m102 119 8 8 8-8" fill="none" stroke={accentColor ?? color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
