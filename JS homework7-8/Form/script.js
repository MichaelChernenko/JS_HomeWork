$(function () {

  var $form = $('.form');
  var $input = $form.find('input');
  var $label = $form.find('label');
  var $p = $form.find('p');
  var $p_active;
  var $div_line;
  var $input_line;
  var $button = $('.block').find('button');

  function findP(obj) {
    var $foundP;
    $div_line = obj.parent();
    $foundP = $div_line.find('p');
    return $foundP;
  }

  function turnOn() {
    $p_active = findP($(this));
    $p_active.css({
      display: 'inline-block'
    });  
  }

  function turnOnP(obj, flag) {
    $p_active = findP(obj);
    $p_active.css({
      display: 'inline-block'
    });
    if (flag) {
      $p_active.prop("checked","true");
    }  
  }

  function turnOff() {
    $p_active = findP($(this));
    if ($p_active.prop("checked") != "true") {
        $p_active.animate({ opacity: "hide" }, "slow");
    }
  }

  function allOff() {
    $p.prop("checked", "faulse");
    $p.animate({ opacity: "hide" }, "slow");
  }

  $form.on('click', allOff);  

  $input.on('click', function(e) {
    e.stopPropagation();
    allOff();
    turnOnP($(this), 0);
  });

  $input.hover(turnOn, turnOff);

  $label.on('click',  function(e) {
    e.preventDefault();
    e.stopPropagation();
    $input_line = '#' + $(this).attr('for');
    $($input_line).focus();
    allOff();
    turnOnP($(this), 1);
  });

  $button.on('click', function() {
    $p.css({
      display: 'inline-block'
    });
  });

});