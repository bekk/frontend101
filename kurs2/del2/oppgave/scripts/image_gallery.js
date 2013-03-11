/* MY IMAGE */

var MyImage = function(item) 
	// this.src_small = item.?.?.?
	// this.src_large = ?
	// this.title = ?
	// this.el = $('<img title="' + ?? + '" alt="' + ?? + '" class="image-small" src="' + ?? + '" />')
};

/* IMAGE GALLERY */

var images = [];
var stage = $('<div class="image-stage" />');

var generate_flickr_url = function(query) {
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&tags=" + query + "&tagmode=all&format=json&jsoncallback=?"
	return url;
};

var create_image_objects = function(items) {
	// $(items).each(function() {
	// 	// Her itererer vi over items, og lager et nytt bilde-objekt per item 
	//	// Objektet lagrer vi dernest i det globale images-arrayet 
	// });
};

var render_image_menu = function(number_of_images) {
	var container = $('<div class="images-nav" />');

	for(i = 0; i < number_of_images; i++) {
		var image = images[i];
		// For hvert MyImage, legg MyImage.el inn i container
		// Tips: jQuery append
	};

	return container; 
};

var start_image_gallery = function(el) {

	// Tar i mot et dom-element med jQuery-funksjoner, f.eks.
	// $('<div id="bildegalleri" />');

	var query = "beer";
	var number_of_images = 8;

	var url = generate_flickr_url(query);

	var loading_message = $("<p class='loading'>Please wait while we load some images tagged with <strong>" + query + "</strong> from Flickr</p>");

	el.html(loading_message);

	$.ajax({
		// dataType: "json"
		
		// Send med riktige parametre
		// Se presentasjonen, eller google $.ajax :-)
		// Tips: Begynn med console.log(respons) for å verifisere at du mottar data fra Flickr
	});

};