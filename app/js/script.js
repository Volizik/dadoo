$(document).ready(function () {

    $(document).on('click', 'a.border', function() {
        var submenu = $(this).parent().find('.sub-menu');
        if ($(this).parent().find('.sub-menu').length > 0) {
            event.preventDefault();
            if ($(this).hasClass('sub-menu-show')) {
                $(this).removeClass('sub-menu-show');
                submenu.hide();
            } else {
                $('a.border').removeClass('sub-menu-show');
                $('.sub-menu').hide();
                $(this).addClass('sub-menu-show');
                submenu.show();
            }
        }
    });

    //for home reviews
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //for home-stock countdown
    /*single afisha countdown*/
    $("#countdown").countdown({
            date: "16 august 2017 12:00:00",
            format: "on",
            languge: 'ru'
        },
        function () {});
    /*close single afisha countdown*/

});