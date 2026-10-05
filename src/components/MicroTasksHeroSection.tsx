import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Code2, 
  Calendar as CalendarIcon, 
  BarChart3, 
  Users,
  Sparkles
} from 'lucide-react';
import { WorkNestLogo } from './WorkNestLogo';
import { 
  RealProjectsCardIllustration, 
  FlexibleHoursCardIllustration, 
  EarnAndGrowCardIllustration, 
  BuildPortfolioCardIllustration 
} from './HeroIllustrations';

export const MicroTasksHeroSection: React.FC = () => {
  return (
    <div className="space-y-5">
      {/* 1. Main Hero Banner - Warm Beige & Light Brown palette with boy developer */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#fbf8f2] via-[#f7f2ea] to-[#ede3d4] text-[#291e14] shadow-md border border-[#dfd2be] py-5 sm:py-6 px-5 sm:px-7 lg:px-8">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-[#c5a882]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Side-by-side layout: Graphic positioned directly in front of / beside the text */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
          {/* Left Column: Branding, Title, Description, Checkmarks */}
          <div className="md:col-span-7 space-y-3">
            {/* Logo & Identity with intriguing WorkNestLogo */}
            <div className="flex items-center space-x-3">
              <WorkNestLogo size="md" />
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#291e14] font-sans flex items-center space-x-1.5">
                  <span>WorkNest</span>
                  <span className="text-[#8B6239]">Ajao</span>
                </h1>
                <div className="flex items-center space-x-1 text-[11px] text-[#6b5542] font-medium">
                  <MapPin className="w-3 h-3 text-[#8B6239] shrink-0" />
                  <span>Pakistan Tech</span>
                  <span className="text-[#a89582] mx-1">|</span>
                  <span>Remote & On-Site Opportunities</span>
                </div>
              </div>
            </div>

            {/* Main Headline - Compact sizing */}
            <div className="space-y-0.5">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#291e14] tracking-tight leading-snug">
                3-Day Micro-Tasks:
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#291e14] tracking-tight leading-snug">
                Quick <span className="text-[#8B6239] underline decoration-[#8B6239]/40 decoration-3">Production</span> Proof-of-Work
              </h3>
            </div>

            {/* Subtitle Description */}
            <p className="text-[#5a4635] text-xs sm:text-sm leading-relaxed max-w-lg font-normal">
              Don't have time for a 6-week internship? Solve concrete tickets for Pakistani software houses in 48–72 hours. Earn PKR 7,500 to PKR 14,000 per merged PR.
            </p>

            {/* 3 Beige / Light Brown Checklist Points */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-0.5">
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#291e14] bg-white/80 border border-[#dfd3c3] px-2.5 py-1 rounded-full shadow-2xs">
                <div className="w-4 h-4 rounded-full bg-[#8B6239] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Real Projects</span>
              </div>

              <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#291e14] bg-white/80 border border-[#dfd3c3] px-2.5 py-1 rounded-full shadow-2xs">
                <div className="w-4 h-4 rounded-full bg-[#8B6239] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Flexible Hours</span>
              </div>

              <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#291e14] bg-white/80 border border-[#dfd3c3] px-2.5 py-1 rounded-full shadow-2xs">
                <div className="w-4 h-4 rounded-full bg-[#8B6239] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Build Your Portfolio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with boy developer fitted in the spot */}
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-[#DFD2BE] bg-[#F7F2EA] flex items-center justify-center group">
              <img
                src="/boy_developer.jpg"
                alt="Pakistani boy tech graduate coding micro-tasks"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/hero_developer.jpg';
                }}
              />
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#2A1E14] text-[10px] sm:text-[11px] font-bold shadow-sm border border-[#E2D5C3] flex items-center space-x-1.5">
                <Sparkles className="w-3 h-3 text-[#8B6239]" />
                <span>Verified CS Graduate</span>
              </div>
              <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 px-2.5 py-1 rounded-full bg-[#2A1E14]/90 backdrop-blur-xs text-[#FBF8F2] text-[10px] sm:text-[11px] font-bold shadow-sm border border-[#523E2E] flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>PKR Escrow Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Four Feature Cards Grid (2x2) in Warm Beige & White */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* Card 1: Real Projects */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#e8dfd3] shadow-xs hover:shadow-md hover:border-[#8B6239]/50 transition-all flex items-center justify-between group">
          <div className="space-y-1.5 max-w-[62%]">
            <div className="w-9 h-9 rounded-xl bg-[#8B6239] text-white flex items-center justify-center shadow-xs">
              <Code2 className="w-4 h-4" />
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold text-[#291e14] tracking-tight">
              Real Projects
            </h4>
            <p className="text-xs sm:text-sm text-[#614d3b] leading-snug">
              Work on actual tasks from Pakistani software houses.
            </p>
          </div>
          <div className="shrink-0 flex items-center justify-center">
            <RealProjectsCardIllustration className="w-32 sm:w-36 h-28 group-hover:scale-105 transition-transform" />
          </div>
        </div>

        {/* Card 2: Flexible Hours */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#e8dfd3] shadow-xs hover:shadow-md hover:border-[#b45309]/50 transition-all flex items-center justify-between group">
          <div className="space-y-1.5 max-w-[62%]">
            <div className="w-9 h-9 rounded-xl bg-[#b45309] text-white flex items-center justify-center shadow-xs">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold text-[#291e14] tracking-tight">
              Flexible Hours
            </h4>
            <p className="text-xs sm:text-sm text-[#614d3b] leading-snug">
              Complete tasks in 48–72 hours at your own pace.
            </p>
          </div>
          <div className="shrink-0 flex items-center justify-center">
            <FlexibleHoursCardIllustration className="w-32 sm:w-36 h-28 group-hover:scale-105 transition-transform" />
          </div>
        </div>

        {/* Card 3: Earn & Grow */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#e8dfd3] shadow-xs hover:shadow-md hover:border-[#9a7853]/50 transition-all flex items-center justify-between group">
          <div className="space-y-1.5 max-w-[62%]">
            <div className="w-9 h-9 rounded-xl bg-[#9a7853] text-white flex items-center justify-center shadow-xs">
              <BarChart3 className="w-4 h-4" />
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold text-[#291e14] tracking-tight">
              Earn & Grow
            </h4>
            <p className="text-xs sm:text-sm text-[#614d3b] leading-snug">
              Get paid PKR 7,500 to PKR 14,000 per merged PR.
            </p>
          </div>
          <div className="shrink-0 flex items-center justify-center">
            <EarnAndGrowCardIllustration className="w-32 sm:w-36 h-28 group-hover:scale-105 transition-transform" />
          </div>
        </div>

        {/* Card 4: Build Your Portfolio */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#e8dfd3] shadow-xs hover:shadow-md hover:border-[#78350f]/50 transition-all flex items-center justify-between group">
          <div className="space-y-1.5 max-w-[62%]">
            <div className="w-9 h-9 rounded-xl bg-[#78350f] text-white flex items-center justify-center shadow-xs">
              <Users className="w-4 h-4" />
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold text-[#291e14] tracking-tight">
              Build Your Portfolio
            </h4>
            <p className="text-xs sm:text-sm text-[#614d3b] leading-snug">
              Gain real experience and stand out to future employers.
            </p>
          </div>
          <div className="shrink-0 flex items-center justify-center">
            <BuildPortfolioCardIllustration className="w-32 sm:w-36 h-28 group-hover:scale-105 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
