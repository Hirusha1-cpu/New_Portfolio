import React, { useEffect, useRef, useState } from "react";
import BlockchainBackground from "./components/BlockchainBackground.jsx";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Blocks,
  ShieldCheck,
  Cpu,
  Layers,
  X,
  ChevronRight,
  Copy,
  Check,
  Menu,
} from "lucide-react";

/* -------------------------------------------------------------------- */
/*  CONTENT — edit the text here to make this your own                  */
/* -------------------------------------------------------------------- */

const PROFILE = {
  name: "Hirusha Fernando",
  role: "Blockchain & Web3 Developer",
  tagline:
    "I build secure smart contracts and decentralized protocols from protocol architecture to production-ready deployment.",
  location: "Colombo, Sri Lanka",
  email: "hirushafernando121@gmail.com",
  wallet: "0xf0121285BD30078997B47f11c670538db7800501",
  social: {
    github: "https://github.com/Hirusha1-cpu",
    linkedin: "https://linkedin.com/in/hirusha-fernando-15020b1ab",
    twitter: "https://x.com/HirushaFernand5",
  },
};

const STATS = [
  { label: "Years in Software Engineering", value: "2+" },
  { label: "Web3 Projects Built", value: "4+" },
  { label: "Smart Contracts Developed", value: "25+" },
  { label: "Test Coverage", value: "95%+" },
];

const SKILLS = [
  {
    group: "Smart Contract Development",
    icon: Cpu,
    items: [
      "Solidity",
      "OpenZeppelin",
      "Foundry",
      "Hardhat",
    ],
  },
  {
    group: "Blockchain",
    icon: Blocks,
    items: [
      "Ethereum",
      "Sepolia Testnet",
      "Chainlink Oracles",
      "ERC-20",
    ],
  },
  {
    group: "Web3 Development",
    icon: Layers,
    items: [
      "Ethers.js",
      "Web3.js",
      "MetaMask",
      "React",
    ],
  },
  {
    group: "Security & Testing",
    icon: ShieldCheck,
    items: [
      "Slither",
      "Reentrancy Protection",
      "Access Control",
      "CEI Pattern",
    ],
  },
];

const PROJECTS = [
  {
    id: "0001",
    title: "Decentralized Lending Protocol",
    tagline: "Collateralized lending powered by Chainlink price oracles",
    cover: "amber",
    overview:
      "A decentralized lending protocol that allows users to deposit WETH as collateral, borrow USDC, repay loans, and monitor their health factor in real time.",
    problem:
      "Traditional lending systems require trusted intermediaries and lack transparent collateral management. DeFi protocols require secure, real-time collateral valuation and automated liquidation mechanisms.",
    solution:
      "Built a Solidity-based lending protocol using Chainlink price feeds for reliable collateral valuation, implemented health factor calculations, automated liquidations, and a React dashboard for deposit, borrow, repay, and liquidation flows.",
    tech: [
      "Solidity",
      "Hardhat",
      "Chainlink",
      "OpenZeppelin",
      "React",
      "Ethers.js",
    ],
    stats: [
      { label: "Collateral Asset", value: "WETH" },
      { label: "Borrow Asset", value: "USDC" },
    ],
  },

  {
    id: "0002",
    title: "Decentralized Escrow Protocol",
    tagline: "Milestone-based escrow with decentralized dispute resolution",
    cover: "teal",
    overview:
      "A decentralized escrow protocol enabling secure milestone-based payments between clients and freelancers without requiring a trusted intermediary.",
    problem:
      "Freelancers and clients often face payment disputes due to centralized escrow services and limited transparency during payment releases.",
    solution:
      "Designed a milestone-based escrow protocol with arbitration, secure fund management, reentrancy protection, access control, and extensive Foundry tests achieving over 95% smart contract test coverage.",
    tech: [
      "Solidity",
      "Foundry",
      "Hardhat",
      "OpenZeppelin",
      "React",
      "Ethers.js",
    ],
    stats: [
      { label: "Test Coverage", value: "95%+" },
      { label: "Network", value: "Ethereum Sepolia" },
    ],
  },

  {
    id: "0003",
    title: "Cross-Border Payment & Escrow System",
    tagline: "Blockchain-powered cross-border settlement using USDC",
    cover: "amber",
    overview:
      "A blockchain payment and escrow platform supporting secure USDC settlements with multi-currency payout routing through Chainlink price oracles.",
    problem:
      "Cross-border payments are often slow, expensive, and dependent on multiple intermediaries for settlement and currency conversion.",
    solution:
      "Developed an L1 escrow and L2 payment processor architecture with Solidity smart contracts, Chainlink price feeds, wallet integration, transaction history, and comprehensive Hardhat testing.",
    tech: [
      "Solidity",
      "Hardhat",
      "Chainlink",
      "OpenZeppelin",
      "Next.js",
      "Ethers.js",
    ],
    stats: [
      { label: "Settlement Token", value: "USDC" },
      { label: "Supported Currencies", value: "4" },
    ],
  },
];

