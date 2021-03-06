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

    //for mobile-menu

    $(document).on('click', '.menu-btn', function() {
        var submenu = $(this).parent().find('.menu-mob');
        if ($(this).parent().find('.menu-mob').length > 0) {
            event.preventDefault();
            if ($(this).hasClass('sub-menu-show')) {
                $(this).removeClass('sub-menu-show');
                submenu.hide();
            } else {
                $('.menu-btn').removeClass('sub-menu-show');
                $('.menu-mob').hide();
                $(this).addClass('sub-menu-show');
                submenu.show();
            }
        }
    });

    //for mobile sub-menu

    $(document).on('click', '.menu-mob__list a', function() {
        var submenu = $(this).parent().find('.menu-mob__list-submenu');
        if ($(this).parent().find('.menu-mob__list-submenu').length > 0) {
            event.preventDefault();
            console.log (submenu);
            if ($(this).hasClass('sub-menu-show')) {
                $(this).removeClass('sub-menu-show');
                submenu.hide();
            } else {
                $('.menu-mob__list a').removeClass('sub-menu-show');
                $('.menu-mob__list-submenu').hide();
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
        autoplay:false,
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



    //for shopping-order-text

    $(document).on('click', '.descriptions__wrap a', function () {//кликаем по кнопке
        event.preventDefault();//отмена действия ссылки по умолчанию
        var text = $(this).parent().find('p');//находим элемент в DOM
        text.addClass('full-text');//добавляем найденому элементу класс
        $(this).hide();//скрываем кнопку
    });

    //slides for card-products

    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            autoplay: "true",
            slideshowSpeed: 2000
        });
    });


    //for counter

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    //for card-product

    $(document).on('click', '.btn-for-middle', function () {//кликаем по кнопке
        event.preventDefault();//отмена действия ссылки по умолчанию
        var text = $(this).parent().prev().find('p');//находим элемент в DOM
        text.addClass('full-text');//добавляем найденому элементу класс
        $(this).hide();//скрываем кнопку
    });

    //for modal

    $(document).on('click', '.in-basket', function () {
        event.preventDefault();
        $('.modal').css('display', 'block');
        setTimeout(function () {
            $('.modal').css('display', 'none');
        }, 3000);
    });


});