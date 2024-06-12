$('.major__slider-wrapper').slick({
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  // autoplay: true,
  //     autoplaySpeed: 5000,
  prevArrow: $('.major__prev'),
  nextArrow: $('.major__next'),
});

$('.experts__slider_wrapper').slick({
  infinite: true,
  speed: 300,
  fade: false,
  cssEase: 'linear',
  slidesToShow:4,
  centerMode:false,
  slidesToScroll:1,
  variableWidth: true,
  prevArrow: $('.experts__prev'),
  nextArrow: $('.experts__next'),
  cssEase:'ease-in-out',
  responsive: [
    {
      breakpoint: 801,
      settings: { 
        speed: 1000,
      }
    }
]
});
$('.idea__slider_wrapper').slick({
  infinite: true,
  speed: 300,
  fade: false,
  cssEase: 'linear',
  slidesToShow:1,
  centerMode:false,
  slidesToScroll:1,
  variableWidth: false,
  prevArrow: $('.idea__prev'),
  nextArrow: $('.idea__next'),
  cssEase:'ease-in-out',
  responsive: [
    {
      breakpoint: 801,
      settings: { 
        speed: 1000,
      }
    }
]
});
$('.news__slider_wrapper').slick({
  infinite: true,
  speed: 300,
  fade: false,
  cssEase: 'linear',
  slidesToShow:3,
  centerMode:false,
  slidesToScroll:1,
  variableWidth: true,
  prevArrow: $('.news__prev'),
  nextArrow: $('.news__next'),
  cssEase:'ease-in-out',
  responsive: [
    {
      breakpoint: 801,
      settings: { 
        speed: 1000,
      }
    }
]
});

$('.support__stategic__wrapper').slick({
 infinite: true,
  speed: 8000,
  fade: false,
  cssEase: 'linear',
  slidesToShow:1,
  centerMode:false,
  slidesToScroll:1,
  variableWidth: true,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 0,
  responsive: [
    {
      breakpoint: 801,
      settings: { 
        rows: 2,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
]
});
$('.support__info_wrapper').slick({
  infinite: true,
  speed: 8000,
  fade: false,
  cssEase: 'linear',
  slidesToShow:1,
  centerMode:false,
  slidesToScroll:1,
  variableWidth: true,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 0,
  rtl:true,
  responsive: [
    {
      breakpoint: 801,
      settings: { 
        rows: 2,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
]
});

$('.header__burger').click(function(){
  $(this).toggleClass('active');
  $('.header__nav').toggleClass('active');
})

