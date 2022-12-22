jQuery(document).ready(function($) {
	"use strict";

	var cookie_store = 'demoPanelStatus';
	$('.demo_toggle').click(function() {
		$('#demopanel').toggleClass('demo-panel-active');
		if ($('#demopanel').hasClass('demo-panel-active')) {
			Cookies.set( cookie_store , 'open');
		} else {
			Cookies.set( cookie_store , 'closed');
		}
	});

	if ( ( Cookies.get(cookie_store) != null))	{
		if ( ( Cookies.get(cookie_store) == "open"))	{
			$('#demopanel').addClass('demo-panel-active');
		}
		if ( ( Cookies.get(cookie_store) == "closed"))	{
			$('#demopanel').removeClass('demo-panel-active');
		}
	} else {
		//setTimeout( openDemoPanel , 3500);
	}

	function openDemoPanel() {
		$('#demopanel').toggleClass('demo-panel-active');
	}
});