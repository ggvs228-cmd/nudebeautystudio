// Behaviour only. All text is already in the page (see tools/build.js); content comes from js/content.js.
(() => {
  const { WA, MENU, T, HOURS } = NUDE;
  const lang = T[document.documentElement.lang] ? document.documentElement.lang : 'es';
  const L = T[lang];

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const picked = new Set();
  const allItems = new Map(MENU.flatMap(c => c.items).map(i => [i.id, i]));

  const hhmm = m => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
  const euro = n => lang === 'en' ? '€' + n : n + ' €';
  const price = i => i.ask ? L.ask : (i.from ? L.from + ' ' : '') + euro(i.p);

  function madridNow() {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Madrid', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
    }).formatToParts(new Date()).map(x => [x.type, x.value]));
    return { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday), min: (+p.hour % 24) * 60 + +p.minute };
  }

  // "Open now · closes at 20:00", and today's row in the hours table
  function renderOpen() {
    const { day, min } = madridNow();
    const h = HOURS[day];
    let html;
    if (h && min >= h[0] && min < h[1]) {
      html = `<span class="is-open">${L.openNow}</span> · ${L.closesAt} ${hhmm(h[1])}`;
    } else {
      let next = `${L.today} ${h ? hhmm(h[0]) : ''}`;
      if (!h || min >= h[1]) {
        let d = day;
        do { d = (d + 1) % 7; } while (!HOURS[d]);
        next = `${lang === 'en' ? L.days[d] : L.days[d].toLowerCase()} ${hhmm(HOURS[d][0])}`;
      }
      html = `<span class="is-closed">${L.closedNow}</span> · ${L.opensAt} ${next}`;
    }
    $$('.js-open').forEach(el => { el.innerHTML = html; });
    $$('#hours tr').forEach(tr => tr.classList.toggle('today', +tr.dataset.day === day));
  }

  // Highlights the chip of the category being read and keeps it visible in the chip row
  let currentCat = null;
  function markChip() {
    const line = Math.max($('#tabs').getBoundingClientRect().bottom + 24, innerHeight * .35);
    const cats = $$('#cats .cat');
    const cur = cats.filter(el => el.getBoundingClientRect().top <= line).pop() || cats[0];
    const id = cur.id.slice(4);
    $$('#tabs a').forEach(a => a.classList.toggle('is-current', a.dataset.cat === id));
    if (id === currentCat) return;
    currentCat = id;
    const tabs = $('#tabs'), chip = $(`#tabs a[data-cat="${id}"]`);
    tabs.scrollTo({ left: chip.offsetLeft - (tabs.clientWidth - chip.offsetWidth) / 2, behavior: 'smooth' });
  }

  // Page CTAs currently on screen; the dock steps aside for them unless it carries a selection
  const ctasInView = new Set();
  const syncDock = () => $('#dock').classList.toggle('dock--away', ctasInView.size > 0 && picked.size === 0);

  function renderDock() {
    const items = [...picked].map(id => allItems.get(id));
    const sum = $('#dock-sum');
    let msg = L.waHello;
    if (items.length) {
      const total = items.reduce((s, i) => s + (i.p || 0), 0);
      const approx = items.some(i => i.from || i.ask);
      sum.innerHTML = `${L.selected(items.length)}<b>${approx ? L.from + ' ' : ''}${euro(total)}</b>`;
      msg = [L.waList, ...items.map(i => `• ${i.n[lang]} (${price(i)})`), L.waEnd].join('\n');
      $('#dock-label').textContent = L.send;
    } else {
      sum.innerHTML = '';
      $('#dock-label').textContent = L.book;
    }
    const url = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
    $$('.js-wa').forEach(a => { a.href = url; });
    syncDock();
  }

  /* ---------- events ---------- */
  let chipFrame = 0;
  addEventListener('scroll', () => {
    cancelAnimationFrame(chipFrame);
    chipFrame = requestAnimationFrame(markChip);
  }, { passive: true });

  $('#cats').addEventListener('click', e => {
    const b = e.target.closest('.item__btn');
    if (!b) return;
    picked.has(b.dataset.id) ? picked.delete(b.dataset.id) : picked.add(b.dataset.id);
    // A service listed in two categories (Hidralips) stays in sync
    $$(`#cats .item__btn[data-id="${b.dataset.id}"]`).forEach(x => x.setAttribute('aria-pressed', picked.has(b.dataset.id)));
    renderDock();
  });

  const lightbox = $('#lightbox');
  $('#gallery').addEventListener('click', e => {
    const b = e.target.closest('.photo');
    if (!b) return;
    const from = $('img', b), img = $('img', lightbox);
    img.src = from.currentSrc || from.src;
    img.alt = from.alt;
    lightbox.showModal();
  });
  lightbox.addEventListener('click', e => { if (e.target.tagName !== 'IMG') lightbox.close(); });

  $('#year').textContent = new Date().getFullYear();
  renderOpen();
  renderDock();
  markChip();
  const ctaWatch = new IntersectionObserver(entries => {
    entries.forEach(e => (e.isIntersecting ? ctasInView.add(e.target) : ctasInView.delete(e.target)));
    syncDock();
  }, { threshold: 0.6 });
  $$('.hero .js-wa, .closing .js-wa').forEach(a => ctaWatch.observe(a));
  setInterval(renderOpen, 60000);
})();
