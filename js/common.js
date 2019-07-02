$(function(){

	$('.btn_menu_sp').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('sp_nav_open');
	});	
	
	$('.sp_nav a').click(function(){
		$('.btn_menu_sp').toggleClass('active');
		$('body').toggleClass('sp_nav_open');
	});
	
	$('.sp_nav .has-sub').click(function(){
		$(this).toggleClass('is-active');
	});
	

    $(window).scroll(function() {
        vW = $(window).width();
		
		scrollTop = $(this).scrollTop();
		
		if (scrollTop > 100)
			$('#totop').fadeIn();
		else 
			$('#totop').fadeOut();
		
		if (scrollTop >= $('header').outerHeight()) 
			$('.top_scroll').addClass('is-active');
		else
			$('.top_scroll').removeClass('is-active');

		if(scrollTop >= 5)
			$('body').addClass('sp_header_fixed');
		else
			$('body').removeClass('sp_header_fixed');
		
    });
	
	
});

// anchor in page
$(window).bind('load', function () {
	"use strict";
	$(function () {
		$('a[href^="#"]').click(function () {
			var id = $(this).attr('href')
			if ($(id).length) {
				scrollTop($(id).offset().top);
			}
			return false;
		});
		
		var hash = location.hash;
		if (hash) {
			scrollTop($(hash).offset().top);
		}
		
		function scrollTop(offsetTop){
			
			var $fix = 80;
			if($(window).width() <= 640)
				$fix = 55;
			
			$('html,body').animate({scrollTop: offsetTop - $fix }, 400);
			
		}
	});
});