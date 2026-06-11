export const translations = {
  en: {
    /* ── Hero ── */
    hero_heading_1: 'Your PDFs,',
    hero_heading_2: 'done right.',
    hero_sub: 'Drop any file to get started — or pick a tool below.',
    hero_drop: 'Drag & drop your file here',
    hero_drop_release: 'Release to load file',
    hero_browse: 'click to browse',
    hero_ready: 'Ready — select a tool below',
    hero_change: 'Change file',
    hero_remove: 'Remove file',
    hero_scroll: 'or choose a tool',

    /* ── Trust badges ── */
    trust_free:    'Free & unlimited',
    trust_deleted: 'Files deleted in 1 hour',
    trust_noreg:   'No sign-up required',

    /* ── Global ── */
    back_to_files: 'Back to files',
    back_to_tools: 'Back to tools',
    nav_docs: 'Docs',
    process_btn: 'Process & Download',
    processing: 'Processing...',
    done: 'Done! File Downloaded',
    process_another: 'Process another file',
    ocr_running: 'Running OCR...',
    copyright: `© ${new Date().getFullYear()} skoolPDF. Your PDF Editor`,

    /* ── Task categories ── */
    cat_modify:       'Modify & Arrange',
    cat_modify_desc:  'Change structure & order pages',
    cat_process:      'Process & Optimize',
    cat_process_desc: 'Enhance documents for sharing',
    cat_convert:      'Convert',
    cat_convert_desc: 'Transform between formats',
    cat_security:     'Security & Branding',
    cat_security_desc:'Manage access & identity',

    /* ── Tool names & descriptions ── */
    tool_merge:          'Merge PDFs',
    tool_merge_desc:     'Combine multiple PDFs into one',
    tool_split:          'Extract Pages',
    tool_split_desc:     'Split into sections by page selection',
    tool_compress:       'Compress PDF',
    tool_compress_desc:  'Reduce file size via Ghostscript',
    tool_ocr:            'OCR — Make Searchable',
    tool_ocr_desc:       'Convert scanned images to text',
    tool_convert:        'Universal Converter',
    tool_convert_desc:   'PDF ↔ Word · Office · Images',
    tool_to_images:      'PDF to Images',
    tool_to_images_desc: 'Export each page as a high-res PNG',
    tool_protect:        'Add Password',
    tool_protect_desc:   'Encrypt any file with AES-256',
    tool_unlock:         'Unlock PDF',
    tool_unlock_desc:    'Remove password protection',
    tool_watermark:      'Add Watermark',
    tool_watermark_desc: 'Stamp custom text on every page',
    tool_compat:         'requires a compatible file',

    /* ── DropZone task info ── */
    dz_merge_title:     'Merge PDFs',
    dz_merge_desc:      'Upload the PDFs you want to combine.',
    dz_split_title:     'Extract Pages',
    dz_split_desc:      'Upload the PDF you want to split.',
    dz_compress_title:  'Compress PDF',
    dz_compress_desc:   'Upload a PDF to optimise its file size.',
    dz_ocr_title:       'OCR — Make Searchable',
    dz_ocr_desc:        'Upload a scanned PDF to extract its text layer.',
    dz_protect_title:   'Add Password',
    dz_protect_desc:    'Upload a PDF or Office file (Word, Excel, PowerPoint) to encrypt with native AES-256.',
    dz_unlock_title:    'Unlock PDF',
    dz_unlock_desc:     'Upload a password-protected PDF to remove its lock.',
    dz_watermark_title: 'Add Watermark',
    dz_watermark_desc:  'Upload a PDF to stamp custom text on every page.',
    dz_convert_title:   'Universal Converter',
    dz_convert_desc:    'Upload a PDF, Word, Excel, PowerPoint or image file.',
    dz_to_images_title: 'PDF to Images',
    dz_to_images_desc:  'Upload a PDF — each page will be exported as a PNG image.',

    /* ── DropZone UI ── */
    dz_drag_drop:       'Drag & drop your files here',
    dz_browse_computer: 'or click to browse from your computer',
    dz_selected_files:  'Selected files',
    dz_continue_merge:  'Continue to Merge',
    dz_continue:        'Continue',
    dz_upload_aria:     'Upload files — drag and drop or click to browse',

    /* ── ActionPanel titles ── */
    ap_title_merge:     'Merge Settings',
    ap_title_split:     'Extract Pages',
    ap_title_compress:  'Compression Settings',
    ap_title_protect:   'Encryption Settings',
    ap_title_unlock:    'Unlock PDF',
    ap_title_convert:   'Convert Settings',
    ap_title_ocr:       'OCR Settings',
    ap_title_watermark: 'Watermark Settings',
    ap_title_to_images: 'PDF to Images',
    ap_title_default:   'Settings',

    /* ── ActionPanel compress ── */
    ap_compress_label:   'Compression Level',
    ap_compress_screen:  '🚀 Maximum (72 dpi — smallest file, screen only)',
    ap_compress_ebook:   '📖 Balanced (150 dpi — e-readers & digital sharing)',
    ap_compress_printer: '🖨️ High Quality (300 dpi — print-ready / archival)',
    ap_compress_hint:    'Image quality is adjusted to your chosen level while reducing file size.',

    /* ── ActionPanel protect/unlock ── */
    ap_pass_protect:  'Set a password',
    ap_pass_unlock:   'Enter password to unlock',
    ap_protect_hint:  'PDF files are encrypted with AES-256 via qpdf. Office files use native ECMA-376 encryption — the file format is preserved.',

    /* ── ActionPanel watermark ── */
    ap_wm_text:           'Watermark Text',
    ap_wm_size:           'Font Size',
    ap_wm_size_sm:        'Small (30pt)',
    ap_wm_size_md:        'Medium (60pt)',
    ap_wm_size_lg:        'Large (90pt)',
    ap_wm_size_xl:        'Extra Large (120pt)',
    ap_wm_opacity:        'Opacity',
    ap_wm_opacity_subtle: 'Subtle (15%)',
    ap_wm_opacity_light:  'Light (30%)',
    ap_wm_opacity_medium: 'Medium (50%)',
    ap_wm_opacity_strong: 'Strong (75%)',
    ap_wm_position:       'Position',
    ap_wm_pos_diagonal:   'Diagonal (center)',
    ap_wm_pos_center:     'Horizontal center',
    ap_wm_pos_top:        'Top',
    ap_wm_pos_bottom:     'Bottom',
    ap_wm_pages:          'Apply to pages',
    ap_wm_pages_hint:     'Leave empty to stamp all pages. Use ranges like 1–3, 5, 8–10.',

    /* ── ActionPanel convert ── */
    ap_convert_from: 'From',
    ap_convert_to:   'To',

    /* ── ActionPanel PDF to Images ── */
    ap_dpi_label:    'Image Resolution (DPI)',
    ap_dpi_screen:   '72 dpi — Screen / preview',
    ap_dpi_balanced: '150 dpi — Balanced (default)',
    ap_dpi_print:    '300 dpi — Print quality',
    ap_dpi_hint:     'Multi-page PDFs are packaged as a .zip archive. Single pages return as .png.',

    /* ── ActionPanel OCR ── */
    ap_ocr_ready: 'Smart OCR engine ready — optimised for lecture notes and scanned documents.',
    ap_ocr_feat1: 'Auto-detects Turkish & English text',
    ap_ocr_feat2: 'Fixes tilted & rotated pages automatically',
    ap_ocr_feat3: 'Adds a searchable text layer without touching image quality',

    /* ── ActionPanel merge ── */
    ap_merge_info: 'Files will be merged in order. Optionally select specific pages from each file to include only those in the output.',

    /* ── Docs page ── */
    docs_back:               'Back to app',
    docs_title:              'Documentation',
    docs_overview_title:     'Overview',
    docs_overview_body:      'SkoolPDF is a free, privacy-first PDF toolkit. All file processing runs on our servers — your files are never stored, shared, or analysed beyond what is needed to complete the operation.',
    docs_security_title:     'Privacy & Security',
    docs_feat_delete_title:  'Auto-Deleted',
    docs_feat_delete_body:   'Every file you upload is automatically and permanently deleted from our servers the moment your download completes. We never retain your documents.',
    docs_feat_enc_title:     'AES-256 Encryption',
    docs_feat_enc_body:      'Password protection uses AES-256 — the same standard used in banking and government systems — applied via qpdf for PDFs and native ECMA-376 for Office files.',
    docs_feat_privacy_title: 'No Data Collection',
    docs_feat_privacy_body:  'We do not collect, read, or share the contents of any file you process. No account required, no telemetry, no tracking of any kind.',
    docs_feat_local_title:   'Server-Side Processing',
    docs_feat_local_body:    'All PDF operations run directly on our infrastructure without any third-party cloud services. Your data never leaves our servers and is processed in an isolated environment.',
    docs_tools_title:        'Tools',
    docs_tool_merge_body:    'Combine multiple PDF files into a single document. You can optionally select specific pages from each file — only those pages will appear in the merged output.',
    docs_tool_split_body:    'Extract a custom selection of pages from a PDF using a simple range syntax (e.g. 1, 3–5, 8). The result is a new PDF containing only the pages you chose.',
    docs_tool_compress_body: 'Reduce PDF file size using Ghostscript with three quality presets: Maximum (72 dpi, screen use), Balanced (150 dpi, digital sharing), or High Quality (300 dpi, print/archival).',
    docs_tool_ocr_body:      'Turn a scanned, image-only PDF into a searchable and selectable text document. Powered by ocrmypdf, auto-detects Turkish and English, and automatically corrects tilted or rotated pages.',
    docs_tool_convert_body:  'Convert between PDF, Word (.docx), Excel, PowerPoint, and common image formats (JPG, PNG, WebP, TIFF). Powered by LibreOffice for Office conversions.',
    docs_tool_to_images_body:'Export every page of a PDF as a high-resolution PNG image. Choose 72 dpi (screen), 150 dpi (balanced), or 300 dpi (print). Multi-page PDFs are delivered as a .zip archive.',
    docs_tool_protect_body:  'Encrypt a PDF or Office file with a password. PDFs are secured with AES-256 via qpdf; Office files (Word, Excel, PowerPoint) use native ECMA-376 encryption.',
    docs_tool_unlock_body:   'Remove password protection from a PDF by supplying the correct password. The output is an identical, unencrypted copy of the original document.',
    docs_tool_watermark_body:'Stamp custom text onto every page of a PDF. Configure the text, font size, opacity, position (diagonal, center, top, bottom), and optionally target specific pages.',
    docs_formats_title:      'Supported Formats',
    docs_formats_body:       'PDF · Word (.docx, .doc) · Excel (.xlsx, .xls) · PowerPoint (.pptx, .ppt) · Images (JPG, PNG, WebP, GIF, TIFF)',
    docs_tech_title:         'Technology Stack',
    docs_tech_body:          'Ghostscript (compression & image export) · qpdf (encryption & merging) · ocrmypdf / Tesseract (OCR) · LibreOffice (Office conversion) · pdf-lib (client-side preview)',
    docs_tips_title:         'Tips',
    docs_tip_1:              'Drop a file on the homepage first — compatible tools will be highlighted automatically.',
    docs_tip_2:              'For OCR, upload the highest-quality scan available for best text recognition accuracy.',
    docs_tip_3:              'When merging, drag to reorder files before confirming. Page selection is per-file.',

    /* ── PageSelector ── */
    ps_select_label:   'Select pages to include',
    ps_total_count:    '({n} total)',
    ps_deselect_all:   'Deselect All',
    ps_select_all:     'Select All',
    ps_range_hint:     'Type page numbers or ranges, then press Enter — or click thumbnails below.',
    ps_invalid_range:  'Invalid page range. Use format: 1, 3–5, 8',
    ps_loading:        'Loading pages...',
    ps_loading_wait:   'Please wait',
    ps_selected_count: '{selected} of {total} pages selected',
    ps_none_selected:  'No pages selected — all pages will be included',
    ps_page:           'Page',
  },

  tr: {
    /* ── Hero ── */
    hero_heading_1: "PDF'leriniz,",
    hero_heading_2: 'mükemmel şekilde.',
    hero_sub: 'Başlamak için dosya bırakın — ya da aşağıdan bir araç seçin.',
    hero_drop: 'Dosyanızı sürükleyip bırakın',
    hero_drop_release: 'Yüklemek için bırakın',
    hero_browse: 'gözat',
    hero_ready: 'Hazır — aşağıdan bir araç seçin',
    hero_change: 'Dosyayı değiştir',
    hero_remove: 'Dosyayı kaldır',
    hero_scroll: 'veya bir araç seçin',

    /* ── Güven rozetleri ── */
    trust_free:    'Ücretsiz & sınırsız',
    trust_deleted: 'Dosyalar 1 saatte silinir',
    trust_noreg:   'Kayıt gerekmez',

    /* ── Global ── */
    back_to_files: 'Dosyalara dön',
    back_to_tools: 'Araçlara dön',
    nav_docs: 'Belgeler',
    process_btn: 'İşle & İndir',
    processing: 'İşleniyor...',
    done: 'Tamam! Dosya İndirildi',
    process_another: 'Başka dosya işle',
    ocr_running: 'OCR çalışıyor...',
    copyright: `© ${new Date().getFullYear()} skoolPDF. PDF Editörünüz`,

    /* ── Task categories ── */
    cat_modify:       'Düzenle & Sırala',
    cat_modify_desc:  'Yapıyı değiştir, sayfaları sırala',
    cat_process:      'İşle & Optimize Et',
    cat_process_desc: 'Belgeleri paylaşım için geliştir',
    cat_convert:      'Dönüştür',
    cat_convert_desc: 'Formatlar arası dönüştür',
    cat_security:     'Güvenlik & Marka',
    cat_security_desc:'Erişim ve kimliği yönet',

    /* ── Tool names & descriptions ── */
    tool_merge:          'PDF Birleştir',
    tool_merge_desc:     "Birden fazla PDF'yi tek dosyada birleştir",
    tool_split:          'Sayfa Çıkar',
    tool_split_desc:     'Sayfa seçimiyle bölümlere ayır',
    tool_compress:       'PDF Sıkıştır',
    tool_compress_desc:  'Ghostscript ile dosya boyutunu küçült',
    tool_ocr:            'OCR — Aranabilir Yap',
    tool_ocr_desc:       'Taranan görselleri metne dönüştür',
    tool_convert:        'Evrensel Dönüştürücü',
    tool_convert_desc:   'PDF ↔ Word · Office · Görsel',
    tool_to_images:      "PDF'den Görsel",
    tool_to_images_desc: 'Her sayfayı yüksek çözünürlüklü PNG olarak dışa aktar',
    tool_protect:        'Parola Ekle',
    tool_protect_desc:   'Herhangi bir dosyayı AES-256 ile şifrele',
    tool_unlock:         'PDF Kilidi Aç',
    tool_unlock_desc:    'Parola korumasını kaldır',
    tool_watermark:      'Filigran Ekle',
    tool_watermark_desc: 'Her sayfaya özel metin damgası vur',
    tool_compat:         'uyumlu bir dosya gerektirir',

    /* ── DropZone task info ── */
    dz_merge_title:     'PDF Birleştir',
    dz_merge_desc:      "Birleştirmek istediğiniz PDF'leri yükleyin.",
    dz_split_title:     'Sayfa Çıkar',
    dz_split_desc:      "Bölmek istediğiniz PDF'yi yükleyin.",
    dz_compress_title:  'PDF Sıkıştır',
    dz_compress_desc:   "Dosya boyutunu optimize etmek için PDF yükleyin.",
    dz_ocr_title:       'OCR — Aranabilir Yap',
    dz_ocr_desc:        'Metin katmanı çıkarmak için taranmış PDF yükleyin.',
    dz_protect_title:   'Parola Ekle',
    dz_protect_desc:    'AES-256 ile şifrelemek için PDF veya Office dosyası (Word, Excel, PowerPoint) yükleyin.',
    dz_unlock_title:    'PDF Kilidi Aç',
    dz_unlock_desc:     'Kilidini kaldırmak için parola korumalı PDF yükleyin.',
    dz_watermark_title: 'Filigran Ekle',
    dz_watermark_desc:  'Her sayfaya özel metin damgası vurmak için PDF yükleyin.',
    dz_convert_title:   'Evrensel Dönüştürücü',
    dz_convert_desc:    'PDF, Word, Excel, PowerPoint veya görüntü dosyası yükleyin.',
    dz_to_images_title: "PDF'den Görsel",
    dz_to_images_desc:  'PDF yükleyin — her sayfa PNG görüntüsü olarak dışa aktarılır.',

    /* ── DropZone UI ── */
    dz_drag_drop:       'Dosyalarınızı sürükleyip bırakın',
    dz_browse_computer: 'veya bilgisayarınızdan göz atın',
    dz_selected_files:  'Seçilen dosyalar',
    dz_continue_merge:  'Birleştirmeye Devam Et',
    dz_continue:        'Devam Et',
    dz_upload_aria:     'Dosya yükle — sürükle bırak veya göz atın',

    /* ── ActionPanel titles ── */
    ap_title_merge:     'Birleştirme Ayarları',
    ap_title_split:     'Sayfa Çıkar',
    ap_title_compress:  'Sıkıştırma Ayarları',
    ap_title_protect:   'Şifreleme Ayarları',
    ap_title_unlock:    'PDF Kilidi Aç',
    ap_title_convert:   'Dönüştürme Ayarları',
    ap_title_ocr:       'OCR Ayarları',
    ap_title_watermark: 'Filigran Ayarları',
    ap_title_to_images: "PDF'den Görsel",
    ap_title_default:   'Ayarlar',

    /* ── ActionPanel compress ── */
    ap_compress_label:   'Sıkıştırma Seviyesi',
    ap_compress_screen:  '🚀 Maksimum (72 dpi — en küçük dosya, yalnızca ekran)',
    ap_compress_ebook:   '📖 Dengeli (150 dpi — e-okuyucu ve dijital paylaşım)',
    ap_compress_printer: '🖨️ Yüksek Kalite (300 dpi — baskıya hazır / arşiv)',
    ap_compress_hint:    'Dosya boyutu küçültülürken görüntü kalitesi seçilen seviyeye göre ayarlanır.',

    /* ── ActionPanel protect/unlock ── */
    ap_pass_protect: 'Parola belirle',
    ap_pass_unlock:  'Kilit açmak için parolayı girin',
    ap_protect_hint: "PDF dosyaları qpdf aracılığıyla AES-256 ile şifrelenir. Office dosyaları yerel ECMA-376 şifrelemesini kullanır — dosya formatı korunur.",

    /* ── ActionPanel watermark ── */
    ap_wm_text:           'Filigran Metni',
    ap_wm_size:           'Yazı Boyutu',
    ap_wm_size_sm:        'Küçük (30pt)',
    ap_wm_size_md:        'Orta (60pt)',
    ap_wm_size_lg:        'Büyük (90pt)',
    ap_wm_size_xl:        'Çok Büyük (120pt)',
    ap_wm_opacity:        'Opaklık',
    ap_wm_opacity_subtle: 'Çok Hafif (15%)',
    ap_wm_opacity_light:  'Hafif (30%)',
    ap_wm_opacity_medium: 'Orta (50%)',
    ap_wm_opacity_strong: 'Güçlü (75%)',
    ap_wm_position:       'Konum',
    ap_wm_pos_diagonal:   'Çapraz (orta)',
    ap_wm_pos_center:     'Yatay orta',
    ap_wm_pos_top:        'Üst',
    ap_wm_pos_bottom:     'Alt',
    ap_wm_pages:          'Sayfalara uygula',
    ap_wm_pages_hint:     'Tüm sayfaları damgalamak için boş bırakın. 1–3, 5, 8–10 gibi aralıklar kullanın.',

    /* ── ActionPanel convert ── */
    ap_convert_from: 'Kaynak',
    ap_convert_to:   'Hedef',

    /* ── ActionPanel PDF to Images ── */
    ap_dpi_label:    'Görüntü Çözünürlüğü (DPI)',
    ap_dpi_screen:   '72 dpi — Ekran / önizleme',
    ap_dpi_balanced: '150 dpi — Dengeli (varsayılan)',
    ap_dpi_print:    '300 dpi — Baskı kalitesi',
    ap_dpi_hint:     'Çok sayfalı PDF\'ler .zip arşivi olarak paketlenir. Tek sayfalar .png olarak döner.',

    /* ── ActionPanel OCR ── */
    ap_ocr_ready: 'Akıllı OCR motoru hazır — ders notları ve taranmış belgeler için optimize edilmiştir.',
    ap_ocr_feat1: 'Türkçe ve İngilizce metni otomatik algılar',
    ap_ocr_feat2: 'Eğik ve döndürülmüş sayfaları otomatik düzeltir',
    ap_ocr_feat3: 'Görüntü kalitesine dokunmadan aranabilir metin katmanı ekler',

    /* ── ActionPanel merge ── */
    ap_merge_info: 'Dosyalar sırayla birleştirilir. İsteğe bağlı olarak her dosyadan belirli sayfaları seçerek yalnızca o sayfaları çıktıya dahil edebilirsiniz.',

    /* ── Docs page ── */
    docs_back:               'Uygulamaya dön',
    docs_title:              'Belgeler',
    docs_overview_title:     'Genel Bakış',
    docs_overview_body:      "SkoolPDF, gizliliği ön planda tutan ücretsiz bir PDF araç setidir. Tüm dosya işlemleri sunucularımızda gerçekleşir — dosyalarınız asla saklanmaz, paylaşılmaz veya işlem için gerekli olandan fazla analiz edilmez.",
    docs_security_title:     'Gizlilik & Güvenlik',
    docs_feat_delete_title:  'Otomatik Silme',
    docs_feat_delete_body:   'Yüklediğiniz her dosya, indirmeniz tamamlandığı anda sunucularımızdan otomatik ve kalıcı olarak silinir. Belgelerinizi asla saklamayız.',
    docs_feat_enc_title:     'AES-256 Şifreleme',
    docs_feat_enc_body:      'Parola koruması; PDF\'ler için qpdf aracılığıyla AES-256, Office dosyaları için yerel ECMA-376 şifrelemesini kullanır. Bankacılık ve devlet sistemlerinde kullanılan standarttır.',
    docs_feat_privacy_title: 'Veri Toplanmaz',
    docs_feat_privacy_body:  'İşlediğiniz hiçbir dosyanın içeriğini toplamıyor, okumuyor veya paylaşmıyoruz. Hesap gerekmez, telemetri yok, hiçbir türde takip yapılmaz.',
    docs_feat_local_title:   'Sunucu Tarafı İşleme',
    docs_feat_local_body:    'Tüm PDF işlemleri, herhangi bir üçüncü taraf bulut hizmeti kullanılmadan doğrudan altyapımızda gerçekleştirilir. Verileriniz asla sunucularımızı terk etmez.',
    docs_tools_title:        'Araçlar',
    docs_tool_merge_body:    'Birden fazla PDF dosyasını tek belgede birleştirin. Her dosyadan belirli sayfaları seçebilirsiniz; yalnızca seçilen sayfalar çıktıya eklenir.',
    docs_tool_split_body:    'Basit bir aralık söz dizimiyle (ör. 1, 3–5, 8) PDF\'den özel sayfa seçimi çıkarın. Sonuç, yalnızca seçtiğiniz sayfaları içeren yeni bir PDF\'dir.',
    docs_tool_compress_body: 'Ghostscript kullanarak PDF boyutunu küçültün. Üç kalite ön ayarı: Maksimum (72 dpi, ekran), Dengeli (150 dpi, dijital paylaşım), Yüksek Kalite (300 dpi, baskı/arşiv).',
    docs_tool_ocr_body:      'Taranan, yalnızca görüntü içeren bir PDF\'yi aranabilir ve seçilebilir metin belgesine dönüştürün. ocrmypdf tarafından desteklenir; Türkçe ve İngilizceyi otomatik algılar, eğik sayfaları düzeltir.',
    docs_tool_convert_body:  'PDF, Word (.docx), Excel, PowerPoint ve yaygın görüntü formatları (JPG, PNG, WebP, TIFF) arasında dönüştürün. Office dönüşümleri LibreOffice ile gerçekleştirilir.',
    docs_tool_to_images_body:'PDF\'nin her sayfasını yüksek çözünürlüklü PNG görüntüsü olarak dışa aktarın. 72 dpi (ekran), 150 dpi (dengeli) veya 300 dpi (baskı) seçin. Çok sayfalı PDF\'ler .zip arşivi olarak teslim edilir.',
    docs_tool_protect_body:  'PDF veya Office dosyasını parola ile şifreleyin. PDF\'ler qpdf ile AES-256; Office dosyaları (Word, Excel, PowerPoint) yerel ECMA-376 şifrelemesiyle korunur.',
    docs_tool_unlock_body:   'Doğru parolayı girerek PDF\'den parola korumasını kaldırın. Çıktı, orijinal belgenin şifrelenmemiş birebir kopyasıdır.',
    docs_tool_watermark_body:'PDF\'nin her sayfasına özel metin damgası vurun. Metin, yazı boyutu, opaklık, konum (çapraz, orta, üst, alt) ve isteğe bağlı hedef sayfaları yapılandırın.',
    docs_formats_title:      'Desteklenen Formatlar',
    docs_formats_body:       'PDF · Word (.docx, .doc) · Excel (.xlsx, .xls) · PowerPoint (.pptx, .ppt) · Görsel (JPG, PNG, WebP, GIF, TIFF)',
    docs_tech_title:         'Teknoloji Altyapısı',
    docs_tech_body:          'Ghostscript (sıkıştırma & görüntü aktarımı) · qpdf (şifreleme & birleştirme) · ocrmypdf / Tesseract (OCR) · LibreOffice (Office dönüşümü) · pdf-lib (istemci önizleme)',
    docs_tips_title:         'İpuçları',
    docs_tip_1:              'Önce ana sayfaya bir dosya bırakın — uyumlu araçlar otomatik olarak vurgulanır.',
    docs_tip_2:              'OCR için en yüksek kaliteli taramayı yükleyin; metin tanıma doğruluğu artar.',
    docs_tip_3:              'Birleştirmede, onaylamadan önce dosyaları yeniden sıralayabilirsiniz. Sayfa seçimi dosya bazındadır.',

    /* ── PageSelector ── */
    ps_select_label:   'Dahil edilecek sayfaları seçin',
    ps_total_count:    '({n} toplam)',
    ps_deselect_all:   'Tümünü Kaldır',
    ps_select_all:     'Tümünü Seç',
    ps_range_hint:     'Sayfa numarası veya aralık yazın, Enter\'a basın — ya da aşağıdaki küçük resimlere tıklayın.',
    ps_invalid_range:  'Geçersiz sayfa aralığı. Biçim: 1, 3–5, 8',
    ps_loading:        'Sayfalar yükleniyor...',
    ps_loading_wait:   'Lütfen bekleyin',
    ps_selected_count: '{selected}/{total} sayfa seçildi',
    ps_none_selected:  'Sayfa seçilmedi — tüm sayfalar dahil edilecek',
    ps_page:           'Sayfa',
  },
};

export function getTranslation(lang, key, params = {}) {
  const code = translations[lang] ? lang : 'en';
  let str = translations[code]?.[key] ?? translations.en[key] ?? key;
  Object.entries(params).forEach(([k, v]) => { str = str.replace(`{${k}}`, v); });
  return str;
}

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Türkçe' },
];

export function getStoredLang() {
  const stored = localStorage.getItem('skoolpdf-lang');
  return stored === 'tr' ? 'tr' : 'en';
}

export function setStoredLang(code) {
  localStorage.setItem('skoolpdf-lang', code);
}
