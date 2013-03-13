$(document).ready(function() {

	$('nav').addClass('animateHeight');

	$('.menuButton').click(function() {

		var menuButtonHeight = $('.menuButton').outerHeight();

		if ($('nav').hasClass('open')) {
			$('nav').removeAttr('style');
		} else {
			var menuItemsHeight = $('nav ul').outerHeight();
			var totalheight = menuItemsHeight + menuButtonHeight;
			$('nav').css('height', totalheight);
		}

		$('nav').toggleClass('open');
		
	});
});