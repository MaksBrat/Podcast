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

const sponsorSlider = new Swiper('.sponsor__slider', {
    direction: 'horizontal',
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("burger-nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

(() => {
    const includes = document.getElementsByTagName('include');
    [].forEach.call(includes, i => {
        let filePath = i.getAttribute('src');
        fetch(filePath).then(file => {
            file.text().then(content => {
                i.insertAdjacentHTML('afterend', content);
                i.remove();
            });
        });
    });
})();