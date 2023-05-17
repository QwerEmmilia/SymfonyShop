$(document).ready(function() {
    $('#carouselSlide').slick({
        slidesToShow: 5, // Кількість видимих слайдів одночасно
        slidesToScroll: 1, // Кількість слайдів для прокрутки
        prevArrow: '<button class="custom-prev-btn"><i class=\'bx bx-chevron-right bx-flip-horizontal\'></i></button>', // Кнопка "Назад" з використанням іконки FontAwesome
        nextArrow: '<button class="custom-next-btn"><i class=\'bx bx-chevron-right bx-flip-vertical\'></i></button>', // Кнопка "Вперед" з використанням іконки FontAwesome
        responsive: [
            {
                breakpoint: 768, // Зміна конфігурації при ширині екрану менше 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576, // Зміна конфігурації при ширині екрану менше 576px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function() {
    $('#carouselSlideTop').slick({
        slidesToShow: 5, // Кількість видимих слайдів одночасно
        slidesToScroll: 1, // Кількість слайдів для прокрутки
        prevArrow: '<button class="custom-prev-btn"><i class=\'bx bx-chevron-right bx-flip-horizontal\'></i></button>', // Кнопка "Назад" з використанням іконки FontAwesome
        nextArrow: '<button class="custom-next-btn"><i class=\'bx bx-chevron-right bx-flip-vertical\'></i></button>', // Кнопка "Вперед" з використанням іконки FontAwesome
        responsive: [
            {
                breakpoint: 768, // Зміна конфігурації при ширині екрану менше 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576, // Зміна конфігурації при ширині екрану менше 576px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})

;$(document).ready(function() {
    $('#carouselSlideGoods').slick({
        slidesToShow: 5, // Кількість видимих слайдів одночасно
        slidesToScroll: 1, // Кількість слайдів для прокрутки
        prevArrow: '<button class="custom-prev-btn"><i class=\'bx bx-chevron-right bx-flip-horizontal\'></i></button>', // Кнопка "Назад" з використанням іконки FontAwesome
        nextArrow: '<button class="custom-next-btn"><i class=\'bx bx-chevron-right bx-flip-vertical\'></i></button>', // Кнопка "Вперед" з використанням іконки FontAwesome
        responsive: [
            {
                breakpoint: 768, // Зміна конфігурації при ширині екрану менше 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576, // Зміна конфігурації при ширині екрану менше 576px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

