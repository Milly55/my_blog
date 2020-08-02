console.clear();


var $window = $(window);

function TopBox__init() {
    var $topBox = $(".top-bar");

    $topBox.find(".menu-box-1").mouseenter(function () {
        $topBox.addClass("background-actived");
    });

    $topBox.find(".menu-bar").mouseleave(function () {
        $topBox.removeClass("background-actived");
    });

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




function MySlider1__init() {
  $('.my-slider-1 > .owl-carousel').owlCarousel({
    responsive:{
      1000:{
        items:4
      },
      800:{
        items:3
      },
       0:{
        items:2
      },
    },
    loop:false,
    dots:false,
    nav:true,
    navText: ['<div class="back"> <i class="fas fa-chevron-left"></i>  </div>', '<div class="next"> <i class="fas fa-chevron-right"></i> </div>']
  });
}

$(function(){
    MySlider1__init();
})



