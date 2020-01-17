(function ($) {
    // USE STRICT
    "use strict";

    $(document).ready(function() {
        var accordion_select = $('.accordion');
        accordion_select.each(function () {
            $(this).accordion({
                "transitionSpeed": 400,
                transitionEasing: 'ease-in-out',
                singleOpen: false
            });
            $(this).on('click', function () {
               if ($(this).hasClass('open')) {
                   $(this).find('.accordion-content').addClass('fadeInLeft').removeClass('fadeOutLeft');
               } else {
                   $(this).find('.accordion-content').removeClass('fadeInLeft').addClass('fadeOutLeft');
               }
            });
        });
    });

})(jQuery);




