function isBlockedPath() {
  const url = window.location.href;
  return (
    /youtube\.com\/shorts\//i.test(url) ||
    /instagram\.com\/reels\//i.test(url)
  );
}

function blockPage() {
  // Redirect to a blank page
  window.location.replace('about:blank');
}

function checkAndBlock() {
  if (isBlockedPath()) {
    blockPage();
  }
}

// Initial check
checkAndBlock();

// History Changes
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    checkAndBlock();
  }
}).observe(document, {subtree: true, childList: true});

// back/forward navigation
window.addEventListener('popstate', checkAndBlock); 
