console.clear();


var $window = $(window);

function TopBox__init() {
    var $topBox = $(".top-bar");

    $(window).scroll(function () {
        var scrollTop = $window.scrollTop();
        console.log(scrollTop);

        if (scrollTop > 0) {
            $topBox.addClass("top-bar-wdith");
        } else {
            $topBox.removeClass("top-bar-wdith");
        }
    });
}

$(function () {
    TopBox__init();
});


function TopBar__a(){
    $(".top-bar > .top-menu-box > ul > li:last-child ").click(function () {
        if ($(".background").hasClass("active")) {
            $(".background").removeClass("active");
            $(".top-menu-box > ul > li > span").removeClass("active");
        } else {
            $(".background").addClass("active");
            $(".top-menu-box > ul > li > span").addClass("active");
        }
    });
}
$(function(){
    TopBar__a();
})