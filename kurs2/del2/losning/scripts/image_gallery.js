/* MY IMAGE */

var MyImage = function(item) {
	this.src_small = item.media.m.replace("_m", "_s");
	this.src_large = item.media.m.replace("_m", "");
	this.title = item.title;
	this.el = $('<img title="' + this.title + '" class="image-small" src="' + this.src_small + '" title="' + this.src_large + '" />')
};

MyImage.prototype.init = function() {
	this.el.on("click", function() {
		var index = $(this).index();
		display_large_image(index);
	}); 
	this.preload();
};

MyImage.prototype.preload = function() {
	// Lite triks for å forhåndslaste bildene i nettleseren, 
	// slik at applikasjonen virker mer snappy ;-)
	var large_image = new Image();
	large_image.src = this.src_large;
};

MyImage.prototype.render_large = function() {
	return '<img title="' + this.title + '" class="image-large" src="' + this.src_large + '" title="' + this.title + '" />';
};

/* IMAGE GALLERY */

var images = [];
var stage = $('<div class="image-stage" />');

var generate_flickr_url = function(query) {
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&tags=" + query + "&tagmode=all&format=json&jsoncallback=?"
	return url;
};

var create_image_objects = function(items) {
	// Vi itererer over respons, og lager et nytt bilde-objekt per item 

	$(items).each(function() {
		var item = this;
		var img = new MyImage(item); 
		img.init(); 
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

var display_large_image = function(index) {
	var image = images[index];
	var html = image.render_large(); 
	stage.html(html);
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
		dataType: "json", 
		url: url,
		success: function(response) {
			create_image_objects(response.items); 
			var html = render_image_menu(number_of_images); 
			el.prepend(html);
			el.append(stage);
			display_large_image(0);
			loading_message.remove(); 
		},
		error: function() {
			console.log("Sorry, an error occured.")
		}
	});

};