import {Wave} from './wave.js';

class App {
    constructor () {
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



function Popup_Show(){
    $('.main-txt > .txt-1').addClass('active');
  }
  
  
  $(function(){
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
    var $section = $('section[section-index="'+ btnIndex +'"]');    
    var SectionOffset = $section.offset().top;
    console.log(SectionOffset);
    $("html, body").animate({ scrollTop: SectionOffset }, 400);
}
$(function(){
    $('.btn-scroll').click(fnMove);
})

// $(function(){
//     function fnMove(seq) {
//         var offset = $("#div" + seq).offset();
//         $("html, body").animate({ scrollTop: offset.top }, 400);
//     }
// })


function numIncrease__init() {
    $(".info-num").each(function () {
      var $this = $(this);
      var maxNum = parseInt($this.attr("data-max-num"));
      console.log(maxNum);
      $({ number: 0 }).animate(
        { number: maxNum },
        {
          duration: 800,
          step: function () {
            var num = parseInt(this.number);
            $this.text(num);
          },
          complete: function () {
            var num = parseInt(this.number);
            $this.text(num);
          }
        }
      );
    });
  }




  
function ActiveOnVisible__initOffset() {
    $(".active-on-visible").each(function (index, node) {
      var $node = $(node);
  
      var offsetTop = $node.offset().top;
      $node.attr("data-active-on-visible-offsetTop", offsetTop);
  
      if (!$node.attr("data-active-on-visible-diff-y")) {
        $node.attr("data-active-on-visible-diff-y", "0");
      }
  
      if (!$node.attr("data-active-on-visible-delay")) {
        $node.attr("data-active-on-visible-delay", "0");
      }
    });
  
    ActiveOnVisible__checkAndActive();
}
  
function ActiveOnVisible__checkAndActive() {
    $(".active-on-visible").each(function (index, node) {
        var $node = $(node);
    
        var offsetTop = parseInt($node.attr("data-active-on-visible-offsetTop"));
        var diffY = parseInt($node.attr("data-active-on-visible-diff-y"));
        var delay = parseInt($node.attr("data-active-on-visible-delay"));
        if ($(window).scrollTop() + $(window).height() + diffY > offsetTop) {
            setTimeout(function () {
            $node.addClass("active");
            }, delay);
        }
        if( $('.skill-list-box').hasClass('actived') !== true ){
            if($('.skill-list-box').hasClass('active') ) {
                numIncrease__init();
                $('.skill-list-box').addClass('actived');
            }
        }
    })
};

$(function(){
    ActiveOnVisible__initOffset();
    setTimeout(function(){
        ActiveOnVisible__checkAndActive();
    }, 100);
    $(window).resize(ActiveOnVisible__initOffset);
    $(window).scroll(ActiveOnVisible__checkAndActive);
})



function MySlider1__init() {
  $('.my-slider-1 > .owl-carousel').owlCarousel({
    responsive:{
      0:{
        items:1
      }
    },
    loop:true,
    dots:false,
    mouseDrag:false,
    touchDrag:false,
    center: true,
    nav:true,
    items:1,
    navText: ['<div class="back"> <i class="fas fa-angle-left"></i> </div>', '<div class="next"> <i class="fas fa-angle-right"></i> </div>'],
  });
}
$(function(){
  MySlider1__init();
})




function silder_Text(){
  $('.owl-nav').click(function(){
    var slideIndex =$('.my-slider-1 .owl-carousel .owl-stage-outer .owl-stage .owl-item.center .item').attr('data-index');
    $('.text-box > div ').removeClass('active');
    $('.text-box > div ').eq(slideIndex).addClass('active');
  });
  
}

$(function(){
  silder_Text();
})


function MySlider2__init() {
  $('.slider-bottom-box > .slider-box-b').owlCarousel({
    responsive:{
      0:{
        items:1
      }
    },
    loop:true,
    dots:false,
    nav:true,
    items:1,
    navText: ['<div class="left-item-1"><i class="fas fa-caret-left"></i></div>', '<div class="right-item-1"><i class="fas fa-caret-right"></i></div>']
  });
}


$(function(){
  MySlider2__init();
})
