// application

var renderThumbItem = function(image) {
  var url = image.media.m.replace("_m", "_s");
  var largeUrl = image.media.m.replace("_m", "");
  var title = image.title;

  return '<a href="' + largeUrl + '"><img alt="' + title + '" src="' + url + '" /></a>';
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

  return '<img src="' + imageUrl + '" /><div class="title">' + title + "</div>";
};


// Denne funksjonen kalles når siden er ferdig lastet
var app = function() {
  var $app = $("#image_gallery");
  var $thumbs = $app.find("#thumbs");
  var $inputField = $app.find("#tagSearch");
  var $largeImage = $app.find("#largeImage");


  // setup søkefelt
  var timeoutId;

  $inputField.on("keyup", function(event){
    var tag = $(this).val();

    clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
      $largeImage.hide();

      $thumbs.html("loading the awsome " + tag);
      // Venter litt, slik at søket ikke fyres
      // av hver gang man trykker på en tast
      Flickr.search(tag, function (items) {
        if (items.length == 0) {
          $thumbs.html("Oups, no images found...");
          return;
        }

        var thumbsHtml = renderThumbs(items, 10);
        $thumbs.html(thumbsHtml);
      });
    }, 500);
  });

  // setup klikk eventer
  $thumbs.on("click", "a", function(event) {
    event.preventDefault();

    var $image = $(this);
    var url = $image.attr("href");
    var title = $image.find("img").attr("alt");

    var largeImageHtml = renderLargeImage(url, title);
    $largeImage.html(largeImageHtml).show();
  });

};

// startup

$(document).ready(app);
