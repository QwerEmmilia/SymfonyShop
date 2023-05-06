// Отримуємо посилання на елементи слайдера
const sliderContainer = document.querySelector('.slider');
const slider = document.querySelector('#slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('#slider img');

// Встановлюємо початковий індекс слайда
let currentSlideIndex = 0;

// Додаємо обробники подій для кнопок "Попереднє" та "Наступне"
prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);

// Функція для відображення попереднього слайда
function showPreviousSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    updateSlideVisibility();
}

// Функція для відображення наступного слайда
function showNextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    updateSlideVisibility();
}

// Функція для оновлення видимості слайдів
function updateSlideVisibility() {
    slides.forEach((slide, index) => {
        if (index === currentSlideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Викликаємо функцію autoChangeSlide один раз для відображення першого слайда при завантаженні сторінки
autoChangeSlide();

// Функція для автоматичного змінювання слайдів кожні 10 секунд
function autoChangeSlide() {
    showNextSlide();
}

// Викликаємо функцію autoChangeSlide кожні 10 секунд
setInterval(autoChangeSlide, 10000);
