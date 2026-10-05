import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  FileText, 
  Calendar, 
  GraduationCap,
  Globe2,
  Zap,
  Bell,
  Check,
  Server,
  SlidersHorizontal,
  Menu,
  X,
  ChevronRight,
  Layers
} from 'lucide-react';
import { MobileAlert } from '../types';
import { WorkNestLogo } from './WorkNestLogo';

export type NavigationTab = 
  | 'projects' 
  | 'microtasks'
  | 'remote' 
  | 'verifier' 
  | 'milestones' 
  | 'chat' 
  | 'documents' 
  | 'interviews' 
  | 'wall_of_fame'
  | 'api_explorer';

interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  unreadChatCount: number;
  currency: 'PKR' | 'USD';
  onToggleCurrency: () => void;
  alerts: MobileAlert[];
  onOpenCategories: () => void;
  selectedTrack?: string;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  unreadChatCount,
  currency,
  onToggleCurrency,
  alerts,
  onOpenCategories,
  selectedTrack = 'All'
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showAlertsMenu, setShowAlertsMenu] = useState<boolean>(false);
  const unreadAlertsCount = alerts.length;
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setShowAlertsMenu(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectTab = (tab: NavigationTab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  const handleOpenCategoriesFromMenu = () => {
    setIsMenuOpen(false);
    onOpenCategories();
  };

  const navItems = [
    {
      id: 'projects' as NavigationTab,
      label: 'Paid Internships',
      icon: Briefcase,
      color: 'text-[#8B6239]',
      badge: null,
      subtitle: 'Zero GPA • Guaranteed PKR milestone stipends'
    },
    {
      id: 'microtasks' as NavigationTab,
      label: '3-Day Micro-Tasks',
      icon: Zap,
      color: 'text-amber-600',
      badge: '⚡ Fast Escrow',
      subtitle: 'Quick PR bounties with automated review'
    },
    {
      id: 'remote' as NavigationTab,
      label: 'Global Remote',
      icon: Globe2,
      color: 'text-[#8B6239]',
      badge: 'USD Stipends',
      subtitle: 'US/EU asynchronous junior engineer roles'
    },
    {
      id: 'verifier' as NavigationTab,
      label: 'AI Skill Verifier',
      icon: Sparkles,
      color: 'text-[#966F48]',
      badge: 'AST Audit',
      subtitle: 'Audit GitHub code and earn proof-of-skill badges'
    },
    {
      id: 'wall_of_fame' as NavigationTab,
      label: 'Wall of Fame',
      icon: GraduationCap,
      color: 'text-[#8B6239]',
      badge: null,
      subtitle: 'FAST, NUST, NED & COMSATS alumni stories'
    },
    {
      id: 'chat' as NavigationTab,
      label: 'Founder Chat',
      icon: MessageSquare,
      color: 'text-[#784E2D]',
      badge: unreadChatCount > 0 ? `${unreadChatCount} new` : null,
      subtitle: 'Direct 1-on-1 dialogue with Pakistani CTOs'
    },
    {
      id: 'documents' as NavigationTab,
      label: 'Document Vault',
      icon: FileText,
      color: 'text-[#5C4736]',
      badge: null,
      subtitle: 'Signed offer letters & verifiable credentials'
    },
    {
      id: 'interviews' as NavigationTab,
      label: 'Interviews',
      icon: Calendar,
      color: 'text-[#8B6239]',
      badge: null,
      subtitle: 'Scheduled technical discussions & slots'
    },
    {
      id: 'api_explorer' as NavigationTab,
      label: 'REST API',
      icon: Server,
      color: 'text-[#8B6239]',
      badge: 'Live',
      subtitle: 'Direct Express & Mongoose API endpoints'
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Identity */}
          <div className="flex items-center space-x-3">
            <WorkNestLogo size="md" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-extrabold tracking-tight text-[#2A1E14] font-sans">
                  WorkNest <span className="text-[#8B6239]">Ajao</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EFE8DC] text-[#4A3728] border border-[#DFD3C3] uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 animate-pulse"></span>
                  Pakistan Tech
                </span>
              </div>
              <p className="text-[11px] text-[#7A6453] hidden md:block">
                No GPA Required • Paid Pakistani Startups & US Remote • Lahore • Karachi • Islamabad
              </p>
            </div>
          </div>

          {/* Right Action: Currency Switcher, Mobile Alerts & The Three-Line Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Currency Toggle */}
            <button
              onClick={onToggleCurrency}
              className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-[#F7F2EA] border border-[#E2D5C3] text-xs font-bold text-[#2A1E14] flex items-center space-x-1 cursor-pointer transition-all shadow-2xs"
              title="Toggle PKR / USD display"
            >
              <span className={currency === 'PKR' ? 'text-[#8B6239] font-extrabold' : 'text-[#A08E7E]'}>PKR</span>
              <span className="text-[#D5C7B5]">/</span>
              <span className={currency === 'USD' ? 'text-[#8B6239] font-extrabold' : 'text-[#A08E7E]'}>USD</span>
            </button>

            {/* Mobile Alerts Bell (Jazz/Zong/WhatsApp) */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowAlertsMenu(!showAlertsMenu);
                  if (isMenuOpen) setIsMenuOpen(false);
                }}
                className="p-2 rounded-xl bg-white hover:bg-[#F7F2EA] text-[#2A1E14] border border-[#E2D5C3] relative cursor-pointer shadow-2xs transition-all"
                title="Cellular & WhatsApp Alerts (Jazz, Zong, WhatsApp)"
              >
                <Bell className="w-4 h-4 text-[#5C4736]" />
                {unreadAlertsCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8B6239] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {unreadAlertsCount}
                  </span>
                )}
              </button>

              {showAlertsMenu && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-[#E2D5C3] p-4 z-50 animate-fade-in space-y-3">
                  <div className="flex items-center justify-between border-b border-[#EFE8DC] pb-2">
                    <span className="font-extrabold text-xs text-[#2A1E14] flex items-center space-x-1.5">
                      <span>Pakistan Cellular & WhatsApp Alerts</span>
                    </span>
                    <span className="text-[10px] bg-[#EFE8DC] text-[#4A3728] font-bold px-2 py-0.5 rounded-full border border-[#DFD3C3]">
                      Live Gateways
                    </span>
                  </div>

                  <div className="max-h-72 overflow-y-auto space-y-2.5">
                    {alerts.map((al) => (
                      <div key={al.id} className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFD3] space-y-1">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-bold text-[#4A3728] px-1.5 py-0.5 rounded bg-white border border-[#E2D5C3]">
                            {al.telco} • {al.sender}
                          </span>
                          <span className="text-[#8C7662]">{al.timestamp}</span>
                        </div>
                        <p className="text-[11px] text-[#2A1E14] leading-snug">
                          {al.message}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowAlertsMenu(false)}
                    className="w-full py-1.5 rounded-xl bg-[#2A1E14] text-white text-xs font-bold hover:bg-[#3D2C1E] transition-colors cursor-pointer"
                  >
                    Close Alerts
                  </button>
                </div>
              )}
            </div>

            {/* THE THREE-LINE BUTTON (Hamburger Button) */}
            <div className="relative" ref={menuRef}>
              <button
                id="three-line-menu-btn"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  if (showAlertsMenu) setShowAlertsMenu(false);
                }}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer border shadow-2xs ${
                  isMenuOpen
                    ? 'bg-[#2A1E14] text-white border-[#2A1E14] ring-2 ring-[#966F48]/30'
                    : 'bg-[#8B6239] hover:bg-[#784E2D] text-white border-[#784E2D] hover:border-[#6E421E]'
                }`}
                title="Open Navigation & Categories Menu"
                aria-label="Open Navigation & Categories Menu"
                aria-expanded={isMenuOpen}
              >
                {/* Three Line Icon */}
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
                <span className="hidden sm:inline font-extrabold tracking-wide">
                  {isMenuOpen ? 'Close' : 'Menu'}
                </span>
                {unreadChatCount > 0 && !isMenuOpen && (
                  <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping"></span>
                )}
              </button>

              {/* DROPDOWN LIST (Opens when the three-line button is clicked) */}
              {isMenuOpen && (
                <>
                  {/* Backdrop click dismiss */}
                  <div
                    className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-2xs"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                  />

                  {/* Dropdown Card */}
                  <div 
                    id="dropdown-menu-list"
                    className="absolute right-0 mt-3 w-80 sm:w-96 bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl border border-[#E2D5C3] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto"
                    role="menu"
                  >
                    {/* Header in dropdown */}
                    <div className="px-3 py-2 border-b border-[#EFE8DC] flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#8C7662] uppercase tracking-wider">
                        Explore WorkNest Ajao
                      </span>
                      <span className="text-[10px] bg-[#EFE8DC] text-[#4A3728] font-extrabold px-2 py-0.5 rounded-full border border-[#DFD3C3]">
                        Pakistan Tech
                      </span>
                    </div>

                    {/* Section 1: Categories & Tracks Item */}
                    <div className="p-1 pt-2">
                      <button
                        id="dropdown-categories-btn"
                        onClick={handleOpenCategoriesFromMenu}
                        className="w-full text-left p-3 rounded-xl bg-gradient-to-r from-[#F7F2EA] via-[#F4EDE2] to-[#ECE1D0] hover:from-[#F4EDE2] hover:to-[#E8DCCB] border border-[#DFD2BF] transition-all flex items-center justify-between group cursor-pointer"
                        role="menuitem"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-xl bg-[#8B6239] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                            <SlidersHorizontal className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-1.5">
                              <span className="text-xs font-extrabold text-[#2A1E14]">
                                Categories & Tracks
                              </span>
                              <span className="px-1.5 py-0.2 rounded bg-[#8B6239] text-white text-[9px] font-extrabold">
                                Slidebar
                              </span>
                            </div>
                            <p className="text-[11px] text-[#614D3B] font-medium">
                              Active: <strong className="font-bold text-[#2A1E14]">{selectedTrack === 'All' ? 'All CS/IT Tracks' : selectedTrack}</strong>
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#8B6239] group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                    {/* Section 2: Platform Navigation Items */}
                    <div className="py-2 space-y-1">
                      <div className="px-3 py-1">
                        <span className="text-[10px] font-bold text-[#8C7662] uppercase tracking-wider">
                          Platform Features
                        </span>
                      </div>

                      {navItems.map((item) => {
                        const Icon = item.icon;
                        const isSelected = activeTab === item.id;

                        return (
                          <button
                            key={item.id}
                            id={`dropdown-nav-${item.id}-btn`}
                            onClick={() => handleSelectTab(item.id)}
                            className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-[#2A1E14] text-white shadow-xs'
                                : 'hover:bg-[#F7F2EA] text-[#4A3728] hover:text-[#2A1E14]'
                            }`}
                            role="menuitem"
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/10 text-white' : 'bg-[#F2ECE2] text-[#8B6239]'}`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs font-bold">
                                    {item.label}
                                  </span>
                                  {item.badge && (
                                    <span className={`px-1.5 py-0.2 rounded-full text-[9px] font-extrabold ${
                                      isSelected
                                        ? 'bg-[#8B6239] text-white font-bold'
                                        : 'bg-[#EFE8DC] text-[#4A3728] border border-[#DFD3C3]'
                                    }`}>
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className={`text-[10px] leading-tight ${isSelected ? 'text-[#D5C7B5]' : 'text-[#7A6453]'}`}>
                                  {item.subtitle}
                                </p>
                              </div>
                            </div>

                            {isSelected && (
                              <Check className="w-4 h-4 text-amber-500 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Footer inside dropdown */}
                    <div className="pt-2 border-t border-[#EFE8DC] px-3 py-2 text-[10px] text-[#8C7662] flex items-center justify-between">
                      <span>WorkNest Ajao • Pakistan</span>
                      <span>Press ESC to close</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
