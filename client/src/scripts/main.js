/*jQuery*/

(function ($) {
    // USE STRICT
    "use strict";

    $(document).ready(function () {

        var body = $('body');
        // navbar search input
        var searchInput = $('.js-search-input');
        searchInput.on('mouseenter', function () {
            $(this).find('input').addClass('opened');
        });
        body.on('click', function(event) {
            if (!$(event.target).closest(searchInput).length) {
                searchInput.find('input').removeClass('opened');
            }
        });

        var $menuMobile = $("#js-menu-mobile");
        var $icon = $("#js-hamburger");

        $menuMobile.mmenu({
            "extensions": [
                "pagedim-black",
                "theme-blue",
                "shadow-page"
            ],
            "offCanvas": {
                zposition   : "front"
            },
            navbar: {
                title: "RAVEN"
            },
            "navbars": [
                {
                    "position": "top"
                }
            ],
            searchfield:{
                add: true,
                search: false
            }
        });

        var API = $menuMobile.data( "mmenu" );

        $icon.on( "click", function() {
            API.open();
        });

        API.bind("open:start", function() {
            $icon.addClass( "is-active" );
        });
        API.bind("close:start", function() {
            $icon.removeClass( "is-active" );
        });

        $('.quantity').each(function() {
            var spinner = $(this),
                input = spinner.find('input[type="number"]'),
                btnUp = spinner.find('.quantity-up'),
                btnDown = spinner.find('.quantity-down'),
                min = input.attr('min'),
                max = input.attr('max');

            btnUp.on("click", function () {
                var oldValue = parseFloat(input.val());
                var newVal;
                if (oldValue >= max) {
                    newVal = oldValue;
                } else {
                    newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

            btnDown.on("click", function () {
                var oldValue = parseFloat(input.val());
                var newVal;
                if (oldValue <= min) {
                    newVal = oldValue;
                } else {
                    newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });
        // Fixed navbar on scroll
        $(".rv-navbar").headroom({
            offset : 57
        });

        // Shop Cart
        $('.js-shop-cart').on('click', function () {
            $('.shopcart-inner').toggleClass('opened');
        });

        body.on('click', function(event) {
            if (!$(event.target).closest('.js-shop-cart').length) {
                $('.shopcart-inner').removeClass('opened');
            }
        });
    });

    $(window).on('load', function () {
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

})(jQuery);

