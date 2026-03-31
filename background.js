// This script acts as the "Brain"
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "pushUrl") {
    // 1. Store the URL in local storage
    chrome.storage.local.set({ currentUrl: request.url });

    // 2. Find all open tabs and redirect them (Student View)
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach(tab => {
        // Optional: Only redirect tabs on specific domains to avoid closing teacher's tools
        chrome.tabs.update(tab.id, { url: request.url });
      });
    });
  }
});
