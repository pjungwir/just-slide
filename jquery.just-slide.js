/**
 * Just Slide - A jQuery Plugin to create an image slideshow that puts you in control.
 *
 * Copyright (c) 2012 by Paul A. Jungwirth.
 * Released under the MIT license.
 */
(function($) {
  $.fn.justSlide = function(options) {
    var $all = $(this);
    $all.each(function() {
      var $t = $(this);
      $t.data('justslide:current-img', 0);
      $t.data('justslide:total-imgs', $t.find('img').addClass('justslide-stock').size());
      $t.css('overflow', 'hidden');
    });
    return $all;
  };

  $.fn.nextSlide = function() {
    var $all = $(this);
    $all.each(function() {
      var $t = $(this);
      var i = $t.data('justslide:current-img');
      var len = $t.data('justslide:total-imgs');
      var i_next = (i + 1) % len;
      var w = $t.width();
      var h = $t.height();
      var $prev = $(this).find('.justslide-slide');
      var $next = $('<div class="justslide-slide" style="position:absolute; top:0px;' +
        ' left:0px; z-index:200; width:' + (2*w) + 'px">' +
        '<img src="' + $t.find('img.justslide-stock').eq(i).attr('src') + '"' + 
        ' style="margin:0; padding:0; display:inline">' +
        '<img src="' + $t.find('img.justslide-stock').eq(i_next).attr('src') + '"' + 
        ' style="margin:0; padding:0; display:inline">' +
        '</div>');
      $t.append($next);
      $next.animate({left: (-w) + 'px'}, 'fast', '', function() {
        $prev.remove();
        $next.css('z-index', 100);
        $t.data('justslide:current-img', i_next);
      });
    });
    return $all;
  };
})(jQuery);
