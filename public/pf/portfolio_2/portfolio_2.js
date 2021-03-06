class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fieldY = y;
    this.speed = 0.02;
    this.cur = index;
    this.max = Math.random() * 100;
  }

  update() {
    this.cur += this.speed;

    this.y = this.fieldY + Math.sin(this.cur) * this.max;

  }
}

class Wave {
  constructor(color) {
    this.color = color;
    this.points = [];
    this.numberOfPoints = 8;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.numberOfPoints - 3);

    this.init();
  }

  init() {
    for (let i = 0; i < this.numberOfPoints; i++) {
      this.points[i] = new Point(i, this.pointGap * i, this.centerY);
    }
  }

  draw(ctx) {
    ctx.beginPath();

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);



    for (let i = 0; i < this.numberOfPoints; i++) {

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;

      if (i != 0 && i != this.numberOfPoints - 1) {
        this.points[i].update();
      }
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(0, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.points[0].y);

    ctx.fillStyle = '#FCF1DB';
    ctx.fill();

    ctx.closePath();
  }
}

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), {
      once: false,
      passive: false,
      capture: false,
    });
    this.wave = new Wave();

    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }
  resize() {
    this.stageWidth = document.body.clientWidth;
    /*스테이지의 높이 고정*/
    this.stageHeight = 230;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.ctx.scale(2, 2);

    this.wave.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.wave.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};



function Popup_Show() {
  $('.main-txt > .txt-1').addClass('active');
}


$(function () {
  Popup_Show();
})




//   function MobileSideBar__toggle() {
//     var $btn = $('.side-page-icon');

//     if ( $btn.hasClass('active') ) {
//         $btn.removeClass('active');
//         $('.side-page-box-1').removeClass('active');
//         $('.side-page-box-bg').removeClass('active');
//         $('.side-box-1').removeClass('active');
//     }
//     else {
//         $btn.addClass('active');
//         $('.side-page-box-1').addClass('active');
//         $('.side-page-box-bg').addClass('active');
//         $('.side-box-1').addClass('active');
//     }
// }

// function MobileSideBar__init() {
//     $('.clors-icon, .side-page-icon,.side-page-box-bg').click(MobileSideBar__toggle);
// }

// $(function() {
//     MobileSideBar__init();
// });

function fnMove(seq) {
  var $this = $(this);
  var btnIndex = $this.attr('btn-index');
  var $section = $('section[section-index="' + btnIndex + '"]');
  var SectionOffset = $section.offset().top;
  console.log(SectionOffset);
  $("html, body").animate({
    scrollTop: SectionOffset
  }, 400);
}
$(function () {
  $('.btn-scroll').click(fnMove);
})

// $(function(){
//     function fnMove(seq) {
//         var offset = $("#div" + seq).offset();
//         $("html, body").animate({ scrollTop: offset.top }, 400);
//     }
// })




function MySlider1__init() {
  $('.my-slider-1 > .owl-carousel').owlCarousel({
    responsive: {
      0: {
        items: 1
      }
    },
    loop: true,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    center: true,
    nav: true,
    items: 1,
    navText: ['<div class="back"> <i class="fas fa-angle-left"></i> </div>', '<div class="next"> <i class="fas fa-angle-right"></i> </div>'],
  });
}
$(function () {
  MySlider1__init();
})




function silder_Text() {
  $('.owl-nav').click(function () {
    var slideIndex = $('.my-slider-1 .owl-carousel .owl-stage-outer .owl-stage .owl-item.center .item').attr('data-index');
    $('.text-box > div ').removeClass('active');
    $('.text-box > div ').eq(slideIndex).addClass('active');
  });

}

$(function () {
  silder_Text();
})


function MySlider2__init() {
  $('.slider-bottom-box > .slider-box-b').owlCarousel({
    responsive: {
      0: {
        items: 1
      }
    },
    loop: true,
    dots: false,
    nav: true,
    items: 1,
    navText: ['<div class="left-item-1"><i class="fas fa-caret-left"></i></div>', '<div class="right-item-1"><i class="fas fa-caret-right"></i></div>']
  });
}


$(function () {
  MySlider2__init();
})


