function fartfilter() {
    var x = document.getElementsByTagName("ytd-grid-video-renderer");
    for (var i = 0; i < x.length; i++) {
        var tmp = x[i].querySelector("#dismissable > #details > #meta > h3 > #video-title");
        if (tmp.innerHTML.toLowerCase().includes("fortnite")) {
            x[i].parentElement.removeChild(x[i]);
        }
    }
}

document.addEventListener("yt-navigate-finish", fartfilter);
fartfilter();
