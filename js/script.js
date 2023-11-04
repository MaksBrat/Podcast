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

const openModalButtons = document.querySelectorAll('.openModalBtn');
const submitFormBtn = document.getElementById("submitFormBtn");
const modal = document.getElementById("modal");

function toggleModal(show) {
    const modalStyle = modal.style;
    const bodyStyle = document.body.style;

    if (show) {
        modalStyle.opacity = "1";
        modalStyle.visibility = "visible";
        bodyStyle.overflow = 'hidden';
    } else {
        modalStyle.opacity = "0";
        modalStyle.visibility = "hidden";
        bodyStyle.overflow = 'auto';
    }
}

openModalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        toggleModal(true);
    });
});

submitFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleModal(false);
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        toggleModal(false);
    }
});

