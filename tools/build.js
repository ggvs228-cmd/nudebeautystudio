// Builds the published pages from src/index.html and js/content.js:
//   /index.html (es)   /ca/index.html   /en/index.html   /sitemap.xml
// Every text is written into the HTML, so search engines read each language without running scripts.
// Usage: node tools/build.js      (no dependencies)
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const { LANGS, PHOTOS, GALLERY, MENU, T, HOURS, SEO, FAQ } = require(path.join(ROOT, 'js/content.js'));

const ORIGIN = 'https://nudebeautybcn.com';
const MAPS = 'https://maps.app.goo.gl/gT3hE2o65boG1eyQA';
const INSTAGRAM = '';   // profile URL; added to the structured data once known
const home = l => (l === 'es' ? '/' : `/${l}/`);
const legalUrl = (page, l) => `/${page}` + (l === 'es' ? '' : `?lang=${l}`);

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = s => esc(s).replace(/"/g, '&quot;');
const hhmm = m => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
const euro = (n, l) => (l === 'en' ? '€' + n : n + ' €');
const price = (i, l) => (i.ask ? T[l].ask : (i.from ? T[l].from + ' ' : '') + euro(i.p, l));
const ld = o => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`;

const photo = (k, l, lazy = true) => {
  const p = PHOTOS[k];
  return `<img src="${p.src}" width="${p.w}" height="${p.h}" alt="${attr(p.alt[l])}"${lazy ? ' loading="lazy" decoding="async"' : ''}>`;
};

function salon(l) {
  const out = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': ORIGIN + '/#salon',
    name: 'Nude Beauty Studio',
    description: SEO[l].desc,
    url: ORIGIN + home(l),
    telephone: '+34675161314',
    priceRange: '€€',
    image: ORIGIN + PHOTOS.recepcion.src,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer de la Diputació, 238, 5º 6ª',
      addressLocality: 'Barcelona',
      addressRegion: 'Barcelona',
      postalCode: '08007',
      addressCountry: 'ES',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 41.3885, longitude: 2.16472 },
    hasMap: MAPS,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '18:00' },
    ],
    sameAs: [MAPS, INSTAGRAM].filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: T[l]['menu.kicker'],
      itemListElement: MENU.map(c => ({
        '@type': 'OfferCatalog',
        name: c.h[l],
        itemListElement: c.items.filter(i => !i.ask).map(i => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: i.n[l] },
          priceCurrency: 'EUR',
          ...(i.from
            ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: i.p, priceCurrency: 'EUR' } }
            : { price: i.p }),
        })),
      })),
    },
  };
  return out;
}

function head(l) {
  const url = ORIGIN + home(l);
  const answered = FAQ.filter(f => f.a);
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: answered.map(f => ({ '@type': 'Question', name: f.q[l], acceptedAnswer: { '@type': 'Answer', text: f.a[l] } })),
  };
  return [
    `<title>${esc(SEO[l].title)}</title>`,
    `<meta name="description" content="${attr(SEO[l].desc)}">`,
    `<link rel="canonical" href="${url}">`,
    ...LANGS.map(x => `<link rel="alternate" hreflang="${x}" href="${ORIGIN + home(x)}">`),
    `<link rel="alternate" hreflang="x-default" href="${ORIGIN}/">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Nude Beauty Studio">`,
    `<meta property="og:title" content="${attr(SEO[l].title)}">`,
    `<meta property="og:description" content="${attr(SEO[l].desc)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:locale" content="${{ es: 'es_ES', ca: 'ca_ES', en: 'en_GB' }[l]}">`,
    ld(salon(l)),
    answered.length ? ld(faq) : '',
  ].filter(Boolean).join('\n');
}

