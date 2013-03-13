$(document).ready(function() {

	$('.menubutton').on('click', function() {

		if ($('nav').hasClass('open')) {

			$('nav.sitenav').css('height', $('.menubutton').outerHeight());	

		} else {
			var menuItems = $('nav ul').outerHeight();
			var menuButton = $('.menubutton').outerHeight()

			var totalheight = menuItems + menuButton;
			$('nav.sitenav').css('height', totalheight);
		}

		$('nav').toggleClass('open');
		
	});
});