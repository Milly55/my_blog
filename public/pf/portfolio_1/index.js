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
            }, 2000);
        }
      }, 100);
    });
  }
  
  $(function() {
    Fullpage_1();
    ActiveOnVisible__init();
  })
  /* 발견되면 활성화시키는 라이브러리 끝 */