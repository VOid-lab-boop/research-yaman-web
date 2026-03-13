import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, BookOpen, Clock, Database, BarChart3, Bot, CheckSquare, 
  ChevronRight, ArrowRight, PlayCircle, Send, PlusCircle, User, 
  Sparkles, CheckCircle2, XCircle, Beaker, FileText, ChevronDown
} from "lucide-react";
import { lectures, glossary, quizQuestions, aiResponses } from "./data/content";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "overview", "lectures", "glossary", "timeline", "databases", "biostats", "ai-helper", "quiz"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-slate-200 selection:bg-cyan-500/30 overflow-x-hidden dark">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/80 backdrop-blur-lg border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
              <Beaker className="w-6 h-6 text-cyan-400" />
              <span className="font-display font-bold text-lg text-white tracking-wide hidden sm:block">HU Research Hub</span>
            </div>
            <div className="hidden md:flex space-x-1 lg:space-x-4">
              {[
                { id: "lectures", label: "Lectures", icon: BookOpen },
                { id: "glossary", label: "Glossary", icon: Search },
                { id: "timeline", label: "Timeline", icon: Clock },
                { id: "ai-helper", label: "AI Helper", icon: Bot },
                { id: "quiz", label: "Quiz", icon: CheckSquare },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5
                    ${activeSection === item.id ? 'text-cyan-400 bg-cyan-400/10' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
            {/* Mobile menu button could go here, omitting for brevity/cleanliness, assuming desktop/ipad primary usage */}
            <div className="md:hidden flex">
              <span className="text-cyan-400 font-display font-bold">Research Hub</span>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
          {/* Using generated image as absolute background */}
          <div className="absolute inset-0 z-0">
            <img 
              src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
              alt="Futuristic Academic Background" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-[#0a1628]/80 to-[#0a1628]"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Dr. Lama Rafieh • Biostatistics 2026</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white tracking-tight mb-6 leading-tight">
                Master Scientific Research <br/>
                <span className="text-gradient">Evidence-Based Dentistry</span>
              </h1>
              <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
                Empowering dental students at Hashemite University of Jordan with the knowledge and tools needed to understand scientific research.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollTo("overview")}
                  className="px-8 py-4 rounded-full font-semibold bg-blue-600 hover:bg-blue-500 text-white glow-border"
                >
                  Explore Lectures
                </button>
                <button 
                  onClick={() => scrollTo("ai-helper")}
                  className="px-8 py-4 rounded-full font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2"
                >
                  <Bot className="w-5 h-5" />
                  Try AI Helper
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section id="overview" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-glow">Course Overview</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Master the foundations of research methodology and biostatistics across 6 comprehensive lectures.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lectures.map((lec, i) => (
                <motion.div 
                  key={lec.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all cursor-pointer group"
                  onClick={() => scrollTo("lectures")}
                >
                  <div className="text-cyan-400 text-sm font-bold tracking-wider mb-2 uppercase">{lec.week} • LECTURE {lec.id}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{lec.title}</h3>
                  <p className="text-slate-400 text-sm">{lec.summary}</p>
                  <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                    Study material <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LECTURES SECTION (Accordions) */}
        <section id="lectures" className="py-24 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-glow-cyan">Interactive Lecture Notes</h2>
              <p className="text-slate-400">Expand each section to review Dr. Lama Rafieh's direct teaching materials.</p>
            </div>

            <div className="space-y-4">
              {lectures.map((lec) => (
                <LectureAccordion key={lec.id} lecture={lec} />
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section id="timeline" className="py-24 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">The 11-Step Research Process</h2>
              <p className="text-slate-400">Follow this systematic approach to successful scientific inquiry.</p>
            </div>

            <div className="relative border-l border-white/10 ml-6 md:ml-1/2 lg:mx-auto lg:w-0">
              {[
                "Getting a research idea", "Reviewing the literature", "Planning for the study (Design)", 
                "Piloting the study", "Gaining Ethical approval", "Study implementation", 
                "Data collection", "Data entry", "Data analysis", "Writing manuscript", "Publication"
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative mb-8 pl-8 lg:w-[45%] ${i % 2 === 0 ? 'lg:ml-auto lg:pl-8' : 'lg:mr-auto lg:pl-0 lg:pr-8 lg:text-right'} lg:left-0`}
                >
                  <div className={`absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] border-4 border-[#0a1628] z-10 ${i % 2 === 0 ? 'lg:-left-2' : 'lg:right-[-8px] lg:left-auto'}`}></div>
                  <div className="glass-card rounded-xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all">
                    <span className="text-cyan-500 font-bold text-lg mb-1 block">Step {i+1}</span>
                    <h3 className="text-white font-semibold text-lg">{step}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GLOSSARY SECTION */}
        <GlossarySection />

        {/* DATABASES & BIOSTATS CARDS */}
        <section id="databases" className="py-24 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Academic Databases</h2>
              <p className="text-slate-400">Essential tools for the "Reviewing Literature" step.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['PubMed', 'Scopus', 'Web of Science', 'Google Scholar', 'Cochrane Library', 'ScienceDirect', 'EMBASE', 'EBSCO'].map((db) => (
                <div key={db} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform glow-border">
                  <Database className="w-8 h-8 mx-auto text-blue-400 mb-3" />
                  <h3 className="text-white font-semibold">{db}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI HELPER SECTION */}
        <AIHelperSection />

        {/* QUIZ SECTION */}
        <QuizSection />

      </main>

      {/* FOOTER */}
      <footer className="bg-[#050b14] border-t border-white/5 py-12 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <Beaker className="w-8 h-8 text-slate-700 mx-auto mb-4" />
          <p className="text-white font-semibold mb-1">Prepared for Third Year Dental Students</p>
          <p>Hashemite University of Jordan - Faculty of Dentistry</p>
          <p className="mt-2 text-cyan-600/70">Biostatistics and Scientific Research | Dr. Lama Rafieh</p>
          <p className="mt-1">Second Semester 2026</p>
        </div>
      </footer>
    </div>
  );
}

/* =========================================
   COMPONENT: Lecture Accordion
   ========================================= */
function LectureAccordion({ lecture }: { lecture: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors text-left"
      >
        <div className="flex flex-col">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">Lecture {lecture.id} • {lecture.week}</span>
          <span className="text-lg md:text-xl font-bold text-white">{lecture.title}</span>
        </div>
        <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
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
            <div className="p-6 prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white prose-a:text-cyan-400"
                 dangerouslySetInnerHTML={{ __html: lecture.content }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================
   COMPONENT: Glossary
   ========================================= */
function GlossarySection() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredGlossary = glossary.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.def.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glossary" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-glow">Research Glossary</h2>
          <p className="text-slate-400 mb-8">Search key terms and definitions from the lectures.</p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search terms (e.g. Hypothesis, Cohort...)"
              className="w-full bg-white/5 border border-white/20 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGlossary.map((item, i) => (
            <motion.div 
              key={item.term}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i % 10 * 0.05 }}
              className="glass-card p-5 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors"
            >
              <h3 className="text-cyan-300 font-semibold text-lg mb-2">{item.term}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.def}</p>
            </motion.div>
          ))}
          {filteredGlossary.length === 0 && (
            <div className="col-span-full text-center py-12 text-slate-500">
              No terms found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   COMPONENT: AI Helper (Chatbot Simulator)
   ========================================= */
function AIHelperSection() {
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hello! I'm the Research Hub AI Assistant. I've been trained on Dr. Lama Rafieh's lecture notes. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      let response = "I don't have exact information on that from the lectures. Try asking about hypothesis, study designs (cohort, RCT), or the difference between search and research.";
      
      const lowerText = text.toLowerCase();
      // Simple keyword matching for simulation
      for (const [key, val] of Object.entries(aiResponses)) {
        if (lowerText.includes(key)) {
          response = val;
          break;
        }
      }

      setMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const suggestions = [
    "What is a hypothesis?", 
    "Difference between search and research?", 
    "What is a cohort study?",
    "What is an RCT?"
  ];

  return (
    <section id="ai-helper" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-4 glow-border">
            <Bot className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-glow">Ask the Research Assistant</h2>
          <p className="text-slate-400">A simulated AI trained exclusively on your lecture notes.</p>
        </div>

        <div className="glass-panel rounded-2xl border border-white/10 flex flex-col h-[500px] overflow-hidden shadow-2xl">
          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-cyan-600' : 'bg-blue-600'}`}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
                  </div>
                  <div className={`p-4 rounded-2xl ${msg.role === 'user' ? 'bg-cyan-600/20 border border-cyan-500/30 text-white rounded-tr-none' : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-200 rounded-tl-none flex items-center gap-1">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-2 h-2 bg-slate-400 rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-slate-400 rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-slate-400 rounded-full"></motion.div>
                  </div>
                </div>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-black/40 border-t border-white/10">
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestions.map((s, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSend(s)}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 text-slate-300 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              className="relative flex items-center"
            >
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question about the lectures..."
                className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-4 pr-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isTyping}
                className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-lg text-white transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   COMPONENT: Quiz
   ========================================= */
function QuizSection() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelectedOpt(idx);
    setShowResult(true);
    if (idx === quizQuestions[currentQ].correct) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(c => c + 1);
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

  return (
    <section id="quiz" className="py-24 bg-black/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-glow">Knowledge Check</h2>
          <p className="text-slate-400">Test your understanding of Dr. Lama Rafieh's materials.</p>
        </div>

        <div className="glass-panel rounded-2xl border border-white/10 p-6 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          {!quizFinished ? (
            <>
              <div className="flex justify-between items-center mb-8 text-sm text-slate-400 border-b border-white/10 pb-4">
                <span>Question {currentQ + 1} of {quizQuestions.length}</span>
                <span>Score: {score}</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 leading-relaxed">
                {quizQuestions[currentQ].question}
              </h3>

              <div className="space-y-3 mb-8">
                {quizQuestions[currentQ].options.map((opt, idx) => {
                  let btnClass = "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 text-slate-300";
                  let Icon = null;

                  if (showResult) {
                    if (idx === quizQuestions[currentQ].correct) {
                      btnClass = "bg-green-500/20 border-green-500/50 text-white";
                      Icon = <CheckCircle2 className="w-5 h-5 text-green-400" />;
                    } else if (idx === selectedOpt) {
                      btnClass = "bg-red-500/20 border-red-500/50 text-white";
                      Icon = <XCircle className="w-5 h-5 text-red-400" />;
                    } else {
                      btnClass = "bg-white/5 border-white/10 text-slate-500 opacity-50 cursor-not-allowed";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={showResult}
                      className={`w-full text-left p-4 rounded-xl transition-all flex justify-between items-center ${btnClass}`}
                    >
                      <span>{opt}</span>
                      {Icon && Icon}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#0a1628]/80 border border-blue-500/30 p-5 rounded-xl mb-8"
                >
                  <p className="text-sm text-slate-300">
                    <strong className="text-blue-400 block mb-1">Explanation:</strong>
                    {quizQuestions[currentQ].explanation}
                  </p>
                </motion.div>
              )}

              <div className="flex justify-end">
                <button
                  onClick={nextQuestion}
                  disabled={!showResult}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all ${showResult ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
                >
                  {currentQ === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 glow-border">
                <Sparkles className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-2">Quiz Completed!</h3>
              <p className="text-xl text-slate-300 mb-8">You scored <strong className="text-cyan-400 text-2xl">{score}</strong> out of {quizQuestions.length}</p>
              
              <button
                onClick={resetQuiz}
                className="px-8 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
