document.getElementById('blockButton').onclick = function() {
    chrome.tabs.executeScript({
      file: 'content.js'
    });
  };
  