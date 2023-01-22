(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //------------ Offcanvas -------------

        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay, .offcanvas-area .main-menu ul li a').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });


        //------------ Testimonial slider -------------

        $('.testimonial__main__slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dot: true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })




    }); //---document-ready-----

}(jQuery));