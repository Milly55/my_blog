console.clear();


function MobileSideBar__toggle() {
    var $btn = $('.btn-toggle-mobile-side-bar');

    if ( $btn.hasClass('active') ) {
        $btn.removeClass('active');
        $('.mobile-side-menu-bar').removeClass('active');
        $('.mobile-side-menu-bar-bg').removeClass('active');
        $('html, body').removeClass('active')
    }
    else {
        $btn.addClass('active');
        $('.mobile-side-menu-bar').addClass('active');
        $('.mobile-side-menu-bar-bg').addClass('active');
        $('html, body').addClass('active');
    }
}

function MobileSideBar__init() {
    $('.btn-toggle-mobile-side-bar,.mobile-side-menu-bar-bg').click(MobileSideBar__toggle);
}


$(function() {
    MobileSideBar__init();
});