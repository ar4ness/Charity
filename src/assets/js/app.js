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

  $('.donors-slider').slick({
    //accessibility: false,
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000
    //cssEase: 'linear',
    /*responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]*/
  });
});