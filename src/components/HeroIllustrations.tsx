import React from 'react';

/**
 * High-fidelity Vector SVG Illustrations tailored for the warm Beige, White, and Light Brown aesthetic
 */

// 1. Hero Developer Illustration - Styled for Warm Beige, White & Light Brown Theme, perfectly fitted in 460x270 viewBox
export const HeroDeveloperIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => {
  return (
    <svg viewBox="0 0 460 270" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Warm Ambient Lamp Glow */}
        <radialGradient id="warmLampGlow" cx="80%" cy="15%" r="65%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#fde68a" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#faf5ef" stopOpacity="0" />
        </radialGradient>
        {/* Soft Warm Sky Gradient */}
        <linearGradient id="warmWallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbf7f1" />
          <stop offset="100%" stopColor="#efe5d7" />
        </linearGradient>
        {/* Laptop Screen Glow */}
        <linearGradient id="screenGlowWarm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        {/* Hoodie Gradient */}
        <linearGradient id="hoodieGradWarm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#0f5132" />
        </linearGradient>
        {/* Desk Wood Gradient */}
        <linearGradient id="woodDesk" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c5a882" />
          <stop offset="100%" stopColor="#a7865e" />
        </linearGradient>
        {/* Drop Shadow */}
        <filter id="softCardShadow" x="-10%" y="-10%" width="125%" height="130%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#453120" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Background Architectural Wall & Ambient Light */}
      <rect x="180" y="10" width="270" height="200" rx="20" fill="url(#warmWallGrad)" opacity="0.65" />
      <path d="M380 0 L400 35 L375 50 L425 50 L400 35 Z" fill="#6b4c30" />
      <path d="M375 50 L425 50 L455 220 L270 220 Z" fill="url(#warmLampGlow)" pointerEvents="none" />

      {/* Desk Surface (Warm Light Brown Wood) */}
      <rect x="140" y="210" width="310" height="14" rx="4" fill="url(#woodDesk)" stroke="#8f6b45" strokeWidth="1" />
      <rect x="150" y="224" width="290" height="5" fill="#785533" opacity="0.4" />

      {/* Terracotta/Brown Coffee Mug with WN logo */}
      <rect x="200" y="186" width="20" height="24" rx="4" fill="#a56a44" stroke="#874f2b" strokeWidth="1" />
      <path d="M220 192 C226 192 226 204 220 204" stroke="#a56a44" strokeWidth="2.5" fill="none" />
      <text x="204" y="200" fill="#fdfbf7" fontSize="7" fontWeight="bold" fontFamily="monospace">WN</text>

      {/* White Ceramic Potted Plant */}
      <path d="M165 194 L181 194 L178 210 L168 210 Z" fill="#ffffff" stroke="#d5c7b3" strokeWidth="1" />
      <path d="M173 194 C168 178 158 182 158 174 C170 174 173 186 173 194 Z" fill="#34d399" />
      <path d="M173 194 C178 176 188 178 188 170 C176 172 173 186 173 194 Z" fill="#10b981" />
      <path d="M173 194 C173 166 176 166 173 160 C170 166 170 182 173 194 Z" fill="#059669" />

      {/* Ergonomic Chair Back (Warm Mocha) */}
      <rect x="345" y="125" width="40" height="90" rx="14" fill="#3f2e20" />

      {/* Developer Body in Green Hoodie */}
      <path d="M280 130 C298 120 324 120 342 130 L360 210 L262 210 Z" fill="url(#hoodieGradWarm)" />
      {/* Arms to Keyboard */}
      <path d="M285 150 Q298 170 320 195 L298 200 Q278 175 272 158 Z" fill="#047857" />

      {/* Developer Head */}
      <circle cx="310" cy="95" r="21" fill="#fcd34d" opacity="0.9" />
      {/* Hair */}
      <path d="M290 92 C290 74 306 68 322 72 C334 75 338 88 336 98 C328 85 318 84 308 85 C300 87 295 90 290 92 Z" fill="#291e14" />
      {/* Glasses */}
      <circle cx="304" cy="96" r="6" stroke="#291e14" strokeWidth="2" fill="#ffffff" fillOpacity="0.4" />
      <circle cx="318" cy="96" r="6" stroke="#291e14" strokeWidth="2" fill="#ffffff" fillOpacity="0.4" />
      <line x1="310" y1="96" x2="312" y2="96" stroke="#291e14" strokeWidth="2" />
      {/* Smile */}
      <path d="M308 106 Q311 109 314 106" stroke="#291e14" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Modern Laptop on Desk */}
      <path d="M230 210 L315 210 L305 200 L248 200 Z" fill="#94a3b8" />
      <path d="M225 135 L300 135 L292 200 L233 200 Z" fill="#1e293b" />
      <path d="M228 138 L297 138 L290 197 L236 197 Z" fill="url(#screenGlowWarm)" />
      <circle cx="265" cy="168" r="11" fill="#10b981" fillOpacity="0.2" />
      <text x="258" y="172" fill="#34d399" fontSize="11" fontWeight="bold" fontFamily="monospace">WN</text>

      {/* Floating Code Editor Window */}
      <g filter="url(#softCardShadow)">
        <rect x="25" y="45" width="130" height="90" rx="10" fill="#ffffff" stroke="#e7dfd5" strokeWidth="1.5" />
        <circle cx="38" cy="56" r="3" fill="#ef4444" />
        <circle cx="48" cy="56" r="3" fill="#f59e0b" />
        <circle cx="58" cy="56" r="3" fill="#10b981" />
        <rect x="38" y="68" width="45" height="4" rx="2" fill="#0284c7" />
        <rect x="88" y="68" width="25" height="4" rx="2" fill="#8b5cf6" />
        <rect x="38" y="79" width="60" height="4" rx="2" fill="#10b981" />
        <rect x="38" y="90" width="35" height="4" rx="2" fill="#f43f5e" />
        <rect x="78" y="90" width="40" height="4" rx="2" fill="#94a3b8" />
        <rect x="38" y="101" width="50" height="4" rx="2" fill="#0284c7" />
        <rect x="38" y="112" width="35" height="4" rx="2" fill="#d97706" />
      </g>

      {/* Floating Badge: "Build Learn Earn" (Beige & Teal) */}
      <g filter="url(#softCardShadow)">
        <rect x="135" y="30" width="70" height="48" rx="10" fill="#fcf9f2" stroke="#d5c7b3" strokeWidth="1.5" />
        <text x="145" y="46" fill="#4a3828" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Build</text>
        <text x="145" y="58" fill="#4a3828" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Learn</text>
        <text x="145" y="70" fill="#0f766e" fontSize="9" fontWeight="extrabold" fontFamily="sans-serif">Earn</text>
      </g>

      {/* Floating Card: "✔ PR Merged!" (Crisp White Card with Emerald Accent) */}
      <g filter="url(#softCardShadow)">
        <rect x="330" y="75" width="115" height="38" rx="10" fill="#ffffff" stroke="#e2d9cd" strokeWidth="1.2" />
        <circle cx="346" cy="94" r="9" fill="#dcfce7" />
        <path d="M342 94 L345 97 L351 91" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="360" y="94" fill="#291e14" fontSize="10" fontWeight="bold" fontFamily="sans-serif">PR Merged!</text>
        <text x="360" y="104" fill="#059669" fontSize="8" fontWeight="bold" fontFamily="sans-serif">PKR 14,000</text>
      </g>

      {/* Mini Floating Secondary Code Tag */}
      <g filter="url(#softCardShadow)">
        <rect x="90" y="115" width="85" height="45" rx="8" fill="#faf6f0" stroke="#dfd3c3" strokeWidth="1.2" />
        <rect x="100" y="125" width="55" height="4" rx="2" fill="#059669" />
        <rect x="100" y="135" width="40" height="4" rx="2" fill="#b45309" />
        <rect x="100" y="145" width="48" height="4" rx="2" fill="#3b82f6" />
      </g>
    </svg>
  );
};

