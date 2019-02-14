var x = document.querySelectorAll("body > ytd-app > #content > #page-manager > ytd-browse > ytd-two-column-browse-results-renderer > #primary > #contents > ytd-item-section-renderer");
//console.log(x.length);
for (var i = 0; i < x.length; i++) {
    var y = x[i].querySelectorAll(":scope > #contents > ytd-shelf-renderer > #dismissable > #contents > ytd-grid-renderer > #items > ytd-grid-video-renderer");
    //console.log(y.length);

    for (var j = 0; j < y.length; j++) {
        var tmp = y[j].querySelector("#dismissable > #details > #meta > h3 > #video-title");
        //console.log(tmp.innerHTML);
        if (tmp.innerHTML.toLowerCase().includes("fortnite")) {
            tmp2 = tmp.parentNode.parentNode.parentNode.parentNode.parentNode;
            tmp2.parentNode.removeChild(tmp2);
        }
    }
}