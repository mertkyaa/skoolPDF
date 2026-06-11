import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Scissors, Minimize2, FileType, FileText, Unlock, Lock, Stamp, ImageDown, FileCheck } from 'lucide-react';
import { useTask } from '../context/TaskContext';
import { useLang } from '../context/LanguageContext';

const CARD_HOVER = {
  modify:   'hover:from-emerald-50 hover:to-teal-50    dark:hover:from-emerald-900/25 dark:hover:to-teal-900/25    hover:border-emerald-200 dark:hover:border-emerald-800',
  process:  'hover:from-teal-50   hover:to-cyan-50    dark:hover:from-teal-900/25   dark:hover:to-cyan-900/25    hover:border-teal-200   dark:hover:border-teal-800',
  convert:  'hover:from-green-50  hover:to-emerald-50 dark:hover:from-green-900/25  dark:hover:to-emerald-900/25 hover:border-green-200  dark:hover:border-green-800',
  security: 'hover:from-cyan-50   hover:to-teal-50    dark:hover:from-cyan-900/25   dark:hover:to-teal-900/25    hover:border-cyan-200   dark:hover:border-cyan-800',
};

const OFFICE_MIMES = new Set([
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
]);

const COMPAT_CHECK = {
  merge:       f => f?.type === 'application/pdf',
  split:       f => f?.type === 'application/pdf',
  compress:    f => f?.type === 'application/pdf',
  ocr:         f => f?.type === 'application/pdf',
  unlock:      f => f?.type === 'application/pdf',
  watermark:   f => f?.type === 'application/pdf',
  'to-images': f => f?.type === 'application/pdf',
  protect:     f => f?.type === 'application/pdf' || OFFICE_MIMES.has(f?.type),
  convert:     f => f?.type === 'application/pdf' || OFFICE_MIMES.has(f?.type) || f?.type?.startsWith('image/'),
};

function getCategories(t) {
  return [
    {
      key: 'modify',
      title: t('cat_modify'),
      desc:  t('cat_modify_desc'),
      tools: [
        { id: 'merge',  title: t('tool_merge'),  desc: t('tool_merge_desc'),  icon: Layers,   color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
        { id: 'split',  title: t('tool_split'),  desc: t('tool_split_desc'),  icon: Scissors, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
      ],
    },
    {
      key: 'process',
      title: t('cat_process'),
      desc:  t('cat_process_desc'),
      tools: [
        { id: 'compress', title: t('tool_compress'), desc: t('tool_compress_desc'), icon: Minimize2, color: 'text-teal-600 dark:text-teal-400', bg: 'bg-teal-100 dark:bg-teal-900/30' },
        { id: 'ocr',      title: t('tool_ocr'),      desc: t('tool_ocr_desc'),      icon: FileType,  color: 'text-teal-600 dark:text-teal-400', bg: 'bg-teal-100 dark:bg-teal-900/30' },
      ],
    },
    {
      key: 'convert',
      title: t('cat_convert'),
      desc:  t('cat_convert_desc'),
      tools: [
        { id: 'convert',   title: t('tool_convert'),   desc: t('tool_convert_desc'),   icon: FileText,  color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/30' },
        { id: 'to-images', title: t('tool_to_images'), desc: t('tool_to_images_desc'), icon: ImageDown, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/30' },
      ],
    },
    {
      key: 'security',
      title: t('cat_security'),
      desc:  t('cat_security_desc'),
      tools: [
        { id: 'protect',   title: t('tool_protect'),   desc: t('tool_protect_desc'),   icon: Lock,   color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-100 dark:bg-cyan-900/30' },
        { id: 'unlock',    title: t('tool_unlock'),    desc: t('tool_unlock_desc'),    icon: Unlock, color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-100 dark:bg-cyan-900/30' },
        { id: 'watermark', title: t('tool_watermark'), desc: t('tool_watermark_desc'), icon: Stamp,  color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-100 dark:bg-cyan-900/30' },
      ],
    },
  ];
}

export default function TaskSelector({ heroFile }) {
  const { setCurrentTask } = useTask();
  const { t } = useLang();
  const categories = getCategories(t);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-8 mb-16 z-10 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => {
          const hoverCls = CARD_HOVER[cat.key] || '';
          return (
            <div key={cat.key} id={`cat-${cat.key}`} className="flex flex-col scroll-mt-20">
              <div className="mb-3 px-1">
                <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{cat.title}</h2>
              </div>

              <div className="flex flex-col gap-2.5 flex-1">
                {cat.tools.map((task, i) => {
                  const Icon = task.icon;
                  const compatible = heroFile ? (COMPAT_CHECK[task.id]?.(heroFile) ?? true) : null;
                  const dimmed = compatible === false;

                  return (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: dimmed ? 0.4 : 1, y: 0 }}
                      transition={{ delay: idx * 0.07 + i * 0.035 }}
                      whileHover={dimmed ? {} : { scale: 1.02 }}
                      whileTap={dimmed ? {} : { scale: 0.97 }}
                      onClick={() => !dimmed && setCurrentTask(task.id)}
                      role="button"
                      tabIndex={dimmed ? -1 : 0}
                      aria-disabled={dimmed ? 'true' : undefined}
                      aria-label={dimmed ? `${task.title} — ${t('tool_compat')}` : task.title}
                      onKeyDown={e => { if (!dimmed && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); setCurrentTask(task.id); } }}
                      className={`group bg-gradient-to-br bg-white dark:bg-slate-800/80
                                  rounded-2xl p-4 border border-slate-100 dark:border-slate-700
                                  shadow-sm transition-all duration-200
                                  flex items-start space-x-3 touch-manipulation
                                  focus-visible:outline-2 focus-visible:outline-brand-500 focus-visible:outline-offset-2
                                  ${dimmed ? 'cursor-not-allowed' : 'cursor-pointer'}
                                  ${!dimmed ? hoverCls : ''}`}
                    >
                      <div className={`w-10 h-10 shrink-0 ${task.bg} rounded-xl flex items-center justify-center mt-0.5`} aria-hidden="true">
                        <Icon size={19} className={task.color} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight">{task.title}</h3>
                          {compatible === true && (
                            <FileCheck size={13} className="text-brand-500 dark:text-brand-400 shrink-0" aria-hidden="true" />
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">{task.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
