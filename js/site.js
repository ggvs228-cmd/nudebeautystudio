(() => {
  const WA = '34675161314';
  const LANGS = ['es', 'ca', 'en'];

  /* ------------------------------------------------------------------
     Photos of the studio. To swap one, replace the file in /img (WebP, 3:4 portrait;
     the reception photo is 4:5). A missing file falls back to a labelled placeholder.
  ------------------------------------------------------------------ */
  const PHOTOS = {
    recepcion: { src: 'img/00-recepcion.webp',
      alt: { es: 'Recepción con el nombre Nude Beauty Studio en el mostrador', ca: 'Recepció amb el nom Nude Beauty Studio al taulell', en: 'Reception desk with the Nude Beauty Studio name on it' } },
    manicura: { src: 'img/01-manicura.webp',
      alt: { es: 'Mesa de manicura junto al ventanal', ca: 'Taula de manicura al costat del finestral', en: 'Manicure desk by the window' } },
    tocador: { src: 'img/02-tocador.webp',
      alt: { es: 'Tocador de maquillaje con espejo iluminado', ca: 'Tocador de maquillatge amb mirall il·luminat', en: 'Make-up vanity with lit mirror' } },
    cabina: { src: 'img/03-cabina.webp',
      alt: { es: 'Cabina de tratamientos faciales', ca: 'Cabina de tractaments facials', en: 'Facial treatment room' } },
    presoterapia: { src: 'img/04-presoterapia.webp',
      alt: { es: 'Cabina de presoterapia', ca: 'Cabina de pressoteràpia', en: 'Pressotherapy room' } },
    espera: { src: 'img/05-espera.webp',
      alt: { es: 'Zona de espera con sillones verdes', ca: 'Zona d\'espera amb butaques verdes', en: 'Waiting area with green armchairs' } },
    pasillo: { src: 'img/06-pasillo.webp',
      alt: { es: 'Pasillo de entrada con el logotipo en la pared', ca: 'Passadís d\'entrada amb el logotip a la paret', en: 'Entrance corridor with the logo on the wall' } },
  };
  const GALLERY = ['manicura', 'tocador', 'cabina', 'presoterapia', 'espera', 'pasillo'];

  /* ------------------------------------------------------------------
     Service menu. p = price in €, from = "desde", ask = price on request.
  ------------------------------------------------------------------ */
  const HIDRALIPS = { id: 'hidralips', p: 30,
    n: { es: 'Hidralips', ca: 'Hidralips', en: 'Hidralips' },
    d: { es: 'Hidratación de labios con ácido hialurónico.', ca: 'Hidratació de llavis amb àcid hialurònic.', en: 'Lip hydration with hyaluronic acid.' } };

  const MENU = [
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
    { id: 'maquillaje',
      n: { es: 'Maquillaje', ca: 'Maquillatge', en: 'Make-up' },
      items: [
        { id: 'novia', p: 90, n: { es: 'Maquillaje de novia', ca: 'Maquillatge de núvia', en: 'Bridal make-up' } },
        { id: 'social', p: 75, n: { es: 'Maquillaje social', ca: 'Maquillatge social', en: 'Occasion make-up' } },
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
        { id: 'electro', p: 40,
          n: { es: 'Electroestimulación', ca: 'Electroestimulació', en: 'Electrostimulation' },
          d: { es: 'Estimulación muscular con electrodos.', ca: 'Estimulació muscular amb elèctrodes.', en: 'Muscle stimulation with electrodes.' } },
        { id: 'electro-4', p: 160,
          n: { es: '4 sesiones de electroestimulación', ca: '4 sessions d\'electroestimulació', en: '4 electrostimulation sessions' } },
        { id: 'masaje-descon', p: 50,
          n: { es: 'Masaje descontracturante', ca: 'Massatge descontracturant', en: 'Deep-tissue massage' },
          d: { es: '60 minutos.', ca: '60 minuts.', en: '60 minutes.' } },
        { id: 'masaje-relax', p: 50,
          n: { es: 'Masaje relajante', ca: 'Massatge relaxant', en: 'Relaxing massage' } },
        { id: 'drenaje', p: 60,
          n: { es: 'Drenaje linfático manual', ca: 'Drenatge limfàtic manual', en: 'Manual lymphatic drainage' } },
        { id: 'drenaje-4', p: 240,
          n: { es: '4 sesiones de drenaje linfático manual', ca: '4 sessions de drenatge limfàtic manual', en: '4 manual lymphatic drainage sessions' } },
        { id: 'hifu', p: 90,
          n: { es: 'HIFU 12D', ca: 'HIFU 12D', en: 'HIFU 12D' },
          d: { es: 'Ultrasonido focalizado de alta intensidad, no invasivo. Estimula colágeno y elastina para reafirmar y redefinir contornos, sin cirugía ni tiempo de recuperación. Abdomen, flancos, piernas y brazos.',
               ca: 'Ultrasò focalitzat d\'alta intensitat, no invasiu. Estimula col·lagen i elastina per reafirmar i redefinir contorns, sense cirurgia ni temps de recuperació. Abdomen, flancs, cames i braços.',
               en: 'Non-invasive high-intensity focused ultrasound. Stimulates collagen and elastin to firm and redefine contours, with no surgery or downtime. Abdomen, flanks, legs and arms.' } },
        { id: 'hifu-4', p: 360,
          n: { es: '4 sesiones de HIFU 12D', ca: '4 sessions d\'HIFU 12D', en: '4 HIFU 12D sessions' } },
        { id: 'radio-corp', p: 60,
          n: { es: 'Radiofrecuencia corporal', ca: 'Radiofreqüència corporal', en: 'Body radiofrequency' } },
        { id: 'radio-corp-4', p: 240,
          n: { es: '4 sesiones de radiofrecuencia corporal', ca: '4 sessions de radiofreqüència corporal', en: '4 body radiofrequency sessions' } },
        { id: 'laser-photon', p: 60,
          n: { es: 'Láser photon', ca: 'Làser photon', en: 'Photon laser' } },
        { id: 'laser-photon-4', p: 144,
          n: { es: '4 sesiones de láser photon', ca: '4 sessions de làser photon', en: '4 photon laser sessions' } },
        { id: 'ultrasonido', p: 50,
          n: { es: 'Ultrasonido', ca: 'Ultrasò', en: 'Ultrasound' } },
        { id: 'ultrasonido-4', p: 200,
          n: { es: '4 sesiones de ultrasonido', ca: '4 sessions d\'ultrasò', en: '4 ultrasound sessions' } },
        { id: 'lipolaser', p: 50,
          n: { es: 'Lipoláser frío', ca: 'Lipolàser fred', en: 'Cold lipolaser' } },
        { id: 'lipolaser-4', p: 200,
          n: { es: '4 sesiones de lipoláser frío', ca: '4 sessions de lipolàser fred', en: '4 cold lipolaser sessions' } },
        { id: 'vacum', p: 70,
          n: { es: 'Vacumterapia con radiofrecuencia', ca: 'Vacumteràpia amb radiofreqüència', en: 'Vacuum therapy with radiofrequency' } },
        { id: 'vacum-4', p: 196,
          n: { es: '4 sesiones de vacumterapia con radiofrecuencia', ca: '4 sessions de vacumteràpia amb radiofreqüència', en: '4 vacuum therapy with radiofrequency sessions' } },
      ] },
    { id: 'manos',
      n: { es: 'Manos y pies', ca: 'Mans i peus', en: 'Hands & feet' },
      items: [
        { id: 'mani', p: 25, from: true, n: { es: 'Manicura', ca: 'Manicura', en: 'Manicure' } },
        { id: 'mani-pedi', p: 50, from: true, n: { es: 'Manicura y pedicura', ca: 'Manicura i pedicura', en: 'Manicure & pedicure' } },
        { id: 'pedi-semi', p: 40, n: { es: 'Pedicura completa con semipermanente', ca: 'Pedicura completa amb semipermanent', en: 'Full pedicure with gel polish' } },
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
      'gal.kicker': 'Galería', 'gal.title': 'El estudio, por dentro.', 'gal.soon': 'Foto próximamente',
      'menu.hint': 'Marca lo que te interese y envíanos la selección por WhatsApp. Te respondemos con día y hora.',
      'rev.kicker': 'Reseñas', 'rev.title': 'Lo que cuentan quienes ya han subido.',
      'rev.source': '106 reseñas en Google Maps, todas de cinco estrellas · octubre de 2026',
      'rev.sub': 'Lo que más se repite',
      'rev.1.t': 'El detalle', 'rev.1.d': 'Uñas trabajadas al milímetro y diseños entendidos a la primera.',
      'rev.5.t': 'Las pestañas', 'rev.5.d': 'El lifting es el servicio más comentado: 14 reseñas. La palabra que más se repite es «natural».',
      'rev.6.t': 'La piel', 'rev.6.d': 'De las limpiezas faciales se sale con la piel hidratada y luminosa. Hay quien vuelve cada mes.',
      'rev.q1': 'Manicura', 'rev.q2': 'Lifting de pestañas',
      'rev.2.t': 'El tiempo', 'rev.2.d': 'Nadie trabaja mirando el reloj.',
      'rev.3.t': 'Los consejos', 'rev.3.d': 'Sales con indicaciones para que el semipermanente dure.',
      'rev.4.t': 'Las que repiten', 'rev.4.d': 'Hay quien acaba un bono de presoterapia, compra otro y trae a su tía.',
      'rev.cta': 'Leer las reseñas en Google',
      'visit.kicker': 'Cómo llegar', 'visit.title': 'Junto a Rambla de Catalunya.',
      'visit.floor': '5º piso, puerta 6',
      'visit.tip': 'Metro Passeig de Gràcia (L2, L3, L4), a unos 5 minutos a pie.',
      'visit.route': 'Abrir en Google Maps', 'visit.mapcta': 'Ver en Google Maps',
      'foot.legal': 'Aviso legal', 'foot.privacy': 'Privacidad', 'visit.hours': 'Horario',
      'end.title': '¿Te guardamos hora?', 'end.sub': 'Dinos qué quieres hacerte y qué días te van bien.',
      days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      closed: 'Cerrado', openNow: 'Abierto ahora', closesAt: 'cierra a las', closedNow: 'Cerrado ahora', opensAt: 'abre', today: 'hoy a las',
      from: 'desde', ask: 'Consultar precio',
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
      'gal.kicker': 'Galeria', 'gal.title': 'L\'estudi, per dins.', 'gal.soon': 'Foto properament',
      'menu.hint': 'Marca el que t\'interessi i envia\'ns la selecció per WhatsApp. Et responem amb dia i hora.',
      'rev.kicker': 'Ressenyes', 'rev.title': 'El que expliquen les que ja han pujat.',
      'rev.source': '106 ressenyes a Google Maps, totes de cinc estrelles · octubre de 2026',
      'rev.sub': 'El que més es repeteix',
      'rev.1.t': 'El detall', 'rev.1.d': 'Ungles treballades al mil·límetre i dissenys entesos a la primera.',
      'rev.5.t': 'Les pestanyes', 'rev.5.d': 'El lifting és el servei més comentat: 14 ressenyes. La paraula que més es repeteix és «natural».',
      'rev.6.t': 'La pell', 'rev.6.d': 'De les neteges facials se\'n surt amb la pell hidratada i lluminosa. Hi ha qui torna cada mes.',
      'rev.q1': 'Manicura', 'rev.q2': 'Lifting de pestanyes',
      'rev.2.t': 'El temps', 'rev.2.d': 'Ningú treballa mirant el rellotge.',
      'rev.3.t': 'Els consells', 'rev.3.d': 'Surts amb indicacions perquè el semipermanent duri.',
      'rev.4.t': 'Les que repeteixen', 'rev.4.d': 'Hi ha qui acaba un abonament de pressoteràpia, en compra un altre i hi porta la tieta.',
      'rev.cta': 'Llegir les ressenyes a Google',
      'visit.kicker': 'Com arribar', 'visit.title': 'Al costat de la Rambla de Catalunya.',
      'visit.floor': '5è pis, porta 6',
      'visit.tip': 'Metro Passeig de Gràcia (L2, L3, L4), a uns 5 minuts a peu.',
      'visit.route': 'Obrir a Google Maps', 'visit.mapcta': 'Veure a Google Maps',
      'foot.legal': 'Avís legal', 'foot.privacy': 'Privacitat', 'visit.hours': 'Horari',
      'end.title': 'Et guardem hora?', 'end.sub': 'Digue\'ns què et vols fer i quins dies et van bé.',
      days: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
      closed: 'Tancat', openNow: 'Obert ara', closesAt: 'tanca a les', closedNow: 'Tancat ara', opensAt: 'obre', today: 'avui a les',
      from: 'des de', ask: 'Consultar preu',
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
      'gal.kicker': 'Gallery', 'gal.title': 'Inside the studio.', 'gal.soon': 'Photo coming soon',
      'menu.hint': 'Tick what you\'re interested in and send us the selection on WhatsApp. We\'ll reply with a day and time.',
      'rev.kicker': 'Reviews', 'rev.title': 'What people say once they\'ve been up.',
      'rev.source': '106 reviews on Google Maps, every one five stars · October 2026',
      'rev.sub': 'What comes up most',
      'rev.1.t': 'The detail', 'rev.1.d': 'Nails done to the millimetre, and designs understood first time.',
      'rev.5.t': 'The lashes', 'rev.5.d': 'The lash lift is the most talked-about service: 14 reviews. The word that comes up most is “natural”.',
      'rev.6.t': 'The skin', 'rev.6.d': 'People leave a facial with hydrated, glowing skin. Some come back every month.',
      'rev.q1': 'Manicure', 'rev.q2': 'Lash lift',
      'rev.2.t': 'The time', 'rev.2.d': 'Nobody works with one eye on the clock.',
      'rev.3.t': 'The advice', 'rev.3.d': 'You leave with tips to make your gel polish last.',
      'rev.4.t': 'The regulars', 'rev.4.d': 'One client finished a pressotherapy pack, bought another and brought her aunt.',
      'rev.cta': 'Read the reviews on Google',
      'visit.kicker': 'Find us', 'visit.title': 'Next to Rambla de Catalunya.',
      'visit.floor': '5th floor, door 6',
      'visit.tip': 'Metro Passeig de Gràcia (L2, L3, L4), about 5 minutes on foot.',
      'visit.route': 'Open in Google Maps', 'visit.mapcta': 'View on Google Maps',
      'foot.legal': 'Legal notice', 'foot.privacy': 'Privacy', 'visit.hours': 'Opening hours',
      'end.title': 'Shall we save you a slot?', 'end.sub': 'Tell us what you\'d like done and which days suit you.',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      closed: 'Closed', openNow: 'Open now', closesAt: 'closes at', closedNow: 'Closed now', opensAt: 'opens', today: 'today at',
      from: 'from', ask: 'Price on request',
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

  // Each slot shows its photo once the file exists, and a labelled placeholder until then
  const photoSlot = k => `<img src="${PHOTOS[k].src}" alt=""><span class="photo__ph"><b></b><small></small></span>`;
  function buildPhotos() {
    $('#gallery').innerHTML = GALLERY.map(k => `<button type="button" class="photo" data-photo="${k}">${photoSlot(k)}</button>`).join('');
    $$('figure.photo').forEach(f => { f.innerHTML = photoSlot(f.dataset.photo); });
    $$('.photo').forEach(el => {
      const img = $('img', el);
      const empty = () => { el.classList.add('is-empty'); if (el.tagName === 'BUTTON') el.disabled = true; };
      img.addEventListener('error', empty);
      if (img.complete && !img.naturalWidth) empty();
    });
  }
  function renderPhotos() {
    $$('.photo').forEach(el => {
      const p = PHOTOS[el.dataset.photo];
      $('img', el).alt = p.alt[lang];
      $('.photo__ph b', el).textContent = p.alt[lang];
      $('.photo__ph small', el).textContent = t('gal.soon');
    });
  }

  // The choice is only written to the browser when the visitor picks a language themselves
  function setLang(l, remember) {
    lang = l;
    if (remember) store.set('nude-lang', l);
    document.documentElement.lang = l;
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
    $('.score__n').textContent = l === 'en' ? '5.0' : '5,0';
    renderMenu(); renderDock(); renderOpen(); renderPhotos();
  }

  /* ---------- events ---------- */
  $('.lang').addEventListener('click', e => {
    const b = e.target.closest('button[data-lang]');
    if (b) setLang(b.dataset.lang, true);
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

  const lightbox = $('#lightbox');
  $('#gallery').addEventListener('click', e => {
    const b = e.target.closest('.photo:not(.is-empty)');
    if (!b) return;
    const img = $('img', lightbox);
    img.src = PHOTOS[b.dataset.photo].src;
    img.alt = PHOTOS[b.dataset.photo].alt[lang];
    lightbox.showModal();
  });
  lightbox.addEventListener('click', e => { if (e.target.tagName !== 'IMG') lightbox.close(); });

  $('#year').textContent = new Date().getFullYear();
  buildPhotos();
  setLang(lang);
  const ctaWatch = new IntersectionObserver(entries => {
    entries.forEach(e => (e.isIntersecting ? ctasInView.add(e.target) : ctasInView.delete(e.target)));
    syncDock();
  }, { threshold: 0.6 });
  $$('.hero .js-wa, .closing .js-wa').forEach(a => ctaWatch.observe(a));
  setInterval(renderOpen, 60000);
})();
