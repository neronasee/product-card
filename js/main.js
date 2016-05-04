;(function($){

	$(document).ready(function(){
		var slider = $('.ba-slider');

		    slider.slick({
			dots: true,
			infinite: false,
			slide: ".ba-slider__item",
			prevArrow: $('.slick-prev'),
			nextArrow: $('.slick-next')
		});

		var qtyField = $('.ba-product__qty-field'),
			qtyUp = $('.ba-product__qty-up'),
			qtyDown =$('.ba-product__qty-down');
		qtyUp.on('click', function (e) {
			var oldVal = qtyField.val();

			qtyField.val(++oldVal);
			// qtyField.val(+qtyField.val() + 1);

			e.preventDefault();
		});

		qtyDown.on('click', function (e) {
			var oldVal = qtyField.val();

			if(oldVal > 1) {
				qtyField.val(--oldVal);
				// qtyField.val(+qtyField.val() -1 1);
			}
			else {
				qtyField.val(1);
			}

			qtyField.on('change', function(){
				if(qtyField.val() < 1) {
					qtyField.val(1);
				}
			});

			e.preventDefault();
		});

		// color change
		var radioButton = $('input[type="radio"]'),
			images = slider.find('img');

		images.filter(':first-child').addClass('active');

		radioButton.on('change', function(){
			var color = radioButton.filter(':checked').val();

			images
				.removeClass('active')
				.filter("[data-color=" + color + "]")
				.addClass('active');
		});
	});

})(jQuery);
