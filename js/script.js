let shareBtn = document.getElementById("share-btn");
let sharePopup = document.getElementById("share-popup");
let shareIcon = document.getElementById("share-icon");
let bodyTag = document.getElementsByTagName("body");

shareBtn.addEventListener("click", function (e) {
    sharePopup.style.display = "flex";
    e.preventDefault();
});

document.addEventListener("click", function (e) {
    if (e.target != shareBtn && e.target != shareIcon) {
      sharePopup.style.display = "none";
      e.preventDefault();
    }
});

