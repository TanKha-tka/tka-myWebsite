// Event sroll screen
window.onscroll = function() { myNavbar() };
function myNavbar() {
    var navBar = document.getElementById("navBar");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navBar.className = "header-barchat" + " header-barchat-white";
    } else {
        navBar.className = navBar.className.replace(" header-barchat-white", "");
    }
}

// Event apper image when click
function onClick(e) {
    document.getElementById('img').src = e.src;
    document.getElementById('modal').style.display = "block";
    var captionText = document.getElementById('caption');
    captionText.innerHTML = e.alt;
}

function clickClose() {
    var closeImg = document.getElementById("Close");

    closeImg.addEventListener('click', )
}