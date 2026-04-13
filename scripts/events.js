// ============================================================
// events.js — Events page
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const eventsGrid = document.getElementById('events-grid');
  if (!eventsGrid) return;

  EVENTS.forEach(ev => {
    const isFree = ev.price.toLowerCase().startsWith('free');
    const card   = document.createElement('article');
    card.className = `event-card${ev.featured ? ' featured' : ''}`;
    card.innerHTML = `
      <div class="event-card-top">
        <span class="event-icon">${ev.icon}</span>
        <div class="event-badges">
          <span class="event-category">${ev.category}</span>
          <span class="event-price${isFree ? ' free' : ''}">${ev.price}</span>
        </div>
      </div>
      <h3 class="event-title">${ev.title}</h3>
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
    eventsGrid.appendChild(card);
  });
});
