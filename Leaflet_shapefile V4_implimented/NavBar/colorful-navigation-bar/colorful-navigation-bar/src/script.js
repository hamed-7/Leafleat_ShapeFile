$(document).ready(function() {
  
  $('.tabs').append("<li id='tabs-line'></li>");
  var $line = $('#tabs-line');
  var $activeItem =  $('.tabs .active').parent();
  var $activeX = $('.tabs .active').parent().position().left;
	$line.width($activeItem.width()).css("left", $activeX);
  $line.height($activeItem.height()).css("top", $activeX);

  $('.tabs a').click( function(e){

    var $el = $(this);
    var $offset = $el.offset();
   	var $clickX = e.pageX - $offset.left;
   	var $clickY = e.pageY - $offset.top;
    var $parentX = $el.parent().position().left;
    var $elWidth = $el.parent().width();

    e.preventDefault();
    
    if ($el.parent().is(':nth-child(1)')) {
      $line.removeClass();
      $line.addClass('one');
    } else if ($el.parent().is(':nth-child(2)')) {
      $line.removeClass();
      $line.addClass('two');
    } else if ($el.parent().is(':nth-child(3)')) {
      $line.removeClass();
      $line.addClass('three');
    } else if ($el.parent().is(':nth-child(4)')) {
      $line.removeClass();
      $line.addClass('four');
    } else if ($el.parent().is(':nth-child(5)')) {
      $line.removeClass();
      $line.addClass('five');
    } else {
      $line.removeClass();
      $line.addClass('one');
    }
    
    $('.tabs .active').removeClass('active');
    $el.addClass('pressed active');
  

    $line.animate({
      left: $parentX, width: $elWidth
    });

  });
  
  $( window ).resize(function() {
    $line.width($activeItem.width()).css("left", $activeX);
  });
  
});