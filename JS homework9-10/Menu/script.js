$(function () {

  var $links = $('.dropdown');

    function myOpen() {
        var $submenu = $(this).children('.submenu');
        $submenu.stop().animate({
            height: 'show'
        }, 300);
    }

    function myClose() {
        var $submenu = $(this).children('.submenu');
        $submenu.animate({
            height: 'hide',
        }, 300);
    }

    $links.mouseenter(myOpen);
    $links.mouseleave(myClose);


});