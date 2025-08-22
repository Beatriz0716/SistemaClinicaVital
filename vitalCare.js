


var swiper = new Swiper(".vitalSlider", {
    spaceBetween: 30,
    centeredSlider: true,
    loop: true,
    autoplay: {
     delay : 4500,
     disableOnInteraction: true,
    },
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});