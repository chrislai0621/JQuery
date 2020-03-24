$(document).ready(function() {
	$('.banner .menu>li>a').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
		$(this).parent().find('.course').slideToggle();//顯示子選單
		$(this).parent().siblings().find('.course').slideUp();//隱藏其他選單的子選單
	});

	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
	effect:'fade',
	speed:1000,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 1000,
    }
  })

   lightbox.option({
	  'fadeDuration':100,
      'wrapAround': true
    })

   $('.fa-arrow-up').click(function(event) {
   	event.preventDefault();
   	$('html,body').animate({
        scrollTop: 0
    }, 500);
   });
});