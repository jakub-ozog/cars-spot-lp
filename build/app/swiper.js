const swiperContainer = document.querySelector('.swiper-tabs')

const swiperCars = new Swiper('#slider-cars', {
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        clickable: true,
        el: '#swiper-pag-cars',
    },
    on: {
        init: function () {
            const pagination = document.querySelector('#swiper-pag-cars');
            pagination.style.bottom = '-6.5rem';

            const sliderContainer = document.querySelector('#slider-cars')
            updateOverflow(sliderContainer);

            function updateOverflow(container) {
                if (window.innerWidth >= 1500) {
                    container.style.overflow = 'hidden'
                } else if (window.innerWidth <= 1400) {
                    container.style.overflow = 'revert-layer'
                }
                else {
                    container.style.overflow = 'visible'
                }
            }
            window.addEventListener('resize', () => updateOverflow(sliderContainer));
        },
    },
    breakpoints: {
        0: {
            spaceBetween: 3,
        },
        576: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        996: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        1240: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1440: {
            slidesPerView: 2.3,
            spaceBetween: 40,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});

const swiperTrucks = new Swiper('#slider-trucks', {
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        clickable: true,
        el: '#swiper-pag-trucks',
    },
    on: {
        init: function () {
            const elHidden = document.querySelector('#slider-trucks');
            elHidden.style.display = 'none'
            const pagTrucks = document.querySelector('#swiper-pag-trucks')
            pagTrucks.style.display = 'none'
            pagTrucks.style.bottom = '-6.5rem';

            const sliderContainer = document.querySelector('#slider-trucks')
            updateOverflow(sliderContainer);

            function updateOverflow(container) {
                if (window.innerWidth >= 1500) {
                    container.style.overflow = 'hidden'
                } else if (window.innerWidth <= 1400) {
                    container.style.overflow = 'revert-layer'
                } else {
                    container.style.overflow = 'visible'
                }
            }
            window.addEventListener('resize', () => updateOverflow(sliderContainer));
        },
    },
    breakpoints: {
        0: {
            spaceBetween: 3,
        },
        576: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        996: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        1240: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1440: {
            slidesPerView: 2.3,
            spaceBetween: 40,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});

swiperContainer.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (event) => {
        const clickedTab = event.target;

        swiperContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active-tab'));
        clickedTab.classList.add('active-tab');

        document.querySelectorAll('.swiper').forEach(swiper => swiper.style.display = 'none');
        document.querySelectorAll('.swiper-pagination').forEach(pagination => {
            pagination.style.display = 'none';
        });

        const sliderType = clickedTab.id.replace('tab-', '');
        const activeSlider = document.getElementById(`slider-${sliderType}`);
        const activePag = document.getElementById(`swiper-pag-${sliderType}`)

        if (activeSlider) {
            activeSlider.style.display = 'block'
        }

        if (activePag) {
            activePag.style.display = 'block'
        }

        if (sliderType === 'cars') {
            swiperCars.update();
        } else if (sliderType === 'trucks') {
            swiperTrucks.update();
        }
    });
});