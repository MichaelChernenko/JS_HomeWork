$(function() {

	$('.jcarousel')
	.jcarousel({
		wrap: 'circular',
		animation: 'slow'
	})
	.jcarouselAutoscroll({
		interval: 3000,
		target: '+=1',
		autostart: true
	});

	$('.jcarousel-pagination').jcarouselPagination({
		'perPage': 1
	});

	$('.jcarousel-pagination').jcarouselPagination({
		item: function(page) {
			return '<a href="#' + page + '" class="pagination-item">' + '<div></div>' + '</a>';
		}
	});	

	$('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() {
		$(this).addClass('pagination-focus');
	});

	$('.jcarousel-pagination').on('jcarouselpagination:inactive', 'a', function() {
		$(this).removeClass('pagination-focus');
	});


	
});
