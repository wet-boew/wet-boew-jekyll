/*global jQuery: false, ActiveXObject: false*/
(function ($) {
	"use strict";
	// Test that browser supports CORS (uses test from prose/boot.js). Intended to reroute to fallback when Prose won't work. 
	if (!('withCredentials' in new XMLHttpRequest())) {
		var $editLink = $('#edit-page'),
			request = false;
		if ($editLink.length !== 0) {
			$editLink.attr('href', 'https://github.com/' + $editLink.attr('href').substring(17).replace('edit', 'blob'));
		}
	}
}(jQuery));
