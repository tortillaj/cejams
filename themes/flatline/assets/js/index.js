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
      $mainHeader = $('header.page__header'),
      $bgImage = $mainHeader.data('bgImage');

    $.getJSON('rev-manifest.json', function (data) {
      rev = data;
      if ($mainHeader.length && $bgImage.length && Object.keys(rev).length) {
        $mainHeader.css('background-image', 'url("/' + rev[$bgImage] + '")');
      } 
    }).fail(function(error) {
      if ($mainHeader.length && $bgImage.length) {
        $mainHeader.css('background-image', 'url("/' + $bgImage + '")');
      }
    });

    $postContent.fitVids();

  });

})(jQuery);
