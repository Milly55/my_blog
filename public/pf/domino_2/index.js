console.clear();

function popup_a(){
    alert('리디자인 중입니다. ^^');
}
$(function(){
    popup_a();
})

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


/* 기능 */
function SliderK__show($slider, index) {
    var $currentSlide = $slider.find('.slides > div.active');
    var $postSlide = $slider.find('.slides > div').eq(index);
    
    $currentSlide.removeClass('active');
    $postSlide.addClass('active');
    
    $slider.find('.page-nav > div.active').removeClass('active');
    $slider.find('.page-nav > div').eq(index).addClass('active');
}

function SliderK__showPrev($slider) {
    SliderK__showPost($slider, -1);
}

function SliderK__showNext($slider) {
    SliderK__showPost($slider, 1);
}

function SliderK__showPost($slider, change) {
    var $currentSlide = $slider.find('.slides > div.active ');
    var $postSlide = null;
    var $firstSlide = $slider.find('.slides > div:first-child');
    var $lastSlide = $slider.find('.slides > div:last-child');
    
    if ( change == 1 ) {
        $postSlide = $currentSlide.next();
        
        if ( $postSlide.length == 0 ) {
            $postSlide = $firstSlide;
        }
    }
    else if ( change == -1 ) {
        $postSlide = $currentSlide.prev();
        
        if ( $postSlide.length == 0 ) {
            $postSlide = $lastSlide;
        }
    }
    
    SliderK__show($slider, $postSlide.index());
}

/* 초기화 */
function SliderK__init() {
    $('.slider-k').each(function(index, node) {
        var $slider = $(node);
        
        SliderK__initPageNav($slider);
        SliderK__initSideBtns($slider);
        SliderK__initAutoplay($slider);
    });
}

// 페이지 내비를 자동으로 만들어줍니다.
function SliderK__initPageNav($slider) {
    var currentIndex = $slider.find('.slides > div.active').index();
    var slidesCount = $slider.find('.slides > div').length;
    
    var html = '';
        
    for ( var i = 0; i < slidesCount; i++ ) {
        if ( i == currentIndex ) {
            html += '<div class="active"></div>';
        }
        else {
            html += '<div></div>';
        }
    }

    html = '<div class="page-nav">' + html + '</div>';
    $slider.append(html);
    
    $slider.find('.page-nav > div').click(function() {
        SliderK__show($slider, $(this).index());
    });
}

// 사이드 버튼에 이벤트를 겁니다.
function SliderK__initSideBtns($slider) {
    $slider.find('.side-btns > div').click(function() {
        var index = $(this).index();
        
        if ( index == 0 ) {
            SliderK__showPrev($slider);
        }
        else {
            SliderK__showNext($slider);
        }
    });
}

function SliderK__initAutoplay($slider) {
    var autoplay = $slider.data('autoplay');
    
    $slider.data('autoplay-now-work', 'Y');
    
    $slider.mouseenter(function() {
        $slider.data('autoplay-now-work', 'N');
    });
    
    $slider.mouseleave(function() {
        $slider.data('autoplay-now-work', 'Y');
    });
    
    if ( autoplay != 'Y' ) {
        return false;
    }
    
    var autoplayInterval = $slider.data('autoplay-interval');
    
    if ( typeof autoplayInterval == 'undefined' ) {
        autoplayInterval = 8000;
    }
    else {
        // 문자열을 숫자화
        autoplayInterval = autoplayInterval * 1;
    }
    
    var autoplayDirIsLeft = $slider.data('autoplay-dir') == 'left';
    
    setInterval(function() {
        if ( $slider.data('autoplay-now-work') == 'Y' ) {
            if ( autoplayDirIsLeft ) {
                SliderK__showPrev($slider);
            }
            else {
                SliderK__showNext($slider);
            }
        }
    }, autoplayInterval);
}






/* 기능 */
function SliderK__show($slider, index) {
    var $currentSlide = $slider.find('.slides-a > div.active');
    var $postSlide = $slider.find('.slides-a > div').eq(index);
    
    $currentSlide.removeClass('active');
    $postSlide.addClass('active');
    
    $slider.find('.page-nav-a > div.active').removeClass('active');
    $slider.find('.page-nav-a > div').eq(index).addClass('active');
}

