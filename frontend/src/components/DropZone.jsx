import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, File, X, ArrowLeft, Send } from 'lucide-react';
import { useTask } from '../context/TaskContext';
import { useLang } from '../context/LanguageContext';
import CustomPdfPreview from './CustomPdfPreview';

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const ALL_DOCS        = '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx';
const ALL_IMAGES      = '.jpg,.jpeg,.png,.webp,.gif,.tiff';
const OFFICE_ONLY     = '.doc,.docx,.ppt,.pptx,.xls,.xlsx';
const PDF_AND_OFFICE  = `.pdf,${OFFICE_ONLY}`;
const PDF_ONLY   = 'application/pdf';

export default function DropZone({ onContinue }) {
  const { currentTask, setCurrentTask, files, setFiles } = useTask();
  const { t } = useLang();
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver  = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e) => {
    e.preventDefault(); setIsDragging(false);
    if (e.dataTransfer.files?.length > 0) addFiles(Array.from(e.dataTransfer.files));
  };

  const OFFICE_MIMES = new Set([
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  ]);

  const isAcceptable = (file) => {
    if (currentTask === 'convert') return true;
    if (currentTask === 'protect') return file.type === 'application/pdf' || OFFICE_MIMES.has(file.type);
    return file.type === 'application/pdf';
  };

  const addFiles = (newFiles) => {
    const valid = newFiles.filter(isAcceptable);
    const single = ['split','compress','ocr','protect','unlock','watermark','to-images','to-word','to-pdf'];
    setFiles(single.includes(currentTask) ? valid.slice(0,1) : prev => [...prev, ...valid]);
  };

  const removeFile = (i) => setFiles(prev => prev.filter((_,j) => j !== i));

  const getTaskInfo = () => {
    switch (currentTask) {
      case 'merge':     return { title: t('dz_merge_title'),     desc: t('dz_merge_desc'),     accept: PDF_ONLY };
      case 'split':     return { title: t('dz_split_title'),     desc: t('dz_split_desc'),     accept: PDF_ONLY };
      case 'compress':  return { title: t('dz_compress_title'),  desc: t('dz_compress_desc'),  accept: PDF_ONLY };
      case 'ocr':       return { title: t('dz_ocr_title'),       desc: t('dz_ocr_desc'),       accept: PDF_ONLY };
      case 'protect':   return { title: t('dz_protect_title'),   desc: t('dz_protect_desc'),   accept: PDF_AND_OFFICE };
      case 'unlock':    return { title: t('dz_unlock_title'),    desc: t('dz_unlock_desc'),    accept: PDF_ONLY };
      case 'watermark': return { title: t('dz_watermark_title'), desc: t('dz_watermark_desc'), accept: PDF_ONLY };
      case 'convert':   return { title: t('dz_convert_title'),   desc: t('dz_convert_desc'),   accept: `${ALL_DOCS},${ALL_IMAGES}` };
      case 'to-images': return { title: t('dz_to_images_title'), desc: t('dz_to_images_desc'), accept: PDF_ONLY };
      default:          return { title: 'Upload',                desc: '',                     accept: '*' };
    }
  };

  const info = getTaskInfo();
  const canMerge  = currentTask === 'merge'  && files.length >= 2;
  const canSingle = currentTask !== 'merge'  && files.length === 1;

  return (
    <motion.div
      initial={{ opacity:0, scale:0.97 }}
      animate={{ opacity:1, scale:1 }}
      className="w-full max-w-4xl mx-auto px-4 mt-8 z-10 relative"
    >
      {/* Back button */}
      <button
        onClick={() => { setCurrentTask('none'); setFiles([]); }}
        className="group inline-flex items-center gap-1.5 mb-8
                   text-sm font-medium text-slate-400 dark:text-slate-500
                   hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
      >
        <ArrowLeft size={15} aria-hidden="true" className="group-hover:-translate-x-0.5 transition-transform" />
        {t('back_to_tools')}
      </button>

      <div className="bg-white dark:bg-slate-800/80 rounded-3xl
                      shadow-xl shadow-slate-200/40 dark:shadow-slate-900/60
                      border border-slate-100 dark:border-slate-700 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{info.title}</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">{info.desc}</p>
        </div>

        {/* Drop area */}
        <div
          role="button"
          tabIndex={0}
          aria-label={t('dz_upload_aria')}
          className={`border-2 border-dashed rounded-2xl p-12 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer
            ${isDragging
              ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/20'
              : 'border-slate-200 dark:border-slate-700 hover:border-brand-400 dark:hover:border-brand-600 hover:bg-slate-50 dark:hover:bg-slate-700/40'}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('fileUpload').click()}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); document.getElementById('fileUpload').click(); } }}
        >
          <input type="file" id="fileUpload" aria-label="Upload files" className="hidden"
            multiple={currentTask === 'merge'} accept={info.accept}
            onChange={e => e.target.files?.length > 0 && addFiles(Array.from(e.target.files))} />
          <div className="w-20 h-20 bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 rounded-full flex items-center justify-center mb-6 shadow-sm border border-brand-200 dark:border-brand-800">
            <UploadCloud size={32} aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">{t('dz_drag_drop')}</h3>
          <p className="text-slate-500 dark:text-slate-400">{t('dz_browse_computer')}</p>
        </div>

        {/* File list */}
        {files.length > 0 && (
          <div className="mt-8">
            <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-4 flex items-center justify-between">
              <span>{t('dz_selected_files')} ({files.length})</span>
              {canMerge && (
                <button onClick={onContinue}
                  className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md flex items-center transition-colors">
                  {t('dz_continue_merge')} <Send size={16} aria-hidden="true" className="ml-2"/>
                </button>
              )}
              {canSingle && (
                <button onClick={onContinue}
                  className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md flex items-center transition-colors">
                  {t('dz_continue')} <Send size={16} aria-hidden="true" className="ml-2"/>
                </button>
              )}
            </h4>
            <div className="space-y-3">
              <AnimatePresence>
                {files.map((f,i) => (
                  <motion.div key={f.name+i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:0.95}}
                    className="flex flex-col p-4 bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <File size={22} className="text-brand-500 dark:text-brand-400 shrink-0"/>
                        <div className="min-w-0">
                          <p className="truncate text-slate-700 dark:text-slate-200 font-medium">{f.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{formatSize(f.size)}</p>
                        </div>
                      </div>
                      <button
                        onClick={e => { e.stopPropagation(); removeFile(i); }}
                        aria-label={`Remove ${f.name}`}
                        className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                        <X size={18} aria-hidden="true"/>
                      </button>
                    </div>
                    {(f.type === 'application/pdf' || f.type.startsWith('image/')) && (
                      <div className="w-full bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600 overflow-hidden shadow-inner mt-2">
                        {f.type.startsWith('image/') ? (
                          <img src={URL.createObjectURL(f)} alt={f.name} className="w-full max-h-[400px] object-contain bg-slate-100 dark:bg-slate-700"/>
                        ) : (
                          <CustomPdfPreview file={f}/>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
