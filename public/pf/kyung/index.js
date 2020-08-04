console.clear();

function FullPage__a(){
    var $html = $('html');
    new fullpage("#fullpage", {
    verticalCentered: false,
    scrollBar: true,
    anchors: ["anchor1", "anchor2", "anchor3"],
    menu: "#menu",
    navigation: true,
    navigationPosition: "right",
    responsiveWidth: 1100,
    afterResponsive: function (isResponsive) {
      
    },
    onleave: function(origin, destination, direction){
      $html.attr('data-fullpage-index', destination.index);
  }
  });
}
$(function(){
    FullPage__a(); 
})





/*
var myFullpage = new fullpage('#fullpage', {
  verticalCentered: true,
  anchors: ['anchor1', 'anchor2', 'anchor3'],
  menu: '#menu',
  sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE']
});



    var myFullpage = new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third and last page'],
        responsiveWidth: 1100,
        afterResponsive: function(isResponsive){

        }

    });

*/








function MobileSideBar__toggle() {
    var $btn = $('.mobile-menu-bar > .mobile-menu-box > ul > li:last-child');

    if ( $btn.hasClass('active') ) {
        $btn.removeClass('active');
        $('.mobile-menu-box-2').removeClass('active');
        $('.mobile-backgorund-bg').removeClass('active');
    }
    else {
        $btn.addClass('active');
        $('.mobile-menu-box-2').addClass('active');
        $('.mobile-backgorund-bg').addClass('active');
    }
}

function MobileSideBar__init() {
    $('.mobile-menu-box > ul > li:last-child, .mobile-backgorund-bg').click(MobileSideBar__toggle);
}



$(function(){
    MobileSideBar__init();
})






var $window = $(window);


function TopBox__init() {
    var $topBox = $(".menu-bar");

    $topBox.find(".menu-1").mouseenter(function () {
        $topBox.addClass("background-actived");
    });

    $topBox.find(".menu-1").mouseleave(function () {
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

$(function(){
    TopBox__init();
})



/* 메뉴바 팝업 */

function Popup__1(){
    $('.menu-popup-1').click(function(){
        $('html').addClass('popup-1-active')
    });
    
    $('.popup-box-1, .popup-box-1 > .popup > .head > .btn-close').click(function(){
        $('html').removeClass('popup-1-active')
    });
    
    $('.popup-box-1 > .popup').click(function(e){
        e.stopPropagation();
    });
}

$(function(){
    Popup__1();
})






/* 슬라이드 기능 */
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

$(function(){
    SliderK__init();
})
