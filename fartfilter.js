function fartfilter() {
    var x = document.getElementsByTagName("ytd-grid-video-renderer");
    for (var i = 0; i < x.length; i++) {
        var tmp = x[i].querySelector("#dismissable > #details > #meta > h3 > #video-title");
        if (tmp.innerHTML.toLowerCase().includes("fortnite")) {
            x[i].parentElement.removeChild(x[i]);
        }
    }
}


MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    fartfilter();
});

observer.observe(document.querySelector("ytd-two-column-browse-results-renderer"), {
    subtree: true
});


//document.addEventListener("yt-navigate-finish", fartfilter);
//fartfilter();
