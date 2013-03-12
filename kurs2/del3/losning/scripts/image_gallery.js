/* MY IMAGE */

var MyImage = function(item) {
	this.src_small = item.media.m.replace("_m", "_s");
	this.src_large = item.media.m.replace("_m", "");
	this.title = item.title;
	this.largeImage = $('<img title="' + this.title + '" alt="' + this.title + '" class="image-large" src="' + this.src_large + '" />');
	this.el = $('<img title="' + this.title + '" alt="' + this.title + '" class="image-small" src="' + this.src_small + '" />')
};

/* IMAGE GALLERY */

var images = [];

var generate_flickr_url = function(query) {
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&tags=" + query + "&tagmode=all&format=json&jsoncallback=?"
	return url;
};

var create_image_objects = function(items) {
	// Vi itererer over respons, og lager et nytt bilde-objekt per item 
	images = []; // husk på å tøm lista for hver gang
	$(items).each(function() {
		var item = this;
		var img = new MyImage(item); 
		images.push(img); // Vi legger til hvert bilde-objekt på slutten av arrayet 
	});
};

var render_image_menu = function(number_of_images) {
	var container = $('<div class="images-nav" />');

	for(i = 0; i < number_of_images; i++) {
		var image = images[i];
		container.append(image.el);
	};

	return container; 
};

var get_image_for = function (query, $renderTo) {

	var number_of_images = 8;

	var url = generate_flickr_url(query);

	var loading_message = $("<p class='loading'>Please wait while we load some images tagged with <strong>" + query + "</strong> from Flickr</p>");

	$renderTo.html(loading_message);

	$.ajax({
		dataType: "jsonp", 
		url: url,
		success: function(response) {
			create_image_objects(response.items); 
			var html = render_image_menu(number_of_images); 
			$renderTo.html(html);
		},
		error: function() {
			$renderTo.html("Sorry, an error occured.");
		}
	});
};

/* APPLICATION SETUP */


var start_image_gallery = function(el) {

	var $inputField = el.find("input");
	var $thumbs = el.find("#thumbs");
	var $largeImage = el.find("#largeImage");

	var timeoutId;
	$inputField.on("keyup", function(event){
		var keyCode = event.keyCode;

		if(keyCode >= 48 && keyCode <= 90 ||
			keyCode == 222 ||
			keyCode == 186 ||
			keyCode == 219
		){
			var tag = $(this).val();
			clearTimeout(timeoutId);
			timeoutId = setTimeout(function(){
				get_image_for(tag, $thumbs);
				$largeImage.hide();
			}, 1000);
		}
	});

	$thumbs.on("click", "img", function() {
		var $image = $(this);
		var index = $image.index();

		var imageModel = images[index];
		var imageTitleHtml = '<div class="title">' + imageModel.title + "</div>";

		$largeImage.html([imageModel.largeImage, imageTitleHtml]).show();
	});
	


	// Tar i mot et dom-element med jQuery-funksjoner, f.eks.
	// $('<div id="bildegalleri" />');



};