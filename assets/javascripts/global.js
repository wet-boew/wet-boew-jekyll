/*global jQuery: false, ActiveXObject: false*/
(function ($) {
	"use strict";
	// Test that browser supports CORS (uses test from prose/boot.js). Intended to reroute to fallback when Prose won't work. 
	if (!('withCredentials' in new XMLHttpRequest())) {
		var $editLink = $('#edit-page'),
			request = false;
		if ($editLink.length !== 0) {
			$editLink.attr('href', $editLink.attr('href').replace('http://prose.io/#', 'https://github.com/').replace('/edit/', '/blob/'));
		}
	}
}(jQuery));
