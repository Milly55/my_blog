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