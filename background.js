chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
if (changeInfo.status == 'complete')
        chrome.tabs.executeScript(tabId, {file:"code.js"});
});

chrome.browserAction.onClicked.addListener(function(tab) {
chrome.tabs.executeScript({
    code: '$( ".test2" ).show();'
});
});