function CopyToClipboard(containerid, ttid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");

        var tooltip = document.getElementById(ttid);
        tooltip.innerHTML = ":Copied:";
    }
}

function outFunc(containerid, ttid) {
    var tooltip = document.getElementById(ttid);
    tooltip.innerHTML = "Copy to Clipboard"
    
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().removeAllRanges();
    
}