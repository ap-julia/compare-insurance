$(() => {
  const sliderRange = $('#slider-range');
  sliderRange.slider({
    range: true,
    min: 1000,
    max: 10000,
    values: [2000, 5000],
    slide(event, ui) {
      $('.slider__label-min').text(ui.values[0]);
      $('.slider__label-max').text(ui.values[1]);
    },
  });

  var sliders = $('.ui-slider-handle');
  var labelLeft = document.createElement('span');
  labelLeft.classList.add('slider__label-min');
  labelLeft.innerHTML = sliderRange.slider('values', 0);
  sliders[0].appendChild(labelLeft);
  var labelRight = document.createElement('span');
  labelRight.classList.add('slider__label-max');
  labelRight.innerHTML = sliderRange.slider('values', 1);
  sliders[1].appendChild(labelRight);
});
