$(function(){$(".jcarousel").jcarousel({wrap:"circular",animation:"slow"}).jcarouselAutoscroll({interval:3e3,target:"+=1",autostart:!0}),$(".jcarousel-pagination").jcarouselPagination({perPage:1}),$(".jcarousel-pagination").jcarouselPagination({item:function(a){return'<a href="#'+a+'" class="pagination-item"><div></div></a>'}}),$(".jcarousel-pagination").on("jcarouselpagination:active","a",function(){$(this).addClass("pagination-focus")}),$(".jcarousel-pagination").on("jcarouselpagination:inactive","a",function(){$(this).removeClass("pagination-focus")})}),$(document).ready(function(){$("#accordion").accordion()});