// 2. Card 1 Illustration: Real Projects (Warm Wood + White Laptop + Spec Document)
export const RealProjectsCardIllustration: React.FC<{ className?: string }> = ({ className = "w-36 h-28" }) => {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="laptopScreenWarm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      {/* Plant behind in warm sand & caramel */}
      <path d="M42 110 C30 80 20 90 14 74 C34 76 40 96 42 110 Z" fill="#D9C5AB" />
      <path d="M44 110 C46 70 56 75 58 60 C58 84 50 100 44 110 Z" fill="#9A7853" />
      <path d="M34 110 L48 110 L45 125 L37 125 Z" fill="#e7dfd5" />

      {/* Laptop Open */}
      <rect x="52" y="35" width="105" height="72" rx="7" fill="#291e14" />
      <rect x="56" y="39" width="97" height="64" rx="4" fill="url(#laptopScreenWarm)" />
      <circle cx="63" cy="46" r="2" fill="#ef4444" />
      <circle cx="70" cy="46" r="2" fill="#f59e0b" />
      <circle cx="77" cy="46" r="2" fill="#C59A68" />
      <rect x="63" y="55" width="45" height="3" rx="1.5" fill="#38bdf8" />
      <rect x="63" y="63" width="60" height="3" rx="1.5" fill="#D9B487" />
      <rect x="63" y="71" width="35" height="3" rx="1.5" fill="#f472b6" />
      <rect x="63" y="79" width="50" height="3" rx="1.5" fill="#94a3b8" />
      <rect x="63" y="87" width="40" height="3" rx="1.5" fill="#fbbf24" />

      {/* Laptop Keyboard Base in Light Brown Wood tone */}
      <path d="M38 107 L170 107 L158 116 L50 116 Z" fill="#be9f7b" />
      <rect x="88" y="108" width="32" height="4" rx="1" fill="#e2d9cd" />

      {/* Floating White Spec Document with Light Brown Checkmark */}
      <g filter="drop-shadow(0 4px 6px rgba(69, 49, 32, 0.12))">
        <rect x="110" y="45" width="65" height="52" rx="8" fill="#ffffff" stroke="#e8dfd3" strokeWidth="1.5" />
        <rect x="120" y="55" width="30" height="4" rx="2" fill="#291e14" />
        <rect x="120" y="64" width="45" height="3" rx="1.5" fill="#a7865e" />
        <rect x="120" y="71" width="38" height="3" rx="1.5" fill="#cbd5e1" />
        <rect x="120" y="78" width="42" height="3" rx="1.5" fill="#cbd5e1" />
        {/* Circular Checkmark Badge in Warm Brown */}
        <rect x="145" y="32" width="24" height="24" rx="7" fill="#8B6239" />
        <path d="M151 44 L155 48 L163 40" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
};