const parts = {
  langswitch: l => `  <div class="lang" role="group" aria-label="Idioma / Language">\n` +
    LANGS.map(x => `    <a href="${home(x)}" hreflang="${x}" lang="${x}"${x === l ? ' aria-current="true"' : ''}>${x.toUpperCase()}</a>`).join('\n') + `\n  </div>`,
  tabs: l => MENU.map(c => `<a href="#cat-${c.id}" data-cat="${c.id}">${esc(c.n[l])}<small>${c.items.length}</small></a>`).join(''),
  cats: l => MENU.map(c => `
      <div class="cat" id="cat-${c.id}">
        <h2 class="cat__title">${esc(c.h[l])}</h2>
        <p class="cat__intro">${esc(c.intro[l])}</p>
        <ul class="items">${c.items.map(i => `
          <li class="item"><button type="button" class="item__btn" data-id="${i.id}" aria-pressed="false">
            <span class="item__mark" aria-hidden="true"></span>
            <span class="item__name">${esc(i.n[l])}</span>
            <span class="item__price">${esc(price(i, l))}</span>${i.d ? `
            <span class="item__desc">${esc(i.d[l])}</span>` : ''}
          </button></li>`).join('')}
        </ul>
      </div>`).join('') + '\n    ',
  gallery: l => GALLERY.map(k => `\n      <button type="button" class="photo" data-photo="${k}">${photo(k, l)}</button>`).join('') + '\n    ',
  hours: l => [1, 2, 3, 4, 5, 6, 0].map(d =>
    `\n        <tr data-day="${d}"><td>${T[l].days[d]}</td><td>${HOURS[d] ? hhmm(HOURS[d][0]) + ' – ' + hhmm(HOURS[d][1]) : T[l].closed}</td></tr>`).join('') + '\n      ',
  faq: l => FAQ.filter(f => f.a).map(f => `
      <details class="faq__item"><summary>${esc(f.q[l])}</summary><p>${esc(f.a[l])}</p></details>`).join('') + '\n    ',
  head,
  lang: l => l,
  legal: l => legalUrl('aviso-legal', l),
  privacy: l => legalUrl('privacidad', l),
};

const template = fs.readFileSync(path.join(ROOT, 'src/index.html'), 'utf8')
  .replace(/<!-- Build template[^>]*-->\n/, '');

for (const l of LANGS) {
  let html = template
    .replace(/\{\{photo:([a-z-]+)\}\}/g, (_, k) => photo(k, l))
    .replace(/\{\{t:([a-z0-9.]+)\}\}/g, (_, k) => attr(T[l][k]))
    .replace(/\{\{([a-z]+)\}\}/g, (m, k) => {
      if (!parts[k]) throw new Error('Unknown placeholder ' + m);
      return parts[k](l);
    })
    // <p data-i18n="key"></p>  ->  <p>text</p>
    .replace(/\sdata-i18n="([^"]+)"([^>]*)><\//g, (m, k, rest) => {
      if (typeof T[l][k] !== 'string') throw new Error(`Missing text "${k}" for ${l}`);
      return `${rest}>${esc(T[l][k])}</`;
    });
  if (/\{\{|data-i18n/.test(html)) throw new Error('Unfilled placeholder left in ' + l);
  html = html.replace('<!doctype html>', '<!doctype html>\n<!-- Generated by tools/build.js from src/index.html and js/content.js. Do not edit by hand. -->');
  const file = path.join(ROOT, l === 'es' ? 'index.html' : `${l}/index.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log('built', path.relative(ROOT, file), html.length);
}

const alternates = LANGS.map(x => `    <xhtml:link rel="alternate" hreflang="${x}" href="${ORIGIN + home(x)}"/>`).join('\n');
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.map(l => `  <url>\n    <loc>${ORIGIN + home(l)}</loc>\n${alternates}\n  </url>`).join('\n')}
  <url><loc>${ORIGIN}/aviso-legal</loc></url>
  <url><loc>${ORIGIN}/privacidad</loc></url>
</urlset>
`);
console.log('built sitemap.xml');
