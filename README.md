#jquery.smartImage
This plugin is mostly useful when you want to show an image on the webpage which is still not ready or getting processed on the server side but you know it will be available very soon. Instead of displaying a broker image, this plugin displays a place holder image till the image on the server side is available. Once the image is available, this plugin display the available image.

# Installation
Include jquery.smartImage plugin

    <script type="text/javascript" src="js/jquery.smartImage.min.js"></script>

Invoke jquery.smartImage plugin on your image using selector.

    $('#myImage').smartImage({
	"load-image": 'images/available.jpg',
	"place-holder": 'images/loading.png',
	"error-image": 'images/unavailable.jpg',
	"retry-max": 5,
	"retry-delay": 5000
    });

# Options
### load-image (Required)
URL of the image to load.

### error-image (Required)
URL of the image when unable to load the actual image after given number of attempts.

### place-holder (Optional)
URL of the place holder image when failing to load the actual image.

### retry-delay (Optional)
Delay in milli-seconds for each retry. Default value is 0, which means no delay.

### retry-max (Optional)
Maximum number of attempts to load the image. If reached, it will stop retrying and will load the error-image.

# License
This is licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0