// 3. Card 2 Illustration: Flexible Hours (Warm Wood Clock + White Calendar)
export const FlexibleHoursCardIllustration: React.FC<{ className?: string }> = ({ className = "w-36 h-28" }) => {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="clockFaceWarm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#faf6f0" />
        </linearGradient>
      </defs>
      {/* Background Soft Beige Glow */}
      <circle cx="130" cy="75" r="45" fill="#f5ede2" />

      {/* Clock with Warm Light Brown Ring */}
      <circle cx="135" cy="72" r="40" fill="url(#clockFaceWarm)" stroke="#9a7853" strokeWidth="6" />
      <line x1="135" y1="39" x2="135" y2="44" stroke="#9a7853" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="135" y1="100" x2="135" y2="105" stroke="#9a7853" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="102" y1="72" x2="107" y2="72" stroke="#9a7853" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="163" y1="72" x2="168" y2="72" stroke="#9a7853" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="135" y1="72" x2="135" y2="52" stroke="#291e14" strokeWidth="3" strokeLinecap="round" />
      <line x1="135" y1="72" x2="155" y2="82" stroke="#8B6239" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="135" cy="72" r="3.5" fill="#9a7853" />

      {/* Calendar Card in Front */}
      <g filter="drop-shadow(0 6px 10px rgba(74, 56, 40, 0.12))">
        <rect x="42" y="60" width="70" height="58" rx="10" fill="#ffffff" stroke="#dfd2be" strokeWidth="1.5" />
        <path d="M42 70 C42 64.4772 46.4772 60 52 60 H102 C107.523 60 112 64.4772 112 70 V75 H42 V70 Z" fill="#b45309" />
        <circle cx="56" cy="58" r="2.5" fill="#78350f" />
        <circle cx="70" cy="58" r="2.5" fill="#78350f" />
        <circle cx="84" cy="58" r="2.5" fill="#78350f" />
        <circle cx="98" cy="58" r="2.5" fill="#78350f" />
        <rect x="52" y="83" width="8" height="6" rx="1.5" fill="#faebd7" />
        <rect x="65" y="83" width="8" height="6" rx="1.5" fill="#faebd7" />
        <rect x="78" y="83" width="8" height="6" rx="1.5" fill="#faebd7" />
        <rect x="91" y="83" width="8" height="6" rx="1.5" fill="#faebd7" />
        <rect x="52" y="94" width="8" height="6" rx="1.5" fill="#faebd7" />
        <rect x="64" y="93" width="12" height="12" rx="3" fill="#8B6239" />
        <path d="M67 99 L69 101 L73 97" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="78" y="94" width="8" height="6" rx="1.5" fill="#faebd7" />
        <rect x="91" y="94" width="8" height="6" rx="1.5" fill="#faebd7" />
      </g>
    </svg>
  );
};

