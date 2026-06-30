/* ============================================================
   One Raices — shared language engine for all pages.
   Each page defines its own PAGE_I18N object with en/es text,
   then calls initLang(PAGE_I18N) on load.
============================================================ */

function applyLang(lang, I18N) {
  localStorage.setItem('oneRaicesLang', lang);
  document.documentElement.lang = lang;
  const enBtn = document.getElementById('lang-en');
  const esBtn = document.getElementById('lang-es');
  if (enBtn) enBtn.classList.toggle('active', lang === 'en');
  if (esBtn) esBtn.classList.toggle('active', lang === 'es');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key] !== undefined) el.innerHTML = I18N[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (I18N[lang] && I18N[lang][key] !== undefined) el.setAttribute('placeholder', I18N[lang][key]);
  });
  // update WhatsApp links with translated message if present
  document.querySelectorAll('[data-wa-msg-key]').forEach(el => {
    const key = el.getAttribute('data-wa-msg-key');
    const msg = I18N[lang] && I18N[lang][key];
    if (msg) {
      const url = new URL(el.href);
      url.searchParams.set('text', msg);
      el.href = url.toString();
    }
  });
}

function detectInitialLang() {
  const saved = localStorage.getItem('oneRaicesLang');
  if (saved) return saved;
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return browserLang.startsWith('es') ? 'es' : 'en';
}

function initLang(I18N) {
  window.__PAGE_I18N = I18N;
  applyLang(detectInitialLang(), I18N);
}

function setLang(lang) {
  applyLang(lang, window.__PAGE_I18N || {});
}
