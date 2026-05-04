// ============================================================
// events.js — Events page: list view + calendar view
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const eventsGrid = document.getElementById('events-grid');
  const listView   = document.getElementById('list-view');
  const calView    = document.getElementById('calendar-view');
  const ergView    = document.getElementById('erg-view');

  // ── Today detection ────────────────────────────────────────
  const today         = new Date();
  const isMay2026     = today.getFullYear() === 2026 && today.getMonth() === 4;
  const todayMayDay   = isMay2026 ? today.getDate() : null;

  // ── Category → chip color class ───────────────────────────
  function chipClass(category) {
    switch (category.toLowerCase()) {
      case 'performance': case 'music': case 'music & dance': case 'talk': return 'chip-warm';
      case 'festival':    case 'comedy':                                    return 'chip-teal';
      case 'food & market':                                                 return 'chip-gold';
      case 'film':        case 'literature':                                return 'chip-purple';
      case 'exhibition':                                                    return 'chip-purple';
      case 'parade':                                                        return 'chip-indigo';
      case 'sports':      case 'community':                                 return 'chip-teal';
      default:                                                              return 'chip-muted';
    }
  }

  // ── Today-aware event check ────────────────────────────────
  function isEventToday(ev) {
    if (!todayMayDay) return false;
    const days = getMayDays(ev);
    if (days === 'all' || days === 'ongoing') return true;
    return days.includes(todayMayDay);
  }

  // ── Today banner ───────────────────────────────────────────
  const bannerEl    = document.getElementById('today-banner');
  const todayEvents = EVENTS.filter(ev => isEventToday(ev));
  if (bannerEl && todayEvents.length > 0) {
    bannerEl.style.display = '';
    bannerEl.classList.add('visible');
    const label = todayEvents.length === 1
      ? `<strong>${todayEvents[0].title}</strong> is happening today`
      : `<strong>${todayEvents.length} events</strong> are happening today`;
    bannerEl.innerHTML = `<span class="today-banner-dot"></span><span class="today-banner-text">${label}</span>`;
  }

  // ── Build list view ────────────────────────────────────────
  EVENTS.forEach(ev => {
    const isFree    = ev.price.toLowerCase().startsWith('free');
    const evToday   = isEventToday(ev);
    const card      = document.createElement('article');
    card.className  = `event-card${ev.featured ? ' featured' : ''}`;
    card.id         = 'event-' + ev.id;
    card.innerHTML = `
      <div class="event-card-top">
        <span class="event-icon">${ev.icon}</span>
        <div class="event-badges">
          <span class="event-category">${ev.category}</span>
          <span class="event-price${isFree ? ' free' : ''}">${ev.price}</span>
        </div>
      </div>
      <h3 class="event-title">${ev.title}${evToday ? '<span class="today-badge">Today</span>' : ''}</h3>
      <div class="event-meta">
        <span>📅 ${ev.date}</span>
        <span>⏰ ${ev.time}</span>
        <span>📍 ${ev.location}</span>
      </div>
      <p class="event-desc">${ev.description}</p>
      <div class="event-footer">
        <a href="${ev.link}" class="event-link" target="_blank" rel="noopener">Learn More →</a>
        <span class="event-source">Source: ${ev.source}</span>
      </div>
    `;
    const hasRealLink = ev.link && ev.link !== '#';
    if (hasRealLink) {
      const shareBtn = createShareButton(ev.link);
      shareBtn.style.cssText = 'position:static;margin-top:4px;align-self:flex-end;';
      card.querySelector('.event-badges').appendChild(shareBtn);
    }
    eventsGrid.appendChild(card);
  });

  handleShareHash({
    onBeforeScroll(hash) {
      if (!hash.startsWith('event-')) return;
      const listView = document.getElementById('list-view');
      if (listView && listView.style.display === 'none') {
        const listBtn = document.querySelector('.view-toggle-btn[data-view="list"]');
        if (listBtn) listBtn.click();
      }
    }
  });

  // ── Date → May day numbers ─────────────────────────────────
  // Returns: 'all' | 'ongoing' | number[]
  function getMayDays(ev) {
    const d = ev.date;
    if (/throughout may/i.test(d)) return 'all';
    if (/every saturday/i.test(d)) return [2, 9, 16, 23, 30];
    if (/through may/i.test(d))    return 'ongoing';
    const range  = d.match(/May (\d+)[–\-](\d+)/i);
    if (range)   return Array.from({length: +range[2] - +range[1] + 1}, (_, i) => +range[1] + i);
    const single = d.match(/May (\d+)/i);
    if (single)  return [+single[1]];
    return 'ongoing';
  }

  // ── Build calendar view ────────────────────────────────────
  // May 2026 starts on Friday (col index 5, Sun = 0)
  const MAY_START_COL = 5;
  const MAY_DAYS      = 31;
  const TOTAL_CELLS   = Math.ceil((MAY_START_COL + MAY_DAYS) / 7) * 7; // 42

  const ongoingEvents = [];
  const dayMap = {}; // { dayNum: [ev, ...] }

  EVENTS.forEach(ev => {
    const days = getMayDays(ev);
    if (days === 'all' || days === 'ongoing') {
      ongoingEvents.push(ev);
    } else {
      days.forEach(d => {
        if (!dayMap[d]) dayMap[d] = [];
        dayMap[d].push(ev);
      });
    }
  });

  // Ongoing banner
  if (ongoingEvents.length) {
    const banner = document.createElement('div');
    banner.className = 'cal-ongoing';
    banner.innerHTML = `<span class="cal-ongoing-label">All Month</span>` +
      ongoingEvents.map(ev =>
        `<a class="cal-ongoing-chip" href="${ev.link}" target="_blank" rel="noopener">${ev.icon} ${ev.title}</a>`
      ).join('');
    calView.appendChild(banner);
  }

  // Calendar grid
  const grid = document.createElement('div');
  grid.className = 'cal-grid';

  // Day-of-week headers
  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(label => {
    const h = document.createElement('div');
    h.className = 'cal-day-header';
    h.textContent = label;
    grid.appendChild(h);
  });

  // Day cells
  for (let i = 0; i < TOTAL_CELLS; i++) {
    const dayNum = i - MAY_START_COL + 1;
    const cell   = document.createElement('div');

    if (dayNum < 1 || dayNum > MAY_DAYS) {
      cell.className = 'cal-day empty';
      grid.appendChild(cell);
      continue;
    }

    const isCalToday = isMay2026 && dayNum === todayMayDay;
    cell.className = `cal-day${isCalToday ? ' today' : ''}`;

    const numEl = document.createElement('span');
    numEl.className = 'cal-day-num';
    numEl.textContent = dayNum;
    cell.appendChild(numEl);

    const eventsOnDay = dayMap[dayNum] || [];
    const MAX_CHIPS   = 3;

    eventsOnDay.slice(0, MAX_CHIPS).forEach(ev => {
      const chip = document.createElement('a');
      chip.className = `cal-chip ${chipClass(ev.category)}`;
      chip.href      = ev.link;
      chip.target    = '_blank';
      chip.rel       = 'noopener';
      chip.title     = `${ev.title} · ${ev.time} · ${ev.location}`;
      chip.innerHTML = `<span class="cal-chip-icon">${ev.icon}</span><span class="cal-chip-label">${ev.title}</span>`;
      cell.appendChild(chip);
    });

    if (eventsOnDay.length > MAX_CHIPS) {
      const more = document.createElement('span');
      more.className   = 'cal-more';
      more.textContent = `+${eventsOnDay.length - MAX_CHIPS} more`;
      cell.appendChild(more);
    }

    grid.appendChild(cell);
  }

  calView.appendChild(grid);

  // ── Build ERG view ─────────────────────────────────────────
  function escapeAttr(s) {
    return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function renderErgView() {
    if (typeof ERG_EVENTS === 'undefined' || !ergView) return;

    const intro = document.createElement('div');
    intro.className = 'erg-intro reveal';
    intro.innerHTML = `
      <p class="erg-intro-eyebrow">Programming by Asian @ Hinge</p>
      <p class="erg-intro-text">Our ERG's own slate of AAPI Heritage Month gatherings — author talks, film screenings, tastings, and workshops, all hosted at the FiDi office and free for Hinge employees.</p>
    `;
    ergView.appendChild(intro);

    const grid = document.createElement('div');
    grid.className = 'erg-grid';

    ERG_EVENTS.forEach(ev => {
      const card = document.createElement('article');
      card.className = 'erg-card';
      card.id = ev.id;

      // Cover (first available image — single image, or films[0].image)
      let coverHtml = '';
      if (ev.image) {
        coverHtml = `<div class="erg-card-cover cover-portrait"><img src="${ev.image}" alt="${escapeAttr(ev.title)}" loading="lazy"></div>`;
      }

      // Films sub-grid (if present)
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
                  <p class="erg-film-director">Directed by <strong>${f.director}</strong></p>
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

      // Partner link
      const partnerHtml = ev.partner
        ? `<a class="erg-partner" href="${ev.partner.url}" target="_blank" rel="noopener">↗ ${ev.partner.name}</a>`
        : '';

      // Includes tags
      const includesHtml = ev.includes && ev.includes.length
        ? `<div class="erg-includes">${ev.includes.map(t => `<span class="erg-include-tag">${t}</span>`).join('')}</div>`
        : '';

      // Notes
      const notesHtml = ev.notes ? `<p class="erg-notes">${ev.notes}</p>` : '';

      card.innerHTML = `
        ${coverHtml}
        <div class="erg-card-body">
          <div class="erg-card-head">
            <span class="erg-card-eyebrow">${ev.icon} ${ev.category}</span>
            <span class="erg-card-when"><strong>${ev.date}</strong>${ev.time}</span>
          </div>
          <h3 class="erg-card-title">${ev.title}</h3>
          <div class="erg-card-meta-row">
            <span>📍 ${ev.location}</span>
          </div>
          <p class="erg-card-desc">${ev.description}</p>
          ${includesHtml}
          ${partnerHtml}
          ${filmsHtml}
          ${notesHtml}
        </div>
      `;

      // Share button (uses the in-page hash for ERG cards)
      const hasShare = typeof createShareButton === 'function';
      if (hasShare) {
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

    // Bio expand/collapse
    ergView.addEventListener('click', e => {
      const btn = e.target.closest('.erg-bio-toggle');
      if (!btn) return;
      const bio = document.getElementById(btn.dataset.bioTarget);
      if (!bio) return;
      const open = bio.classList.toggle('open');
      btn.textContent = open ? 'Hide director bio ▴' : 'About the director ▾';
    });
  }

  renderErgView();

  // ── Toggle handler ─────────────────────────────────────────
  document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      listView.style.display = view === 'list' ? '' : 'none';
      calView.style.display  = view === 'calendar' ? '' : 'none';
      ergView.style.display  = view === 'erg' ? '' : 'none';
    });
  });

  // ── If hash points at an ERG card, switch to ERG view ─────
  if (window.location.hash && /^#erg-/.test(window.location.hash)) {
    const ergBtn = document.querySelector('.view-toggle-btn[data-view="erg"]');
    if (ergBtn) ergBtn.click();
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
    }, 100);
  }
});
