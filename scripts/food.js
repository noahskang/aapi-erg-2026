// ============================================================
// food.js — Food / Restaurant page
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  function mapsUrl(r) {
    const q = encodeURIComponent(`${r.name} ${r.address}`);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }

  function getInitials(name) {
    const parts = name.trim().split(' ');
    return parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : parts[0][0].toUpperCase();
  }

  // ── Build restaurant card ─────────────────────────────────
  function buildRestaurantCard(r) {
    const topDishesHTML = r.topDishes.map(d => `<span class="dish-tag">${d}</span>`).join('');
    const tagsHTML      = r.tags.map(t => `<span class="tag">${t}</span>`).join('');

    const card = document.createElement('article');
    card.className = 'restaurant-card';
    card.id = 'restaurant-' + r.id;
    card.dataset.id = r.id;
    const photos = r.photos || [];
    const photosHTML = photos.length === 0 ? '' : `
      <div class="card-photos">
        <img class="card-photo-main" src="${photos[0]}" alt="${r.name}" loading="lazy">
        ${photos.length >= 3 ? `
          <div class="card-photo-row">
            <img src="${photos[1]}" alt="${r.name} interior" loading="lazy">
            <img src="${photos[2]}" alt="${r.name} dish" loading="lazy">
          </div>
        ` : photos.length === 2 ? `
          <img class="card-photo-main" src="${photos[1]}" alt="${r.name} dish" loading="lazy" style="height:120px;">
        ` : ''}
      </div>
    `;
    const recommenderHTML = r.recommender ? `
      <div class="card-recommender">
        <div class="recommender-avatar">${getInitials(r.recommender)}</div>
        <div>
          <p class="recommender-name">${r.recommender}</p>
          ${r.recommenderTitle ? `<p class="recommender-role">${r.recommenderTitle}</p>` : ''}
        </div>
      </div>
    ` : '';
    const blurbHTML = r.blurb ? `<p class="card-blurb">"${r.blurb}"</p>` : '';
    card.innerHTML = `
      ${photosHTML}
      <div class="card-body">
        <div class="card-top">
          <div class="card-title-group">
            <h3 class="card-name">${r.name}</h3>
            <p class="card-meta">${r.cuisine} · ${r.neighborhood}</p>
          </div>
          <span class="card-price">${r.priceRange}</span>
        </div>
        ${recommenderHTML}
        ${blurbHTML}
        <div class="card-expanded" style="display:none">
          <div class="card-detail"><span>📍</span><span>${r.address}</span></div>
          <div class="card-detail"><span>🕐</span><span>${r.hours}</span></div>
          <div class="card-dishes">
            <span>🍜 Top Dishes</span>
            <div class="dishes-tags">${topDishesHTML}</div>
          </div>
          <div class="card-tags-row">${tagsHTML}</div>
        </div>
        <button class="card-toggle">Show details ↓</button>
      </div>
    `;

    const toggleBtn = card.querySelector('.card-toggle');
    const expanded  = card.querySelector('.card-expanded');
    toggleBtn.addEventListener('click', () => {
      const isOpen = expanded.style.display !== 'none';
      expanded.style.display = isOpen ? 'none' : 'block';
      toggleBtn.textContent  = isOpen ? 'Show details ↓' : 'Hide details ↑';
    });

    attachShareButton(card, mapsUrl(r));
    return card;
  }

  const restaurantGrid = document.getElementById('restaurant-grid');
  if (restaurantGrid) {
    RESTAURANTS.forEach(r => restaurantGrid.appendChild(buildRestaurantCard(r)));
  }

  handleShareHash({
    onBeforeScroll(hash) {
      if (!hash.startsWith('restaurant-')) return;
      const listView = document.getElementById('list-view');
      const mapView  = document.getElementById('map-view');
      if (listView && listView.style.display === 'none') {
        const listBtn = document.querySelector('.toggle-btn[data-view="list"]');
        if (listBtn) listBtn.click();
      }
    }
  });

  // ── Map / List view toggle ────────────────────────────────
  const foodToggleBtns = document.querySelectorAll('.toggle-btn[data-view]');
  const mapView        = document.getElementById('map-view');
  const listView       = document.getElementById('list-view');

  foodToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      foodToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.view === 'map') {
        mapView.style.display  = 'block';
        listView.style.display = 'none';
        if (window._leafletMap) setTimeout(() => window._leafletMap.invalidateSize(), 100);
      } else {
        mapView.style.display  = 'none';
        listView.style.display = 'block';
        const grid = document.getElementById('restaurant-grid');
        setTimeout(() => grid && grid.classList.add('visible'), 50);
      }
    });
  });

  // ── Leaflet map ───────────────────────────────────────────
  const mapEl = document.getElementById('map');
  if (mapEl && typeof L !== 'undefined') {
    const map = L.map('map', { center: [40.73, -73.98], zoom: 12 });
    window._leafletMap = map;

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    function customIcon(num) {
      return L.divIcon({
        className: '',
        html: `<div style="width:32px;height:32px;background:#E8652A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;font-size:13px;font-weight:600;color:white;border:2px solid rgba(255,255,255,0.4);box-shadow:0 2px 12px rgba(232,101,42,0.5)">${num}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });
    }

    const sidebar        = document.getElementById('map-sidebar');
    const sidebarContent = document.getElementById('sidebar-content');
    const sidebarClose   = document.getElementById('sidebar-close');

    function buildSidebarContent(r) {
      const dishesHTML = r.topDishes.map(d => `<span class="dish-tag">${d}</span>`).join('');
      const recommenderHTML = r.recommender ? `
        <div class="sidebar-recommender">
          <div class="recommender-avatar">${getInitials(r.recommender)}</div>
          <div>
            <p class="recommender-name">${r.recommender}</p>
            ${r.recommenderTitle ? `<p class="recommender-role">${r.recommenderTitle}</p>` : ''}
          </div>
        </div>
      ` : '';
      const blurbHTML = r.blurb ? `<p class="sidebar-blurb">"${r.blurb}"</p>` : '';
      const photo = (r.photos && r.photos[0]) ? `<img class="sidebar-photo" src="${r.photos[0]}" alt="${r.name}" loading="lazy">` : '';
      return `
        ${photo}
        <h3 class="sidebar-restaurant-name">${r.name}</h3>
        <p class="sidebar-meta">${r.cuisine} · ${r.neighborhood} · ${r.priceRange}</p>
        ${recommenderHTML}
        ${blurbHTML}
        <div class="sidebar-detail"><span>📍</span><span>${r.address}</span></div>
        <div class="sidebar-detail"><span>🕐</span><span>${r.hours}</span></div>
        <p class="sidebar-dishes-label">🍜 Top Dishes</p>
        <div class="dishes-tags" style="margin-bottom:16px">${dishesHTML}</div>
      `;
    }

    RESTAURANTS.forEach((r, idx) => {
      const marker = L.marker([r.lat, r.lng], { icon: customIcon(idx + 1) }).addTo(map);
      marker.on('click', () => {
        sidebarContent.innerHTML = buildSidebarContent(r);
        sidebar.classList.add('open');
      });
    });

    if (sidebarClose) {
      sidebarClose.addEventListener('click', () => sidebar.classList.remove('open'));
    }
  }

});
