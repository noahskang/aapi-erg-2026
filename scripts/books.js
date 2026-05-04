// ============================================================
// books.js — Books page
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const classicGrid = document.getElementById('books-classic');
  const recentGrid  = document.getElementById('books-recent');
  if (!classicGrid || !recentGrid) return;

  function amazonUrl(b) {
    const q = encodeURIComponent(`${b.title} ${b.author}`);
    return `https://www.amazon.com/s?k=${q}&i=stripbooks`;
  }

  function buildBookCard(b) {
    const awards = Array.isArray(b.awards) ? b.awards : [];
    const awardsHTML = awards.map(a => `<span class="award-badge">${a}</span>`).join('');
    const card = document.createElement('article');
    card.className = 'book-card';
    card.id = 'book-' + b.id;
    const coverContent = b.coverImage
      ? `<img class="book-cover-img" src="${b.coverImage}" alt="Cover of ${b.title}" loading="lazy" onerror="this.parentElement.style.background='var(--spine-color)';this.style.display='none'">`
      : `<span class="spine-title">${b.title}</span>`;
    const quoteHTML = b.quote ? `<blockquote class="book-quote">"${b.quote}"</blockquote>` : '';
    card.innerHTML = `
      <div class="book-spine" style="--spine-color: ${b.coverColor}">
        ${coverContent}
      </div>
      <div class="book-info">
        <div class="book-culture">${b.culture || ''}</div>
        <h3 class="book-title">${b.title}</h3>
        <p class="book-byline">${b.author} · ${b.year}</p>
        <p class="book-genre">${b.genre}</p>
        ${quoteHTML}
        <p class="book-desc">${b.description}</p>
        <div class="book-awards">${awardsHTML}</div>
      </div>
    `;
    attachShareButton(card, amazonUrl(b));
    return card;
  }

  BOOKS.classic.forEach(b => classicGrid.appendChild(buildBookCard(b)));
  BOOKS.recent.forEach(b  => recentGrid.appendChild(buildBookCard(b)));

  handleShareHash({
    onBeforeScroll(hash) {
      if (!hash.startsWith('book-r')) return;
      const recentBtn = document.querySelector('.toggle-btn[data-books="recent"]');
      if (recentBtn && !recentBtn.classList.contains('active')) recentBtn.click();
    }
  });

  // Tab switching
  const toggleBtns = document.querySelectorAll('.toggle-btn[data-books]');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.books === 'classic') {
        classicGrid.style.display = '';
        recentGrid.style.display  = 'none';
        setTimeout(() => classicGrid.classList.add('visible'), 50);
      } else {
        classicGrid.style.display = 'none';
        recentGrid.style.display  = '';
        setTimeout(() => recentGrid.classList.add('visible'), 50);
      }
    });
  });
});
