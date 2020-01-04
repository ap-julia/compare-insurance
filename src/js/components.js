(($) => {
  $('.js-nav-icon').click(function () {
    $('.nav-global').addClass('nav-global--mobile nav-global--vertical');
  });
  $('.js-nav-global__close').click(function () {
    $('.nav-global').removeClass('nav-global--mobile nav-global--vertical');
  });
})(jQuery);