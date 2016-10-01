(function($) {

	$.fn.carousel = function() {
		var $leftControl = $('.carousel-arrow-left');
		var $rightControl = $('.carousel-arrow-right');
		var elementsList = $('.carousel-list');

		var currentPosition = 0;
		var elementsCount = elementsList.find('li').length;
		var pixelOffset = 315;
		var maximumOffset = 0;
		var minimumOffset = -((elementsCount - 3) * pixelOffset);

		function previousSlide() {
			$leftControl.click(function() {
				if(currentPosition != maximumOffset) {
					currentPosition += 315;
					elementsList.animate({
						left: currentPosition + "px"
					}, 300);
				}
			});
		};

		function nextSlide() {
			$rightControl.click(function() {
				if(currentPosition != minimumOffset) {
					currentPosition += -315;
					elementsList.animate({
						left: currentPosition + "px"
					}, 300);
				}
			});
		};

		$leftControl.on("click", previousSlide());



		$rightControl.on("click", nextSlide());

		return this;
	};

})(jQuery);