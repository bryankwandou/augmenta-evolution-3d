import React, { useState } from 'react';
import {
  Activity,
  Cpu,
  ShieldCheck,
  Sliders,
  X,
  CheckCircle2,
  Eye,
  Zap,
  Layers,
} from 'lucide-react';
import {
  CyberneticPortrait3D,
  DiagnosticModuleId,
} from './components/CyberneticPortrait3D';

type NavSection = 'Module' | 'Case Records' | 'Biotech' | 'Tiers' | 'Live Demo' | null;

interface ImplantModuleSpec {
  id: DiagnosticModuleId;
  code: string;
  name: string;
  alloy: string;
  latency: string;
  thermalLoad: string;
  summary: string;
}

const IMPLANT_MODULES: ImplantModuleSpec[] = [
  {
    id: 'zygomatic-plate',
    code: 'MOD-ZYG-04',
    name: 'Zygomatic Titanium Armor Plate',
    alloy: 'Grade-5 Ti-6Al-4V + Carbon Weave',
    latency: '0.18 ms',
    thermalLoad: '36.8 °C Nominal',
    summary:
      'Recessed dermal chassis anchored along the zygomatic arch and mandible with micro-fissure plasma conduits.',
  },
  {
    id: 'neural-bus',
    code: 'MOD-CTX-11',
    name: 'Sub-Dermal Molten Bus',
    alloy: 'Photonic Gold-Graphene Trace',
    latency: '0.09 ms',
    thermalLoad: '37.1 °C Nominal',
    summary:
      'Bi-directional optical-neural filament linking the temporal cortex directly to peripheral sensory buses.',
  },
  {
    id: 'ocular-sync',
    code: 'MOD-OCU-07',
    name: 'Orbital Telemetry Array',
    alloy: 'Sapphire Micro-Lattice',
    latency: '0.12 ms',
    thermalLoad: '36.6 °C Nominal',
    summary:
      'Sub-millimeter periorbital sensor ring providing real-time spectral overlay and low-light target lock.',
  },
  {
    id: 'carbon-chassis',
    code: 'MOD-COL-02',
    name: 'Cervical Carbon-Fiber Collar',
    alloy: 'Autoclave Monocoque Carbon',
    latency: '0.24 ms',
    thermalLoad: '36.4 °C Nominal',
    summary:
      'High-collar biometric interface regulating sub-dermal power routing and thermal dissipation.',
  },
];

constAugmentaLogo: React.FC = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Augmenta Emblem"
  >
    <path
      d="M14 3C7.925 3 3 7.925 3 14C3 20.075 7.925 25 14 25C16.85 25 19.44 23.91 21.4 22.14L17.2 17.94C16.25 18.61 15.15 19 14 19C11.24 19 9 16.76 9 14C9 11.24 11.24 9 14 9C16.42 9 18.44 10.72 18.9 13H24.9C24.4 7.39 19.72 3 14 3Z"
      fill="#FFFFFF"
    />
    <path d="M19 15L25 21H19V15Z" fill="#FFFFFF" />
  </svg>
);

