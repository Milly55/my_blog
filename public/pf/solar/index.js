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




function MobileSideBar__toggle() {
  var $btn = $('.btn-toggle-mobile-side-bar');

  if ( $btn.hasClass('active') ) {
      $btn.removeClass('active');
      $('.mobile-side-menu-bar').removeClass('active');
      $('.mobile-side-menu-bar-bg').removeClass('active');
      $('.mobile-top-bar').removeClass('active');
  }
  else {
      $btn.addClass('active');
      $('.mobile-side-menu-bar').addClass('active');
      $('.mobile-side-menu-bar-bg').addClass('active');
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



function Popup_Show(){
  $('.popup,.popup-show-box-1').addClass('active');
}

function Popup_Close(){
  $('.btn-close,.popup-show-box-1 ').click(function(){
      $('.popup,.popup-show-box-1').removeClass('active');
  })
}


$(function(){
  Popup_Show();
  Popup_Close();
})

