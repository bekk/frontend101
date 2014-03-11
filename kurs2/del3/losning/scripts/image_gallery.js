/* MY IMAGE */

var MyImage = function(item) {
  this.srcSmall = item.media.m.replace("_m", "_s");
  this.srcLarge = item.media.m.replace("_m", "");
  this.title = item.title;
  this.largeImage = $('<img title="' + this.title + '" alt="' + this.title + '" class="image-large" src="' + this.srcLarge + '" />');
  this.smallImage = $('<img title="' + this.title + '" alt="' + this.title + '" class="image-small" src="' + this.srcSmall + '" />')

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
  }

  return container;
};

/* APPLICATION SETUP */

var startImageGallery = function(el) {

  // Tar i mot et dom-element med jQuery-funksjoner, f.eks.
  // $('<div id="bildegalleri" />');

  var $inputField = el.find("#tagSearch");
  var $thumbsContainer = el.find("#thumbs");
  var $largeImageContainer = el.find("#largeImage");

  var images = [];

  var timeoutId;

  $inputField.on("keyup", function(event){
    var tag = $(this).val();

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      // Venter litt, slik at søket ikke fyres
      // av hver gang man trykker på en tast
      Flickr.search(tag, function (items) {
        if (items.length == 0) {
          $thumbsContainer.html("Oups, no images found.");
          return;
        }

        images = createImageObjects(items);

        var html = renderThumbs(images, 8);
        $thumbsContainer.html(html);
      });
    }, 500);
  });

  $thumbsContainer.on("click", "img", function() {
    var $image = $(this);
    var index = $image.index();

    var image = images[index];
    var imageTitleHtml = '<div class="title">' + image.title + "</div>";

    $largeImageContainer.html([image.largeImage, imageTitleHtml]).show();
  });
};
