// application

var renderThumbItem = function(image) {
    // rendre og returner html strengen
    // <img alt="bildebeskrivelse" src="full bildeurl">
};

var renderThumbs = function(images, numberOfImages) {
    // rendre og returner html streng
    // <div id="thumbs"> [.. alle thumbnails ..]</div>;
};


// Denne funksjonen kalles når siden er ferdig lastet
var app = function() {
    var $app = $("#image_gallery");
    var tag = "trondheim";

    // Vis lastetekst

    // hent data fra flickr
    // Flickr.search(tag, function (items) {
    // ...
    // });

    // rendre thumbnails
};

// startup

$(document).ready(app);
