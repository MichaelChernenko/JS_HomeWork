$(function(){$(".jcarousel").jcarousel({wrap:"circular",animation:"slow"}).jcarouselAutoscroll({interval:3e3,target:"+=1",autostart:!0}),$(".jcarousel-pagination").jcarouselPagination({perPage:1}),$(".jcarousel-pagination").jcarouselPagination({item:function(a){return'<a href="#'+a+'" class="pagination-item"><div></div></a>'}}),$(".jcarousel-pagination").on("jcarouselpagination:active","a",function(){$(this).addClass("pagination-focus")}),$(".jcarousel-pagination").on("jcarouselpagination:inactive","a",function(){$(this).removeClass("pagination-focus")})}),$(function(){for(var a=document.getElementsByClassName("accordion"),i=0;i<a.length;i++)a[i].onclick=function(){this.classList.toggle("active"),this.nextElementSibling.classList.toggle("show")}});