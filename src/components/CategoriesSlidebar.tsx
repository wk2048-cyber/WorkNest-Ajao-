import React, { useEffect, useState } from 'react';
import { 
  X, 
  Check, 
  Layers, 
  Terminal, 
  Cloud, 
  Smartphone, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  SlidersHorizontal,
  ArrowRight,
  Search,
  Briefcase,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { InternshipProject } from '../types';

export interface CategoryTrackInfo {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  color: string;
  badgeBg: string;
  description: string;
  popularTech: string[];
}

export const CATEGORY_TRACKS: CategoryTrackInfo[] = [
  {
    id: 'All',
    name: 'All Categories (CS & IT)',
    shortName: 'All Tracks',
    icon: Layers,
    color: 'text-slate-900',
    badgeBg: 'bg-slate-100 text-slate-800 border-slate-300',
    description: 'Explore all Pakistani virtual mini-internships across every CS and IT discipline.',
    popularTech: ['Python', 'FastAPI', 'Flutter', 'Docker', 'PostgreSQL', 'Node.js']
  },
  {
    id: 'CS Backend & Distributed Systems',
    name: 'CS Backend & Distributed Systems',
    shortName: 'Backend & Distributed',
    icon: Terminal,
    color: 'text-[#8B6239]',
    badgeBg: 'bg-[#F4EDE2] text-[#6E4924] border-[#DECFBE]',
    description: 'High-throughput microservices, concurrent queues, API gateways, and distributed database sharding.',
    popularTech: ['FastAPI', 'Redis Streams', 'PostgreSQL', 'Docker', 'Go']
  },
  {
    id: 'Backend Engineering & Cloud',
    name: 'Backend Engineering & Cloud',
    shortName: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'text-sky-700',
    badgeBg: 'bg-sky-50 text-sky-800 border-sky-200',
    description: 'Cloud infrastructure, container orchestration, Kubernetes, CI/CD pipelines, and async backends.',
    popularTech: ['Node.js', 'TypeScript', 'Docker', 'AWS / GCP', 'BullMQ']
  },
  {
    id: 'Mobile App Engineering',
    name: 'Mobile App Engineering',
    shortName: 'Mobile (Flutter/Dart)',
    icon: Smartphone,
    color: 'text-indigo-700',
    badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    description: 'Cross-platform mobile applications with offline sync, clean state management, and real-time sockets.',
    popularTech: ['Flutter', 'Dart', 'BLoC', 'WebSockets', 'REST APIs']
  },
  {
    id: 'Software Quality & Automation',
    name: 'Software Quality & Automation',
    shortName: 'SQA & Test Automation',
    icon: ShieldCheck,
    color: 'text-amber-700',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    description: 'End-to-end automated testing suites, API regression testing, performance profiling, and QA pipelines.',
    popularTech: ['Playwright', 'Jest', 'GitHub Actions', 'Postman', 'k6']
  },
  {
    id: 'AI & Data Engineering',
    name: 'AI & Data Engineering',
    shortName: 'AI & Machine Learning',
    icon: Sparkles,
    color: 'text-purple-700',
    badgeBg: 'bg-purple-50 text-purple-800 border-purple-200',
    description: 'LLM agents, retrieval-augmented generation (RAG), vector embeddings, and predictive data pipelines.',
    popularTech: ['Python', 'LangChain', 'ChromaDB', 'Pandas', 'FastAPI']
  },
  {
    id: 'IoT & Embedded Cloud',
    name: 'IoT & Embedded Cloud',
    shortName: 'IoT & Embedded Systems',
    icon: Cpu,
    color: 'text-rose-700',
    badgeBg: 'bg-rose-50 text-rose-800 border-rose-200',
    description: 'Edge computing, sensor telemetry ingestion, MQTT brokers, firmware simulation, and device fleet management.',
    popularTech: ['MQTT', 'ESP32 / C++', 'TimescaleDB', 'Docker', 'Python']
  }
];

export const TECH_HUBS = [
  { id: 'All', name: 'All Pakistani Tech Hubs' },
  { id: 'Lahore', name: 'Lahore (Gulberg, DHA, Johar Town)' },
  { id: 'Karachi', name: 'Karachi (Shahrah-e-Faisal, Clifton)' },
  { id: 'Islamabad', name: 'Islamabad / Rawalpindi (Blue Area)' },
  { id: 'Faisalabad', name: 'Faisalabad (AgriTech Hub)' },
  { id: 'Peshawar', name: 'Peshawar (University Town)' },
  { id: 'Remote PK', name: 'Remote Pakistan (Work from home)' }
];

interface CategoriesSlidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTrack: string;
  onSelectTrack: (track: string) => void;
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
  onlyGraduatePriority: boolean;
  onToggleGraduatePriority: () => void;
  projects: InternshipProject[];
  onResetFilters?: () => void;
}

