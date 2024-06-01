$(function(){
    $('.btn').click(function(){
        $('.btn').toggleClass('.menu')
        $('.burger').toggleClass('close')
        $('.closure').toggleClass('close')
        $('.menu').toggleClass('close')
        $('.menu-bg').toggleClass('close')
    })
})

const swipet= new Swiper('.swiper',{
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  grid: {
    rows: 3,
  },
  breakpoints: {
    992: {      
      grid: { 
        rows: 1,
      },
      slidesPerView: 3,
      spaceBetween: 24,
    }
  }
});