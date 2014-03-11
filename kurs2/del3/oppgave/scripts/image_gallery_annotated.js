// application

var renderThumbItem = function(image) {
  // wrap img-taggen i en a-tag med href (link) til store versjonen av bilde
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


var renderLargeImage = function(imageUrl, title) {
  // rendere og returner html strengen
  // <img src="bildeurl" /><div class="title">bildetittel</div>;
};

// Denne funksjonen kalles når siden er ferdig lastet
var startImageGallery = function() {
  var $app = $("#image_gallery");
  var $thumbs = $app.find("#thumbs");

  // var $inputField = $app.find("#tagSearch");
  // var $largeImage = $app.find("#largeImage");


  $inputField.on("keyup", function(event){
    // Gjør et søk basert på det som står i input-feltet

    // $thumbs.html("loading the awsome " + tag);

  });

  $thumbsContainer.on("click", "a", function(event) {
    event.preventDefault();
    var image = $(this);
    // Vis stort bilde i largeImageContainer ved klikk på thumbnail
    // renderLargeImage(url, title);
    // $largeImage.html(largeImageHtml).show();

  });

};

// startup
$(document).ready(app);