// 4. Card 3 Illustration: Earn & Grow (Rupee Banknotes ₨ + Gold Coins + Upward Growth Arrow)
export const EarnAndGrowCardIllustration: React.FC<{ className?: string }> = ({ className = "w-36 h-28" }) => {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="growthArrowWarm" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#8B6239" />
        </linearGradient>
        <linearGradient id="pkrNoteWarm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B6239" />
          <stop offset="100%" stopColor="#5C3D20" />
        </linearGradient>
      </defs>

      {/* Upward Growth Arrow */}
      <path d="M60 115 Q100 85 140 45" stroke="url(#growthArrowWarm)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M140 45 L124 45 M140 45 L140 61" stroke="url(#growthArrowWarm)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

      {/* Warm Sand & Caramel Foliage */}
      <path d="M145 90 C155 70 170 80 175 65 C175 90 160 100 145 90 Z" fill="#D9C5AB" />
      <path d="M155 110 C168 95 180 105 182 92 C182 112 170 120 155 110 Z" fill="#9A7853" />

      {/* Stacks of Pakistani Rupee Notes in Warm Mocha & Sand */}
      <rect x="40" y="100" width="70" height="34" rx="4" fill="#3D2B1C" transform="rotate(-4 40 100)" />
      <rect x="42" y="94" width="70" height="34" rx="4" fill="#5C3D20" transform="rotate(-1 42 94)" />
      <g filter="drop-shadow(0 4px 6px rgba(92, 61, 32, 0.2))">
        <rect x="45" y="86" width="72" height="36" rx="4" fill="url(#pkrNoteWarm)" stroke="#D9C5AB" strokeWidth="1" />
        <rect x="49" y="90" width="64" height="28" rx="2" fill="none" stroke="#F5E4CE" strokeWidth="0.75" strokeDasharray="3 2" />
        <circle cx="81" cy="104" r="8" fill="#3D2B1C" stroke="#F5E4CE" strokeWidth="1" />
        <text x="77" y="108" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="serif">₨</text>
      </g>

      {/* Stack of Gold / Bronze Coins */}
      <ellipse cx="120" cy="120" rx="14" ry="6" fill="#b45309" />
      <ellipse cx="120" cy="116" rx="14" ry="6" fill="#f59e0b" stroke="#fef08a" strokeWidth="1" />
      <ellipse cx="120" cy="110" rx="14" ry="6" fill="#b45309" />
      <ellipse cx="120" cy="106" rx="14" ry="6" fill="#f59e0b" stroke="#fef08a" strokeWidth="1" />
      <ellipse cx="120" cy="100" rx="14" ry="6" fill="#b45309" />
      <ellipse cx="120" cy="96" rx="14" ry="6" fill="#f59e0b" stroke="#fef08a" strokeWidth="1" />
      <ellipse cx="106" cy="122" rx="12" ry="5" fill="#b45309" />
      <ellipse cx="106" cy="118" rx="12" ry="5" fill="#f59e0b" stroke="#fef08a" strokeWidth="1" />
      <text x="104" y="121" fill="#78350f" fontSize="7" fontWeight="bold">₨</text>
    </svg>
  );
};

