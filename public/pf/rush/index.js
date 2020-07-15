console.clear();


function Silder_Bar(){

    $(".slider-bar > .dots-box > div").click(function () {
        var $this = $(this);
    
        var index = $this.index();
    
        $this.addClass("active");
        $this.siblings(".active").removeClass("active");
    
        var $slider = $this.parent().parent();
        var $cust = $slider.find(" > .slider > div.active");
        var $post = $slider.find(" > .slider > div:nth-child(" + (index + 1) + ")");
    
        $cust.removeClass("active");
        $post.addClass("active");
    });    
}

$(function(){
    Silder_Bar()
});



setInterval(function a() {
    var $active = $(".slider-bar > .dots-box ").find(".active");
    var $click = $(this);
    var index = $click.index();
    var $next = $active.next();
  
    if ( $next.length == 0 ) {
      $('.slider-bar > .dots-box > div:first-child').click();
    }
    else {
      $next.click();
    }
  },5000);










function MySlider1__init() {
  $('.my-slider-1 > .owl-carousel').owlCarousel({
    responsive:{
      0:{
        items:3
      }
    },
    loop:true
  });
}

$(function(){
  MySlider1__init();
})



function Popup__init() {
  $('.pop-closeable').click(function(){
    var popNo = $(this).attr('data-pop-no');
      Popup__hide(popNo)
  });
  $('top-popup-bar').click(function(e){
      e.stopPropagation();
  });
}

$(function(){
  Popup__init();
})



function Popup__show(no){
  var className = 'top-popup-bar' ;
  
  $('.' + className ).show();
}
function Popup__hide(no){
      var className = 'top-popup-bar';
  
  $('.' + className ).hide();
  
}
$(function(){
  Popup__show(1);
})

function Silder__Slick(){
  $(function(){
    $('.slider-1').slick({
      slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
      infinite : true, 	//무한 반복 옵션	 
      slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
      dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
      autoplay : true,			// 자동 스크롤 사용 여부
      autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
      vertical : false,		// 세로 방향 슬라이드 옵션
      prevArrow : '<div> < </div>',		// 이전 화살표 모양 설정
      nextArrow : "<div> > </div>",		// 다음 화살표 모양 설정
      dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
      draggable : false, 	//드래그 가능 여부 
      vertical : false, // 세로슬라이드시 true 사용
    });
    })
}

$(function(){
  Silder__Slick();
})









/*function SlideSideBar__slider(){
    $('.slid-bar > .side-bar > div').click(function(){
        var $clickBtn = $(this);
        var $slider = $clickBtn.parent().parent();
        var $cust = $slider.find(' > .slider-box > div.active');
        var $post;
        var isLeft =  $clickBtn.index() == 0;
        var $dotActive = $('.slde-bar > .dots-box > .dot.active');
        var $dotIndex = $dotActive.index();
        var $sliderActive = $('.slid-bar > .slider-box').find('active');
        var $clicked = $(this).click();

         if( isLeft ){
             $post = $cust.prev();
             if($post.length == 0){
                $post = $slider.find(' > .slider-box > :last-child');
            }  
         }
         else{
            $post = $cust.next();
            if($post.length == 0){
               $post = $slider.find(' > .slider-box > :first-child');
           }  
         }
    

        //$cust.removeClass('active');
        //$post.addClass('active');
        $clicked.removeClass('active');
    });

}

$(function(){
    SlideSideBar__slider();
    
});*/