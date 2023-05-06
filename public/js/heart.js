var heartIcon = document.getElementById("heart-icon");
var isFavorite = false;

heartIcon.addEventListener("click", function() {
    if (isFavorite) {
        heartIcon.innerHTML = "<i class='bx bx-heart'></i>";
        isFavorite = false;
    } else {
        heartIcon.innerHTML = "<i class='bx bxs-heart'></i>";
        isFavorite = true;
    }
});
