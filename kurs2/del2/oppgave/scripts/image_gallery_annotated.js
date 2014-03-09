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
    // rendre og returner html strengen
    // <img alt="bildebeskrivelse" src="full bildeurl">
};

var renderThumbs = function(images, numberOfImages) {
    // rendre og returner html streng
    // <div id="thumbs"> [.. alle thumbnails ..]</div>;
};


// Denne funksjonen kalles når siden er ferdig lastet
var app = function() {
    var tag = "trondheim";

    // Vis lastetekst

    // hent data fra flickr

    // rendre thumbnails
};

// startup

$(document).ready(app);
