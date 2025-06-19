document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(["geminiApiKey"], (result) => {
    if (result.geminiApiKey) {
      document.getElementById("api-key").value = result.geminiApiKey;
    }
  });

  document.getElementById("save-button").addEventListener("click", () => {
    const apiKey = document.getElementById("api-key").value.trim();
    chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
      const msg = document.getElementById("success-message");
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    });
  });
});