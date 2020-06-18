console.clear();


function MobileSideBar__toggle() {
    var $btn = $('.btn-toggle-mobile-side-bar');

    if ( $btn.hasClass('active') ) {
        $btn.removeClass('active');
        $('.mobile-side-menu-bar').removeClass('active');
        $('.mobile-side-menu-bar-bg').removeClass('active');
        $('html, body').removeClass('active');
        
    }
    else {
        $btn.addClass('active');
        $('.mobile-side-menu-bar').addClass('active');
        $('.mobile-side-menu-bar-bg').addClass('active');
        $('html, body').addClass('active');
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
