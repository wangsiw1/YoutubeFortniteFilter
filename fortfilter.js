var checked = 0;
var removed = 0;
var currentPage = window.location.href;

var count = 0;

function fartfilter() {
    count++;
    /* console.log("count: " + count);
    console.log(checked);
    console.log(removed); */
    var x = document.getElementsByTagName("ytd-grid-video-renderer");
    for (var i = 0; i < x.length; i++) {
        var tmp = x[i].querySelector("#dismissable > #details > #meta > h3 > #video-title");
        if (tmp.innerHTML.toLowerCase().includes("fortnite")) {
            x[i].parentElement.removeChild(x[i]);
            removed++;
        }
        //checked++;
    }
}

var observer = new MutationObserver(function(mutations, observer) {
    if (window.location.href != currentPage) {
        checked = 0;
        removed = 0;
        count = 0;
        currentPage = window.location.href;
    }
    fartfilter();
    chrome.runtime.sendMessage({text: removed.toString()}, function(response) {
        console.log("Response: ", response);
    });
    // console.log(currentPage);
});

observer.observe(document.querySelector("ytd-app"), {
    attributes: true,
    subtree: true
});

document.addEventListener("yt-navigate-finish", function () {
    if (window.location.href != currentPage) {
        checked = 0;
        removed = 0;
        count = 0;
        currentPage = window.location.href;
    }
    fartfilter();
    chrome.runtime.sendMessage({text: removed.toString()}, function(response) {
        console.log("Response: ", response);
    });
});
