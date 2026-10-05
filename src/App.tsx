import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  Filter, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  Layers, 
  DollarSign, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Bell,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { 
  CandidateProfile, 
  InternshipProject, 
  ChatThread, 
  ChatMessage, 
  DocumentPortalItem, 
  InterviewBooking,
  VerificationBadge,
  TechSkill,
  MicroTask,
  RemoteJob,
  MobileAlert
} from './types';
import { 
  CURRENT_GRADUATE, 
  STARTUPS, 
  INTERNSHIP_PROJECTS, 
  CHAT_THREADS, 
  CHAT_MESSAGES_MAP, 
  DOCUMENT_PORTAL_ITEMS, 
  UPCOMING_INTERVIEWS,
  PAKISTAN_TESTIMONIALS,
  MICRO_TASKS,
  GLOBAL_REMOTE_JOBS,
  REMOTE_READINESS_METRICS,
  MOBILE_ALERTS
} from './data/mockData';
import { Header, NavigationTab } from './components/Header';
import { GraduateBanner } from './components/GraduateBanner';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AiSkillVerifier } from './components/AiSkillVerifier';
import { MilestoneTracker } from './components/MilestoneTracker';
import { FounderChat } from './components/FounderChat';
import { DocumentPortal } from './components/DocumentPortal';
import { InterviewScheduler } from './components/InterviewScheduler';
import { FounderView } from './components/FounderView';
import { CandidateProfileModal } from './components/CandidateProfileModal';
import { PakistanWallOfFame } from './components/PakistanWallOfFame';
import { MicroTasksBoard } from './components/MicroTasksBoard';
import { RemoteCareerPathway } from './components/RemoteCareerPathway';
import { BackendApiExplorer } from './components/BackendApiExplorer';
import { CategoriesSlidebar, CATEGORY_TRACKS } from './components/CategoriesSlidebar';

