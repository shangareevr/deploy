$('.experts__slider_wrapper').slick({
  infinite: true,
  speed: 300,
  fade: false,
  cssEase: 'linear',
  slidesToShow:4,
  centerMode:false,
  slidesToScroll:1,
  variableWidth: true,
  cssEase:'ease-in-out',
  prevArrow: $('.experts__prev'),
  nextArrow: $('.experts__next'),
});

$('.winner__border').click(function(){
  if(!$(this).hasClass('active')){
    $('.winner__border').removeClass('active');
    $(this).addClass('active');
    $('.winner__list').hide();
    $(this).closest('.winner__wrapper').find('.winner__list').eq($(this).index()).fadeIn();
  }
})
$('.winner__list').not(':first').hide();
$('.winner__border').first().addClass('active');
$('.tab__item').not(':first').hide();
const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');
$('.__select__content').hide();
// Toggle menu
selectSingle.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
    $('.select__content').hide();
  } else {
    selectSingle.setAttribute('data-state', 'active');
    $('.select__content').show().css('display','flex');
  }
});

const tabs = document.querySelectorAll('.tab__item');
selectSingle_labels.forEach((label,index)=>{
  label.addEventListener('click', e=>{
    selectSingle_title.textContent = e.target.textContent;
    document.querySelector('.res__date').textContent = `${e.target.textContent}`+'a';
    selectSingle.setAttribute('data-state', '');
    $('.select__content').hide();
    tabs.forEach((tab, idx)=>{
      $(tab).hide();
      if(idx === index){
        $(tab).show()
      }
    })
  })
});

$('.header__burger').click(function(){
  $(this).toggleClass('active');
  $('.header__nav').toggleClass('active');
})

