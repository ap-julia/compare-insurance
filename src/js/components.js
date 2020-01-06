(($) => {
  //toggle menu
  $('.js-nav-icon').click(function () {
    $('.nav-global').addClass('nav-global--mobile nav-global--vertical');
  });
  $('.js-nav-global__close').click(function () {
    $('.nav-global').removeClass('nav-global--mobile nav-global--vertical');
  });

  //toggle card details
  $('.js-card-button').on( "click", function( event ) {
    var currentComponent = $(event.target).closest('.card');
    currentComponent.find('.js-card-details').toggleClass('open');
    currentComponent.find('.js-card-button').toggleClass('open');
  });

  //toggle card details item

  $('.card__details-title').on( "click", function( event ) {
    $(event.target).siblings().toggleClass('open');
  });
})(jQuery);