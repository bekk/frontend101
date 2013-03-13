$(document).ready(function() {

	$('.menubutton').click(function() {

		var menuButtonHeight = $('.menubutton').outerHeight()

		if ($('nav').hasClass('open')) {
			$('nav.sitenav').css('height', menuButtonHeight);	
		} else {
			var menuItemsHeight = $('nav ul').outerHeight();
			var totalheight = menuItemsHeight + menuButtonHeight;
			$('nav.sitenav').css('height', totalheight);
		}

		$('nav').toggleClass('open');
		
	});
});