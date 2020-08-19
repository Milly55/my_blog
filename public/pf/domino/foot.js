console.clear();


function FootBar__a(){
    $(".foot-bar-2 .language-box > ul ").click(function () {
        if ($(".foot-bar-2 .language-box > ul > li").hasClass("active")) {
            $(".foot-bar-2 .language-box > ul > li").removeClass("active");
        } else {
            $(".foot-bar-2 .language-box > ul > li").addClass("active");
        }
    });
}
$(function(){
   FootBar__a();
})