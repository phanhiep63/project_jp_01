$(window).bind('load',function(){
      AOS.init({
        easing: 'ease-in-out-sine',
		once : true,
		duration: 600,
      });
});

$(document).ready(function() {
	"use strict";
	 $('.slider').slick({
		fade: true,
        slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1500,
		centerPadding:'0',
		pauseOnHover: false,
	    pauseOnFocus: false,
		arrows: false,
		dots: false,
	});	
});


$(document).ready(function () {
	"use strict";
		var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
		if( windowWidth > 750) {			
			var scrollSpeed = 1; 
			var posX = 50;
			setInterval(function(){
				posX -= scrollSpeed; 
				$('.sec02_inner01').css("background-position",posX+"px 0px");
			}, 50);
			}
	});
	
	
// box_link
$(document).ready(function() {
"use strict";
$('.sec04_list dl').on('click' , function(){
	var href = $(this).find('a').attr('href');
	location.href = href;
});
});