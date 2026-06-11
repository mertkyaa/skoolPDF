import React from 'react';
import { ArrowLeft, Trash2, Lock, Shield, Server, Layers, Scissors, Minimize2, FileType, FileText, Unlock, Stamp, ImageDown, CheckCircle } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const FEATURES = [
  { icon: Trash2,  titleKey: 'docs_feat_delete_title',  bodyKey: 'docs_feat_delete_body',  color: 'text-rose-500',    bg: 'bg-rose-50    dark:bg-rose-900/20',    border: 'border-rose-100  dark:border-rose-800'  },
  { icon: Lock,    titleKey: 'docs_feat_enc_title',     bodyKey: 'docs_feat_enc_body',     color: 'text-amber-500',   bg: 'bg-amber-50   dark:bg-amber-900/20',   border: 'border-amber-100 dark:border-amber-800' },
  { icon: Shield,  titleKey: 'docs_feat_privacy_title', bodyKey: 'docs_feat_privacy_body', color: 'text-brand-500',   bg: 'bg-brand-50   dark:bg-brand-900/20',   border: 'border-brand-100 dark:border-brand-800' },
  { icon: Server,  titleKey: 'docs_feat_local_title',   bodyKey: 'docs_feat_local_body',   color: 'text-violet-500',  bg: 'bg-violet-50  dark:bg-violet-900/20',  border: 'border-violet-100 dark:border-violet-800'},
];

const TOOLS = [
  { icon: Layers,    titleKey: 'tool_merge',      bodyKey: 'docs_tool_merge_body',     color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-100 dark:bg-violet-900/30'   },
  { icon: Scissors,  titleKey: 'tool_split',      bodyKey: 'docs_tool_split_body',     color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-100 dark:bg-violet-900/30'   },
  { icon: Minimize2, titleKey: 'tool_compress',   bodyKey: 'docs_tool_compress_body',  color: 'text-cyan-600   dark:text-cyan-400',   bg: 'bg-cyan-100   dark:bg-cyan-900/30'     },
  { icon: FileType,  titleKey: 'tool_ocr',        bodyKey: 'docs_tool_ocr_body',       color: 'text-cyan-600   dark:text-cyan-400',   bg: 'bg-cyan-100   dark:bg-cyan-900/30'     },
  { icon: FileText,  titleKey: 'tool_convert',    bodyKey: 'docs_tool_convert_body',   color: 'text-fuchsia-600 dark:text-fuchsia-400', bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30'},
  { icon: ImageDown, titleKey: 'tool_to_images',  bodyKey: 'docs_tool_to_images_body', color: 'text-fuchsia-600 dark:text-fuchsia-400', bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30'},
  { icon: Lock,      titleKey: 'tool_protect',    bodyKey: 'docs_tool_protect_body',   color: 'text-teal-600   dark:text-teal-400',   bg: 'bg-teal-100   dark:bg-teal-900/30'     },
  { icon: Unlock,    titleKey: 'tool_unlock',     bodyKey: 'docs_tool_unlock_body',    color: 'text-teal-600   dark:text-teal-400',   bg: 'bg-teal-100   dark:bg-teal-900/30'     },
  { icon: Stamp,     titleKey: 'tool_watermark',  bodyKey: 'docs_tool_watermark_body', color: 'text-teal-600   dark:text-teal-400',   bg: 'bg-teal-100   dark:bg-teal-900/30'     },
];

function Section({ title, children }) {
  return (
    <section className="mb-14">
      <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-3
                     border-b border-slate-100 dark:border-slate-800">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function DocsPage({ onBack }) {
  const { t } = useLang();

  return (
    <div className="w-full flex-1 flex flex-col items-center pb-20 px-4">
      <div className="w-full max-w-3xl mt-10">

        {/* Back button */}
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-1.5 mb-10
                     text-sm font-medium text-slate-400 dark:text-slate-500
                     hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        >
          <ArrowLeft size={15} aria-hidden="true" className="group-hover:-translate-x-0.5 transition-transform" />
          {t('docs_back')}
        </button>

        {/* Page title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
          {t('docs_title')}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-12 text-base">skoolPDF</p>

        {/* Overview */}
        <Section title={t('docs_overview_title')}>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('docs_overview_body')}
          </p>
        </Section>

        {/* Privacy & Security */}
        <Section title={t('docs_security_title')}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map(({ icon: Icon, titleKey, bodyKey, color, bg, border }) => (
              <div key={titleKey}
                className={`flex items-start gap-4 p-5 rounded-2xl border ${bg} ${border}`}>
                <div className={`mt-0.5 shrink-0 ${color}`}>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{t(titleKey)}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t(bodyKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Tools */}
        <Section title={t('docs_tools_title')}>
          <div className="flex flex-col gap-3">
            {TOOLS.map(({ icon: Icon, titleKey, bodyKey, color, bg }) => (
              <div key={titleKey}
                className="flex items-start gap-4 p-5 rounded-2xl
                           bg-white dark:bg-slate-800/60
                           border border-slate-100 dark:border-slate-700">
                <div className={`w-10 h-10 shrink-0 ${bg} rounded-xl flex items-center justify-center mt-0.5`} aria-hidden="true">
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{t(titleKey)}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t(bodyKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Tips */}
        <Section title={t('docs_tips_title')}>
          <div className="flex flex-col gap-3">
            {['docs_tip_1', 'docs_tip_2', 'docs_tip_3'].map(key => (
              <div key={key} className="flex items-start gap-3">
                <CheckCircle size={16} aria-hidden="true" className="text-brand-500 dark:text-brand-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{t(key)}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Supported formats */}
        <Section title={t('docs_formats_title')}>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-mono bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 rounded-xl px-5 py-4">
            {t('docs_formats_body')}
          </p>
        </Section>

        {/* Tech stack */}
        <Section title={t('docs_tech_title')}>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-mono bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 rounded-xl px-5 py-4">
            {t('docs_tech_body')}
          </p>
        </Section>

      </div>
    </div>
  );
}
