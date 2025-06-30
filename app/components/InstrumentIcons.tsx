'use client';

export const HarmoniumIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="40" width="80" height="40" rx="4" fill="url(#harmonium-grad)" stroke="currentColor" strokeWidth="2"/>
    <rect x="15" y="45" width="70" height="30" rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="20" y="50" width="4" height="20" fill="currentColor" opacity="0.8"/>
    <rect x="28" y="50" width="4" height="20" fill="currentColor" opacity="0.8"/>
    <rect x="36" y="50" width="4" height="20" fill="currentColor" opacity="0.8"/>
    <rect x="44" y="50" width="4" height="20" fill="currentColor" opacity="0.8"/>
    <rect x="52" y="50" width="4" height="20" fill="currentColor" opacity="0.8"/>
    <rect x="60" y="50" width="4" height="20" fill="currentColor" opacity="0.8"/>
    <rect x="68" y="50" width="4" height="20" fill="currentColor" opacity="0.8"/>
    <rect x="76" y="50" width="4" height="20" fill="currentColor" opacity="0.8"/>
    <rect x="24" y="48" width="3" height="12" fill="currentColor"/>
    <rect x="32" y="48" width="3" height="12" fill="currentColor"/>
    <rect x="48" y="48" width="3" height="12" fill="currentColor"/>
    <rect x="56" y="48" width="3" height="12" fill="currentColor"/>
    <rect x="64" y="48" width="3" height="12" fill="currentColor"/>
    <defs>
      <linearGradient id="harmonium-grad" x1="10" y1="40" x2="90" y2="80">
        <stop stopColor="#D97706"/>
        <stop offset="1" stopColor="#92400E"/>
      </linearGradient>
    </defs>
  </svg>
);

export const TablaIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="60" rx="18" ry="8" fill="url(#tabla-grad1)" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 60 Q12 75 30 75 Q48 75 48 60" fill="url(#tabla-grad1)" stroke="currentColor" strokeWidth="2"/>
    <ellipse cx="30" cy="60" rx="12" ry="5" fill="currentColor" opacity="0.2"/>
    <ellipse cx="70" cy="60" rx="15" ry="7" fill="url(#tabla-grad2)" stroke="currentColor" strokeWidth="2"/>
    <path d="M55 60 Q55 72 70 72 Q85 72 85 60" fill="url(#tabla-grad2)" stroke="currentColor" strokeWidth="2"/>
    <ellipse cx="70" cy="60" rx="10" ry="4" fill="currentColor" opacity="0.2"/>
    <defs>
      <linearGradient id="tabla-grad1" x1="12" y1="55" x2="48" y2="75">
        <stop stopColor="#DC2626"/>
        <stop offset="1" stopColor="#7F1D1D"/>
      </linearGradient>
      <linearGradient id="tabla-grad2" x1="55" y1="55" x2="85" y2="72">
        <stop stopColor="#CA8A04"/>
        <stop offset="1" stopColor="#78350F"/>
      </linearGradient>
    </defs>
  </svg>
);

export const KeyboardIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="30" width="80" height="40" rx="6" fill="url(#keyboard-grad)" stroke="currentColor" strokeWidth="2"/>
    <rect x="15" y="35" width="70" height="25" rx="3" fill="currentColor" opacity="0.1"/>
    <rect x="20" y="40" width="60" height="15" fill="currentColor" opacity="0.05"/>
    {[...Array(12)].map((_, i) => (
      <rect key={i} x={20 + i * 5} y="42" width="4" height="11" rx="1" fill="currentColor" opacity="0.9"/>
    ))}
    {[0, 1, 3, 4, 5, 7, 8, 10].map((i) => (
      <rect key={i} x={22.5 + i * 5} y="40" width="3" height="7" rx="1" fill="currentColor"/>
    ))}
    <circle cx="85" cy="65" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="78" cy="65" r="2" fill="currentColor" opacity="0.6"/>
    <defs>
      <linearGradient id="keyboard-grad" x1="10" y1="30" x2="90" y2="70">
        <stop stopColor="#1F2937"/>
        <stop offset="1" stopColor="#111827"/>
      </linearGradient>
    </defs>
  </svg>
);

