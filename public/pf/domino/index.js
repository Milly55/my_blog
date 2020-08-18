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



function MySlider1__init() {
  var owl = $(".btn-silder-1");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    dots:true,
    nav:true,
    navText: ['<div> <img src="https://milly55.github.io/img1/pf/domino/left-1.png" alt=""> </div>', '<div><img src="https://milly55.github.io/img1/pf/domino/right-1.png" alt=""></div>']
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
}


$(function(){
    MySlider1__init();
})



function TabBox__a(){
    $('.tab-box > .head > ul > li').click(function() {
        var $clickedLi = $(this);
        var index = $clickedLi.index();
        
        $clickedLi.siblings('.active').removeClass('active');
        $clickedLi.addClass('active');
        
        var $tabBox = $clickedLi.closest('.tab-box');
        
        $tabBox.find('.body > ul > li').removeClass('active');
        $tabBox.find('.body > ul > li').eq(index).addClass('active');
    });
    
}

$(function(){
    TabBox__a(); 
 })


function Silder__a(){
  $('.carousel-1 > .slider-box').owlCarousel({
    navSpeed:150,
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    slideBy:4,
    mouseDrag:false,
    navText:['<div class="left-btn"></div>', '<div class="right-btn"></div>'],
    responsive:{
        0:{
            items:4
        }
    }
}); 
}

$(function(){
   Silder__a(); 
})



function MySlider2__init() {
  var owl = $(".meddil-silder-box");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    dots:true
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
}
$(function(){
    MySlider2__init();
})




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