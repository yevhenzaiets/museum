// initialization swiper ////
const swiper = new Swiper(".mini-movies-gallery-container", {
    slidesPerView: 3,
    spaceBetween: 42,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    loopFillGroupWithBlank: true,
    nested: true,
    pagination: {
      el: ".movie-bullets",
      // clickable: true,
    },
    navigation: {
      nextEl: ".next-movie-arrow",
      prevEl: ".prev-movie-arrow",
    },
    /// add adaptive design for mobile
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 41
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      390: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
});




