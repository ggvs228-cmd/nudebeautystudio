// Legal pages and 404: language switch only. Each page carries one block per language.
(() => {
  const LANGS = ['es', 'ca', 'en'];
  const read = () => { try { return localStorage.getItem('nude-lang'); } catch { return null; } };
  const fromUrl = new URLSearchParams(location.search).get('lang');
  const fromNav = (navigator.language || 'es').slice(0, 2).toLowerCase();

  function setLang(l, remember) {
    document.documentElement.lang = l;
    document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
    if (remember) { try { localStorage.setItem('nude-lang', l); } catch { /* private mode */ } }
  }

  document.querySelector('.lang').addEventListener('click', e => {
    const b = e.target.closest('button[data-lang]');
    if (b) setLang(b.dataset.lang, true);
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  setLang([fromUrl, read(), fromNav].find(l => LANGS.includes(l)) || 'es', false);
})();
