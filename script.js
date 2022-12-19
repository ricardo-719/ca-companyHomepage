function active() {
    let hBN = document.getElementById('headerButtonNav');
    if (hBN.ariaPressed === "false") {
        return hBN.ariaPressed= "true";
    } else {
        return hBN.ariaPressed= "false";
    }
}