'use strict';

(function($){
  $(document).ready(function() {
    var doc = this;
    doc.sidebarVisible = false;

    var body = $('body');
    var sectionTopOffset = $('#top').offset().top;

    var topSection = $('#top-section');
    // $(window).resize();
    // function resizeBackground() {
    //     topSection.height($(window).height() - 60);
    // }
    // resizeBackground();

    $('#menu-reveal').click(function() {
        doc.sidebarVisible = !doc.sidebarVisible;
        if (doc.sidebarVisible) {
          body.addClass('menuOpen');
        } else {
          body.removeClass('menuOpen');
        }
    })

    $('.section-link').click(function() {
      body.removeClass('menuOpen');
      doc.sidebarVisible = false;
    })
  })
})(jQuery);