// function toggleSortOptions() {
//     var sortOptions = document.getElementById('sort-options');
//     if (sortOptions.style.display === 'none' || sortOptions.style.display === '') {
//         sortOptions.style.display = 'block';
//     } else {
//         sortOptions.style.display = 'none';
//     }
// }
//
// document.addEventListener('click', function(event) {
//     var target = event.target;
//     var sortLabel = document.querySelector('.sort-label');
//     var sortOptions = document.getElementById('sort-options');
//
//     if (target !== sortLabel && !sortOptions.contains(target)) {
//         sortOptions.style.display = 'none';
//     }
// });
//
// document.addEventListener('click', function(event) {
//     var target = event.target;
//     var priceToggle = document.getElementById('price-toggle');
//     var priceOptions = document.getElementById('price-options');
//
//     if (target !== priceToggle && !priceOptions.contains(target)) {
//         priceOptions.style.display = 'none';
//     }
// });
//
//
// function togglePriceOptions() {
//     var priceOptions = document.getElementById('price-options');
//     if (priceOptions.style.display === 'none' || priceOptions.style.display === '') {
//         priceOptions.style.display = 'block';
//     } else {
//         priceOptions.style.display = 'none';
//     }
// }
//
// document.addEventListener("DOMContentLoaded", function() {
//     // Отримання параметра "sort" з URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const sortParam = urlParams.get("sort");
//
//     // Встановлення вибраного значення відповідно до параметра "sort"
//     if (sortParam) {
//         const radioOption = document.querySelector(`input[name="sort-option"][value="${sortParam}"]`);
//         if (radioOption) {
//             radioOption.checked = true;
//         }
//     }
// });
//
// function applySorting() {
//     var minPriceInput = document.getElementById('min-price-input');
//     var maxPriceInput = document.getElementById('max-price-input');
//
//     var minPrice = minPriceInput.value;
//     var maxPrice = maxPriceInput.value;
//
//     // Отримуємо поточний URL-адрес
//     var currentUrl = window.location.href;
//
//     // Перевіряємо, чи в URL вже є параметр ціни
//     var minPriceParamIndex = currentUrl.indexOf('min-price=');
//     var maxPriceParamIndex = currentUrl.indexOf('max-price=');
//
//     if (minPriceParamIndex !== -1 && maxPriceParamIndex !== -1) {
//         // Якщо параметри ціни вже існують, ми замінюємо їх значення
//         var newUrl = currentUrl.replace(/min-price=([^&]*)/, 'min-price=' + minPrice)
//             .replace(/max-price=([^&]*)/, 'max-price=' + maxPrice);
//         window.location.href = newUrl;
//     } else if (minPriceParamIndex !== -1) {
//         // Якщо параметр min-price вже існує, а параметр max-price ні, ми додаємо параметр max-price до URL
//         var newUrl = currentUrl + '&max-price=' + maxPrice;
//         window.location.href = newUrl;
//     } else if (maxPriceParamIndex !== -1) {
//         // Якщо параметр max-price вже існує, а параметр min-price ні, ми додаємо параметр min-price до URL
//         var newUrl = currentUrl + '&min-price=' + minPrice;
//         window.location.href = newUrl;
//     } else {
//         // Якщо ні одного з параметрів ціни немає, ми додаємо їх до URL
//         if (currentUrl.indexOf('?') !== -1) {
//             // Якщо в URL вже є інші параметри, ми просто додаємо нові параметри ціни
//             window.location.href = currentUrl + '&min-price=' + minPrice + '&max-price=' + maxPrice;
//         } else {
//             // Якщо в URL немає інших параметрів, ми додаємо нові параметри ціни зі знаком питання
//             window.location.href = currentUrl + '?min-price=' + minPrice + '&max-price=' + maxPrice;
//         }
//     }
// }


function toggleSortOptions() {
    var sortOptions = document.getElementById('sort-options');
    if (sortOptions.style.display === 'none' || sortOptions.style.display === '') {
        sortOptions.style.display = 'block';
    } else {
        sortOptions.style.display = 'none';
    }
}

document.addEventListener('click', function(event) {
    var target = event.target;
    var sortLabel = document.querySelector('.sort-label');
    var sortOptions = document.getElementById('sort-options');

    if (target !== sortLabel && !sortOptions.contains(target)) {
        sortOptions.style.display = 'none';
    }
});

function togglePriceOptions() {
    var priceOptions = document.getElementById('price-options');
    if (priceOptions.style.display === 'none' || priceOptions.style.display === '') {
        priceOptions.style.display = 'block';
    } else {
        priceOptions.style.display = 'none';
    }
}

document.addEventListener('click', function(event) {
    var target = event.target;
    var priceToggle = document.getElementById('price-toggle');
    var priceOptions = document.getElementById('price-options');

    if (target !== priceToggle && !priceOptions.contains(target)) {
        priceOptions.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Отримання параметра "sort" з URL
    const urlParams = new URLSearchParams(window.location.search);
    const sortParam = urlParams.get("sort");

    // Встановлення вибраного значення відповідно до параметра "sort"
    if (sortParam) {
        const radioOption = document.querySelector(`input[name="sort-option"][value="${sortParam}"]`);
        if (radioOption) {
            radioOption.checked = true;
        }
    }
});

function applySorting() {
    var selectedOption = document.querySelector('input[name="sort-option"]:checked').value;
    var minPrice = document.querySelector('input[name="min-price"]').value;
    var maxPrice = document.querySelector('input[name="max-price"]').value;

    // Отримуємо поточний URL-адресу
    var currentUrl = new URL(window.location.href);
    var searchParams = currentUrl.searchParams;

    // Оновлюємо параметр сортування
    searchParams.set('sort', selectedOption);

    // Оновлюємо параметри мінімальної та максимальної ціни
    searchParams.set('min-price', minPrice);
    searchParams.set('max-price', maxPrice);

    // Оновлюємо URL-адресу з оновленими параметрами
    currentUrl.search = searchParams.toString();
    var newUrl = currentUrl.toString();

    // Перенаправляємо на оновлену URL-адресу
    window.location.href = newUrl;
}
