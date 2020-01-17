(function ($) {
    // USE STRICT
    "use strict";

    $(document).ready(function () {
        /* initialize the slider based on the Slider's ID attribute from the wrapper above */
        $('#rev_slider').show().revolution({
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            responsiveLevels: [1240, 1024, 778, 480],
            sliderLayout: 'fullscreen',
            fullScreenAlignForce: 'off',
            delay: 2500,
            /* basic navigation arrows and bullets */
            navigation: {
                onHoverStop: "off",
                arrows: {
                    enable: true,
                    style: 'uranus',
                    hide_onleave: true
                },

                bullets: {
                    enable: false,
                    style: 'hermes',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });
        /* initialize the slider based on the Slider's ID attribute from the wrapper above */
        $('#rev_slider_beta').show().revolution({
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1170, 970, 740, 740],
            sliderLayout: 'auto',
            delay: 2500,
            /* basic navigation arrows and bullets */
            navigation: {
                onHoverStop: "off",
                arrows: {
                    enable: true,
                    style: 'uranus',
                    hide_onleave: true
                },

                bullets: {
                    enable: false,
                    style: 'hermes',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });

        /* initialize the slider based on the Slider's ID attribute from the wrapper above */
        $('#rev_slider_gamma').show().revolution({
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1170, 970, 740, 740],
            sliderLayout: 'auto',
            delay: 2500,
            minHeight: 655,
            /* basic navigation arrows and bullets */
            navigation: {
                onHoverStop: "off",
                arrows: {
                    enable: true,
                    style: 'uranus',
                    hide_onleave: true
                },

                bullets: {
                    enable: true,
                    style: 'hermes',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 60,
                    space: 5
                }
            }
        });
    });

})(jQuery);