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
        loop: false,
      },
    },
  });

  $('.js-testimonials').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
  });
}(jQuery));
