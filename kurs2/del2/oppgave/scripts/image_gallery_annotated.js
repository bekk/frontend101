/* MY IMAGE */

var MyImage = function (item) {
  // this.srcSmall = item.?. // (Bytt ut "_m" med "_s" i image.media.m)
  // this.srcLarge = item.?.?... // (Fjern "_m" i image.media.m)
  // this.title = item.title;
  // this.smallImage = '<img title="' + ? + '" alt="' + ? + '" class="image-small" src="' + ? + '" />';

  // Lite triks for å forhåndslaste et bilde inn i nettleseren, før det vises
  var img = new Image();
  img.src = this.srcLarge;
};

/* IMAGE GALLERY */

var images = [];

var createImageObjects = function (items) {
  // $(items).each(function() {
  // 	// Her itererer vi over items, og lager et nytt bilde-objekt per item
  //	// Objektet lagrer vi dernest i det globale images-arrayet
  // });
};

var renderThumbs = function (numberOfImages) {
  var html = "";

  for(i = 0; i < numberOfImages; i++) {
    // var image = images[i];
    // For hvert MyImage, legg til MyImage.smallImage i html
  };

  return html;
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
    // lag bilde-objekter

    // render thumbnails

    // putt bildene inn i html'en!
  });
};
