console.clear();

var $html = $('html');
function Fullpage_1(){
    new fullpage('#fullpage', {
        verticalCentered: false,
        scrollBar:true,
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
        menu: '#menu',
        onLeave: function (origin, destination, direction) {
          $html.attr('data-fullpage-index', destination.index);
        }
      });
      
}

// var $html = $('html');
// function FullPage() {
//   $('#fullpage').fullpage({

//   });
// }

// $(function () {
//   FullPage();
// });

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






function SliderP__init(selector) {
  var $slider = $(selector);
  
  var $slides = $slider.find('.slides > div');
  var slidesCount = $slides.length;
  
  var $totalCount = $slider.find('.index-box > :last-child');
  $totalCount.text(slidesCount);
  
  var currentIndex = 0;
  var $current = $slider.find(' > .slides > div.active');
  if ( $current.length > 0 ) {
      currentIndex = $current.index();
  }
  
  $slider.data('slider-p-slidesCount', slidesCount);
  $slider.data('slider-p-currentIndex', currentIndex);
  
  $slider.find('.control-box > span:first-child').click(function() {
      SliderP__movePrev($slider);
  });
  
  $slider.find('.control-box > span:nth-child(2)').click(function() {
      SliderP__stopAnimate($slider);
  });
  
  $slider.find('.control-box > span:last-child').click(function() {
      SliderP__moveNext($slider);
  });
  
  SliderP__show($slider, 0);
}

function SliderP__moveNext($slider) {
  var currentIndex = $slider.data('slider-p-currentIndex');
  var postIndex = currentIndex + 1;
  var slidesCount = $slider.data('slider-p-slidesCount');
  
  if ( postIndex + 1 > slidesCount ) {
      postIndex = 0;
  }
  
  SliderP__show($slider, postIndex);
}

function SliderP__movePrev($slider) {
  var currentIndex = $slider.data('slider-p-currentIndex');
  var postIndex = currentIndex - 1;
  var slidesCount = $slider.data('slider-p-slidesCount');
  
  if ( postIndex < 0 ) {
      postIndex = slidesCount - 1;
  }
  
  SliderP__show($slider, postIndex);
}

function SliderP__show($slider, postIndex) {
  var $stick = $slider.find('.progress-bar > .stick');
  $stick.css('width', 0);
  
  var currentIndex = $slider.data('slider-p-currentIndex');
  var slidesCount = $slider.data('slider-p-slidesCount');
  var $current = $slider.find(' > .slides > div').eq(currentIndex);
  var $post = $slider.find(' > .slides > div').eq(postIndex);
  
  $slider.data('slider-p-currentIndex', postIndex);
  
  $current.removeClass('active');
  $post.addClass('active');
  
  var $currentIndex = $slider.find('.index-box > :first-child');
  $currentIndex.text(postIndex + 1);
  
  SliderP__startAnimate($slider);
}

function SliderP__startAnimate($slider) {
  var $stick = $slider.find('.progress-bar > .stick');
  
  var animateDuration = parseInt($slider.attr('data-slider-p-animate-duration'));
  
  $stick.stop().animate({
      width:'100%'
  }, animateDuration, function() {
      SliderP__moveNext($slider);
  });
}

function SliderP__stopAnimate($slider) {
  var $stick = $slider.find('.progress-bar > .stick');
  
  $stick.stop();
}


// 이메일 보내기 기능

function sendEmailFormSubmit(form) {
  if ( form.receiverName.value.length == 0 ) {
      alert('폼안에 receiverName 의 value 를 입력해주세요.');
      return false;
  }

  if ( form.receiverEmail.value.length == 0 ) {
      alert('폼안에 receiverEmail 의 value 를 입력해주세요.');
      return false;
  }

  form.senderName.value = form.senderName.value.trim();

  if ( form.senderName.value.length == 0 ) {
      alert('이름을 입력 안하셨군요^^');
      form.senderName.focus();
      return false;
  }

  form.senderEmail.value = form.senderEmail.value.trim();

  if ( form.senderEmail.value.length == 0 ) {
      alert('이메일을 입력 안하셨군요^^');
      form.senderEmail.focus();
      return false;
  }

  form.body.value = form.body.value.trim();

  if ( form.body.value.length == 0 ) {
      alert('내용을 입력 안하셨군요^^');
      form.body.focus();
      return false;
  }

  var senderName = form.senderName.value;
  var senderEmail = form.senderEmail.value;
  var title = '[이력서 보고 연락 드립니다]';
  var body = nl2br(form.body.value);
  var receiverName = form.receiverName.value;
  var receiverEmail = form.receiverEmail.value;

  var url = 'https://email.oa.gg/doSendEmail2.php?senderName=' + senderName + '&senderEmail=' + senderEmail + '&receiverName=' + receiverName + '&receiverEmail=' + receiverEmail + '&title=' + title + '&body=' + body;

  //console.log("URL : " + url);

  var head= document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
}

function nl2br(str){  
  return str.replace(/\n/g, "<br />");  
}

function Email__callback(data) {
  if ( data.resultCode.substr(0, 2) == 'S-' ) {
      document.sendEmailForm.reset();
  }

  alert(data.msg);
}

function PopupSlider_a(){
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: false,
    fitImagesInViewport:false
  })
  
}

function MobileSideBar__toggle() {
  var $btn = $('.mobile-bt-box');

  if ( $btn.hasClass('active') ) {
      $btn.removeClass('active');
      $('.mobile-menu-bar').removeClass('active');
      $('.mobile-top-bar').removeClass('active');
  }
  else {
      $btn.addClass('active');
      $('.mobile-menu-bar').addClass('active');
      $('.mobile-top-bar').addClass('active');
  }
}

function MobileSideBar__init() {
  $('.mobile-btn-box > ul >li:first-child,.mobile-bt-box').click(MobileSideBar__toggle);
}
$(function() {
  MobileSideBar__init();
});






$(function(){
  PopupSlider_a();
  SliderK__init();
  SliderP__init('.slider-p-1');
SliderP__init('.slider-p-2');
})