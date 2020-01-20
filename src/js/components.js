(($) => {
  //toggle menu
  $('.js-nav-icon').click(function () {
    $('.nav-landing').addClass('nav-global--mobile nav-global--vertical');
  });
  $('.js-nav-global__close').click(function () {
    $('.nav-landing').removeClass('nav-global--mobile nav-global--vertical');
  });

  //toggle card details
  $('.js-card-button').on( "click", function() {
    var currentComponent = $(this).closest('.card');
    var textElement = currentComponent.find('.js-card-button-text');
    textElement.each(function () {
      var text = $(this).text();
      $(this).text(text === "View Details" ? "Hide Details" : "View Details");
    });
    currentComponent.find('.js-card-details').toggleClass('open');
    currentComponent.find('.js-card-button').toggleClass('open');
  });

  //toggle card details item

  $('.card__details-title').on( "click", function() {
    $(this).toggleClass('open');
    $(this).siblings().toggleClass('open');
  });

  //toggle filter popup

  $('.js-filter-button').on( "click", function() {
    $(this).addClass('open');
  });
  $('.js-filter-close').on( "click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('.js-filter-button').removeClass('open');
  });
})(jQuery);