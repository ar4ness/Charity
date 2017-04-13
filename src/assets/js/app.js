$(document).foundation();
$(document).ready(function() {
  $('.header-slider').slick({
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'linear',
    mobileFirst: true
  });



});