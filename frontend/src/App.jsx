import React, { useState, useEffect, useRef } from 'react';
import {
  FileStack, Moon, Sun, ChevronDown,
  Layers, Scissors, Minimize2, FileType,
  FileText, ImageDown, Lock, Unlock, Stamp,
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import DocsPage from './components/DocsPage';
import { TaskProvider, useTask } from './context/TaskContext';
import { LanguageProvider, useLang } from './context/LanguageContext';
import LanguagePicker from './components/LanguagePicker';

/* ─── Nav categories data ─────────────────────────────────────────────────────── */
const NAV_CATEGORIES = [
  {
    key: 'modify',
    labelKey: 'cat_modify',
    tools: [
      { id: 'merge',  titleKey: 'tool_merge',  icon: Layers   },
      { id: 'split',  titleKey: 'tool_split',  icon: Scissors },
    ],
  },
  {
    key: 'process',
    labelKey: 'cat_process',
    tools: [
      { id: 'compress', titleKey: 'tool_compress', icon: Minimize2 },
      { id: 'ocr',      titleKey: 'tool_ocr',      icon: FileType  },
    ],
  },
  {
    key: 'convert',
    labelKey: 'cat_convert',
    tools: [
      { id: 'convert',   titleKey: 'tool_convert',   icon: FileText  },
      { id: 'to-images', titleKey: 'tool_to_images', icon: ImageDown },
    ],
  },
  {
    key: 'security',
    labelKey: 'cat_security',
    tools: [
      { id: 'protect',   titleKey: 'tool_protect',   icon: Lock   },
      { id: 'unlock',    titleKey: 'tool_unlock',     icon: Unlock },
      { id: 'watermark', titleKey: 'tool_watermark',  icon: Stamp  },
    ],
  },
];

/* ─── Logo ───────────────────────────────────────────────────────────────────── */
function Logo({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2.5 group focus:outline-none shrink-0"
      aria-label="Go to homepage"
    >
      <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-accent-500 rounded-xl
                      flex items-center justify-center shadow-md
                      group-hover:shadow-brand-500/30 group-hover:scale-105 transition-all duration-200">
        <FileStack size={18} className="text-white" strokeWidth={2.2} />
      </div>
      <span className="text-[1.45rem] font-black tracking-tight leading-none select-none">
        <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent
                         dark:from-brand-400 dark:to-accent-400">skool</span>
        <span className="text-slate-800 dark:text-slate-100">PDF</span>
      </span>
    </button>
  );
}

/* ─── Nav dropdown ───────────────────────────────────────────────────────────── */
function NavDropdown({ onNavigate }) {
  const { t } = useLang();
  const { setCurrentTask, setFiles } = useTask();
  const [open, setOpen] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(null); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleTool = (toolId) => {
    onNavigate('home');
    setCurrentTask(toolId);
    setFiles([]);
    setOpen(null);
  };

  return (
    <nav ref={ref} className="hidden md:flex items-center gap-0.5" aria-label="Tools navigation">
      {NAV_CATEGORIES.map(({ key, labelKey, tools }) => (
        <div key={key} className="relative">
          <button
            onClick={() => setOpen(open === key ? null : key)}
            aria-haspopup="true"
            aria-expanded={open === key}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all
              focus-visible:outline-2 focus-visible:outline-brand-500
              ${open === key
                ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
          >
            {t(labelKey)}
            <ChevronDown
              size={13}
              aria-hidden="true"
              className={`transition-transform duration-200 ${open === key ? 'rotate-180' : ''}`}
            />
          </button>

          {open === key && (
            <div
              role="menu"
              className="absolute top-full left-0 mt-2 w-52
                         bg-white dark:bg-slate-800
                         border border-slate-100 dark:border-slate-700
                         rounded-2xl shadow-xl shadow-slate-200/60 dark:shadow-slate-900/80
                         p-1.5 z-50"
            >
              {tools.map(({ id, titleKey, icon: Icon }) => (
                <button
                  key={id}
                  role="menuitem"
                  onClick={() => handleTool(id)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                             text-sm text-left transition-all
                             text-slate-600 dark:text-slate-300
                             hover:bg-brand-50 dark:hover:bg-brand-900/20
                             hover:text-brand-600 dark:hover:text-brand-400"
                >
                  <Icon size={15} aria-hidden="true" className="shrink-0" />
                  {t(titleKey)}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

/* ─── Header ─────────────────────────────────────────────────────────────────── */
function Header({ darkMode, onToggle, onNavigate }) {
  const { setCurrentTask, setFiles } = useTask();

  const goHome = () => {
    setCurrentTask('none');
    setFiles([]);
    onNavigate('home');
  };

  return (
    <header className="px-6 py-4 z-20 sticky top-0
                       bg-white/80 dark:bg-slate-900/80
                       backdrop-blur-xl
                       border-b border-slate-100 dark:border-slate-800
                       shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        <Logo onClick={goHome} />

        {/* Category dropdowns */}
        <NavDropdown onNavigate={onNavigate} />

        {/* Right controls */}
        <div className="flex items-center gap-3 ml-auto">
          <LanguagePicker />
          <button
            onClick={onToggle}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 flex items-center justify-center rounded-xl
                       bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700
                       text-slate-600 dark:text-slate-300 transition-all duration-200"
          >
            {darkMode ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />}
          </button>
        </div>
      </div>
    </header>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────────── */
function Footer({ onNavigate }) {
  const { t } = useLang();

  return (
    <footer className="mt-auto border-t border-slate-100 dark:border-slate-800
                       bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo mark */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-brand-500 to-accent-500 rounded-lg
                            flex items-center justify-center shadow-sm">
              <FileStack size={12} className="text-white" strokeWidth={2.2} />
            </div>
            <span className="text-sm font-black tracking-tight">
              <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent
                               dark:from-brand-400 dark:to-accent-400">skool</span>
              <span className="text-slate-700 dark:text-slate-300">PDF</span>
            </span>
          </div>

          {/* Links & copyright */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => onNavigate('docs')}
              className="text-xs font-medium text-slate-500 dark:text-slate-400
                         hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              {t('nav_docs')}
            </button>
            <span className="text-slate-200 dark:text-slate-700 select-none" aria-hidden="true">|</span>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t('copyright')}</p>
          </div>

          <LanguagePicker />
        </div>
      </div>
    </footer>
  );
}

/* ─── App shell ──────────────────────────────────────────────────────────────── */
function AppContent() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('skoolpdf-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('skoolpdf-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[--color-background-light] dark:bg-slate-900">
      <Header
        darkMode={darkMode}
        onToggle={() => setDarkMode(d => !d)}
        onNavigate={setCurrentPage}
      />

      {currentPage === 'docs'
        ? <DocsPage onBack={() => setCurrentPage('home')} />
        : <Dashboard />
      }

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <TaskProvider>
        <AppContent />
      </TaskProvider>
    </LanguageProvider>
  );
}
