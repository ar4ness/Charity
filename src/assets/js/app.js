$(document).foundation();
$(document).ready(function() {
  $('.header-slider').slick({
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    mobileFirst: true
  });
});