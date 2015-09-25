/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
  "use strict";

  var $document = $(document);

  $document.ready(function () {
    var rev = {},
      $postContent = $(".post-content"),
      $mainHeader = $('header.main-header');

    $.getJSON('rev-manifest.json', function (data) {
      rev = data;
      if ($mainHeader.length) {
        if ($mainHeader.attr('data-bg-image').length && Object.keys(rev).length) {
          var bgImage = rev[$mainHeader.attr('data-bg-image')];
          $mainHeader.css('background-image', 'url("' + bgImage + '")');
        }
      }
    });

    $postContent.fitVids();

    $(".scroll-down").arctic_scroll();

    $(".menu-button[href='#'], .nav-cover, .nav-close").on("click", function (e) {
      e.preventDefault();
      $("body").toggleClass("nav-opened nav-closed");
    });
  });

  // Arctic Scroll by Paul Adam Davis
  // https://github.com/PaulAdamDavis/Arctic-Scroll
  $.fn.arctic_scroll = function (options) {

    var defaults = {
        elem: $(this),
        speed: 500
      },

      allOptions = $.extend(defaults, options);

    allOptions.elem.click(function (event) {
      event.preventDefault();
      var $this = $(this),
        $htmlBody = $('html, body'),
        offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
        position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
        toMove;

      if (offset) {
        toMove = parseInt(offset);
        $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove)}, allOptions.speed);
      } else if (position) {
        toMove = parseInt(position);
        $htmlBody.stop(true, false).animate({scrollTop: toMove}, allOptions.speed);
      } else {
        $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top)}, allOptions.speed);
      }
    });

  };

})(jQuery);
