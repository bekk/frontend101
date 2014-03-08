/* MY IMAGE */

var MyImage = function (item) {
  this.srcSmall = item.media.m.replace("_m", "_s");
  this.srcLarge = item.media.m.replace("_m", "");
  this.title = item.title;
  this.largeImage = $('<img title="' + this.title + '" alt="' + this.title + '" class="image-large" src="' + this.srcLarge + '" />');
  this.smallImage = $('<img title="' + this.title + '" alt="' + this.title + '" class="image-small" src="' + this.srcSmall + '" />');

  // Forhåndslaster bildene
  var img = new Image();
  img.src = this.srcLarge;
};

/* IMAGE GALLERY */

var images = [];

var createImageObjects = function(items) {
  // Vi itererer over respons, og lager et nytt bilde-objekt per item
  $(items).each(function() {
    var item = this;
    var img = new MyImage(item);
    images.push(img); // Vi legger til hvert bilde-objekt på slutten av arrayet
  });
};

var renderThumbs = function(numberOfImages) {
  var container = $('<div class="images-nav" />');

  for(i = 0; i < numberOfImages; i++) {
    var image = images[i];
    container.append(image.smallImage);
  };

  return container;
};

/* APPLICATION SETUP */

var startImageGallery = function(el) {

  // Tar i mot et dom-element med jQuery-funksjoner, f.eks.
  // $('<div id="bildegalleri" />');

  var $thumbsContainer = el.find("#thumbs");
  var tag = "trondheim";

  var $loadingMessage = $("<p class='loading'>Please wait while we load some images tagged with <strong>" + tag + "</strong> from Flickr</p>");

  $thumbsContainer.html($loadingMessage);

  Flickr.search(tag, function (images) {
    if (images.length == 0) {
      $thumbsContainer.html("Oups, no images found.");
    }

    createImageObjects(images);

    var html = renderThumbs(8);
    $thumbsContainer.html(html);
  })

};
