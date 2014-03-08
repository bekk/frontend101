var Flickr = {};

Flickr.search = function (tag, fn) {

  tag = $.trim(tag);

  var url = "http://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&tags=" + tag + "&tagmode=all&format=json&jsoncallback=?"

  $.ajax({
    dataType: "jsonp",
    url: url,
    success: function (response) {
      fn(response.items);
    },
    error: function () {
      fn([]);
    }
  });
};
