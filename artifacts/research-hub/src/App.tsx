import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, BookOpen, Clock, Database, BarChart3, Bot, CheckSquare,
  ArrowRight, Send, User, Sparkles, CheckCircle2, XCircle, Beaker,
  ChevronDown, Home, Menu, X, FlaskConical
} from "lucide-react";
import { lectures, glossary, quizQuestions, aiResponses } from "./data/content";

type Tab = "home" | "lectures" | "glossary" | "timeline" | "databases" | "biostats" | "ai-helper" | "quiz";

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "home",      label: "Home",       icon: Home },
  { id: "lectures",  label: "Lectures",   icon: BookOpen },
  { id: "glossary",  label: "Glossary",   icon: Search },
  { id: "timeline",  label: "Timeline",   icon: Clock },
  { id: "databases", label: "Databases",  icon: Database },
  { id: "biostats",  label: "Statistics", icon: BarChart3 },
  { id: "ai-helper", label: "AI Helper",  icon: Bot },
  { id: "quiz",      label: "Quiz",       icon: CheckSquare },
];

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (tab: Tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-slate-200 selection:bg-cyan-500/30 overflow-x-hidden dark">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <button onClick={() => goTo("home")} className="flex items-center gap-2 shrink-0">
              <Beaker className="w-6 h-6 text-cyan-400" />
              <span className="font-display font-bold text-base text-white tracking-wide hidden sm:block">HU Research Hub</span>
            </button>

            {/* Desktop tab bar */}
            <div className="hidden md:flex space-x-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => goTo(tab.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 relative
                    ${activeTab === tab.id
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"}`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan-400 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md text-slate-300 hover:text-white"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0d2137] border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-3 grid grid-cols-2 gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => goTo(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors
                      ${activeTab === tab.id ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
                  >
                    <tab.icon className="w-4 h-4 shrink-0" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── PAGE CONTENT ── */}
      <main className="pt-16 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {activeTab === "home"      && <HomeTab      goTo={goTo} />}
            {activeTab === "lectures"  && <LecturesTab />}
            {activeTab === "glossary"  && <GlossaryTab />}
            {activeTab === "timeline"  && <TimelineTab />}
            {activeTab === "databases" && <DatabasesTab />}
            {activeTab === "biostats"  && <BioStatsTab />}
            {activeTab === "ai-helper" && <AIHelperTab />}
            {activeTab === "quiz"      && <QuizTab />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#050b14] border-t border-white/5 py-10 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <Beaker className="w-7 h-7 text-slate-700 mx-auto mb-4" />
          <p className="text-white font-semibold mb-1">Prepared for Third Year Dental Students</p>
          <p>Hashemite University of Jordan — Faculty of Dentistry</p>
          <p className="mt-2 text-cyan-600/70">Biostatistics and Scientific Research | Prepared by Yaman Akour</p>
          <p className="mt-1">Second Semester 2026</p>
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════
   HOME TAB
   ═══════════════════════════════════════ */
function HomeTab({ goTo }: { goTo: (t: Tab) => void }) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Academic background"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-[#0a1628]/75 to-[#0a1628]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Yaman Akour • Biostatistics & Scientific Research 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white tracking-tight mb-6 leading-tight">
              Research &amp; Biostatistics<br />
              <span className="text-gradient">Learning Hub</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              An interactive summary of 6 university lectures for dental students at
              Hashemite University of Jordan — covering research methodology, databases,
              and basic biostatistics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => goTo("lectures")}
                className="px-8 py-4 rounded-full font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:-translate-y-1"
              >
                Explore Lectures
              </button>
              <button
                onClick={() => goTo("ai-helper")}
                className="px-8 py-4 rounded-full font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Bot className="w-5 h-5" />
                Try AI Helper
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-glow">Course Overview</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            6 comprehensive lectures on research methodology, study design, databases and biostatistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lectures.map((lec, i) => (
            <motion.div
              key={lec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => goTo("lectures")}
              className="glass-card rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)] transition-all cursor-pointer group"
            >
              <div className="text-cyan-400 text-xs font-bold tracking-widest mb-2 uppercase">{lec.week} · Lecture {lec.id}</div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{lec.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{lec.summary}</p>
              <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                Open notes <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════
   LECTURES TAB
   ═══════════════════════════════════════ */
function LecturesTab() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-glow-cyan">Interactive Lecture Notes</h2>
        <p className="text-slate-400">Prepared by Yaman Akour based on Dr. Lama Rafieh's teaching materials.</p>
      </div>
      <div className="space-y-4">
        {lectures.map((lec) => (
          <LectureAccordion key={lec.id} lecture={lec} />
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   GLOSSARY TAB
   ═══════════════════════════════════════ */
function GlossaryTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = glossary.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.def.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-glow">Research Glossary</h2>
        <p className="text-slate-400 mb-8">Search key terms and definitions from the lectures.</p>
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search terms (e.g. Hypothesis, Cohort…)"
            className="w-full bg-white/5 border border-white/20 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, i) => (
          <motion.div
            key={item.term}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (i % 12) * 0.04 }}
            className="glass-card p-5 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors"
          >
            <h3 className="text-cyan-300 font-semibold text-base mb-2">{item.term}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{item.def}</p>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-slate-500">
            No terms found matching "{searchTerm}"
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   TIMELINE TAB
   ═══════════════════════════════════════ */
const RESEARCH_STEPS = [
  { step: 1,  title: "Get a Research Idea",       desc: "Critical thinking, scientific background, keen observation and reading. Identify a research problem or question." },
  { step: 2,  title: "Review the Literature",      desc: "Search medical electronic databases: PubMed, Cochrane, Google Scholar, EBSCO, EMBASE, SCOPUS, Web of Knowledge." },
  { step: 3,  title: "Plan the Study (Design)",    desc: "Write a study protocol. Select participants, data collection methods, and data analysis techniques." },
  { step: 4,  title: "Pilot the Study",            desc: "Run a pilot on a small sample to test feasibility and refine instruments before the full study." },
  { step: 5,  title: "Gain Ethical Approval",      desc: "Comply with your institution's Ethics Committee or Institutional Review Board (IRB) guidelines." },
  { step: 6,  title: "Implement the Study",        desc: "Execute the study. Requires clinical skills if it is an interventional study." },
  { step: 7,  title: "Collect Data",               desc: "Use data collection tools such as REDCap, questionnaires, interviews, or observations." },
  { step: 8,  title: "Enter Data",                 desc: "Record and organise data using MS Excel, Google Sheets, or dedicated statistical software." },
  { step: 9,  title: "Analyse Data",               desc: "Interpret descriptive and inferential statistics. Run tests on SPSS, R, STATA, SAS, etc." },
  { step: 10, title: "Write the Manuscript",       desc: "Follow standard reporting checklists, scientific writing rules, and ensure English language proficiency." },
  { step: 11, title: "Publish & Present",          desc: "Develop presentation skills, select an appropriate journal, and respond to reviewer's comments." },
];

function TimelineTab() {
  return (
    <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">The 11-Step Research Process</h2>
        <p className="text-slate-400">Follow this systematic approach to successful scientific inquiry.</p>
      </div>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30" />

        <div className="space-y-6">
          {RESEARCH_STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-6"
            >
              {/* Circle */}
              <div className="relative shrink-0 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#0d2137] border-2 border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)] flex items-center justify-center z-10">
                  <span className="text-cyan-400 font-bold text-sm">{s.step}</span>
                </div>
              </div>

              {/* Card */}
              <div className="glass-card rounded-2xl p-5 flex-1 mb-1 hover:border-cyan-500/30 border border-white/5 transition-all">
                <h3 className="text-white font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   DATABASES TAB
   ═══════════════════════════════════════ */
const DB_DATA = [
  {
    name: "PubMed",
    color: "blue",
    what: "Free biomedical literature database from the US National Library of Medicine (NCBI).",
    why: "Gold standard for medical and dental research. Peer-reviewed articles only.",
    sources: "Journal articles, clinical trials, systematic reviews.",
    when: "Literature reviews, clinical questions, evidence-based dentistry.",
  },
  {
    name: "Scopus",
    color: "cyan",
    what: "Large abstract and citation database covering science, technology, medicine, and social sciences.",
    why: "Broader coverage than PubMed; excellent for citation tracking.",
    sources: "Peer-reviewed journals, conference papers, books.",
    when: "Measuring research impact, finding dental literature across disciplines.",
  },
  {
    name: "Web of Science",
    color: "purple",
    what: "Multi-disciplinary database with citation analysis tools.",
    why: "Best for tracking citation networks and journal impact factors.",
    sources: "High-quality peer-reviewed journals, conference proceedings.",
    when: "Selecting journals, understanding citation influence.",
  },
  {
    name: "Google Scholar",
    color: "green",
    what: "Free search engine that indexes scholarly literature from many publishers.",
    why: "Easy to use; good starting point but less structured than databases.",
    sources: "Journals, theses, books, preprints, free web.",
    when: "Quick searches, finding free full-text PDFs.",
  },
  {
    name: "Cochrane Library",
    color: "orange",
    what: "Repository of high-quality systematic reviews and meta-analyses.",
    why: "Best evidence synthesis; essential for evidence-based practice in dentistry.",
    sources: "Systematic reviews, clinical trial registries.",
    when: "Finding the best available evidence for clinical decisions.",
  },
  {
    name: "ScienceDirect",
    color: "teal",
    what: "Elsevier's full-text database of scientific and medical journals.",
    why: "Access to full-text Elsevier journals, many dental journals included.",
    sources: "Peer-reviewed journals, book chapters.",
    when: "Accessing full-text articles, dental and medical journals.",
  },
];

const COLOR_MAP: Record<string, string> = {
  blue:   "border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.12)]",
  cyan:   "border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.12)]",
  purple: "border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.12)]",
  green:  "border-green-500/40 shadow-[0_0_20px_rgba(34,197,94,0.12)]",
  orange: "border-orange-500/40 shadow-[0_0_20px_rgba(249,115,22,0.12)]",
  teal:   "border-teal-500/40 shadow-[0_0_20px_rgba(20,184,166,0.12)]",
};
const DOT_MAP: Record<string, string> = {
  blue: "bg-blue-500", cyan: "bg-cyan-500", purple: "bg-purple-500",
  green: "bg-green-500", orange: "bg-orange-500", teal: "bg-teal-500",
};

function DatabasesTab() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Academic Databases</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Essential tools for the "Reviewing Literature" step of the research process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DB_DATA.map((db, i) => (
          <motion.div
            key={db.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`glass-card rounded-2xl p-6 border transition-all hover:-translate-y-1 ${COLOR_MAP[db.color]}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full ${DOT_MAP[db.color]} shadow-lg`} />
              <h3 className="text-xl font-bold text-white">{db.name}</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div><span className="text-slate-400 font-medium block mb-0.5">What it is:</span><span className="text-slate-300">{db.what}</span></div>
              <div><span className="text-slate-400 font-medium block mb-0.5">Why students use it:</span><span className="text-slate-300">{db.why}</span></div>
              <div><span className="text-slate-400 font-medium block mb-0.5">Sources:</span><span className="text-slate-300">{db.sources}</span></div>
              <div><span className="text-slate-400 font-medium block mb-0.5">Useful when:</span><span className="text-slate-300">{db.when}</span></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   BIOSTATISTICS TAB
   ═══════════════════════════════════════ */
const STATS = [
  {
    term: "Mean",
    symbol: "x̄",
    color: "blue",
    def: "The arithmetic average of a dataset. Add all values and divide by the number of values.",
    example: "Tooth pocket depths: 2, 3, 4, 5, 6 mm → Mean = 20 ÷ 5 = 4 mm",
    formula: "Σx / n",
  },
  {
    term: "Median",
    symbol: "M",
    color: "cyan",
    def: "The middle value when data is ordered. If two middle values exist, take their average.",
    example: "Ordered depths: 2, 3, 4, 5, 6 → Median = 4 mm (middle value)",
    formula: "Middle value",
  },
  {
    term: "Mode",
    symbol: "Mo",
    color: "purple",
    def: "The most frequently occurring value in a dataset. A dataset can have no mode or multiple modes.",
    example: "Depths: 2, 3, 3, 4, 5 → Mode = 3 mm (appears most often)",
    formula: "Most frequent",
  },
  {
    term: "Standard Deviation",
    symbol: "SD",
    color: "green",
    def: "Measures how spread out data is from the mean. A small SD means data is clustered tightly.",
    example: "SD = 1.0 mm means most pocket depths are within 1 mm of the mean.",
    formula: "√Σ(x−x̄)² / n",
  },
  {
    term: "P-value",
    symbol: "p",
    color: "orange",
    def: "The probability that the result occurred by chance. A p-value < 0.05 is considered statistically significant.",
    example: "p = 0.02 → Only 2% chance this result is random → statistically significant!",
    formula: "p < 0.05 = sig.",
  },
  {
    term: "Correlation",
    symbol: "r",
    color: "teal",
    def: "A statistical measure expressing the extent to which two variables are linearly related. Ranges from -1 to +1.",
    example: "r = 0.85 between smoking and tooth loss → strong positive correlation.",
    formula: "-1 ≤ r ≤ +1",
  },
  {
    term: "Percentages",
    symbol: "%",
    color: "pink",
    def: "A way to express a number as a fraction of 100. Used to describe proportions in a sample.",
    example: "30 out of 100 patients have caries → 30% prevalence.",
    formula: "(part / whole) × 100",
  },
  {
    term: "Statistical Significance",
    symbol: "★",
    color: "yellow",
    def: "When a result is unlikely to have occurred by chance (p < 0.05). Does NOT necessarily mean clinical importance.",
    example: "A difference in plaque score is statistically significant at p = 0.03.",
    formula: "p < 0.05",
  },
];

const STAT_COLORS: Record<string, { card: string; badge: string }> = {
  blue:   { card: "border-blue-500/30",   badge: "bg-blue-500/20 text-blue-300" },
  cyan:   { card: "border-cyan-500/30",   badge: "bg-cyan-500/20 text-cyan-300" },
  purple: { card: "border-purple-500/30", badge: "bg-purple-500/20 text-purple-300" },
  green:  { card: "border-green-500/30",  badge: "bg-green-500/20 text-green-300" },
  orange: { card: "border-orange-500/30", badge: "bg-orange-500/20 text-orange-300" },
  teal:   { card: "border-teal-500/30",   badge: "bg-teal-500/20 text-teal-300" },
  pink:   { card: "border-pink-500/30",   badge: "bg-pink-500/20 text-pink-300" },
  yellow: { card: "border-yellow-500/30", badge: "bg-yellow-500/20 text-yellow-300" },
};

function BioStatsTab() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-glow">Basic Biostatistics</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Core statistical concepts explained simply — with dental examples to make them click.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS.map((s, i) => {
          const c = STAT_COLORS[s.color] || STAT_COLORS.blue;
          return (
            <motion.div
              key={s.term}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`glass-card rounded-2xl p-5 border ${c.card} hover:-translate-y-1 transition-all flex flex-col`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold">{s.term}</h3>
                <span className={`text-xl font-bold px-2 py-0.5 rounded-lg ${c.badge}`}>{s.symbol}</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-3 flex-1">{s.def}</p>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <p className="text-xs text-slate-400 font-medium mb-1">📌 Dental example:</p>
                <p className="text-xs text-slate-300 italic">{s.example}</p>
              </div>
              <div className="mt-3 text-center">
                <span className={`text-xs font-mono px-2 py-1 rounded ${c.badge}`}>{s.formula}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   AI HELPER TAB
   ═══════════════════════════════════════ */
function AIHelperTab() {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hey there! 😊 I'm your Research Hub AI Assistant — trained on all 6 lectures by Yaman Akour. I'm here to help you understand study designs, research types, biostatistics, databases, and everything in between. What would you like to explore today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping]);

  const findResponse = (text: string): string => {
    const lower = text.toLowerCase();
    for (const entry of aiResponses) {
      if (entry.keywords.some((kw) => lower.includes(kw.toLowerCase()))) {
        return entry.answer;
      }
    }
    const fallbacks = [
      "Hmm, I'm not sure about that specific topic from the lectures! 🤔 Try asking about study designs (cohort, RCT, cross-sectional), hypothesis types, databases like PubMed, p-values, or the 11 steps of research. I'm here to help!",
      "That's a great question, but it's a bit outside my lecture coverage! 😊 I'm best at topics like: research types (quantitative, qualitative, mixed), study designs, biostatistics basics, journal article writing, and academic databases. Give one of those a try!",
      "I want to help, but that topic isn't covered in the 6 lectures I know. 📚 Ask me about things like: the null hypothesis, what makes a good title, the difference between a cohort and case-control study, or what ORCID is!",
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages((p) => [...p, { role: "user", text }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const response = findResponse(text);
      setMessages((p) => [...p, { role: "bot", text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const suggestions = [
    "What is a hypothesis?",
    "Search vs research?",
    "What is a cohort study?",
    "Explain RCT",
    "What is a p-value?",
    "What is qualitative research?",
    "What are the 11 research steps?",
    "Tell me about PubMed",
    "What is a null hypothesis?",
    "How do I write a good title?",
  ];

  return (
    <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-4 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <Bot className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-glow">Ask the Research Assistant</h2>
        <p className="text-slate-400">A simulated AI trained exclusively on the lecture notes.</p>
      </div>

      <div className="glass-panel rounded-2xl border border-white/10 flex flex-col h-[620px] overflow-hidden shadow-2xl">
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-3 max-w-[82%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-cyan-600" : "bg-blue-600"}`}>
                  {msg.role === "user" ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${msg.role === "user" ? "bg-cyan-600/20 border border-cyan-500/30 text-white rounded-tr-none" : "bg-white/5 border border-white/10 text-slate-200 rounded-tl-none"}`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none flex items-center gap-1">
                  {[0, 0.2, 0.4].map((d, j) => (
                    <motion.div key={j} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: d }} className="w-2 h-2 bg-slate-400 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="p-4 bg-black/40 border-t border-white/10">
          <div className="flex flex-wrap gap-2 mb-3">
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => handleSend(s)} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 text-slate-300 transition-colors">
                {s}
              </button>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about the lectures…"
              className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-4 pr-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
            <button type="submit" disabled={!input.trim() || isTyping} className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-lg text-white transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   QUIZ TAB
   ═══════════════════════════════════════ */
function QuizTab() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelectedOpt(idx);
    setShowResult(true);
    if (idx === quizQuestions[currentQ].correct) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelectedOpt(null);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelectedOpt(null);
    setShowResult(false);
    setScore(0);
    setQuizFinished(false);
  };

  const pct = Math.round((score / quizQuestions.length) * 100);

  return (
    <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-glow">Knowledge Check</h2>
        <p className="text-slate-400">Test your understanding of the lecture materials.</p>
      </div>

      <div className="glass-panel rounded-2xl border border-white/10 p-6 md:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        {!quizFinished ? (
          <>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-slate-400 mb-2">
                <span>Question {currentQ + 1} of {quizQuestions.length}</span>
                <span>Score: {score}/{currentQ + (showResult ? 1 : 0)}</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  animate={{ width: `${((currentQ + 1) / quizQuestions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 leading-relaxed">
              {quizQuestions[currentQ].question}
            </h3>

            <div className="space-y-3 mb-8">
              {quizQuestions[currentQ].options.map((opt, idx) => {
                let cls = "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 text-slate-300";
                let Icon = null;
                if (showResult) {
                  if (idx === quizQuestions[currentQ].correct) {
                    cls = "bg-green-500/20 border-green-500/50 text-white";
                    Icon = <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />;
                  } else if (idx === selectedOpt) {
                    cls = "bg-red-500/20 border-red-500/50 text-white";
                    Icon = <XCircle className="w-5 h-5 text-red-400 shrink-0" />;
                  } else {
                    cls = "bg-white/5 border-white/10 text-slate-500 opacity-50 cursor-not-allowed";
                  }
                }
                return (
                  <button key={idx} onClick={() => handleSelect(idx)} disabled={showResult}
                    className={`w-full text-left p-4 rounded-xl transition-all flex justify-between items-center gap-4 ${cls}`}>
                    <span>{opt}</span>
                    {Icon}
                  </button>
                );
              })}
            </div>

            {showResult && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="bg-[#0a1628]/80 border border-blue-500/30 p-5 rounded-xl mb-8">
                <p className="text-sm text-slate-300">
                  <strong className="text-blue-400 block mb-1">Explanation:</strong>
                  {quizQuestions[currentQ].explanation}
                </p>
              </motion.div>
            )}

            <div className="flex justify-end">
              <button onClick={nextQuestion} disabled={!showResult}
                className={`px-8 py-3 rounded-xl font-semibold transition-all ${showResult ? "bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]" : "bg-slate-800 text-slate-500 cursor-not-allowed"}`}>
                {currentQ === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question →"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <Sparkles className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-2">Quiz Complete!</h3>
            <p className="text-xl text-slate-300 mb-2">
              You scored <strong className="text-cyan-400 text-2xl">{score}</strong> out of {quizQuestions.length}
            </p>
            <p className="text-slate-400 mb-8">
              {pct >= 80 ? "🎉 Excellent work!" : pct >= 60 ? "👍 Good effort, keep reviewing!" : "📖 Try reviewing the lecture notes again."}
            </p>
            <button onClick={resetQuiz}
              className="px-8 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all">
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SHARED COMPONENT: Lecture Accordion
   ═══════════════════════════════════════ */
function LectureAccordion({ lecture }: { lecture: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors text-left"
      >
        <div>
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider block mb-1">Lecture {lecture.id} · {lecture.week}</span>
          <span className="text-lg md:text-xl font-bold text-white">{lecture.title}</span>
        </div>
        <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-white/10"
          >
            <div
              className="p-6 prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white prose-a:text-cyan-400"
              dangerouslySetInnerHTML={{ __html: lecture.content }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
