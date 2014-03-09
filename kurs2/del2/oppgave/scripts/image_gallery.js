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


// Denne funksjonen kalles når siden er ferdig lastet
var app = function() {
    var tag = "trondheim";
};

// startup

$(document).ready(app);
