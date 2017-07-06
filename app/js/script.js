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
    })
});