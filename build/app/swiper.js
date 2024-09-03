const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },

    on: {
        init: function () {
            const pagination = document.querySelector('.swiper-pagination');
            pagination.style.bottom = '-3.5rem'; 
        },
    },
});