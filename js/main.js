

// Select2 Drop down fields
$(".location-type").select2();
$(".purchase-type").select2();
$(".bath_min").select2();
$(".bath_max").select2();
$(".bed_min").select2();
$(".bed_max").select2();

// Add price range sliders
new Slider('#addAlert .slider-input', { handle: 'triangle', });
new Slider('#editAlert .slider-input', { handle: 'triangle', });



// How it works animations
$(window).load(function() {

	// section one animations
	$('#sectionOneArrow polyline').delay(400).css({
	    'stroke-dasharray': '200,0',
	    'stroke-dashoffset': '58'

	});
});