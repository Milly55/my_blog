console.clear();

function BtnShow_Popup1(){

    $('.btn-show-popup-1').click(function() {
        $('html').addClass('popup-1-active');
      });
      
      $('.popup-box-1, .popup-a > .popuop-txt').click(function() {
        $('html').removeClass('popup-1-active');
      });
      
      $('.popup-box-1 > .popup').click(function(e) {
        e.stopPropagation();
      });
}

$(function(){
    BtnShow_Popup1();
});

function BtnShow_Popup2(){
    $('.btn-show-popup-2').click(function() {
        $('html').addClass('popup-2-active');
      });
      
      $('.popup-box-2, .popup-a > .popuop-txt').click(function() {
        $('html').removeClass('popup-2-active');
      });
      
      $('.popup-box-2 > .popup').click(function(e) {
        e.stopPropagation();
      });
}

$(function(){
    BtnShow_Popup2();
});

function Scroll_Color(){
    $(document).ready(function(){
        $(window).scroll(function(){
           var scroll = $(window).scrollTop();
             if (scroll > 1) {
               $(".top-menu-bar").css("background-color" , "#02042f");
                $(".top-menu-bar").css("opacity" , "0.9");
             }
             else{
               $(".top-menu-bar").css("background-color" , "");   
               $(".top-menu-bar").css("opacity" , "");
             }
           })
         }) 
    };

$(function(){
    Scroll_Color();
});