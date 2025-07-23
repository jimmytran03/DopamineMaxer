// List of URL patterns to block
const blockedPatterns = [
  /https?:\/\/(www\.)?tiktok\.com\//i,
  /https?:\/\/(www\.)?youtube\.com\/shorts\//i,
  /https?:\/\/(www\.)?instagram\.com\/reels\//i
];

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (blockedPatterns.some(pattern => pattern.test(details.url))) {
    chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL('blocked.html') });
  }
}, { url: [
  { hostSuffix: 'tiktok.com' },
  { hostSuffix: 'youtube.com' },
  { hostSuffix: 'instagram.com' }
] }); 