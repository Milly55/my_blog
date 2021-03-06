console.clear();


function MobileSideBar__toggle() {
    var $btn = $('.btn-toggle-mobile-side-bar');

    if ( $btn.hasClass('active') ) {
        $btn.removeClass('active');
        $('.mobile-side-menu-bar').removeClass('active');
        $('.mobile-side-menu-bar-bg').removeClass('active');
        $('html, body').removeClass('active');
        $('.mobile-top-bar').removeClass('active');
    }
    else {
        $btn.addClass('active');
        $('.mobile-side-menu-bar').addClass('active');
        $('.mobile-side-menu-bar-bg').addClass('active');
        $('html, body').addClass('active');
        $('.mobile-top-bar').addClass('active');
    }
}

function MobileSideBar__init() {
    $('.btn-toggle-mobile-side-bar,.mobile-side-menu-bar-bg').click(MobileSideBar__toggle);
    $('.mobile-side-menu-bar  ul > li ').click(function(){
        if ( $(this).hasClass('active') ){
            $(this).removeClass('active');
        }
        else{
            $(this).addClass('active');
        }
    })

}

$(function() {
    MobileSideBar__init();
});


function SlideSideBar__slider(){
    $('.slider-bar > .side-bar > div').click(function(){
        var $clickBtn = $(this);
        var $slider = $clickBtn.parent().parent();
        var $cust = $slider.find(' > .slider-box-1 > div.active');
        var $post;
        var isLeft =  $clickBtn.index() == 0;

         if( isLeft ){
             $post = $cust.prev();
             if($post.length == 0){
                $post = $slider.find(' > .slider-box-1 > :last-child');
            }  
         }
         else{
            $post = $cust.next();
            if($post.length == 0){
               $post = $slider.find(' > .slider-box-1 > :first-child');
           }  
         }
    

        $cust.removeClass('active');
        $post.addClass('active');
    });

}

$(function(){
    SlideSideBar__slider();
    
});

function MenuBox_menu(){
    $(document).ready(function(){
        $(window).scroll(function(){
          var scroll = $(window).scrollTop();
          if (scroll > 1) {
            $(".top-bar > .menu-bar > .menu-box-1").css("background" , "#E9967A");
            $(".top-bar > .menu-bar > .menu-box-1 > ul > li > a").css("color" , "white");
            $(".top-menu-bar").css("background-color" , "#02042f");
            $(".top-menu-bar").css("opacity" , "0.9");
        }
          else{
            $(".top-bar > .menu-bar > .menu-box-1").css("background" , "");   
            $(".top-bar > .menu-bar > .menu-box-1 > ul > li > a").css("color" , "");
            $(".top-menu-bar").css("background-color" , "");   
            $(".top-menu-bar").css("opacity" , "");
          }
        })
      });
}
$(function(){
    MenuBox_menu();   
});

function a(){
    $('.slider-bar > .side-bar > div:last-child').click();
}

setInterval (a,5000);







  function MySlider1__init() {
    $('.my-slider-11 > .owl-carousel ').owlCarousel({
      responsive:{
        0:{
          items:1
        }
      },
      loop:true,
      dots:false,
      nav:true,
      navText: ['<div class="nav-left icon-1 "> <i class="fas fa-angle-left"></i> </div>', '<div class="nav-right icon-1"> <i class="fas fa-angle-right"></i> </div>']
    });
  }

$(function(){
    MySlider1__init();
})
