import React, { useState, useRef, useEffect } from 'react';

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, X, FileText, ArrowDown, ShieldCheck, Clock, UserCheck } from 'lucide-react';
import { useTask } from '../context/TaskContext';
import { useLang } from '../context/LanguageContext';
import TaskSelector from './TaskSelector';
import DropZone from './DropZone';
import ActionPanel from './ActionPanel';

/* ─── PDF-only tasks (hero file must be PDF to skip upload step) ─────────────── */
const PDF_ONLY_TASKS = new Set(['split', 'compress', 'ocr', 'unlock', 'watermark', 'to-images', 'merge']);

/* ─── Hero drop zone (shown on homepage) ─────────────────────────────────────── */
function HeroDrop({ heroFile, onFileDrop, onClear }) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);
  const { t } = useLang();

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) onFileDrop(file);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-14 pb-6 text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
      >
        {t('hero_heading_1')}{' '}
        <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500 bg-clip-text text-transparent">
          {t('hero_heading_2')}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-xl mx-auto"
      >
        {t('hero_sub')}
      </motion.p>

      {/* Drop zone */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        role={!heroFile ? 'button' : undefined}
        tabIndex={!heroFile ? 0 : undefined}
        aria-label={!heroFile ? 'Upload a file — drag and drop or click to browse' : undefined}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => !heroFile && inputRef.current?.click()}
        onKeyDown={!heroFile ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); inputRef.current?.click(); } } : undefined}
        className={`relative mx-auto max-w-2xl rounded-3xl border-2 border-dashed px-10 py-14 transition-all duration-300
          ${heroFile
            ? 'border-brand-400 bg-brand-50/60 dark:bg-brand-950/20 dark:border-brand-600 cursor-default'
            : isDragging
              ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/30 scale-[1.01] cursor-copy'
              : 'border-slate-300 dark:border-slate-600 hover:border-brand-400 dark:hover:border-brand-600 hover:bg-white/60 dark:hover:bg-slate-800/50 cursor-pointer'
          }`}
      >
        <input ref={inputRef} type="file" aria-label="Upload a file" className="hidden"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.webp,.gif,.tiff"
          onChange={e => e.target.files[0] && onFileDrop(e.target.files[0])} />

        <AnimatePresence mode="wait">
          {heroFile ? (
            <motion.div
              key="file"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center space-x-3 w-full min-w-0">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/40 rounded-xl flex items-center justify-center shrink-0">
                  <FileText size={24} className="text-brand-600 dark:text-brand-400" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 truncate">
                    {heroFile.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {formatSize(heroFile.size)} · <span className="text-brand-600 dark:text-brand-400 font-medium">{t('hero_ready')}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}
                  aria-label={t('hero_change')}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5
                             text-xs font-semibold text-slate-600 dark:text-slate-300
                             bg-white dark:bg-slate-700/60
                             border border-slate-200 dark:border-slate-600
                             hover:border-brand-400 dark:hover:border-brand-500
                             hover:text-brand-600 dark:hover:text-brand-400
                             rounded-xl transition-all"
                >
                  <UploadCloud size={13} aria-hidden="true" />
                  {t('hero_change')}
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onClear(); }}
                  aria-label={t('hero_remove')}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5
                             text-xs font-semibold text-red-500 dark:text-red-400
                             bg-red-50 dark:bg-red-900/20
                             border border-red-100 dark:border-red-800
                             hover:bg-red-100 dark:hover:bg-red-900/40
                             hover:border-red-300 dark:hover:border-red-700
                             rounded-xl transition-all"
                >
                  <X size={13} aria-hidden="true" />
                  {t('hero_remove')}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-brand-100 to-accent-100
                              dark:from-brand-900/40 dark:to-accent-900/40
                              text-brand-600 dark:text-brand-400
                              rounded-3xl flex items-center justify-center mb-5
                              shadow-lg shadow-brand-100 dark:shadow-brand-900/20
                              border border-brand-200/60 dark:border-brand-700/40">
                <UploadCloud size={36} strokeWidth={1.5} />
              </div>
              <p className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-1">
                {isDragging ? t('hero_drop_release') : t('hero_drop')}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                or <span className="text-brand-600 dark:text-brand-400 font-semibold">{t('hero_browse')}</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-5 flex items-center justify-center gap-5 flex-wrap"
      >
        {[
          { icon: ShieldCheck, key: 'trust_free' },
          { icon: Clock,       key: 'trust_deleted' },
          { icon: UserCheck,   key: 'trust_noreg' },
        ].map(({ icon: Icon, key }) => (
          <div key={key} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Icon size={13} className="text-brand-500 dark:text-brand-400 shrink-0" aria-hidden="true" />
            {t(key)}
          </div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 flex flex-col items-center text-slate-400 dark:text-slate-500"
      >
        <span className="text-xs font-medium mb-1">{t('hero_scroll')}</span>
        <ArrowDown size={14} aria-hidden="true" className="animate-bounce" />
      </motion.div>
    </div>
  );
}

/* ─── Dashboard ──────────────────────────────────────────────────────────────── */
export default function Dashboard() {
  const { currentTask, setFiles } = useTask();
  const [step, setStep] = useState('upload');   // 'upload' | 'action'
  const [heroFile, setHeroFile] = useState(null);

  /* Reset step when going back to task=none */
  useEffect(() => {
    if (currentTask === 'none') {
      setStep('upload');
    }
  }, [currentTask]);

  /* When a task is selected, check if hero file is compatible → skip upload */
  const prevTask = useRef('none');
  useEffect(() => {
    if (currentTask !== 'none' && prevTask.current === 'none' && heroFile) {
      const isPdf = heroFile.type === 'application/pdf';
      const compatible = PDF_ONLY_TASKS.has(currentTask) ? isPdf : true;
      if (compatible) {
        setFiles([heroFile]);
        setStep('action');
      } else {
        setStep('upload');
      }
    } else if (currentTask !== 'none' && prevTask.current === 'none') {
      setStep('upload');
    }
    prevTask.current = currentTask;
  }, [currentTask]);

  const handleClearHero = () => setHeroFile(null);

  const isHome = currentTask === 'none';

  return (
    <div className="w-full flex-1 flex flex-col items-center pb-20 relative">
      <div className="absolute inset-0 bg-mesh -z-10" />

      {isHome ? (
        <>
          <HeroDrop heroFile={heroFile} onFileDrop={setHeroFile} onClear={handleClearHero} />
          <TaskSelector heroFile={heroFile} />
</>
      ) : step === 'upload' ? (
        <DropZone onContinue={() => setStep('action')} />
      ) : (
        <ActionPanel onBack={() => setStep('upload')} />
      )}
    </div>
  );
}
