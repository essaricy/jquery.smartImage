/*
 * jquery.smartImage.js plugin 1.0
 *
 * https://github.com/essaricy/jquery.smartImage
 * Copyright (c) 2016 Srikanthkumar Ragi
 * Date: Thu Jul 07 2016 16:51 GMT+0000
 *
 * Licensed under the MIT:
 * http://www.apache.org/licenses/LICENSE-2.0
 */

(function($){
  $.fn.smartImage = function(options) {
    var settings = $.extend({
      // Below are the default settings.
      "load-image": null,
      "retry-max": 0,
      "retry-delay": 0,
      "place-holder": null,
      "error-image": null
    }, options );

	var attempt = 1;
	var imageId = $(this).attr('id');
	var loadImage = settings["load-image"];
	var errorImage = settings["error-image"];
	var retryMax = settings["retry-max"];
	var placeHolder = settings["place-holder"];

	if (imageId == null) {
		throw 'jquery.smartImage - "id" is not set for <img>';
	}
	if (loadImage == null) {
		throw 'jquery.smartImage - "load-image" is not set for: ' + imageId;
	}
	if (errorImage == null) {
		throw 'jquery.smartImage - "error-image" is not set for: ' + imageId;
	}
	if (retryMax != 0 && placeHolder == null) {
		throw 'jquery.smartImage - "retry-max" has value but ""place-holder" is not specified';
	}

	fnValidateImage($(this));
	if (placeHolder != null) {
		this.attr('src', placeHolder);
	}

	function fnValidateImage(oImg) {
		if (attempt <= parseInt(retryMax)-1) {
			console.log('Loading image for: ' + imageId + ' (' + attempt + ')');

			img = new Image();
			img.onerror = function() {
				setTimeout(function (){fnValidateImage(oImg);}, settings["retry-delay"]);
			};
			img.onload = function() {
				console.log('Loaded image for: ' + imageId + ' (' + (attempt-1) + ')');
				$(oImg).attr('src', img.src);
			};
			img.src = loadImage;
		} else {
			console.log('Loading image failed for: ' + imageId + ' (' + attempt + '). Setting src to "error-image"');
			$(oImg).attr('src', errorImage);
		}
		attempt++;
	};
  };
}(jQuery));