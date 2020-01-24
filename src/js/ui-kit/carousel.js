(function ($) {
  $('.js-partners').owlCarousel({
    loop: true,
    responsiveClass: true,
    center: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 5,
        nav: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
      },
    },
  });

  $('.js-testimonials').owlCarousel({
    loop: true,
    items: 1,
    center: true,
    0: {
      nav: false,
    },
    600: {
      nav: true,
      autoplay: true,
      autoplaySpeed: 2000,
      autoplayHoverPause: true,
    },
  });
}(jQuery));
