$(function () {

  var $menu = $('.menu');
  var $tabs = $menu.find('a');
  var $tabs_li = '';
  var num;

  var $cont = $('.content');
  var $cont_li = $cont.find('li');
  var $cont_active;

  $tabs.hover(
    function() {
      console.log('if hover check tab value = ', $(this).attr('selected'));
      if ($(this).prop("selected") != "true") { 
        $(this).addClass('newClassTabs');
      };
    }, function() {
      if ($(this).prop("selected") != "true") {  
        $(this).removeClass('newClassTabs');
      }
    }
  );

  $tabs.on('click', function(e) {
    e.preventDefault();
    $tabs.removeClass('newClassTabsCheck');
    $tabs.prop("selected","faulse");
    $(this).removeClass('newClassTabs');
    $(this).addClass('newClassTabsCheck');
    $(this).prop("selected","true");

    $tab_li = $(this).parent();
    num = $tab_li[0].id;
    $cont_active = $(num.replace('tab', '#cont')); 

    $cont_li.removeClass('active');    
    $cont_active.addClass('active');

  });

});