export const CategoriesSlidebar: React.FC<CategoriesSlidebarProps> = ({
  isOpen,
  onClose,
  selectedTrack,
  onSelectTrack,
  selectedLocation,
  onSelectLocation,
  onlyGraduatePriority,
  onToggleGraduatePriority,
  projects,
  onResetFilters
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when slidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Count projects for a given track
  const getProjectCount = (trackId: string) => {
    if (trackId === 'All') return projects.length;
    return projects.filter(p => p.track === trackId).length;
  };

  // Filtered tracks list based on internal search
  const filteredTracks = CATEGORY_TRACKS.filter(cat => 
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.popularTech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop overlay */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 pointer-events-none">
        {/* Slide-over panel */}
        <aside 
          className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col pointer-events-auto transform transition-transform duration-300 ease-in-out border-l border-[#E2D5C3]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="categories-slidebar-title"
        >
          {/* Header */}
          <div className="p-5 border-b border-[#E8DFD3] bg-[#F5EFE6] flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#8B6239] text-white flex items-center justify-center shadow-xs">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <div>
                <h2 id="categories-slidebar-title" className="text-base font-extrabold text-[#2A1E14]">
                  Project Categories & Tracks
                </h2>
                <p className="text-[11px] text-[#7A6453] font-medium">
                  Filter by technical domain & Pakistani tech hub
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#8C7662] hover:text-[#2A1E14] hover:bg-[#EFE7DC] transition-colors cursor-pointer"
              title="Close Categories Slidebar"
              aria-label="Close Categories Slidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search inside Slidebar */}
          <div className="p-4 border-b border-[#E8DFD3] bg-white">
            <div className="relative">
              <Search className="w-4 h-4 text-[#9C8A79] absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search tracks or stacks (Python, Flutter, Docker)..."
                className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-[#E2D5C3] text-[#2A1E14] placeholder-[#9C8A79] focus:border-[#966F48] focus:ring-1 focus:ring-[#966F48] outline-none"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-2.5 text-[#9C8A79] hover:text-[#2A1E14] text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Scrollable Categories List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5">
            {/* Primary Track Selection */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs px-1">
                <span className="font-bold text-[#5C4736] uppercase tracking-wider text-[11px]">
                  Technical Categories ({filteredTracks.length})
                </span>
                {selectedTrack !== 'All' && (
                  <button
                    onClick={() => onSelectTrack('All')}
                    className="text-[11px] text-[#8B6239] hover:text-[#6E4924] font-bold flex items-center space-x-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset Category</span>
                  </button>
                )}
              </div>

              <div className="space-y-2">
                {filteredTracks.map((category) => {
                  const Icon = category.icon;
                  const isSelected = selectedTrack === category.id;
                  const count = getProjectCount(category.id);

                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        onSelectTrack(category.id);
                      }}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all flex flex-col space-y-2 cursor-pointer ${
                        isSelected
                          ? 'bg-[#F4EDE2] border-[#8B6239] ring-2 ring-[#8B6239]/20 shadow-xs'
                          : 'bg-white border-[#E8DFD3] hover:border-[#D5C7B5] hover:bg-[#FAF7F2]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#8B6239] text-white' : 'bg-[#F2ECE2] text-[#8B6239]'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#2A1E14] block">
                              {category.name}
                            </span>
                            <span className="text-[10px] text-[#7A6453]">
                              {category.shortName}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                            isSelected 
                              ? 'bg-[#8B6239] text-white border-[#8B6239]'
                              : 'bg-[#F2ECE2] text-[#4A3728] border-[#E2D5C3]'
                          }`}>
                            {count} {count === 1 ? 'project' : 'projects'}
                          </span>
                          {isSelected && (
                            <Check className="w-4 h-4 text-[#8B6239] shrink-0" />
                          )}
                        </div>
                      </div>

                      <p className="text-[11px] text-[#5C4736] leading-snug pl-1">
                        {category.description}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1 pl-1">
                        {category.popularTech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-[9px] font-semibold bg-[#F2ECE2] text-[#4A3728] border border-[#E2D5C3]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pakistani Tech Hub Location Filter */}
            <div className="pt-4 border-t border-[#E8DFD3] space-y-2.5">
              <span className="font-bold text-[#5C4736] uppercase tracking-wider text-[11px] block px-1">
                Pakistani Tech Hub / City
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {TECH_HUBS.map((hub) => {
                  const isSelected = selectedLocation === hub.id;
                  return (
                    <button
                      key={hub.id}
                      onClick={() => onSelectLocation(hub.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#2A1E14] text-white shadow-xs'
                          : 'bg-white text-[#4A3728] border border-[#E8DFD3] hover:bg-[#F2ECE2]'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-[#9C8A79]'}`} />
                        <span>{hub.name}</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Graduate Priority Toggle */}
            <div className="pt-4 border-t border-[#E8DFD3]">
              <button
                onClick={onToggleGraduatePriority}
                className={`w-full p-3 rounded-2xl border transition-all flex items-center justify-between text-left cursor-pointer ${
                  onlyGraduatePriority
                    ? 'bg-[#F4E8DB] border-[#DEBA96] ring-2 ring-[#DEBA96]/30'
                    : 'bg-white border-[#E8DFD3] hover:bg-[#FAF7F2]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-xl ${onlyGraduatePriority ? 'bg-[#8B6239] text-white' : 'bg-[#F2ECE2] text-[#8B6239]'}`}>
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2A1E14] block">
                      Post-Grad Priority Launchpad Only
                    </span>
                    <span className="text-[10px] text-[#7A6453]">
                      Show exclusively projects prioritizing zero-GPA graduates
                    </span>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                  onlyGraduatePriority ? 'bg-[#8B6239] border-[#784E2D] text-white' : 'border-[#E2D5C3] bg-[#FAF7F2]'
                }`}>
                  {onlyGraduatePriority && <Check className="w-3.5 h-3.5" />}
                </div>
              </button>
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="p-4 border-t border-[#E8DFD3] bg-[#F5EFE6] space-y-2">
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-[#2A1E14] hover:bg-[#3D2C1E] text-white font-bold text-xs shadow-sm flex items-center justify-center space-x-2 cursor-pointer transition-colors"
            >
              <span>View Matching Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onResetFilters && (
              <button
                onClick={() => {
                  onResetFilters();
                  onClose();
                }}
                className="w-full py-1.5 rounded-xl text-[#7A6453] hover:text-[#2A1E14] text-[11px] font-semibold cursor-pointer text-center"
              >
                Reset All Filters to Default
              </button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};
