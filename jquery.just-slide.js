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
      $t.data('justslide:current-img', 1);
      $t.data('justslide:total-imgs', $t.find('img').addClass('justslide-stock').size());
      $t.css('overflow', 'hidden');
      $t.append($('<img src="' + $t.find('img.justslide-stock').eq(0).attr('src') + '"' +
        ' style="position:absolute; top:0px; left:0px; z-index:100; display:block"' +
        ' class="justslide-slide">'));
    });
    return $all;
  };

  $.fn.nextSlide = function() {
    var $all = $(this);
    $all.each(function() {
      var $t = $(this);
      var i = $t.data('justslide:current-img');
      var len = $t.data('justslide:total-imgs');
      var w = $t.width();
      var h = $t.height();
      var $prev = $(this).find('.justslide-slide');
      var $next = $('<img src="' + $t.find('img.justslide-stock').eq(i).attr('src') + '"' +
        ' style="position:absolute; top:0px; left:' + w + 'px; z-index:200; display:block"' +
        ' class="justslide-slide">');
      $t.append($next);
      $prev.animate({left: (-w) + 'px'}, 'fast', function() {});
      $next.animate({left: '0px'}, 'fast', '', function() {
        $prev.remove();
        $next.css('z-index', 100);
        $t.data('justslide:current-img', (i + 1) % len);
      });
    });
    return $all;
  };
})(jQuery);
