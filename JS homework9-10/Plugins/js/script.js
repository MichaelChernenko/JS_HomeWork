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

	$('.jcarousel-prev').click(function() {
		$('.jcarousel').jcarousel('scroll', '-=1');
	});

	$('.jcarousel-next').click(function() {
		$('.jcarousel').jcarousel('scroll', '+=1');
	});

	$('.jcarousel-pagination').jcarouselPagination({
		'perPage': 1
	});

	$('.jcarousel-pagination').jcarouselPagination({
		item: function(page) {
			return '<a href="#' + page + '" class="pagination-item">' + page + '</a>';
		}
	});	

	$('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() {
		$(this).addClass('pagination-focus');
	});

	$('.jcarousel-pagination').on('jcarouselpagination:inactive', 'a', function() {
		$(this).removeClass('pagination-focus');
	});


	
});


$(function(){
	jQuery(".niceCheck").mousedown(
		function() {
			changeCheck(jQuery(this));
		});
	jQuery(".niceCheck").each(
		function() {
			changeCheckStart(jQuery(this));
		});
});

function changeCheck(el)
{
	var el = el,
	input = el.find("input").eq(0);
	if(!input.attr("checked")) {
		el.css("background-position","0 -17px");    
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");    
		input.attr("checked", false)
	}
	return true;
}
function changeCheckStart(el)
{
	var el = el,
	input = el.find("input").eq(0);
	if(input.attr("checked")) {
		el.css("background-position","0 -17px");    
	}
	return true;
}



