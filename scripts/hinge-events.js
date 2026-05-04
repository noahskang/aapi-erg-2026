// ============================================================
// hinge-events.js — Renders Asian @ Hinge ERG-organized events
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const ergView = document.getElementById('erg-view');
  if (!ergView || typeof ERG_EVENTS === 'undefined') return;

  function escapeAttr(s) {
    return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  const grid = document.createElement('div');
  grid.className = 'erg-grid';

  ERG_EVENTS.forEach(ev => {
    const card = document.createElement('article');
    card.className = 'erg-card';
    card.id = ev.id;

    let coverHtml = '';
    if (ev.image) {
      const coverShape = ev.coverShape === 'landscape' ? 'cover-landscape' : 'cover-portrait';
      coverHtml = `<div class="erg-card-cover ${coverShape}"><img src="${ev.image}" alt="${escapeAttr(ev.title)}" loading="lazy"></div>`;
    }

    let filmsHtml = '';
    if (ev.films && ev.films.length) {
      filmsHtml = `
        <div class="erg-films">
          <div class="erg-films-label">Featuring</div>
          ${ev.films.map((f, idx) => `
            <div class="erg-film">
              <img class="erg-film-poster" src="${f.image}" alt="${escapeAttr(f.title)} poster" loading="lazy">
              <div class="erg-film-body">
                <h4 class="erg-film-title">${f.title}</h4>
                <div class="erg-film-director-row">
                  ${f.directorPhoto ? `<img class="erg-film-director-photo" src="${f.directorPhoto}" alt="${escapeAttr(f.director)}" loading="lazy">` : ''}
                  <p class="erg-film-director">Directed by <strong>${f.director}</strong></p>
                </div>
                <p class="erg-film-synopsis">${f.synopsis}</p>
                ${f.laurels && f.laurels.length ? `
                  <div class="erg-laurels">${f.laurels.map(l => `<span class="erg-laurel">🌿 ${l}</span>`).join('')}</div>
                ` : ''}
                <button class="erg-bio-toggle" data-bio-target="${ev.id}-bio-${idx}">About the director ▾</button>
                <div class="erg-bio" id="${ev.id}-bio-${idx}">${f.bio}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    const partnerHtml = ev.partner
      ? `<a class="erg-partner" href="${ev.partner.url}" target="_blank" rel="noopener">↗ ${ev.partner.name}</a>`
      : '';

    const subtitleHtml = ev.subtitle
      ? `<p class="erg-card-subtitle">${ev.subtitle}</p>`
      : '';

    const hostedByHtml = ev.hostedBy
      ? `<div class="erg-hosted-by">
          <div class="erg-hosted-by-label">Hosted by</div>
          <div class="erg-hosted-by-name">${ev.hostedBy.name}</div>
          <p class="erg-hosted-by-bio">${ev.hostedBy.bio}</p>
        </div>`
      : '';

    const includesHtml = ev.includes && ev.includes.length
      ? `<div class="erg-includes">${ev.includes.map(t => `<span class="erg-include-tag">${t}</span>`).join('')}</div>`
      : '';

    const notesHtml = ev.notes ? `<p class="erg-notes">${ev.notes}</p>` : '';

    card.innerHTML = `
      ${coverHtml}
      <div class="erg-card-body">
        <div class="erg-card-head">
          <span class="erg-card-eyebrow">${ev.icon} ${ev.category}</span>
          <span class="erg-card-when"><strong>${ev.date}</strong>${ev.time}</span>
        </div>
        <h3 class="erg-card-title">${ev.title}</h3>
        ${subtitleHtml}
        <div class="erg-card-meta-row">
          <span>📍 ${ev.location}</span>
        </div>
        <p class="erg-card-desc">${ev.description}</p>
        ${includesHtml}
        ${partnerHtml}
        ${hostedByHtml}
        ${filmsHtml}
        ${notesHtml}
      </div>
    `;

    if (typeof createShareButton === 'function') {
      const url = window.location.href.split('#')[0] + '#' + ev.id;
      const shareBtn = createShareButton(url);
      shareBtn.style.cssText = 'position:absolute;top:16px;right:16px;z-index:10;';
      const cover = card.querySelector('.erg-card-cover');
      if (cover) {
        cover.style.position = 'relative';
        cover.appendChild(shareBtn);
      } else {
        card.style.position = 'relative';
        card.appendChild(shareBtn);
      }
    }

    grid.appendChild(card);
  });

  ergView.appendChild(grid);

  ergView.addEventListener('click', e => {
    const btn = e.target.closest('.erg-bio-toggle');
    if (!btn) return;
    const bio = document.getElementById(btn.dataset.bioTarget);
    if (!bio) return;
    const open = bio.classList.toggle('open');
    btn.textContent = open ? 'Hide director bio ▴' : 'About the director ▾';
  });

  if (typeof handleShareHash === 'function') {
    handleShareHash({});
  } else if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
  }
});
