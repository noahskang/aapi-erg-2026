// ============================================================
// share.js — Source-link button utility for all rec pages
// Renders a small link icon on each card that opens the
// upstream source (Amazon, event page, Wikipedia, etc.) in a
// new tab.
// ============================================================
(function () {
  const LINK_ICON = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

  window.SHARE_LINK_ICON = LINK_ICON;

  const style = document.createElement('style');
  style.textContent = `
    .share-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.22);
      background: rgba(10,13,20,0.65);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      color: #A8C0D8;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      z-index: 10;
      text-decoration: none;
      transition: background 0.2s, color 0.2s, border-color 0.2s;
    }
    .share-btn:hover {
      background: rgba(30,36,50,0.85);
      border-color: rgba(255,255,255,0.35);
      color: #F5EDE0;
    }
    .share-btn svg { pointer-events: none; }
    @keyframes share-highlight {
      0%   { box-shadow: 0 0 0 0 rgba(232,101,42,0); }
      20%  { box-shadow: 0 0 0 5px rgba(232,101,42,0.5); }
      100% { box-shadow: 0 0 0 0 rgba(232,101,42,0); }
    }
    .share-highlighted { animation: share-highlight 2s ease forwards; }
  `;
  document.head.appendChild(style);

  function makeBtn(url) {
    const a = document.createElement('a');
    a.className = 'share-btn';
    a.setAttribute('aria-label', 'Open source in new tab');
    a.setAttribute('title', 'Open source');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = LINK_ICON;
    // Prevent parent card/anchor handlers from firing when icon is clicked
    a.addEventListener('click', e => e.stopPropagation());
    return a;
  }

  // Absolutely-positioned source link appended to a card root
  window.attachShareButton = function (card, url) {
    if (!url) return;
    card.style.position = 'relative';
    card.appendChild(makeBtn(url));
  };

  // Inline source link — caller decides where to append and how to position
  window.createShareButton = function (url) {
    if (!url) return null;
    return makeBtn(url);
  };

  // Deep-link handler: if the page loads with #anchor-id, scroll the
  // matching element into view and briefly highlight it. Cards still
  // carry id attributes for direct linking from URLs pasted manually.
  window.handleShareHash = function (opts) {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (!el) return;
      if (opts && opts.onBeforeScroll) opts.onBeforeScroll(hash, el);
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('share-highlighted');
        el.addEventListener('animationend', () => el.classList.remove('share-highlighted'), { once: true });
      }, 60);
    }, 120);
  };
})();
