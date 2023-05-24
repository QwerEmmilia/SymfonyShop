window.addEventListener('DOMContentLoaded', (event) => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            const thumbnailSrc = thumbnail.getAttribute('src');
            mainImage.setAttribute('src', thumbnailSrc);

            // Додано зміну класу для виділення обраного мініатюрного зображення
            thumbnails.forEach((thumb) => {
                thumb.classList.remove('selected-thumbnail');
            });
            thumbnail.classList.add('selected-thumbnail');
        });

        // За замовчуванням виділяємо перше мініатюрне зображення
        if (index === 0) {
            thumbnail.classList.add('selected-thumbnail');
        }
    });
});