const NAV = [
  { id: "home", label: "Home", index: "01" },
  { id: "about", label: "About", index: "02" },
  { id: "skills", label: "Skills", index: "03" },
  { id: "projects", label: "Projects", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

const COVER_STYLES = {
  amber: "from-amber-500/20 via-amber-500/5 to-transparent border-amber-500/30",
  teal: "from-teal-500/20 via-teal-500/5 to-transparent border-teal-500/30",
};
const COVER_TEXT = {
  amber: "text-amber-400",
  teal: "text-teal-400",
};

/* -------------------------------------------------------------------- */
/*  SMALL PIECES                                                        */
/* -------------------------------------------------------------------- */

function Avatar({ size = 128 }) {
  // Put your photo at public/profile.jpg (or .png) — this reads it from there.
  // If the file is missing, it automatically falls back to the node graphic below.
  const [broken, setBroken] = useState(false);

  if (!broken) {
    return (
      <img
        src="/profile.jpg"
        alt={PROFILE.name}
        onError={() => setBroken(true)}
        className="shrink-0 rounded-2xl border border-slate-700 object-cover"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className="relative shrink-0 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <defs>
          <linearGradient id="avatarGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <rect width="128" height="128" fill="url(#avatarGrad)" />
        <g stroke="#475569" strokeWidth="1.5" opacity="0.6">
          <line x1="24" y1="40" x2="64" y2="24" />
          <line x1="64" y1="24" x2="104" y2="40" />
          <line x1="24" y1="40" x2="24" y2="88" />
          <line x1="104" y1="40" x2="104" y2="88" />
          <line x1="24" y1="88" x2="64" y2="104" />
          <line x1="64" y1="104" x2="104" y2="88" />
          <line x1="64" y1="24" x2="64" y2="104" />
        </g>
        <g fill="#fbbf24">
          <circle cx="24" cy="40" r="4" />
          <circle cx="104" cy="40" r="4" />
          <circle cx="24" cy="88" r="4" />
          <circle cx="104" cy="88" r="4" />
        </g>
        <g fill="#2dd4bf">
          <circle cx="64" cy="24" r="4" />
          <circle cx="64" cy="104" r="4" />
        </g>
        <circle cx="64" cy="64" r="6" fill="#f8fafc" />
      </svg>
    </div>
  );
}

function SectionEyebrow({ index, children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs text-amber-400/80 tracking-widest">
        BLOCK {index}
      </span>
      <span className="h-px flex-1 max-w-16 bg-slate-700" />
      <span className="uppercase text-xs tracking-[0.2em] text-slate-500">
        {children}
      </span>
    </div>
  );
}

function CopyableAddress({ value }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(value).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-amber-400 transition-colors border border-slate-800 hover:border-amber-500/40 rounded-full px-3 py-1.5"
    >
      {value}
      {copied ? <Check size={12} /> : <Copy size={12} />}
    </button>
  );
}

/* -------------------------------------------------------------------- */
/*  NAVIGATION — a vertical "chain" of blocks, one per section          */
/* -------------------------------------------------------------------- */

function ChainNav({ active, onNavigate, mobileOpen, setMobileOpen }) {
  return (
    <>
      {/* Desktop: fixed vertical chain on the left */}
      <nav className="hidden lg:flex flex-col fixed left-8 top-1/2 -translate-y-1/2 z-40">
        <div className="relative flex flex-col items-start">
          <span className="absolute left-[15px] top-4 bottom-4 w-px bg-slate-800" />
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="group relative flex items-center gap-3 py-4"
              >
                <span
                  className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border transition-all ${
                    isActive
                      ? "border-amber-400 bg-amber-400/10"
                      : "border-slate-700 bg-slate-950 group-hover:border-slate-500"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive
                        ? "bg-amber-400 animate-pulseGlow"
                        : "bg-slate-600 group-hover:bg-slate-400"
                    }`}
                  />
                </span>
                <span
                  className={`font-mono text-xs tracking-wide whitespace-nowrap transition-all ${
                    isActive
                      ? "text-amber-400 opacity-100 translate-x-0"
                      : "text-slate-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                >
                  {item.index} · {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile: fixed top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display font-semibold text-slate-100 text-sm tracking-wide">
            {PROFILE.name}
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-300 border border-slate-700 rounded-lg p-2"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-slate-800 px-5 py-3 flex flex-col gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileOpen(false);
                }}
                className={`flex items-center gap-3 py-2.5 font-mono text-sm ${
                  active === item.id ? "text-amber-400" : "text-slate-400"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    active === item.id ? "bg-amber-400" : "bg-slate-600"
                  }`}
                />
                {item.index} · {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

/* -------------------------------------------------------------------- */
/*  PROJECT CARD + DETAIL MODAL                                         */
/* -------------------------------------------------------------------- */

function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className={`group text-left rounded-2xl border bg-gradient-to-b p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 ${COVER_STYLES[project.cover]}`}
    >
      <div className="flex items-start justify-between mb-8">
        <span
          className={`font-mono text-xs tracking-widest ${COVER_TEXT[project.cover]}`}
        >
          #{project.id}
        </span>
        <ChevronRight
          size={18}
          className="text-slate-500 group-hover:text-slate-200 group-hover:translate-x-1 transition-all"
        />
      </div>
      <h3 className="font-display text-xl font-semibold text-slate-100 mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-6">
        {project.tagline}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono px-2 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-400"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="text-[11px] font-mono px-2 py-1 text-slate-500">
            +{project.tech.length - 3}
          </span>
        )}
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }) {
  const [tab, setTab] = useState("overview");
  if (!project) return null;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
    { id: "tech", label: "Technology" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
      >
        <div
          className={`p-6 border-b border-slate-800 bg-gradient-to-b ${COVER_STYLES[project.cover]}`}
        >
          <div className="flex items-start justify-between mb-6">
            <span
              className={`font-mono text-xs tracking-widest ${COVER_TEXT[project.cover]}`}
            >
              BLOCK #{project.id}
            </span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-100 border border-slate-700 rounded-full p-1.5"
            >
              <X size={16} />
            </button>
          </div>
          <h3 className="font-display text-2xl font-semibold text-slate-100 mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-slate-300">{project.tagline}</p>

          <div className="flex gap-6 mt-6">
            {project.stats.map((s) => (
              <div key={s.label}>
                <div
                  className={`font-mono text-lg font-semibold ${COVER_TEXT[project.cover]}`}
                >
                  {s.value}
                </div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex border-b border-slate-800 px-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                tab === t.id
                  ? "border-amber-400 text-amber-400"
                  : "border-transparent text-slate-500 hover:text-slate-300"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {tab === "overview" && (
            <div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {project.overview}
              </p>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  Live preview / demo
                </span>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 hover:text-amber-300"
                >
                  View demo <ExternalLink size={13} />
                </a>
              </div>
            </div>
          )}
          {tab === "problem" && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs uppercase tracking-wide text-slate-500 mb-2">
                  The problem
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wide text-slate-500 mb-2">
                  What I built
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          )}
          {tab === "tech" && (
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/*  MAIN APP                                                             */
/* -------------------------------------------------------------------- */

export default function App() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    Object.values(sectionRefs.current).forEach(
      (el) => el && observer.observe(el),
    );
    return () => observer.disconnect();
  }, []);

  const registerRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-400/30 relative">
      <BlockchainBackground />

      {/* subtle vignette so text stays readable over the 3D network */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10">
        <ChainNav
          active={active}
          onNavigate={scrollTo}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <main className="lg:pl-40 pt-20 lg:pt-0">
          {/* ---------------- HOME ---------------- */}
          <section
  id="home"
  ref={registerRef("home")}
  className="min-h-screen flex items-center px-6 lg:px-16 py-24"
>
  <div className="max-w-6xl mx-auto lg:mx-0 w-full">
    <div className="flex items-center gap-2 mb-8 font-mono text-xs text-slate-500">
      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulseGlow" />
      Available for new contracts
    </div>

    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-10">
      {/* Left side - Text content */}
      <div className="flex-1">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-50 leading-tight mb-4">
          {PROFILE.name}
        </h1>
        <p className="font-mono text-amber-400 text-sm tracking-wide mb-1">
          {PROFILE.role}
        </p>
        <p className="text-slate-500 text-sm mb-6">
          {PROFILE.location}
        </p>

        <p className="text-lg text-slate-300 leading-relaxed max-w-xl mb-10">
          {PROFILE.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-medium text-sm px-5 py-3 rounded-xl hover:bg-amber-300 transition-colors"
          >
            View projects <ChevronRight size={16} />
          </button>
          
          {/* NEW: CV Download Button */}
          <button
            onClick={() => {
              // CV එක download කරන්න
              const link = document.createElement('a');
              link.href = '/Hirusha Fernando Full Stack Software Engineer.pdf'; // ඔබගේ CV file එකේ path එක
              link.download = 'Hirusha_Fernando_CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="inline-flex items-center gap-2 border border-slate-700 text-slate-200 font-medium text-sm px-5 py-3 rounded-xl hover:border-slate-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </button>
          
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 border border-slate-700 text-slate-200 font-medium text-sm px-5 py-3 rounded-xl hover:border-slate-500 transition-colors"
          >
            Get in touch
          </button>
          <div className="flex items-center gap-3 ml-1">
            <a
              href={PROFILE.social.github}
              className="text-slate-500 hover:text-slate-200 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={PROFILE.social.linkedin}
              className="text-slate-500 hover:text-slate-200 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={PROFILE.social.twitter}
              className="text-slate-500 hover:text-slate-200 transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Large floating image */}
      <div className="flex-shrink-0 animate-float">
        <Avatar size={400} />
      </div>
    </div>
  </div>
</section>

          {/* ---------------- ABOUT ---------------- */}
          <section
            id="about"
            ref={registerRef("about")}
            className="min-h-screen flex items-center px-6 lg:px-16 py-24 border-t border-slate-900"
          >
            <div className="max-w-3xl mx-auto lg:mx-0 w-full">
              <SectionEyebrow index="02">About</SectionEyebrow>
              <h2 className="font-display text-3xl font-semibold text-slate-50 mb-6">
                Building things that hold value on their own
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed mb-12 max-w-2xl">
                <p>
                  I'm a blockchain developer specializing in smart contract engineering and decentralized application development. I build secure, production-ready protocols with a strong focus on smart contract security, protocol design, and on-chain financial systems.
                </p>
                <p>
                  My experience includes developing decentralized escrow systems, collateralized lending protocols, and blockchain-based payment solutions using Solidity, Foundry, Hardhat, and OpenZeppelin. I prioritize security, comprehensive testing, and clean architecture to deliver reliable Web3 applications that are built for real-world use.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-l border-slate-800 pl-4"
                  >
                    <div className="font-display text-2xl font-semibold text-amber-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ---------------- SKILLS ---------------- */}
          <section
            id="skills"
            ref={registerRef("skills")}
            className="min-h-screen flex items-center px-6 lg:px-16 py-24 border-t border-slate-900"
          >
            <div className="max-w-4xl mx-auto lg:mx-0 w-full">
              <SectionEyebrow index="03">Skills</SectionEyebrow>
              <h2 className="font-display text-3xl font-semibold text-slate-50 mb-12">
                The stack I build with
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {SKILLS.map((group) => {
                  const Icon = group.icon;
                  return (
                    <div
                      key={group.group}
                      className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
                    >
                      <div className="flex items-center gap-2.5 mb-5">
                        <Icon size={16} className="text-amber-400" />
                        <h3 className="text-sm font-medium text-slate-200 tracking-wide">
                          {group.group}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ---------------- PROJECTS ---------------- */}
          <section
            id="projects"
            ref={registerRef("projects")}
            className="min-h-screen flex items-center px-6 lg:px-16 py-24 border-t border-slate-900"
          >
            <div className="max-w-5xl mx-auto lg:mx-0 w-full">
              <SectionEyebrow index="04">Projects</SectionEyebrow>
              <div className="flex items-end justify-between mb-12 flex-wrap gap-3">
                <h2 className="font-display text-3xl font-semibold text-slate-50">
                  Four blocks, four problems solved
                </h2>
                <p className="text-sm text-slate-500 max-w-xs">
                  Tap a card to see the preview, the problem it solves, and the
                  technology behind it.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {PROJECTS.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpen={setSelectedProject}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ---------------- CONTACT ---------------- */}
          <section
            id="contact"
            ref={registerRef("contact")}
            className="min-h-screen flex items-center px-6 lg:px-16 py-24 border-t border-slate-900"
          >
            <div className="max-w-3xl mx-auto lg:mx-0 w-full">
              <SectionEyebrow index="05">Contact</SectionEyebrow>
              <h2 className="font-display text-3xl font-semibold text-slate-50 mb-4">
                Let's build something that lasts on-chain
              </h2>
              <p className="text-slate-400 leading-relaxed mb-10 max-w-xl">
                Open to smart-contract audits, protocol engineering, and
                full-time or contract roles. The fastest way to reach me is
                email.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-medium text-sm px-5 py-3 rounded-xl hover:bg-amber-300 transition-colors w-fit"
                >
                  <Mail size={16} /> {PROFILE.email}
                </a>
                <CopyableAddress value={PROFILE.wallet} />
              </div>

              <div className="flex items-center gap-5 border-t border-slate-900 pt-8">
                <a
                  href={PROFILE.social.github}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={PROFILE.social.linkedin}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href={PROFILE.social.twitter}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <Twitter size={16} /> Twitter
                </a>
              </div>
            </div>
          </section>

          <footer className="px-6 lg:px-16 py-8 border-t border-slate-900">
            <p className="text-xs text-slate-600 font-mono">
              © {new Date().getFullYear()} {PROFILE.name} — built block by
              block.
            </p>
          </footer>
        </main>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}
