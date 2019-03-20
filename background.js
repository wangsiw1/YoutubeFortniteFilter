var removedCount = "";

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    removedCount = msg.text;
    //sendResponse("Gotcha! " + sender.frameId);
    chrome.browserAction.setBadgeText({text: removedCount});
    chrome.browserAction.setBadgeBackgroundColor({color: "#5d6063"});
});


