console.clear();



function SlideSideBar__slider(){
    $('.slid-bar > .side-bar > div').click(function(){
        var $clickBtn = $(this);
        var $slider = $clickBtn.parent().parent();
        var $cust = $slider.find(' > .slider-box > div.active');
        var $post;
        var isLeft =  $clickBtn.index() == 0;

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
    

        $cust.removeClass('active');
        $post.addClass('active');
    });

}

$(function(){
    SlideSideBar__slider();
    
});