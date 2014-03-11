/* MY IMAGE */

var MyImage = function(item) {
  this.srcSmall = item.media.m.replace("_m", "_s");
  this.srcLarge = item.media.m.replace("_m", "");
  this.title = item.title;
  this.largeImage = $('<img title="' + this.title + '" alt="' + this.title + '" class="image-large" src="' + this.srcLarge + '" />');
  this.smallImage = $('<img title="' + this.title + '" alt="' + this.title + '" class="image-small" src="' + this.srcSmall + '" />');

  var img = new Image();
  img.src = this.srcLarge;
};

/* IMAGE GALLERY */


var createImageObjects = function(items) {
  var images = [];

  // Vi itererer over respons, og lager et nytt bilde-objekt per item
  $(items).each(function() {
    var item = this;
    var img = new MyImage(item);
    images.push(img); // Vi legger til hvert bilde-objekt på slutten av arrayet
  });

  return images;
};

var renderThumbs = function(images, numberOfImages) {
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
  // var $inputField = el.find("#tagSearch");
  // var $largeImageContainer = el.find("#largeImage");

  // var images = [];

  $inputField.on("keyup", function(event){
    // Gjør et søk basert på det som står i input-feltet
  });

  $thumbsContainer.on("click", "img", function() {
    var image = $(this);
    // Vis stort bilde i largeImageContainer ved klikk på thumbnail
  });

};