function SliderK__showPrev($slider) {
    SliderK__showPost($slider, -1);
}

function SliderK__showNext($slider) {
    SliderK__showPost($slider, 1);
}

function SliderK__showPost($slider, change) {
    var $currentSlide = $slider.find('.slides-a > div.active');
    var $postSlide = null;
    var $firstSlide = $slider.find('.slides-a > div:first-child');
    var $lastSlide = $slider.find('.slides-a > div:last-child');
    
    if ( change == 1 ) {
        $postSlide = $currentSlide.next();
        
        if ( $postSlide.length == 0 ) {
            $postSlide = $firstSlide;
        }
    }
    else if ( change == -1 ) {
        $postSlide = $currentSlide.prev();
        
        if ( $postSlide.length == 0 ) {
            $postSlide = $lastSlide;
        }
    }
    
    SliderK__show($slider, $postSlide.index());
}

/* 초기화 */
function SliderK__init_a() {
    $('.slider-box').each(function(index, node) {
        var $slider = $(node);
        
        SliderK__initPageNav($slider);
        SliderK__initSideBtns($slider);
        SliderK__initAutoplay($slider);
    });
}

// 페이지 내비를 자동으로 만들어줍니다.
function SliderK__initPageNav($slider) {
    var currentIndex = $slider.find('.slides-a > div.active').index();
    var slidesCount = $slider.find('.slides-a > div').length;
    
    var html = '';
        
    for ( var i = 0; i < slidesCount; i++ ) {
        if ( i == currentIndex ) {
            html += '<div class="active"></div>';
        }
        else {
            html += '<div></div>';
        }
    }

    html = '<div class="page-nav-a">' + html + '</div>';
    $slider.append(html);
    
    $slider.find('.page-nav-a > div').click(function() {
        SliderK__show($slider, $(this).index());
    });
}

// 사이드 버튼에 이벤트를 겁니다.
function SliderK__initSideBtns($slider) {
    $slider.find('.side-btns > div').click(function() {
        var index = $(this).index();
        
        if ( index == 0 ) {
            SliderK__showPrev($slider);
        }
        else {
            SliderK__showNext($slider);
        }
    });
}

function SliderK__initAutoplay($slider) {
    var autoplay = $slider.data('autoplay');
    
    $slider.data('autoplay-now-work', 'Y');
    
    $slider.mouseenter(function() {
        $slider.data('autoplay-now-work', 'N');
    });
    
    $slider.mouseleave(function() {
        $slider.data('autoplay-now-work', 'Y');
    });
    
    if ( autoplay != 'Y' ) {
        return false;
    }
    
    var autoplayInterval = $slider.data('autoplay-interval');
    
    if ( typeof autoplayInterval == 'undefined' ) {
        autoplayInterval = 5000;
    }
    else {
        // 문자열을 숫자화
        autoplayInterval = autoplayInterval * 1;
    }
    
    var autoplayDirIsLeft = $slider.data('autoplay-dir') == 'left';
    
    setInterval(function() {
        if ( $slider.data('autoplay-now-work') == 'Y' ) {
            if ( autoplayDirIsLeft ) {
                SliderK__showPrev($slider);
            }
            else {
                SliderK__showNext($slider);
            }
        }
    }, autoplayInterval);
}


function Slider_Tabbox(){
    $('.tab-box > .head > ul > li').click(function() {
        var $clickedLi = $(this);
        var index = $clickedLi.index();
        
        $clickedLi.siblings('.active').removeClass('active');
        $clickedLi.addClass('active');
        
        var $tabBox = $clickedLi.closest('.tab-box');
        
        $tabBox.find('.body > ul > li').removeClass('active');
        $tabBox.find('.body > ul > li').eq(index).addClass('active');
    }); // 메뉴 이름 클릭
    
}



function Slider_Box_a(){
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
    }); // 메뉴 슬라이드
    
}

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
    Slider_Box_a();
    Slider_Tabbox();
    SliderK__init();
    SliderK__init_a();
})

