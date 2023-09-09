const podcastSlider = new Swiper('.podcast__slider', {
    direction: 'horizontal',
    spaceBetween: 20,
    slidesPerView: 'auto',
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    pauseOnMouseEnter: true,
});

const listenersSlider = new Swiper('.listeners__slider', {
    direction: 'horizontal',
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});