// 5. Card 4 Illustration: Build Your Portfolio (Beige Card + GitHub + PR Badge)
export const BuildPortfolioCardIllustration: React.FC<{ className?: string }> = ({ className = "w-36 h-28" }) => {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cardBgWarm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#faf6f0" />
        </linearGradient>
      </defs>

      <path d="M48 115 C34 98 32 108 24 94 C42 92 48 108 48 115 Z" fill="#D9C5AB" />
      <path d="M165 110 C178 95 186 102 188 90 C188 110 178 118 165 110 Z" fill="#E2D0BA" />

      {/* Verified Developer Profile Card */}
      <g filter="drop-shadow(0 6px 12px rgba(74, 56, 40, 0.1))">
        <rect x="42" y="42" width="118" height="80" rx="12" fill="url(#cardBgWarm)" stroke="#e7dfd5" strokeWidth="1.5" />
        <circle cx="64" cy="66" r="12" fill="#9a7853" />
        <circle cx="64" cy="62" r="5" fill="#ffffff" />
        <path d="M56 74 C56 70 60 68 64 68 C68 68 72 70 72 74 Z" fill="#ffffff" />
        <rect x="84" y="58" width="55" height="5" rx="2.5" fill="#291e14" />
        <rect x="84" y="68" width="40" height="3" rx="1.5" fill="#a7865e" />
        <line x1="52" y1="84" x2="148" y2="84" stroke="#f0e9df" strokeWidth="1.5" />
        <rect x="52" y="92" width="60" height="4" rx="2" fill="#94a3b8" />
        <rect x="52" y="100" width="45" height="4" rx="2" fill="#cbd5e1" />
        <rect x="52" y="108" width="50" height="4" rx="2" fill="#cbd5e1" />

        {/* GitHub Badge */}
        <g filter="drop-shadow(0 3px 5px rgba(0,0,0,0.12))">
          <circle cx="150" cy="42" r="13" fill="#291e14" />
          <path d="M150 33 C145 33 141 37 141 42 C141 46 143.5 49.3 147 50.5 C147.5 50.6 147.6 50.3 147.6 50 C147.6 49.8 147.6 49 147.6 48 C145.2 48.5 144.6 47 144.6 47 C144.2 46 143.6 45.7 143.6 45.7 C142.8 45.1 143.7 45.1 143.7 45.1 C144.6 45.2 145 46.1 145 46.1 C145.8 47.4 147 47.1 147.4 46.9 C147.5 46.3 147.7 45.9 148 45.7 C146 45.5 144 44.7 144 41 C144 40 144.3 39.1 145 38.4 C144.9 38.2 144.5 37.2 145.1 35.8 C145.1 35.8 145.9 35.5 147.7 36.8 C148.5 36.6 149.3 36.5 150 36.5 C150.7 36.5 151.5 36.6 152.3 36.8 C154.1 35.5 154.9 35.8 154.9 35.8 C155.5 37.2 155.1 38.2 155 38.4 C155.7 39.1 156 40 156 41 C156 44.7 154 45.5 152 45.7 C152.3 46 152.6 46.5 152.6 47.3 C152.6 48.4 152.6 49.6 152.6 50 C152.6 50.3 152.8 50.6 153.2 50.5 C156.5 49.3 159 46 159 42 C159 37 155 33 150 33 Z" fill="#ffffff" />
        </g>

        {/* Code Badge */}
        <g filter="drop-shadow(0 3px 5px rgba(0,0,0,0.12))">
          <rect x="160" y="58" width="22" height="22" rx="6" fill="#8B6239" />
          <path d="M165 69 L168 66 L165 63 M177 69 L174 66 L177 63" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* Floating PR Merged Pill in Warm Caramel */}
        <g filter="drop-shadow(0 3px 5px rgba(139, 98, 57, 0.25))">
          <rect x="120" y="90" width="36" height="22" rx="6" fill="#8B6239" />
          <text x="126" y="105" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">PR</text>
          <circle cx="147" cy="101" r="3" fill="#ffffff" />
        </g>
      </g>
    </svg>
  );
};
