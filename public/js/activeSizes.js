const sizePills = document.querySelectorAll('.size-pill');

// Додаємо обробник події для кожного розміру
sizePills.forEach(sizePill => {
    sizePill.addEventListener('click', () => {
        // Знімаємо клас 'active' та стиль бордера з усіх розмірів
        sizePills.forEach(pill => {
            pill.classList.remove('active');
            pill.style.border = '1px solid #ccc';
        });

        // Встановлюємо клас 'active' та стиль бордера для вибраного розміру
        sizePill.classList.add('active');
        sizePill.style.border = '1px solid black';
    });
});