export const FluteIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="48" width="80" height="8" rx="4" fill="url(#flute-grad)" stroke="currentColor" strokeWidth="2"/>
    <circle cx="25" cy="52" r="2.5" fill="currentColor" opacity="0.8"/>
    <circle cx="35" cy="52" r="2.5" fill="currentColor" opacity="0.8"/>
    <circle cx="45" cy="52" r="2.5" fill="currentColor" opacity="0.8"/>
    <circle cx="55" cy="52" r="2.5" fill="currentColor" opacity="0.8"/>
    <circle cx="65" cy="52" r="2.5" fill="currentColor" opacity="0.8"/>
    <circle cx="75" cy="52" r="2.5" fill="currentColor" opacity="0.8"/>
    <ellipse cx="85" cy="52" rx="3" ry="2" fill="currentColor" opacity="0.6"/>
    <defs>
      <linearGradient id="flute-grad" x1="10" y1="48" x2="90" y2="56">
        <stop stopColor="#C0C0C0"/>
        <stop offset="0.5" stopColor="#E5E5E5"/>
        <stop offset="1" stopColor="#A0A0A0"/>
      </linearGradient>
    </defs>
  </svg>
);

export const GuitarIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 45 Q25 45 25 55 Q25 65 35 65 Q38 65 40 63 L40 55 Q40 50 45 50 L70 50 L70 30 L75 30 L75 50 L80 50 L80 30 L85 30 L85 20 L65 20 L65 30 L70 30 M40 55 Q38 45 35 45" 
          fill="url(#guitar-grad)" stroke="currentColor" strokeWidth="2"/>
    <circle cx="35" cy="55" r="8" fill="currentColor" opacity="0.1"/>
    <rect x="45" y="48" width="25" height="4" fill="currentColor" opacity="0.3"/>
    <line x1="47" y1="46" x2="47" y2="54" stroke="currentColor" strokeWidth="0.5" opacity="0.8"/>
    <line x1="52" y1="46" x2="52" y2="54" stroke="currentColor" strokeWidth="0.5" opacity="0.8"/>
    <line x1="57" y1="46" x2="57" y2="54" stroke="currentColor" strokeWidth="0.5" opacity="0.8"/>
    <line x1="62" y1="46" x2="62" y2="54" stroke="currentColor" strokeWidth="0.5" opacity="0.8"/>
    <defs>
      <linearGradient id="guitar-grad" x1="25" y1="20" x2="85" y2="65">
        <stop stopColor="#92400E"/>
        <stop offset="0.5" stopColor="#D97706"/>
        <stop offset="1" stopColor="#78350F"/>
      </linearGradient>
    </defs>
  </svg>
);

export const VocalsIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="40" r="15" fill="url(#vocals-grad)" stroke="currentColor" strokeWidth="2"/>
    <rect x="48" y="55" width="4" height="20" rx="2" fill="currentColor" opacity="0.8"/>
    <path d="M35 45 Q35 60 50 60 Q65 60 65 45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="42" y="73" width="16" height="4" rx="2" fill="currentColor" opacity="0.6"/>
    <circle cx="50" cy="40" r="8" fill="currentColor" opacity="0.1"/>
    <path d="M42 38 Q50 35 58 38" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <path d="M42 40 Q50 37 58 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <path d="M42 42 Q50 39 58 42" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <defs>
      <radialGradient id="vocals-grad" cx="50" cy="40" r="15">
        <stop stopColor="#F59E0B"/>
        <stop offset="1" stopColor="#D97706"/>
      </radialGradient>
    </defs>
  </svg>
);