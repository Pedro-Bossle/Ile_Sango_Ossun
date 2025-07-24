const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // Default parameters

    slidesPerView: 1,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        1025: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
});
