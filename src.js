// ==UserScript==
// @name        Etsy ad remover
// @namespace   https://github.com/dismantl
// @match       https://www.etsy.com/*
// @version     1.0
// @author      Dan Staples (dismantl)
// @license     GPLv3
// ==/UserScript==
new MutationObserver(() => {
  // Remove most loved
  document.querySelectorAll('[data-top-rated-narrowing-intent-search]').forEach(function(element) {
    element.style.display = 'none'
  })

  // Remove sponsored listings
  document.querySelectorAll('.v2-listing-card__info p span').forEach(el => {
    if (el.textContent?.toLowerCase().replace(/\s+/g, '').includes('advertisement') && el.offsetWidth > 1 && el.offsetHeight > 1) {
      el.closest('li.wt-list-unstyled')?.remove()
    }
  })
}).observe(document.body, {childList: true, subtree: true})