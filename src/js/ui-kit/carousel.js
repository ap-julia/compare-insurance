(function ($) {
  $('.js-partners').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        center: true,
        items: 3,
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
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    items: 1,
    nav: true,
  });
}(jQuery));