export function App() {
  const [activeNav, setActiveNav] = useState<NavSection>(null);
  const [activeModule, setActiveModule] = useState<DiagnosticModuleId>('overview');
  const [scanlineIntensity, setScanlineIntensity] = useState(0.0);
  const [circuitPulseSpeed, setCircuitPulseSpeed] = useState(1.2);
  const [xrayMode, setXrayMode] = useState(false);
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [reserveConfirmed, setReserveConfirmed] = useState(false);
  const [candidateId, setCandidateId] = useState('');
  const [selectedTier, setSelectedTier] = useState('Tier II · Zygomatic & Cortex Sync');

  const handleSelectTelemetryNode = (
    module: DiagnosticModuleId,
    section: NavSection
  ) => {
    setActiveModule(module);
    setActiveNav(section);
  };

  const currentModuleSpec =
    IMPLANT_MODULES.find((m) => m.id === activeModule) || IMPLANT_MODULES[0];

  return (
    <div className="relative h-screen w-screen overflow-hidden font-augmenta-sans text-white select-none">
      {/* Real-Time WebGL Cybernetic Portrait & 3D Neural Implant Shader */}
      <CyberneticPortrait3D
        activeModule={activeModule}
        scanlineIntensity={scanlineIntensity}
        circuitPulseSpeed={circuitPulseSpeed}
        xrayMode={xrayMode}
      />

      {/* RIGHT CONCENTRIC ORBITAL ARCS SVG & TELEMETRY NODES matching m_intro_01.jpg */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMaxYMid slice"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Inner Orbital Arc passing through the 3 glowing white telemetry nodes */}
          <circle
            cx="630"
            cy="455"
            r="710"
            stroke="rgba(255, 255, 255, 0.34)"
            strokeWidth="1.25"
          />
          {/* Outer Concentric Orbital Arc */}
          <circle
            cx="630"
            cy="455"
            r="778"
            stroke="rgba(255, 255, 255, 0.22)"
            strokeWidth="1.15"
          />
        </svg>

        {/* Top Node: 10+ YEARS REAL */}
        <button
          type="button"
          onClick={() => handleSelectTelemetryNode('neural-bus', 'Case Records')}
          className="pointer-events-auto absolute right-[13%] sm:right-[14.5%] top-[13.5%] group flex items-start gap-3 text-left cursor-pointer focus:outline-none"
        >
          <span className="mt-3.5 relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#FFFFFF]" />
            <span className="absolute w-5 h-5 rounded-full border border-white/50 scale-0 group-hover:scale-100 transition-transform" />
          </span>
          <div>
            <div className="text-3xl sm:text-[36px] font-light tracking-tight text-white leading-none">
              10<span className="text-xl align-top ml-0.5">+</span>
            </div>
            <div className="font-augmenta-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-white/80 uppercase mt-1.5">
              YEARS REAL
            </div>
          </div>
        </button>

        {/* Middle-Right Node: 40+ USE FORMS */}
        <button
          type="button"
          onClick={() => handleSelectTelemetryNode('zygomatic-plate', 'Module')}
          className="pointer-events-auto absolute right-[1.5%] sm:right-[2.2%] top-[44.5%] group flex items-start gap-3 text-left cursor-pointer focus:outline-none"
        >
          <span className="mt-3.5 relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#FFFFFF]" />
            <span className="absolute w-5 h-5 rounded-full border border-white/50 scale-0 group-hover:scale-100 transition-transform" />
          </span>
          <div>
            <div className="text-3xl sm:text-[36px] font-light tracking-tight text-white leading-none">
              40<span className="text-xl align-top ml-0.5">+</span>
            </div>
            <div className="font-augmenta-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-white/80 uppercase mt-1.5">
              USE FORMS
            </div>
          </div>
        </button>

        {/* Bottom-Right Node: 95% REPEAT MEMBERS */}
        <button
          type="button"
          onClick={() => handleSelectTelemetryNode('carbon-chassis', 'Biotech')}
          className="pointer-events-auto absolute right-[3.5%] sm:right-[4.8%] bottom-[11.5%] group flex items-start gap-3 text-left cursor-pointer focus:outline-none"
        >
          <span className="mt-3.5 relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#FFFFFF]" />
            <span className="absolute w-5 h-5 rounded-full border border-white/50 scale-0 group-hover:scale-100 transition-transform" />
          </span>
          <div>
            <div className="text-3xl sm:text-[36px] font-light tracking-tight text-white leading-none">
              95<span className="text-xl align-top ml-0.5">%</span>
            </div>
            <div className="font-augmenta-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-white/80 uppercase mt-1.5">
              REPEAT MEMBERS
            </div>
          </div>
        </button>
      </div>

      {/* TOP FLOATING PILL NAVBAR matching m_intro_01.jpg */}
      <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-30 w-max max-w-[96vw]">
        <nav
          aria-label="Augmenta Primary Navigation"
          className="bg-[#1A0D08]/92 backdrop-blur-xl border border-white/12 rounded-full p-1.5 pl-4 flex items-center gap-4 sm:gap-7 shadow-[0_16px_40px_rgba(15,5,2,0.55)]"
        >
          <button
            type="button"
            onClick={() => {
              setActiveNav(null);
              setActiveModule('overview');
              setXrayMode(false);
            }}
            className="flex items-center justify-center hover:opacity-85 transition cursor-pointer"
            title="Reset Cybernetic View"
          >
            <constAugmentaLogo />
          </button>

          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {(
              ['Module', 'Case Records', 'Biotech', 'Tiers', 'Live Demo'] as NavSection[]
            ).map((item) => {
              const isSelected = activeNav === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    if (activeNav === item) {
                      setActiveNav(null);
                    } else {
                      setActiveNav(item);
                      if (item === 'Module') setActiveModule('zygomatic-plate');
                      if (item === 'Biotech') setActiveModule('neural-bus');
                      if (item === 'Live Demo') setScanlineIntensity(0.65);
                    }
                  }}
                  className={`font-augmenta-mono text-xs tracking-wide transition cursor-pointer ${
                    isSelected
                      ? 'text-[#FF8A3D] font-semibold'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => {
              setReserveConfirmed(false);
              setReserveModalOpen(true);
            }}
            className="bg-white hover:bg-orange-50 text-[#1A0D08] px-5 py-2 rounded-full font-augmenta-mono text-xs font-semibold tracking-tight transition shadow-sm cursor-pointer"
          >
            Connect
          </button>
        </nav>
      </header>

      {/* LEFT CONTENT COLUMN matching m_intro_01.jpg */}
      <main className="relative z-20 h-full flex flex-col justify-end pb-10 sm:pb-14 px-6 sm:px-10 lg:px-12 pointer-events-none">
        <div className="max-w-lg pointer-events-auto">
          <p className="font-augmenta-mono text-xs sm:text-[13px] italic tracking-wide text-white/90">
            Gateway to your augmented self
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-normal tracking-[-0.03em] text-white leading-[1.03] mt-3 sm:mt-4">
            A window
            <br />
            of coming
            <br />
            enhancements
          </h1>

          <p className="font-augmenta-mono text-xs sm:text-[13px] text-white/90 leading-[1.65] mt-6 max-w-md">
            A future where carbon fiber, titanium, and human instinct align. Not machine. Not
            human. Something wonderfully poised between.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={() => {
                setReserveConfirmed(false);
                setReserveModalOpen(true);
              }}
              className="bg-white hover:bg-orange-50 text-[#1A0D08] px-8 py-3.5 rounded-full font-augmenta-mono text-xs sm:text-[13px] font-semibold shadow-[0_12px_30px_rgba(20,6,2,0.32)] hover:scale-105 transition cursor-pointer"
            >
              Reserve Now
            </button>

            <button
              type="button"
              onClick={() => {
                setXrayMode((prev) => !prev);
                if (!activeNav) setActiveNav('Live Demo');
              }}
              className={`px-4 py-3.5 rounded-full font-augmenta-mono text-xs border backdrop-blur-md flex items-center gap-2 transition cursor-pointer ${
                xrayMode
                  ? 'bg-[#1A0D08] text-[#FF8A3D] border-[#FF8A3D]/60'
                  : 'bg-[#1A0D08]/45 text-white/90 border-white/20 hover:bg-[#1A0D08]/70'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{xrayMode ? 'Dermal X-Ray Active' : 'Inspect Implant'}</span>
            </button>
          </div>
        </div>
      </main>

      {/* INTERACTIVE BIOMETRIC & IMPLANT TELEMETRY DRAWER (Opened via Navbar or Orbital Nodes) */}
      {activeNav && (
        <aside className="fixed top-20 right-6 z-30 w-[92vw] max-w-sm rounded-3xl bg-[#1A0D08]/92 backdrop-blur-2xl border border-white/15 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.65)] text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#FF7B1A]" />
              <span className="font-augmenta-mono text-xs uppercase tracking-[0.18em] text-[#FF8A3D]">
                {activeNav} Telemetry
              </span>
            </div>
            <button
              type="button"
              onClick={() => setActiveNav(null)}
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/75 hover:text-white transition cursor-pointer"
              aria-label="Close Telemetry Panel"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module Selector Tabs */}
          <div className="grid grid-cols-2 gap-1.5 mt-3.5">
            {IMPLANT_MODULES.map((mod) => {
              const selected = activeModule === mod.id;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveModule(mod.id)}
                  className={`px-3 py-2 rounded-xl text-left font-augmenta-mono text-[11px] border transition cursor-pointer ${
                    selected
                      ? 'bg-[#FF6B00]/25 border-[#FF8A3D] text-white'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <div className="text-[9px] text-[#FF8A3D]">{mod.code}</div>
                  <div className="truncate font-medium mt-0.5">{mod.name.split(' ')[0]}</div>
                </button>
              );
            })}
          </div>

          {/* Active Implant Schematic Specs */}
          <div className="mt-4 p-3.5 rounded-2xl bg-black/35 border border-white/10 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-augmenta-mono text-[10px] uppercase tracking-wider text-white/60">
                Active Sub-System
              </span>
              <span className="font-augmenta-mono text-[10px] px-2 py-0.5 rounded-full bg-[#FF6B00]/20 text-[#FF984F] border border-[#FF6B00]/40">
                ONLINE
              </span>
            </div>
            <div className="text-sm font-medium text-white">{currentModuleSpec.name}</div>
            <p className="font-augmenta-mono text-[11px] text-white/75 leading-relaxed">
              {currentModuleSpec.summary}
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 font-augmenta-mono text-[10px]">
              <div>
                <span className="text-white/50 block">SYNAPTIC LATENCY</span>
                <span className="text-white font-semibold">{currentModuleSpec.latency}</span>
              </div>
              <div>
                <span className="text-white/50 block">THERMAL CORE</span>
                <span className="text-white font-semibold">{currentModuleSpec.thermalLoad}</span>
              </div>
            </div>
          </div>

          {/* Real-Time Shader Controls */}
          <div className="mt-4 space-y-3 pt-3 border-t border-white/10">
            <div className="flex items-center justify-between font-augmenta-mono text-[11px]">
              <span className="flex items-center gap-1.5 text-white/80">
                <Zap className="w-3.5 h-3.5 text-[#FF7B1A]" />
                <span>Plasma Circuit Frequency</span>
              </span>
              <span className="text-[#FF8A3D]">{circuitPulseSpeed.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min={0.4}
              max={3.0}
              step={0.1}
              value={circuitPulseSpeed}
              onChange={(e) => setCircuitPulseSpeed(parseFloat(e.target.value))}
              aria-label="Plasma Circuit Frequency"
              className="w-full accent-[#FF7B1A] cursor-pointer h-1.5 bg-white/20 rounded-lg"
            />

            <div className="flex items-center justify-between font-augmenta-mono text-[11px]">
              <span className="flex items-center gap-1.5 text-white/80">
                <Sliders className="w-3.5 h-3.5 text-[#FF7B1A]" />
                <span>Biometric Scan Overlay</span>
              </span>
              <span className="text-[#FF8A3D]">{Math.round(scanlineIntensity * 100)}%</span>
            </div>
            <input
              type="range"
              min={0.0}
              max={1.0}
              step={0.05}
              value={scanlineIntensity}
              onChange={(e) => setScanlineIntensity(parseFloat(e.target.value))}
              aria-label="Biometric Scan Overlay"
              className="w-full accent-[#FF7B1A] cursor-pointer h-1.5 bg-white/20 rounded-lg"
            />

            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={() => setXrayMode((prev) => !prev)}
                className={`w-full py-2.5 rounded-xl font-augmenta-mono text-xs font-medium border flex items-center justify-center gap-2 transition cursor-pointer ${
                  xrayMode
                    ? 'bg-[#FF6B00] text-[#1A0D08] border-[#FF8A3D] font-semibold'
                    : 'bg-white/10 text-white border-white/15 hover:bg-white/15'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{xrayMode ? 'Disable Sub-Dermal X-Ray' : 'Enable Sub-Dermal X-Ray'}</span>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* RESERVE NOW / CONNECT BIOMETRIC MODAL */}
      {reserveModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="relative w-full max-w-md rounded-3xl bg-[#1A0D08] border border-white/20 p-7 text-white shadow-2xl">
            <button
              type="button"
              onClick={() => setReserveModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              aria-label="Close Reservation Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 font-augmenta-mono text-[11px] uppercase tracking-[0.2em] text-[#FF8A3D]">
              <Activity className="w-3.5 h-3.5" />
              <span>Augmenta Clinical Allocation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight mt-1.5">
              Reserve Dermal Synthesis
            </h2>

            {reserveConfirmed ? (
              <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-[#FF8A3D]/40 space-y-3">
                <div className="flex items-center gap-2 text-[#FF8A3D] font-augmenta-mono text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>BIOMETRIC SLOT LOCKED</span>
                </div>
                <p className="font-augmenta-mono text-xs text-white/85 leading-relaxed">
                  Candidate <span className="text-white font-semibold">{candidateId}</span> is
                  scheduled for <span className="text-white font-semibold">{selectedTier}</span>{' '}
                  chassis calibration.
                </p>
                <button
                  type="button"
                  onClick={() => setReserveModalOpen(false)}
                  className="w-full py-3 rounded-full bg-white text-[#1A0D08] font-augmenta-mono text-xs font-semibold uppercase tracking-wider mt-2 cursor-pointer"
                >
                  Return to Interface
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setReserveConfirmed(true);
                }}
                className="mt-5 space-y-4"
              >
                <div>
                  <label className="block font-augmenta-mono text-[11px] uppercase tracking-wider text-white/75 mb-1.5">
                    Candidate Identifier or Email
                  </label>
                  <input
                    type="text"
                    required
                    value={candidateId}
                    onChange={(e) => setCandidateId(e.target.value)}
                    placeholder="AUG-2026-XXXX"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 font-augmenta-mono text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF8A3D]"
                  />
                </div>

                <div>
                  <label className="block font-augmenta-mono text-[11px] uppercase tracking-wider text-white/75 mb-1.5">
                    Augmentation Tier
                  </label>
                  <select
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#27130B] border border-white/20 font-augmenta-mono text-xs text-white focus:outline-none focus:border-[#FF8A3D]"
                  >
                    <option value="Tier I · Sub-Dermal Optical Bus">
                      Tier I · Sub-Dermal Optical Bus
                    </option>
                    <option value="Tier II · Zygomatic & Cortex Sync">
                      Tier II · Zygomatic & Cortex Sync
                    </option>
                    <option value="Tier III · Full Titanium-Carbon Exoderm">
                      Tier III · Full Titanium-Carbon Exoderm
                    </option>
                  </select>
                </div>

                <div className="flex items-center gap-2 font-augmenta-mono text-[11px] text-white/70 pt-1">
                  <ShieldCheck className="w-4 h-4 text-[#FF8A3D] shrink-0" />
                  <span>95% repeat member biocompatibility across 40+ active forms.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-white hover:bg-orange-50 text-[#1A0D08] font-augmenta-mono text-xs font-semibold uppercase tracking-wider transition cursor-pointer mt-2"
                >
                  Confirm Neural Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
