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
  var $appElement = $("#image_gallery")

  var tag = "trondheim";
  Flickr.search(tag, function (items) {
    if (items.length == 0) {
      $appElement.html("Oups, no images found.");
      return;
    }

    var thumbsHtml = renderThumbs(items, 10);
    $appElement.html(thumbsHtml);
  });
};

// startup

$(document).ready(app);
