import React from 'react';
import { LANGUAGES } from '../i18n';
import { useLang } from '../context/LanguageContext';

export default function LanguagePicker() {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Select language"
      className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
    >
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-3 py-1.5 text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-brand-500
            ${lang === code
              ? 'bg-brand-600 text-white'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
