// utilities

var generateFlickrUrl = function(query) {
	return "http://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&tags=" + query + "&tagmode=all&format=json&jsoncallback=?"
};

var getDataFromFlickr = function(url, successCallback, errorCallback) {

	$.ajax({
		dataType: "jsonp",
		url: url,
		success: successCallback,
		error: errorCallback
	});

};


// application

var renderThumbItem = function(image) {
	var url = image.media.m.replace("_m", "_s");
	var title = image.title;

	return '<img alt="' + title + '" src="' + url + '" />';
};

var renderThumbs = function(images, numberOfImages) {
	var html = "";
	var imagesToRender = (numberOfImages < images.length) ? numberOfImages : images.length;

	for (var i = 0; i < imagesToRender; i++) {
		html += renderThumbItem(images[i]);
	};

	return '<div id="thumbs">' + html + "</div>";
};


// Denne funksjonen kalles når siden er ferdig lastet
var app = function() {
	var tag = "trondheim";
	var url = generateFlickrUrl(tag);
	var $appElement = $("#image_gallery")


	var loadingHtml = "<p class='loading'>Please wait while we load some images tagged with <strong>" + tag + "</strong> from Flickr</p>";

	$appElement.html(loadingHtml);


	getDataFromFlickr(url, function(response) {
		var thumbsHtml = renderThumbs(response.items, 10);
		$appElement.html(thumbsHtml);
	}, function() {
		alert("Ops! something went wrong");
	});
};

// startup

$(document).ready(app);
