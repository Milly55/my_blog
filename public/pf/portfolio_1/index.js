console.clear()
function Fullpage_1(){
    new fullpage('#fullpage', {
        verticalCentered: false,
        scrollBar:true,
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
        menu: '#menu',
      });
      
}



function numIncrease__init() {
    $(".info-num").each(function () {
      var $this = $(this);
      var maxNum = parseInt($this.attr("data-max-num"));
      console.log(maxNum);
      $({
        number: 0
      }).animate({
        number: maxNum
      }, {
        duration: 800,
        step: function () {
          var num = parseInt(this.number);
          $this.text(num);
        },
        complete: function () {
          var num = parseInt(this.number);
          $this.text(num);
        }
      });
    });
  }

/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
    $(window).resize(_.debounce(ActiveOnVisible__initOffset, 500));
    ActiveOnVisible__initOffset();
  
    $(window).scroll(_.debounce(ActiveOnVisible__checkAndActive, 50));
    ActiveOnVisible__checkAndActive();
  }
  
  function ActiveOnVisible__initOffset() {
    $('.active-on-visible').each(function(index, node) {
      var $node = $(node);
  
      var offsetTop = $node.offset().top;
      $node.attr('data-active-on-visible-offsetTop', offsetTop);
  
      if ( !$node.attr('data-active-on-visible-diff-y') ) {
        $node.attr('data-active-on-visible-diff-y', '0');
      }
  
      if ( !$node.attr('data-active-on-visible-delay') ) {
        $node.attr('data-active-on-visible-delay', '0');
      }
    });
  
    ActiveOnVisible__checkAndActive();
  }
  
  function ActiveOnVisible__checkAndActive() { 
    $('.active-on-visible').each(function(index, node) {
      var $node = $(node);
  
      var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
      var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
      var delay = parseInt($node.attr('data-active-on-visible-delay'));
  
      var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');
  
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var nodeHeight = $node.height();
  
      if ( scrollTop + windowHeight + diffY > offsetTop ) {
        setTimeout(function() {
          $node.addClass('active');
          if ( window[callbackFuncName] ) {
            window[callbackFuncName]($node);
          }
        }, delay);
      }
      else {
        $node.removeClass('active');
      }
      setTimeout(function(){
        if ($('.skill-list-box').hasClass('active')) {
            setTimeout(function(){
              numIncrease__init();
            }, 100);
        }
      }, 100);
    });
  }
  
  $(function() {
    Fullpage_1();
    ActiveOnVisible__init();
  })
  /* 발견되면 활성화시키는 라이브러리 끝 */



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
  var $currentSlide = $slider.find('.slides > div.active');
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
  $('.slider-box').each(function(index, node) {
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

$(function(){
  SliderK__init();
})