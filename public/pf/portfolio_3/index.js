console.clear();


var $html = $('html');

function Pull_Page__a() {
    new fullpage('#fullpage', {
        verticalCentered: false,
        scrollBar: true,
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
        menu: '#menu',
        onLeave: function (origin, destination, direction) {
            $html.attr('data-fullpage-index', destination.index);
        }
    });
}



function Popup_Show() {
    $('.main-box-1 > .main-title-box-1 > ul').addClass('active');
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





/* 기능 */
function SliderK__show1($slider, index) {
    var $currentSlide = $slider.find('.slides-2 > div.active');
    var $postSlide = $slider.find('.slides-2 > div').eq(index);

    $currentSlide.removeClass('active');
    $postSlide.addClass('active');

    $slider.find('.page-nav-2 > div.active').removeClass('active');
    $slider.find('.page-nav-2 > div').eq(index).addClass('active');
}

function SliderK__showPrev($slider) {
    SliderK__showPost($slider, -1);
}

function SliderK__showNext($slider) {
    SliderK__showPost($slider, 1);
}

function SliderK__showPost($slider, change) {
    var $currentSlide = $slider.find('.slides-2 > div.active');
    var $postSlide = null;
    var $firstSlide = $slider.find('.slides-2 > div:first-child');
    var $lastSlide = $slider.find('.slides-2 > div:last-child');

    if (change == 1) {
        $postSlide = $currentSlide.next();

        if ($postSlide.length == 0) {
            $postSlide = $firstSlide;
        }
    } else if (change == -1) {
        $postSlide = $currentSlide.prev();

        if ($postSlide.length == 0) {
            $postSlide = $lastSlide;
        }
    }

    SliderK__show1($slider, $postSlide.index());
}

/* 초기화 */
function SliderK__init1() {
    $('.slider-1').each(function (index, node) {
        var $slider = $(node);

        SliderK__initPageNav($slider);
        SliderK__initSideBtns($slider);
        SliderK__initAutoplay($slider);
    });
}

// 페이지 내비를 자동으로 만들어줍니다.
function SliderK__initPageNav($slider) {
    var currentIndex = $slider.find('.slides-2> div.active').index();
    var slidesCount = $slider.find('.slides-2 > div').length;

    var html = '';

    for (var i = 0; i < slidesCount; i++) {
        if (i == currentIndex) {
            html += '<div class="active"></div>';
        } else {
            html += '<div></div>';
        }
    }

    html = '<div class="page-nav">' + html + '</div>';
    $slider.append(html);

    $slider.find('.page-nav-2 > div').click(function () {
        SliderK__show1($slider, $(this).index());
    });
}

// 사이드 버튼에 이벤트를 겁니다.
function SliderK__initSideBtns($slider) {
    $slider.find('.side-btns-1 > div').click(function () {
        var index = $(this).index();

        if (index == 0) {
            SliderK__showPrev($slider);
        } else {
            SliderK__showNext($slider);
        }
    });
}

function SliderK__initAutoplay($slider) {
    var autoplay = $slider.data('autoplay');

    $slider.data('autoplay-now-work', 'Y');

    $slider.mouseenter(function () {
        $slider.data('autoplay-now-work', 'N');
    });

    $slider.mouseleave(function () {
        $slider.data('autoplay-now-work', 'Y');
    });

    if (autoplay != 'Y') {
        return false;
    }

    var autoplayInterval = $slider.data('autoplay-interval');

    if (typeof autoplayInterval == 'undefined') {
        autoplayInterval = 10000;
    } else {
        // 문자열을 숫자화
        autoplayInterval = autoplayInterval * 1;
    }

    var autoplayDirIsLeft = $slider.data('autoplay-dir') == 'left';

    setInterval(function () {
        if ($slider.data('autoplay-now-work') == 'Y') {
            if (autoplayDirIsLeft) {
                SliderK__showPrev($slider);
            } else {
                SliderK__showNext($slider);
            }
        }
    }, autoplayInterval);
}





function PopupSlider_a(){
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      disableScrolling: false,
      fitImagesInViewport:false
    })
    
  }



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
        alert('당신의 이름을 입력해주세요.');
        form.senderName.focus();
        return false;
    }

    form.senderEmail.value = form.senderEmail.value.trim();

    if ( form.senderEmail.value.length == 0 ) {
        alert('당신의 이메일을 입력해주세요.');
        form.senderEmail.focus();
        return false;
    }

    form.body.value = form.body.value.trim();

    if ( form.body.value.length == 0 ) {
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

$(function () {
    PopupSlider_a();
    Popup_Show();
    Pull_Page__a();
    SliderK__init1();
    ActiveOnVisible__init();
})

