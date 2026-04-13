// ============================================================
// loneliness.js — AA x Loneliness resource page
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  const CATEGORY_LABELS = {
    'research':        'Research',
    'essay':           'Personal Essay',
    'cultural-context':'Cultural Context'
  };

  const articlesGrid = document.getElementById('articles-grid');
  const orgsGrid     = document.getElementById('orgs-grid');

  // ── Render article/research cards ────────────────────────
  const articles = LONELINESS_RESOURCES.filter(r => r.type === 'article');
  articles.forEach(r => {
    const card = document.createElement('article');
    card.className = 'resource-card';
    card.innerHTML = `
      <p class="rc-category">${CATEGORY_LABELS[r.category] || r.category}</p>
      <h3 class="rc-title">${r.title}</h3>
      <p class="rc-byline">${r.author ? r.author + ' · ' : ''}${r.year}</p>
      <p class="rc-desc">${r.description}</p>
      ${r.stat ? `<div class="rc-stat">${r.stat}</div>` : ''}
      <div class="rc-footer">
        <span class="rc-source">${r.source}</span>
        <a class="rc-link" href="${r.url}" target="_blank" rel="noopener">Read →</a>
      </div>
    `;
    articlesGrid.appendChild(card);
  });

  // ── Render org cards ──────────────────────────────────────
  const orgs = LONELINESS_RESOURCES.filter(r => r.type === 'org');
  orgs.forEach(r => {
    const card = document.createElement('a');
    card.className = 'org-card';
    card.href      = r.url;
    card.target    = '_blank';
    card.rel       = 'noopener';
    card.innerHTML = `
      <div class="org-icon">${r.icon}</div>
      <h3 class="org-name">${r.title}</h3>
      <p class="org-source">${r.source}</p>
      <p class="org-desc">${r.description}</p>
      <span class="org-cta">Visit →</span>
    `;
    orgsGrid.appendChild(card);
  });

  // ── Tab toggle ────────────────────────────────────────────
  const toggleBtns = document.querySelectorAll('.toggle-btn[data-tab]');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.tab === 'articles') {
        articlesGrid.style.display = '';
        orgsGrid.style.display     = 'none';
      } else {
        articlesGrid.style.display = 'none';
        orgsGrid.style.display     = '';
      }
    });
  });

});
