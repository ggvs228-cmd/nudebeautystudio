(() => {
  const WA = '34675161314';
  const LANGS = ['es', 'ca', 'en'];

  /* ------------------------------------------------------------------
     Service menu. p = price in €, from = "desde", ask = price on request.
  ------------------------------------------------------------------ */
  const HIDRALIPS = { id: 'hidralips', p: 30,
    n: { es: 'Hidralips', ca: 'Hidralips', en: 'Hidralips' },
    d: { es: 'Hidratación de labios con ácido hialurónico.', ca: 'Hidratació de llavis amb àcid hialurònic.', en: 'Lip hydration with hyaluronic acid.' } };

  const MENU = [
    { id: 'manos',
      n: { es: 'Manos y pies', ca: 'Mans i peus', en: 'Hands & feet' },
      items: [
        { id: 'mani', p: 25, from: true, n: { es: 'Manicura', ca: 'Manicura', en: 'Manicure' } },
        { id: 'mani-pedi', p: 50, from: true, n: { es: 'Manicura y pedicura', ca: 'Manicura i pedicura', en: 'Manicure & pedicure' } },
        { id: 'pedi-semi', p: 40, n: { es: 'Pedicura completa con semipermanente', ca: 'Pedicura completa amb semipermanent', en: 'Full pedicure with gel polish' } },
      ] },
    { id: 'mirada',
      n: { es: 'Pestañas, cejas y labios', ca: 'Pestanyes, celles i llavis', en: 'Lashes, brows & lips' },
      items: [
        { id: 'lifting', p: 45,
          n: { es: 'Lifting de pestañas + tinte', ca: 'Lifting de pestanyes + tint', en: 'Lash lift + tint' } },
        { id: 'cejas-hilo', p: 15,
          n: { es: 'Diseño y perfilado de cejas con hilo', ca: 'Disseny i perfilat de celles amb fil', en: 'Brow design & threading' },
          d: { es: 'Depilación con hilo para una línea limpia y precisa.', ca: 'Depilació amb fil per a una línia neta i precisa.', en: 'Threading for a clean, precise line.' } },
        { id: 'cejas-henna', p: 25,
          n: { es: 'Diseño y perfilado de cejas + henna', ca: 'Disseny i perfilat de celles + henna', en: 'Brow design + henna' },
          d: { es: 'Perfilado de cejas con tinte de henna.', ca: 'Perfilat de celles amb tint de henna.', en: 'Brow shaping with henna tint.' } },
        { id: 'laminado', p: 45,
          n: { es: 'Laminado de cejas', ca: 'Laminat de celles', en: 'Brow lamination' },
          d: { es: 'Ordena y fija el vello en la dirección que quieras.', ca: 'Ordena i fixa el pèl en la direcció que vulguis.', en: 'Sets brow hairs in the direction you want.' } },
        HIDRALIPS,
      ] },
    { id: 'faciales',
      n: { es: 'Faciales', ca: 'Facials', en: 'Facials' },
      items: [
        { id: 'limpieza', p: 60,
          n: { es: 'Limpieza facial profunda', ca: 'Neteja facial profunda', en: 'Deep facial cleanse' },
          d: { es: 'Tratamiento completo adaptado a tu piel.', ca: 'Tractament complet adaptat a la teva pell.', en: 'A full treatment adapted to your skin.' } },
        { id: 'limpieza-dermaplaning', p: 75,
          n: { es: 'Limpieza facial profunda + dermaplaning', ca: 'Neteja facial profunda + dermaplaning', en: 'Deep facial cleanse + dermaplaning' },
          d: { es: 'Protocolo completo de limpieza con dermaplaning.', ca: 'Protocol complet de neteja amb dermaplaning.', en: 'Full cleansing protocol with dermaplaning.' } },
        { id: 'limpieza-dermapen', p: 90,
          n: { es: 'Limpieza facial profunda + dermapen', ca: 'Neteja facial profunda + dermapen', en: 'Deep facial cleanse + dermapen' },
          d: { es: 'Protocolo completo de limpieza con microneedling.', ca: 'Protocol complet de neteja amb microneedling.', en: 'Full cleansing protocol with microneedling.' } },
        { id: 'limpieza-completa', p: 120,
          n: { es: 'Limpieza facial profunda + dermaplaning + dermapen', ca: 'Neteja facial profunda + dermaplaning + dermapen', en: 'Deep facial cleanse + dermaplaning + dermapen' },
          d: { es: 'El protocolo más completo de la carta.', ca: 'El protocol més complet de la carta.', en: 'The most complete protocol on the menu.' } },
        { id: 'limpieza-radio', p: 70,
          n: { es: 'Limpieza facial profunda + radiofrecuencia', ca: 'Neteja facial profunda + radiofreqüència', en: 'Deep facial cleanse + radiofrequency' },
          d: { es: 'Para afinar e hidratar la piel.', ca: 'Per afinar i hidratar la pell.', en: 'To refine and hydrate the skin.' } },
        { id: 'dermapen', p: 50,
          n: { es: 'Dermapen', ca: 'Dermapen', en: 'Dermapen' },
          d: { es: 'Tratamiento de microneedling.', ca: 'Tractament de microneedling.', en: 'Microneedling treatment.' } },
        { id: 'dermapen-4', p: 180,
          n: { es: '4 sesiones de Dermapen', ca: '4 sessions de Dermapen', en: '4 Dermapen sessions' },
          d: { es: 'Bono de cuatro sesiones de microneedling.', ca: 'Abonament de quatre sessions de microneedling.', en: 'Pack of four microneedling sessions.' } },
        HIDRALIPS,
      ] },
    { id: 'corporal',
      n: { es: 'Corporal', ca: 'Corporal', en: 'Body' },
      items: [
        { id: 'espalda', p: 60,
          n: { es: 'Higiene de espalda', ca: 'Higiene d\'esquena', en: 'Back cleanse' },
          d: { es: 'Limpieza profunda de la piel de la espalda.', ca: 'Neteja profunda de la pell de l\'esquena.', en: 'Deep cleanse for the skin on your back.' } },
        { id: 'espalda-dermaplaning', p: 80,
          n: { es: 'Limpieza de espalda + dermaplaning', ca: 'Neteja d\'esquena + dermaplaning', en: 'Back cleanse + dermaplaning' } },
        { id: 'preso', p: 25,
          n: { es: 'Presoterapia cuerpo entero', ca: 'Pressoteràpia cos sencer', en: 'Full-body pressotherapy' } },
        { id: 'preso-4', p: 100,
          n: { es: '4 sesiones de presoterapia', ca: '4 sessions de pressoteràpia', en: '4 pressotherapy sessions' } },
        { id: 'electro', p: 25,
          n: { es: 'Electroestimulación', ca: 'Electroestimulació', en: 'Electrostimulation' },
          d: { es: 'Estimulación muscular con electrodos.', ca: 'Estimulació muscular amb elèctrodes.', en: 'Muscle stimulation with electrodes.' } },
        { id: 'electro-4', p: 100,
          n: { es: '4 sesiones de electrodos', ca: '4 sessions d\'elèctrodes', en: '4 electrode sessions' },
          d: { es: 'Zona a elegir.', ca: 'Zona a escollir.', en: 'Area of your choice.' } },
        { id: 'masaje-descon', p: 50,
          n: { es: 'Masaje descontracturante', ca: 'Massatge descontracturant', en: 'Deep-tissue massage' },
          d: { es: '60 minutos.', ca: '60 minuts.', en: '60 minutes.' } },
        { id: 'masaje-relax', p: 50,
          n: { es: 'Masaje relajante', ca: 'Massatge relaxant', en: 'Relaxing massage' } },
        { id: 'hifu', ask: true,
          n: { es: 'HIFU corporal', ca: 'HIFU corporal', en: 'Body HIFU' },
          d: { es: 'Ultrasonido focalizado de alta intensidad, no invasivo. Estimula colágeno y elastina para reafirmar y redefinir contornos, sin cirugía ni tiempo de recuperación. Abdomen, flancos, piernas y brazos.',
               ca: 'Ultrasò focalitzat d\'alta intensitat, no invasiu. Estimula col·lagen i elastina per reafirmar i redefinir contorns, sense cirurgia ni temps de recuperació. Abdomen, flancs, cames i braços.',
               en: 'Non-invasive high-intensity focused ultrasound. Stimulates collagen and elastin to firm and redefine contours, with no surgery or downtime. Abdomen, flanks, legs and arms.' } },
      ] },
    { id: 'maquillaje',
      n: { es: 'Maquillaje', ca: 'Maquillatge', en: 'Make-up' },
      items: [
        { id: 'novia', p: 90, n: { es: 'Maquillaje de novia', ca: 'Maquillatge de núvia', en: 'Bridal make-up' } },
        { id: 'social', p: 60, n: { es: 'Maquillaje social', ca: 'Maquillatge social', en: 'Occasion make-up' } },
      ] },
  ];

  /* ------------------------------------------------------------------ */
  const T = {
    es: {
      'nav.services': 'Servicios', 'nav.studio': 'El estudio', 'nav.reviews': 'Reseñas', 'nav.visit': 'Cómo llegar',
      'hero.kicker': 'Eixample · Barcelona',
      'hero.title': 'Belleza sin escaparate.',
      'hero.sub': 'Estudio de estética en un quinto piso de Diputació 238. Uñas, cejas, pestañas, faciales y tratamientos corporales.',
      'hero.rating': '5,0 en Google · 106 reseñas',
      'cta.book': 'Reservar por WhatsApp', 'cta.menu': 'Ver servicios y precios', 'cta.appt': 'Solo con cita previa',
      'story.kicker': 'Al llegar',
      'story.title': 'Llamas al timbre y subes.',
      'story.p1': 'No busques un rótulo en la calle: es la puerta 6 de la quinta planta. Llamas, subes y entras a tu hora.',
      'story.p2': 'Dentro, paredes blancas, madera clara y plantas. El tocador de maquillaje está junto a un ventanal que da a una fachada modernista.',
      'menu.kicker': 'Servicios', 'menu.title': 'La carta, con precios.',
      'menu.hint': 'Marca lo que te interese y envíanos la selección por WhatsApp. Te respondemos con día y hora.',
      'rev.kicker': 'Reseñas', 'rev.title': 'Lo que cuentan quienes ya han subido.',
      'rev.source': '106 reseñas en Google Maps, todas de cinco estrellas · octubre de 2026',
      'rev.sub': 'Lo que más se repite',
      'rev.1.t': 'El detalle', 'rev.1.d': 'Uñas trabajadas al milímetro y diseños entendidos a la primera.',
      'rev.2.t': 'El tiempo', 'rev.2.d': 'Nadie trabaja mirando el reloj.',
      'rev.3.t': 'Los consejos', 'rev.3.d': 'Sales con indicaciones para que el semipermanente dure.',
      'rev.4.t': 'Las que repiten', 'rev.4.d': 'Hay quien acaba un bono de presoterapia, compra otro y trae a su tía.',
      'rev.cta': 'Leer las reseñas en Google',
      'visit.kicker': 'Cómo llegar', 'visit.title': 'Junto a Rambla de Catalunya.',
      'visit.floor': '5º piso, puerta 6',
      'visit.tip': 'Metro Passeig de Gràcia (L2, L3, L4), a unos 5 minutos a pie.',
      'visit.route': 'Abrir en Google Maps', 'visit.hours': 'Horario',
      'end.title': '¿Te guardamos hora?', 'end.sub': 'Dinos qué quieres hacerte y qué días te van bien.',
      days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      closed: 'Cerrado', openNow: 'Abierto ahora', closesAt: 'cierra a las', closedNow: 'Cerrado ahora', opensAt: 'abre', today: 'hoy a las',
      from: 'desde', ask: 'Consultar precio', add: 'Añadir', remove: 'Quitar',
      selected: n => n === 1 ? '1 servicio' : n + ' servicios',
      send: 'Enviar', book: 'Reservar por WhatsApp',
      waHello: 'Hola, me gustaría reservar en Nude Beauty Studio.',
      waList: 'Hola, me gustaría reservar en Nude Beauty Studio:', waEnd: '¿Qué disponibilidad tenéis?',
    },
    ca: {
      'nav.services': 'Serveis', 'nav.studio': 'L\'estudi', 'nav.reviews': 'Ressenyes', 'nav.visit': 'Com arribar',
      'hero.kicker': 'Eixample · Barcelona',
      'hero.title': 'Bellesa sense aparador.',
      'hero.sub': 'Estudi d\'estètica en un cinquè pis de Diputació 238. Ungles, celles, pestanyes, facials i tractaments corporals.',
      'hero.rating': '5,0 a Google · 106 ressenyes',
      'cta.book': 'Reservar per WhatsApp', 'cta.menu': 'Veure serveis i preus', 'cta.appt': 'Només amb cita prèvia',
      'story.kicker': 'En arribar',
      'story.title': 'Truques al timbre i puges.',
      'story.p1': 'No busquis cap rètol al carrer: és la porta 6 de la cinquena planta. Truques, puges i entres a la teva hora.',
      'story.p2': 'A dins, parets blanques, fusta clara i plantes. El tocador de maquillatge és al costat d\'un finestral que dona a una façana modernista.',
      'menu.kicker': 'Serveis', 'menu.title': 'La carta, amb preus.',
      'menu.hint': 'Marca el que t\'interessi i envia\'ns la selecció per WhatsApp. Et responem amb dia i hora.',
      'rev.kicker': 'Ressenyes', 'rev.title': 'El que expliquen les que ja han pujat.',
      'rev.source': '106 ressenyes a Google Maps, totes de cinc estrelles · octubre de 2026',
      'rev.sub': 'El que més es repeteix',
      'rev.1.t': 'El detall', 'rev.1.d': 'Ungles treballades al mil·límetre i dissenys entesos a la primera.',
      'rev.2.t': 'El temps', 'rev.2.d': 'Ningú treballa mirant el rellotge.',
      'rev.3.t': 'Els consells', 'rev.3.d': 'Surts amb indicacions perquè el semipermanent duri.',
      'rev.4.t': 'Les que repeteixen', 'rev.4.d': 'Hi ha qui acaba un abonament de pressoteràpia, en compra un altre i hi porta la tieta.',
      'rev.cta': 'Llegir les ressenyes a Google',
      'visit.kicker': 'Com arribar', 'visit.title': 'Al costat de la Rambla de Catalunya.',
      'visit.floor': '5è pis, porta 6',
      'visit.tip': 'Metro Passeig de Gràcia (L2, L3, L4), a uns 5 minuts a peu.',
      'visit.route': 'Obrir a Google Maps', 'visit.hours': 'Horari',
      'end.title': 'Et guardem hora?', 'end.sub': 'Digue\'ns què et vols fer i quins dies et van bé.',
      days: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
      closed: 'Tancat', openNow: 'Obert ara', closesAt: 'tanca a les', closedNow: 'Tancat ara', opensAt: 'obre', today: 'avui a les',
      from: 'des de', ask: 'Consultar preu', add: 'Afegir', remove: 'Treure',
      selected: n => n === 1 ? '1 servei' : n + ' serveis',
      send: 'Enviar', book: 'Reservar per WhatsApp',
      waHello: 'Hola, m\'agradaria reservar a Nude Beauty Studio.',
      waList: 'Hola, m\'agradaria reservar a Nude Beauty Studio:', waEnd: 'Quina disponibilitat teniu?',
    },
    en: {
      'nav.services': 'Services', 'nav.studio': 'The studio', 'nav.reviews': 'Reviews', 'nav.visit': 'Find us',
      'hero.kicker': 'Eixample · Barcelona',
      'hero.title': 'Beauty without a shop window.',
      'hero.sub': 'A beauty studio on the fifth floor of Diputació 238. Nails, brows, lashes, facials and body treatments.',
      'hero.rating': '5.0 on Google · 106 reviews',
      'cta.book': 'Book on WhatsApp', 'cta.menu': 'See services & prices', 'cta.appt': 'By appointment only',
      'story.kicker': 'When you arrive',
      'story.title': 'Ring the bell and come up.',
      'story.p1': 'Don\'t look for a sign on the street: it\'s door 6 on the fifth floor. Ring, come up and walk in at your time.',
      'story.p2': 'Inside: white walls, light wood and plants. The make-up vanity sits by a full-height window facing a modernista façade.',
      'menu.kicker': 'Services', 'menu.title': 'The menu, with prices.',
      'menu.hint': 'Tick what you\'re interested in and send us the selection on WhatsApp. We\'ll reply with a day and time.',
      'rev.kicker': 'Reviews', 'rev.title': 'What people say once they\'ve been up.',
      'rev.source': '106 reviews on Google Maps, every one five stars · October 2026',
      'rev.sub': 'What comes up most',
      'rev.1.t': 'The detail', 'rev.1.d': 'Nails done to the millimetre, and designs understood first time.',
      'rev.2.t': 'The time', 'rev.2.d': 'Nobody works with one eye on the clock.',
      'rev.3.t': 'The advice', 'rev.3.d': 'You leave with tips to make your gel polish last.',
      'rev.4.t': 'The regulars', 'rev.4.d': 'One client finished a pressotherapy pack, bought another and brought her aunt.',
      'rev.cta': 'Read the reviews on Google',
      'visit.kicker': 'Find us', 'visit.title': 'Next to Rambla de Catalunya.',
      'visit.floor': '5th floor, door 6',
      'visit.tip': 'Metro Passeig de Gràcia (L2, L3, L4), about 5 minutes on foot.',
      'visit.route': 'Open in Google Maps', 'visit.hours': 'Opening hours',
      'end.title': 'Shall we save you a slot?', 'end.sub': 'Tell us what you\'d like done and which days suit you.',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      closed: 'Closed', openNow: 'Open now', closesAt: 'closes at', closedNow: 'Closed now', opensAt: 'opens', today: 'today at',
      from: 'from', ask: 'Price on request', add: 'Add', remove: 'Remove',
      selected: n => n === 1 ? '1 service' : n + ' services',
      send: 'Send', book: 'Book on WhatsApp',
      waHello: 'Hi, I\'d like to book at Nude Beauty Studio.',
      waList: 'Hi, I\'d like to book at Nude Beauty Studio:', waEnd: 'What availability do you have?',
    },
  };

  // Opening hours in minutes from midnight, index 0 = Sunday
  const HOURS = [null, [600, 1200], [600, 1200], [600, 1200], [600, 1200], [600, 1200], [600, 1080]];

  /* ------------------------------------------------------------------ */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
  };

  const fromUrl = new URLSearchParams(location.search).get('lang');
  const fromNav = (navigator.language || 'es').slice(0, 2).toLowerCase();
  let lang = [fromUrl, store.get('nude-lang'), fromNav].find(l => LANGS.includes(l)) || 'es';
  const picked = new Set();
  const allItems = new Map(MENU.flatMap(c => c.items).map(i => [i.id, i]));

  const t = k => T[lang][k];
  const hhmm = m => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
  const euro = n => lang === 'en' ? '€' + n : n + ' €';
  const price = i => i.ask ? t('ask') : (i.from ? t('from') + ' ' : '') + euro(i.p);

  function madridNow() {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Madrid', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
    }).formatToParts(new Date()).map(x => [x.type, x.value]));
    return { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday), min: (+p.hour % 24) * 60 + +p.minute };
  }

  function renderOpen() {
    const { day, min } = madridNow();
    const h = HOURS[day];
    let html;
    if (h && min >= h[0] && min < h[1]) {
      html = `<span class="is-open">${t('openNow')}</span> · ${t('closesAt')} ${hhmm(h[1])}`;
    } else {
      let next = `${t('today')} ${h ? hhmm(h[0]) : ''}`;
      if (!h || min >= h[1]) {
        let d = day;
        do { d = (d + 1) % 7; } while (!HOURS[d]);
        next = `${T[lang].days[d].toLowerCase()} ${hhmm(HOURS[d][0])}`;
      }
      html = `<span class="is-closed">${t('closedNow')}</span> · ${t('opensAt')} ${next}`;
    }
    $$('.js-open').forEach(el => { el.innerHTML = html; });

    $('#hours').innerHTML = [1, 2, 3, 4, 5, 6, 0].map(d =>
      `<tr class="${d === day ? 'today' : ''}"><td>${T[lang].days[d]}</td><td>${HOURS[d] ? hhmm(HOURS[d][0]) + ' – ' + hhmm(HOURS[d][1]) : t('closed')}</td></tr>`
    ).join('');
  }

  // Every category is listed in full; the chips are only shortcuts to each one
  function renderMenu() {
    $('#tabs').innerHTML = MENU.map(c =>
      `<a href="#cat-${c.id}" data-cat="${c.id}">${c.n[lang]}<small>${c.items.length}</small></a>`
    ).join('');
    $('#cats').innerHTML = MENU.map(c => `<div class="cat" id="cat-${c.id}">
      <h3 class="cat__title">${c.n[lang]}</h3>
      <ul class="items">${c.items.map(i => {
        const on = picked.has(i.id);
        return `<li class="item">
          <button type="button" class="item__btn" data-id="${i.id}" aria-pressed="${on}">
            <span class="item__mark" aria-hidden="true"></span>
            <span class="item__name">${i.n[lang]}</span>
            <span class="item__price">${price(i)}</span>
            ${i.d ? `<span class="item__desc">${i.d[lang]}</span>` : ''}
          </button>
        </li>`;
      }).join('')}</ul>
    </div>`).join('');
    markChip();
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
    let msg = t('waHello');
    if (items.length) {
      const total = items.reduce((s, i) => s + (i.p || 0), 0);
      const approx = items.some(i => i.from || i.ask);
      sum.innerHTML = `${t('selected')(items.length)}<b>${approx ? t('from') + ' ' : ''}${euro(total)}</b>`;
      msg = [t('waList'), ...items.map(i => `• ${i.n[lang]} (${price(i)})`), t('waEnd')].join('\n');
      $('#dock-label').textContent = t('send');
    } else {
      sum.innerHTML = '';
      $('#dock-label').textContent = t('book');
    }
    const url = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
    $$('.js-wa').forEach(a => { a.href = url; });
    syncDock();
  }

  function setLang(l) {
    lang = l;
    store.set('nude-lang', l);
    document.documentElement.lang = l;
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
    $('.score__n').textContent = l === 'en' ? '5.0' : '5,0';
    renderMenu(); renderDock(); renderOpen();
  }

  /* ---------- events ---------- */
  $('.lang').addEventListener('click', e => {
    const b = e.target.closest('button[data-lang]');
    if (b) setLang(b.dataset.lang);
  });
  let chipFrame = 0;
  addEventListener('scroll', () => {
    cancelAnimationFrame(chipFrame);
    chipFrame = requestAnimationFrame(markChip);
  }, { passive: true });
  $('#cats').addEventListener('click', e => {
    const b = e.target.closest('.item__btn');
    if (!b) return;
    picked.has(b.dataset.id) ? picked.delete(b.dataset.id) : picked.add(b.dataset.id);
    $$(`#cats .item__btn[data-id="${b.dataset.id}"]`).forEach(x => x.setAttribute('aria-pressed', picked.has(b.dataset.id)));
    renderDock();
  });

  $('#year').textContent = new Date().getFullYear();
  setLang(lang);
  const ctaWatch = new IntersectionObserver(entries => {
    entries.forEach(e => (e.isIntersecting ? ctasInView.add(e.target) : ctasInView.delete(e.target)));
    syncDock();
  }, { threshold: 0.6 });
  $$('.hero .js-wa, .closing .js-wa').forEach(a => ctaWatch.observe(a));
  setInterval(renderOpen, 60000);
})();
