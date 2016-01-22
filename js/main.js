$(document).ready(function(){
	//cache the window object
	var $window = $(window);

	$('section[data-type="background"]').each(function(){
		var $bgObj = $(this); //assigning the object

		$window.scroll(function(){
			//scroll bg at var speed
			//the yPos is a neg value when scrolling up
			var yPos = -($window.scrollTop() / $bgObj.data('speed'));
			// put together final background position
			var coords = '50% ' + yPos + 'px';
			//move the background
			$bgObj.css({ backgroundPosition: coords});
		});
	});


	$('.gallery').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});
});
      		