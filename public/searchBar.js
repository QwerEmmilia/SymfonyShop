const searchLi = document.querySelector('.search-li');
const searchOverlay = document.querySelector('.search-overlay');

searchLi.addEventListener('click', function() {
    searchOverlay.style.display = 'block';
});

searchOverlay.addEventListener('click', function(event) {
    if (event.target === this) {
        searchOverlay.style.display = 'none';
    }
});