function sendEmailFormSubmit(form) {
  if (form.receiverName.value.length == 0) {
    alert('폼안에 receiverName 의 value 를 입력해주세요.');
    return false;
  }

  if (form.receiverEmail.value.length == 0) {
    alert('폼안에 receiverEmail 의 value 를 입력해주세요.');
    return false;
  }

  form.senderName.value = form.senderName.value.trim();

  if (form.senderName.value.length == 0) {
    alert('이름을 입력해주세요.');
    form.senderName.focus();
    return false;
  }

  form.senderEmail.value = form.senderEmail.value.trim();

  if (form.senderEmail.value.length == 0) {
    alert('이메일을 입력해주세요.');
    form.senderEmail.focus();
    return false;
  }

  form.body.value = form.body.value.trim();

  if (form.body.value.length == 0) {
    alert('내용을 입력해주세요.');
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

  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
}

function nl2br(str) {
  return str.replace(/\n/g, "<br />");
}

function Email__callback(data) {
  if (data.resultCode.substr(0, 2) == 'S-') {
    document.sendEmailForm.reset();
  }

  alert(data.msg);
}




/* 숫자 카운트 라이브러리 시작 */
function NumAni__start(selector) {
  $(selector).each(function (index, node) {
    var $el = $(node);

    var start = parseInt($el.attr('data-num-ani-start'));
    var interval = parseInt($el.attr('data-num-ani-interval'));

    $el.attr('data-num-ani-interval-current', interval);

    $el.text(start);

    NumAni__increaseNum($el);
  });
}

function NumAni__increaseNum($el) {
  var current = parseInt($el.text());
  var end = parseInt($el.attr('data-num-ani-end'));
  var stride = parseInt($el.attr('data-num-ani-stride'));
  var interval = parseInt($el.attr('data-num-ani-interval-current'));
  var slowPoint = parseFloat($el.attr('data-num-ani-slow-point'))

  if (current < end) {
    if (current > end * slowPoint) {
      interval += parseInt($el.attr('data-num-ani-slow-add-interval'));
      if (interval > 100) {
        interval = 100;
      }
      $el.attr('data-num-ani-interval-current', interval);
    }

    if (current + stride > end) {
      $el.text(end);
    } else {
      $el.text(current + stride);
    }

    setTimeout(function () {
      NumAni__increaseNum($el);
    }, interval);
  } else {
    $el.addClass('num-action-done');
  }
}
/* 숫자 카운트 라이브러리 끝 */

/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
  $(window).resize(ActiveOnVisible__initOffset);
  ActiveOnVisible__initOffset();

  $(window).scroll(ActiveOnVisible__checkAndActive);
  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
  $('.active-on-visible').each(function (index, node) {
    var $node = $(node);

    var offsetTop = $node.offset().top;
    $node.attr('data-active-on-visible-offsetTop', offsetTop);

    if (!$node.attr('data-active-on-visible-diff-y')) {
      $node.attr('data-active-on-visible-diff-y', '0');
    }

    if (!$node.attr('data-active-on-visible-delay')) {
      $node.attr('data-active-on-visible-delay', '0');
    }
  });

  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() {
  $('.active-on-visible:not(.actived)').each(function (index, node) {
    var $node = $(node);

    var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
    var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
    var delay = parseInt($node.attr('data-active-on-visible-delay'));

    var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

    if ($(window).scrollTop() + $(window).height() + diffY > offsetTop) {
      $node.addClass('actived');

      setTimeout(function () {
        $node.addClass('active');
        if (window[callbackFuncName]) {
          window[callbackFuncName]($node);
        }
      }, delay);
    }
  });
}


/* 발견되면 활성화시키는 라이브러리 끝 */

// 커스텀 시작
function count($node) {
  NumAni__start('.num');
}
// 커스텀 끝


function PopupSlider_a() {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: false,
    fitImagesInViewport: false
  })

}


$(function () {
  ActiveOnVisible__init();
  PopupSlider_a();
})

$(function arrow_a() {
  $('.item-box-2').animate({
    bottom: 30
  }, 1500, function () {
    $('.item-box-2').animate({
      bottom: 10
    }, 1500, arrow_a);
  });
});
$(function(){
  arrow_a();
})