export default function App() {
  // Navigation & Role state
  const [activeTab, setActiveTab] = useState<NavigationTab>('projects');
  const [userRole, setUserRole] = useState<'candidate' | 'founder'>('candidate');
  const [currency, setCurrency] = useState<'PKR' | 'USD'>('PKR');

  // Core Data state
  const [candidate, setCandidate] = useState<CandidateProfile>(CURRENT_GRADUATE);
  const [projects, setProjects] = useState<InternshipProject[]>(INTERNSHIP_PROJECTS);
  const [chatThreads, setChatThreads] = useState<ChatThread[]>(CHAT_THREADS);
  const [messagesMap, setMessagesMap] = useState<Record<string, ChatMessage[]>>(CHAT_MESSAGES_MAP);
  const [activeThreadId, setActiveThreadId] = useState<string>('thread-finflow');
  const [documents, setDocuments] = useState<DocumentPortalItem[]>(DOCUMENT_PORTAL_ITEMS);
  const [interviews, setInterviews] = useState<InterviewBooking[]>(UPCOMING_INTERVIEWS);
  const [microTasks, setMicroTasks] = useState<MicroTask[]>(MICRO_TASKS);
  const [remoteJobs, setRemoteJobs] = useState<RemoteJob[]>(GLOBAL_REMOTE_JOBS);
  const [mobileAlerts, setMobileAlerts] = useState<MobileAlert[]>(MOBILE_ALERTS);

  // Interaction State
  const [appliedProjectIds, setAppliedProjectIds] = useState<Set<string>>(new Set(['project-fin-01']));
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<InternshipProject | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCategorySlidebarOpen, setIsCategorySlidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [onlyGraduatePriority, setOnlyGraduatePriority] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('All');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Filter projects based on search and tags
  const filteredProjects = projects.filter((proj) => {
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.requiredSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTrack = selectedTrack === 'All' || proj.track === selectedTrack;
    const matchesPriority = !onlyGraduatePriority || proj.graduatePriority;
    const matchesLocation = selectedLocation === 'All' || proj.startup.location.includes(selectedLocation);

    return matchesSearch && matchesTrack && matchesPriority && matchesLocation;
  });

  // Action: 1-Click Apply with Portfolio
  const handleQuickApply = (project: InternshipProject, customNote?: string) => {
    if (appliedProjectIds.has(project.id)) return;

    setAppliedProjectIds(prev => new Set(prev).add(project.id));
    setSelectedProjectForModal(null);
    showToast(`Proof-of-Work Application submitted to ${project.startup.name}! Founder ${project.startup.founderName} notified.`);

    // Automatically ensure chat thread exists
    const threadId = `thread-${project.startup.id.replace('startup-', '')}`;
    if (!messagesMap[threadId]) {
      const newThread: ChatThread = {
        id: threadId,
        startupId: project.startup.id,
        startupName: project.startup.name,
        founderName: project.startup.founderName,
        founderAvatar: project.startup.founderAvatar,
        projectId: project.id,
        projectTitle: project.title,
        lastMessageText: customNote || `Applied with verified portfolio for ${project.title}`,
        lastMessageTimestamp: 'Just now',
        unreadCount: 0
      };
      setChatThreads(prev => [newThread, ...prev]);

      const initialMessage: ChatMessage = {
        id: `msg-${Date.now()}`,
        threadId,
        senderId: candidate.id,
        senderName: candidate.name,
        senderRole: 'candidate',
        senderAvatar: candidate.avatar,
        text: customNote || `Hello ${project.startup.founderName}, I have applied for "${project.title}". My verified GitHub code and AI Proof-of-Skill audit are attached. Ready to start Milestone 1!`,
        timestamp: 'Just now'
      };
      setMessagesMap(prev => ({ ...prev, [threadId]: [initialMessage] }));
    }
  };

  // Action: Claim or Submit Micro Task
  const handleClaimMicroTask = (taskId: string, githubPrUrl: string) => {
    setMicroTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        return {
          ...t,
          status: 'submitted',
          claimantName: candidate.name,
          githubPrUrl: githubPrUrl || 'https://github.com/m-faizan-farooq/pull/4'
        };
      }
      return t;
    }));

    const claimedTask = microTasks.find(t => t.id === taskId);
    const payout = currency === 'PKR' ? claimedTask?.payoutPkr : claimedTask?.payoutUsd;

    showToast(`Micro-Task submitted with GitHub PR! Escrow payout (${payout}) will disburse upon review.`);

    // Add alert notification
    const newAlert: MobileAlert = {
      id: `al-${Date.now()}`,
      channel: 'sms',
      telco: 'Jazz',
      sender: 'WorkNest-Escrow',
      message: `PR received for task "${claimedTask?.title.substring(0, 30)}...". Escrow release queued upon code merge.`,
      timestamp: 'Just now',
      type: 'escrow_deposit',
      read: false
    };
    setMobileAlerts(prev => [newAlert, ...prev]);
  };

  // Action: Apply to Global Remote Job
  const handleApplyRemoteJob = (jobId: string) => {
    const job = remoteJobs.find(j => j.id === jobId);
    if (!job) return;

    setRemoteJobs(prev => prev.map(j => {
      if (j.id === jobId) {
        return { ...j, applicantsCount: j.applicantsCount + 1, applied: true };
      }
      return j;
    }));

    showToast(`Portfolio Proof submitted to ${job.companyName} (${job.companyCountry}) for ${job.title}!`);

    // Add notification alert
    const newAlert: MobileAlert = {
      id: `al-${Date.now()}`,
      channel: 'whatsapp',
      telco: 'WhatsApp',
      sender: `${job.companyName} Talent`,
      message: `Hi Faizan! Your verified AST benchmark of 96% and FastAPI async repos were received for ${job.title}. Scheduling US screening!`,
      timestamp: 'Just now',
      type: 'remote_offer',
      read: false
    };
    setMobileAlerts(prev => [newAlert, ...prev]);
  };

  // Action: Open Chat with Startup
  const handleStartChat = (startupId: string) => {
    const thread = chatThreads.find(t => t.startupId === startupId);
    if (thread) {
      setActiveThreadId(thread.id);
    }
    setActiveTab('chat');
  };

  // Action: Send Chat Message
  const handleSendMessage = (threadId: string, text: string, codeSnippet?: { language: string; code: string }) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      threadId,
      senderId: candidate.id,
      senderName: candidate.name,
      senderRole: 'candidate',
      senderAvatar: candidate.avatar,
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      codeSnippet
    };

    setMessagesMap(prev => ({
      ...prev,
      [threadId]: [...(prev[threadId] || []), newMessage]
    }));

    // Update last message in thread list
    setChatThreads(prev => prev.map(t => {
      if (t.id === threadId) {
        return {
          ...t,
          lastMessageText: text || 'Sent a code snippet',
          lastMessageTimestamp: 'Just now'
        };
      }
      return t;
    }));
  };

  // Action: Update Milestone Deliverable
  const handleUpdateMilestone = (milestoneId: string, submission: any) => {
    setProjects(prev => prev.map(p => {
      const updatedMilestones = p.milestones.map(m => {
        if (m.id === milestoneId) {
          return {
            ...m,
            status: 'under_review' as const,
            submission
          };
        }
        return m;
      });
      return { ...p, milestones: updatedMilestones };
    }));
    showToast('Milestone deliverable submitted for founder code review.');
  };

  // Action: Founder Sign-off on Milestone
  const handleFounderApproveMilestone = (milestoneId: string) => {
    let approvedAmount = 'PKR 45,000';
    setProjects(prev => prev.map(p => {
      const updatedMilestones = p.milestones.map(m => {
        if (m.id === milestoneId) {
          approvedAmount = m.payoutAmount;
          return {
            ...m,
            status: 'approved' as const,
            founderFeedback: {
              approved: true,
              rating: 5,
              comment: 'Exceptional deliverable! Clean connection pool abstractions and test suite passed flawlessly. Released escrow.',
              reviewedAt: new Date().toISOString().split('T')[0]
            }
          };
        }
        return m;
      });
      return { ...p, milestones: updatedMilestones };
    }));

    // Add certified experience document
    const newDoc: DocumentPortalItem = {
      id: `doc-cert-${Date.now()}`,
      title: `Verified Milestone Sign-off Credential (${approvedAmount})`,
      type: 'experience_verification',
      startupName: 'FinFlow Pakistan & WorkNest Ajao',
      fileSize: '740 KB',
      uploadedDate: new Date().toISOString().split('T')[0],
      status: 'verified_issued',
      confidentiality: 'Public Verifiable Credential',
      hashDigest: `sha256:${Math.random().toString(16).substring(2, 12)}...`
    };
    setDocuments(prev => [newDoc, ...prev]);

    showToast(`Founder Tariq Masood (CTO) approved Milestone! ${approvedAmount} Escrow released & Verified Credential generated.`);
  };

  // Action: Document E-Signature
  const handleSignDocument = (docId: string) => {
    setDocuments(prev => prev.map(d => {
      if (d.id === docId) {
        return { ...d, status: 'signed_by_both' as const };
      }
      return d;
    }));
    showToast('Document electronically signed and registered in tamper-resistant vault.');
  };

  // Action: Book Interview
  const handleBookInterview = (booking: Omit<InterviewBooking, 'id' | 'status'>) => {
    const newInv: InterviewBooking = {
      ...booking,
      id: `inv-${Date.now()}`,
      status: 'upcoming'
    };
    setInterviews(prev => [newInv, ...prev]);

    // Send calendar invite card into founder chat
    const thread = chatThreads.find(t => t.startupId === booking.startupId);
    if (thread) {
      const inviteMsg: ChatMessage = {
        id: `msg-inv-${Date.now()}`,
        threadId: thread.id,
        senderId: candidate.id,
        senderName: candidate.name,
        senderRole: 'candidate',
        senderAvatar: candidate.avatar,
        text: `Scheduled a technical review session on ${booking.date} at ${booking.time}.`,
        timestamp: 'Just now',
        scheduleInvite: {
          interviewId: newInv.id,
          dateTime: `${booking.date} • ${booking.time}`,
          topic: booking.agenda,
          meetUrl: booking.meetUrl,
          status: 'accepted'
        }
      };
      setMessagesMap(prev => ({
        ...prev,
        [thread.id]: [...(prev[thread.id] || []), inviteMsg]
      }));
    }

    showToast(`Technical review scheduled for ${booking.date} at ${booking.time}.`);
  };

  // Action: Save Verified Badge from AI Verifier
  const handleBadgeAwarded = (badge: VerificationBadge, newSkill: TechSkill) => {
    setCandidate(prev => ({
      ...prev,
      portfolioReliabilityScore: Math.min(99, (prev.portfolioReliabilityScore ?? 96) + 1),
      overallMatchRating: Math.min(99, prev.overallMatchRating + 2),
      verifiedBadges: [badge, ...prev.verifiedBadges],
      skills: [newSkill, ...prev.skills.filter(s => s.name !== newSkill.name)]
    }));
    showToast(`Proof-of-Skill Badge "${badge.title}" added to your verified portfolio!`);
  };

  // Action: Founder posts new project
  const handlePostNewProject = (newProjectData: any) => {
    const newProj: InternshipProject = {
      id: `proj-${Date.now()}`,
      startupId: STARTUPS[0].id,
      startup: STARTUPS[0],
      title: newProjectData.title,
      track: newProjectData.track,
      summary: newProjectData.summary,
      objective: newProjectData.summary,
      durationWeeks: newProjectData.durationWeeks,
      commitmentHours: '15-20 hrs/week',
      stipendTotal: newProjectData.stipendTotal,
      stipendModel: 'Milestone-based Escrow',
      requiredSkills: newProjectData.requiredSkills,
      preferredSkills: ['Git', 'Docker'],
      graduatePriority: true,
      activeApplicantsCount: 1,
      spotsAvailable: 2,
      outcomeExperience: 'Shipped production features directly to startup codebases without GPA gatekeeping.',
      milestones: [
        {
          id: `ms-new-1`,
          stepNumber: 1,
          title: 'RFC Spec & Sandbox Setup',
          description: 'Define technical design and initialize containerized dev environment.',
          targetDuration: 'Week 1-2',
          payoutAmount: 'PKR 35,000',
          status: 'pending',
          deliverablesSummary: ['RFC Document', 'Docker compose setup']
        },
        {
          id: `ms-new-2`,
          stepNumber: 2,
          title: 'Core Implementation & CI Integration',
          description: 'Develop main feature with unit and integration tests.',
          targetDuration: 'Week 3-5',
          payoutAmount: 'PKR 45,000',
          status: 'pending',
          deliverablesSummary: ['Tested code', 'GitHub Actions workflow']
        }
      ]
    };

    setProjects(prev => [newProj, ...prev]);
    showToast('New milestone project published to WorkNest Ajao launchpad!');
  };

  const unreadChatCount = chatThreads.reduce((acc, t) => acc + t.unreadCount, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2A1E14] font-sans flex flex-col selection:bg-[#966F48] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2A1E14] text-[#FBF8F2] text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl border border-[#523E2E] flex items-center space-x-2 animate-in slide-in-from-bottom">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main App Header (Clean top bar without profile login) */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        unreadChatCount={unreadChatCount}
        currency={currency}
        onToggleCurrency={() => setCurrency(prev => prev === 'PKR' ? 'USD' : 'PKR')}
        alerts={mobileAlerts}
        onOpenCategories={() => setIsCategorySlidebarOpen(true)}
        selectedTrack={selectedTrack}
      />

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {userRole === 'founder' ? (
          /* Startup Founder View */
          <FounderView
            startup={STARTUPS[0]}
            candidate={candidate}
            projects={projects}
            onApproveMilestone={(projId, msId) => handleFounderApproveMilestone(msId)}
            onOpenChat={(startupId) => {
              handleStartChat(startupId);
              setUserRole('candidate'); // switch to chat
            }}
            onPostNewProject={handlePostNewProject}
          />
        ) : (
          /* CS/IT Graduate View */
          <>
            {activeTab === 'projects' && (
              <div className="space-y-6">
                {/* Graduate Launchpad Banner */}
                <GraduateBanner
                  onExploreProjects={() => {
                    const el = document.getElementById('project-filter-bar');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onLaunchSkillAudit={() => setActiveTab('verifier')}
                  onViewWallOfFame={() => setActiveTab('wall_of_fame')}
                />

                {/* Filter and Search Bar with Categories Slidebar Trigger */}
                <div id="project-filter-bar" className="bg-white rounded-2xl border border-[#E8DFD3] p-4 shadow-xs space-y-3.5">
                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Primary Button: Open Categories Slidebar */}
                    <button
                      id="open-categories-slidebar-btn"
                      onClick={() => setIsCategorySlidebarOpen(true)}
                      className="flex items-center justify-between space-x-2.5 px-4 py-2.5 rounded-xl bg-[#2A1E14] hover:bg-[#3D2C1E] text-[#FBF8F2] font-bold text-xs shadow-xs transition-all cursor-pointer group shrink-0 border border-[#523E2E]"
                      title="Press to open Categories & Tracks slidebar"
                    >
                      <div className="flex items-center space-x-2">
                        <SlidersHorizontal className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                        <span>Categories</span>
                        <span className="px-2 py-0.5 rounded-md bg-[#966F48]/40 text-[#F5EDE3] text-[10px] font-bold border border-[#966F48]/60 max-w-[130px] truncate">
                          {selectedTrack === 'All' ? 'All Tracks' : selectedTrack}
                        </span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-[#D5C7B5] group-hover:translate-y-0.5 transition-transform" />
                    </button>

                    {/* Search Input */}
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-[#9C8A79] absolute left-3.5 top-3" />
                      <input
                        id="search-projects-input"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by stack (Python, React, Django, Flutter, Docker) or startup..."
                        className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border border-[#E2D5C3] bg-white text-[#2A1E14] placeholder-[#9C8A79] focus:border-[#966F48] focus:ring-1 focus:ring-[#966F48] outline-none"
                      />
                    </div>

                    {/* Hub / Location Filter */}
                    <select
                      id="filter-location-select"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="text-xs px-3 py-2.5 rounded-xl border border-[#E2D5C3] focus:border-[#966F48] outline-none bg-white font-semibold text-[#2A1E14] cursor-pointer"
                    >
                      <option value="All">All Pakistani Tech Hubs</option>
                      <option value="Lahore">Lahore (Gulberg, DHA, Johar Town)</option>
                      <option value="Karachi">Karachi (Shahrah-e-Faisal, Clifton)</option>
                      <option value="Islamabad">Islamabad (Blue Area, I-8)</option>
                      <option value="Faisalabad">Faisalabad (AgriTech Hub)</option>
                      <option value="Peshawar">Peshawar (University Town)</option>
                      <option value="Remote PK">Remote Pakistan</option>
                    </select>
                  </div>

                  {/* Category Quick Chips that sync with the slidebar */}
                  <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 no-scrollbar pt-1 border-t border-[#EFE8DC]">
                    <span className="text-[10px] uppercase font-bold text-[#8C7662] shrink-0 mr-1">
                      Categories:
                    </span>
                    {CATEGORY_TRACKS.map(cat => {
                      const isSelected = selectedTrack === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedTrack(cat.id)}
                          className={`text-xs px-2.5 py-1 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#8B6239] text-white shadow-2xs font-bold'
                              : 'bg-[#F2ECE2] hover:bg-[#EAE0D2] text-[#4A3728]'
                          }`}
                        >
                          {cat.shortName}
                        </button>
                      );
                    })}
                    <button
                      onClick={() => setIsCategorySlidebarOpen(true)}
                      className="text-xs px-2.5 py-1 rounded-lg font-bold whitespace-nowrap text-[#8B6239] hover:text-[#6E4924] hover:bg-[#F2ECE2] cursor-pointer border border-[#DFCFC0] flex items-center space-x-1"
                    >
                      <span>Slidebar Filter →</span>
                    </button>
                  </div>

                  {/* Quick toggle chips */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#EFE8DC] text-xs">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setOnlyGraduatePriority(!onlyGraduatePriority)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
                          onlyGraduatePriority
                            ? 'bg-[#F4E8DB] text-[#6E421E] border border-[#DEBA96]'
                            : 'bg-[#F2ECE2] text-[#5C4736] hover:bg-[#EAE0D2] border border-transparent'
                        }`}
                      >
                        <GraduationCap className="w-3.5 h-3.5 text-[#8B6239]" />
                        <span>Post-Grad Priority Launchpad Only</span>
                      </button>

                      <span className="text-[#D0C2B0]">|</span>

                      <span className="text-[#6B5542]">
                        Showing <strong>{filteredProjects.length}</strong> verified milestone projects
                      </span>
                    </div>

                    <div className="text-[11px] text-[#8B6239] font-semibold flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B6239]" />
                      <span>Zero GPA Requirements on 100% of projects</span>
                    </div>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      candidate={candidate}
                      onSelectProject={(p) => setSelectedProjectForModal(p)}
                      onQuickApply={(p) => handleQuickApply(p)}
                      onStartChat={(startupId) => handleStartChat(startupId)}
                      hasApplied={appliedProjectIds.has(project.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'microtasks' && (
              <MicroTasksBoard
                tasks={microTasks}
                currency={currency}
                onClaimTask={handleClaimMicroTask}
              />
            )}

            {activeTab === 'remote' && (
              <RemoteCareerPathway
                jobs={remoteJobs}
                metrics={REMOTE_READINESS_METRICS}
                candidate={candidate}
                currency={currency}
                onApplyJob={handleApplyRemoteJob}
                onOpenAudit={() => setActiveTab('verifier')}
              />
            )}

            {activeTab === 'verifier' && (
              <AiSkillVerifier
                candidate={candidate}
                onBadgeAwarded={handleBadgeAwarded}
                onExploreMatchedProjects={() => setActiveTab('projects')}
              />
            )}

            {activeTab === 'milestones' && (
              <MilestoneTracker
                project={projects[0]}
                onUpdateMilestone={handleUpdateMilestone}
                onFounderApproveMilestone={handleFounderApproveMilestone}
                onOpenChat={(startupId) => handleStartChat(startupId)}
                onViewDocuments={() => setActiveTab('documents')}
              />
            )}

            {activeTab === 'chat' && (
              <FounderChat
                threads={chatThreads}
                messagesMap={messagesMap}
                activeThreadId={activeThreadId}
                onSelectThread={(id) => setActiveThreadId(id)}
                onSendMessage={handleSendMessage}
                onOpenScheduleModal={(sId, sName, fName) => setActiveTab('interviews')}
                candidate={candidate}
              />
            )}

            {activeTab === 'documents' && (
              <DocumentPortal
                documents={documents}
                onSignDocument={handleSignDocument}
                onUploadDocument={(newDocData) => {
                  const newDoc: DocumentPortalItem = {
                    ...newDocData,
                    id: `doc-${Date.now()}`,
                    uploadedDate: new Date().toISOString().split('T')[0],
                    hashDigest: `sha256:${Math.random().toString(16).substring(2, 12)}...`
                  };
                  setDocuments(prev => [newDoc, ...prev]);
                  showToast(`Document "${newDoc.title}" securely uploaded.`);
                }}
              />
            )}

            {activeTab === 'interviews' && (
              <InterviewScheduler
                interviews={interviews}
                startups={STARTUPS}
                onBookInterview={handleBookInterview}
                onJoinMeeting={(url) => window.open(url, '_blank')}
              />
            )}

            {activeTab === 'wall_of_fame' && (
              <PakistanWallOfFame
                testimonials={PAKISTAN_TESTIMONIALS}
                onOpenProjectModal={(projectId) => {
                  const found = projects.find(p => p.id === projectId);
                  if (found) {
                    setSelectedProjectForModal(found);
                  } else {
                    setSelectedProjectForModal(projects[0]);
                  }
                }}
              />
            )}

            {activeTab === 'api_explorer' && (
              <BackendApiExplorer />
            )}
          </>
        )}
      </main>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProjectForModal}
        candidate={candidate}
        isOpen={!!selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
        onApply={(p, note) => handleQuickApply(p, note)}
        onStartChat={(startupId) => handleStartChat(startupId)}
        hasApplied={selectedProjectForModal ? appliedProjectIds.has(selectedProjectForModal.id) : false}
      />

      {/* Candidate Profile Modal */}
      <CandidateProfileModal
        candidate={candidate}
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onRunAudit={() => {
          setIsProfileModalOpen(false);
          setActiveTab('verifier');
        }}
      />

      {/* Categories Slidebar (Slide-out drawer when pressed) */}
      <CategoriesSlidebar
        isOpen={isCategorySlidebarOpen}
        onClose={() => setIsCategorySlidebarOpen(false)}
        selectedTrack={selectedTrack}
        onSelectTrack={(track) => {
          setSelectedTrack(track);
        }}
        selectedLocation={selectedLocation}
        onSelectLocation={(loc) => setSelectedLocation(loc)}
        onlyGraduatePriority={onlyGraduatePriority}
        onToggleGraduatePriority={() => setOnlyGraduatePriority(prev => !prev)}
        projects={projects}
        onResetFilters={() => {
          setSelectedTrack('All');
          setSelectedLocation('All');
          setOnlyGraduatePriority(false);
          setSearchQuery('');
        }}
      />

      {/* Clean Footer */}
      <footer className="border-t border-[#E8DFD3] bg-[#F7F2EA] py-6 mt-12 text-[#6B5542] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-[#2A1E14]">WorkNest Ajao</span>
            <span className="text-[#D5C7B5]">•</span>
            <span>Pakistan’s Virtual Project Launchpad for CS & IT Fresh Graduates</span>
          </div>

          <div className="flex items-center space-x-4 text-[#5C4736]">
            <button
              onClick={() => setIsCategorySlidebarOpen(true)}
              className="hover:text-[#966F48] font-semibold cursor-pointer flex items-center space-x-1"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#966F48]" />
              <span>Browse Categories</span>
            </button>
            <button
              onClick={() => setActiveTab('wall_of_fame')}
              className="hover:text-[#966F48] font-semibold cursor-pointer"
            >
              Wall of Fame
            </button>
            <button
              onClick={() => setActiveTab('api_explorer')}
              className="hover:text-[#966F48] font-semibold cursor-pointer"
            >
              REST API
            </button>
            <button
              onClick={() => setUserRole(prev => prev === 'candidate' ? 'founder' : 'candidate')}
              className="text-[11px] text-[#8C7662] hover:text-[#2A1E14] underline cursor-pointer"
              title="Toggle preview role for demo testing"
            >
              {userRole === 'candidate' ? 'Founder Demo View' : 'Back to Graduate View'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

