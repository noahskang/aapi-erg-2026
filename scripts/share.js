// ============================================================
// share.js — Shared share-button utility for all rec pages
// ============================================================
(function () {
  const LINK_ICON  = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
  const CHECK_ICON = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

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
      transition: background 0.2s, color 0.2s, border-color 0.2s;
    }
    .share-btn:hover {
      background: rgba(30,36,50,0.85);
      border-color: rgba(255,255,255,0.35);
      color: #F5EDE0;
    }
    .share-btn.copied {
      background: rgba(46,160,67,0.22);
      border-color: rgba(46,160,67,0.4);
      color: #4ade80;
    }
    .share-btn svg { pointer-events: none; }
    .share-tooltip {
      position: absolute;
      top: calc(100% + 5px);
      right: 0;
      background: rgba(20,25,35,0.95);
      color: #F5EDE0;
      font-size: 11px;
      font-family: Inter, sans-serif;
      white-space: nowrap;
      padding: 4px 8px;
      border-radius: 6px;
      border: 1px solid rgba(255,255,255,0.12);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s;
    }
    .share-tooltip.show { opacity: 1; }
    @keyframes share-highlight {
      0%   { box-shadow: 0 0 0 0 rgba(232,101,42,0); }
      20%  { box-shadow: 0 0 0 5px rgba(232,101,42,0.5); }
      100% { box-shadow: 0 0 0 0 rgba(232,101,42,0); }
    }
    .share-highlighted { animation: share-highlight 2s ease forwards; }
  `;
  document.head.appendChild(style);

  function doCopy(url, btn) {
    const tooltip = btn.querySelector('.share-tooltip');
    function showFeedback() {
      btn.innerHTML = CHECK_ICON;
      if (tooltip) btn.appendChild(tooltip);
      btn.classList.add('copied');
      if (tooltip) tooltip.classList.add('show');
      setTimeout(() => {
        btn.innerHTML = LINK_ICON;
        if (tooltip) btn.appendChild(tooltip);
        btn.classList.remove('copied');
        if (tooltip) tooltip.classList.remove('show');
      }, 1500);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(showFeedback).catch(() => fallbackCopy(url, showFeedback));
    } else {
      fallbackCopy(url, showFeedback);
    }
  }

  function fallbackCopy(url, cb) {
    const ta = document.createElement('textarea');
    ta.value = url;
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (_) {}
    document.body.removeChild(ta);
    cb();
  }

  window.doCopy = doCopy;

  window.attachShareButton = function (card, shareId) {
    card.style.position = 'relative';
    const btn = document.createElement('button');
    btn.className = 'share-btn';
    btn.setAttribute('aria-label', 'Copy link');
    btn.innerHTML = LINK_ICON;

    const tooltip = document.createElement('span');
    tooltip.className = 'share-tooltip';
    tooltip.textContent = 'Copied!';
    btn.appendChild(tooltip);

    btn.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
      const url = window.location.origin + window.location.pathname + '#' + shareId;
      doCopy(url, btn);
    });

    card.appendChild(btn);
  };

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
