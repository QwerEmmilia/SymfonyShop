// Отримуємо всі кнопки кольорів
const colorOptions = document.querySelectorAll('.color-option');

// Додаємо обробник події для кожної кнопки
colorOptions.forEach(colorOption => {
    colorOption.addEventListener('click', () => {
        // Знімаємо клас 'active' та стиль бордера з усіх кнопок
        colorOptions.forEach(option => {
            option.classList.remove('active');
            option.style.border = 'none';
        });

        // Встановлюємо клас 'active' та стиль бордера для вибраної кнопки
        colorOption.classList.add('active');
        colorOption.style.border = '1px solid rgba(128, 128, 128, 0.63)';
    });
});
