var swiper = new Swiper(".workSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      scale: 1,
      modifier: 1,
      slideShadows: true,
    },
    grabCursor: true,
    initialSlide: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: "auto",
            coverflowEffect: {
                stretch: 250,
            },
        },
    }
});