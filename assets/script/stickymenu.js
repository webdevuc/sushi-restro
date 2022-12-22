jQuery(document).ready(function($){
	"use strict";
	
	var stickyzone = $('.stickymenu-zone');
	var stickyNavTop = 10;

	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();
		     
		if (scrollTop > stickyNavTop) { 
		   stickyzone.addClass('sticky-menu-activate');
		   $('body').removeClass('sticky-menu-off').addClass('sticky-menu-on')
		   $('#toggle-menu').removeClass('toggle-menu-open');
		   $('body').removeClass('minimal-menu-fadein');
		} else {
		   stickyzone.removeClass('sticky-menu-activate'); 
		   $('body').addClass('sticky-menu-off').removeClass('sticky-menu-on');
		}
	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});
});