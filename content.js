function isBlockedPath() {
  const url = window.location.href;
  return (
    /youtube\.com\/shorts\//i.test(url) ||
    /instagram\.com\/reels\//i.test(url)
  );
}

function blockPage() {
  // Option 1: Redirect to a blank page
  window.location.replace('about:blank');
  // Option 2: Show overlay (uncomment if you prefer this)
  /*
  Show funny image of ned flanders telling you to get back to work
  */
}

function checkAndBlock() {
  if (isBlockedPath()) {
    blockPage();
  }
}

// Initial check
checkAndBlock();

// Monitor SPA navigation (history changes)
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    checkAndBlock();
  }
}).observe(document, {subtree: true, childList: true});

// Also listen for popstate (back/forward navigation)
window.addEventListener('popstate', checkAndBlock); 