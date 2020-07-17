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

 
function Slider__a(){
  $('.slider-a').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    responsive:{
        0:{
            items:3
        }
    }
  });
  
}
$(function(){
  Slider__a();
})


function MySlider1__updateCurrentPageNumber(event) {
  var $owl = $(event.target);
  var index = $owl.find('.owl-item.active').first().find(' > .item-1').attr('data-no');
  index = parseInt(index);

  var $currentIndex = $owl.parent().find('.current-index');

  $currentIndex.text(index + 1);
}

function MySlider1__init() {
  var owlNowSliding = false;
  var slidingDuration = 1000;

  $('.slider-box-b').each(function(index, el) {
    var $mySlider1 = $(el);
    var $item = $mySlider1.find('.item-1');
    totalCount = $item.length;

    $item.each(function(index, itemEl) {
      var $itemEl = $(itemEl);
      $itemEl.attr('data-no', $itemEl.index());
    });

    var $totalCount = $mySlider1.find(' .total-count');
    $totalCount.text(totalCount);
  });

  var owl = $('.slider-box-b .slider-bar-1').owlCarousel({
    loop:true,
    dots:false,
    mouseDrag:false,
    items:1,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:slidingDuration,
    onInitialized: MySlider1__updateCurrentPageNumber,
    onTranslated: MySlider1__updateCurrentPageNumber,
  });


  $(' .nav-box > span').click(function() {
    if ( owlNowSliding ) {
      return;
    }

    owlNowSliding = true;

    var $clicked = $(this);

    if ( $clicked.is(':first-child') ) {
      owl.trigger('prev.owl');
    }
    else {
      owl.trigger('next.owl');
    }

    setTimeout(function() {
      owlNowSliding = false;
    }, slidingDuration);
  });
}

$(function() {
  MySlider1__init();
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