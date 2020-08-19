console.clear();



function MySlider1__init() {
  var owl = $(".btn-silder-1");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    dots:true,
    nav:true,
    navText: ['<div> <img src="https://milly55.github.io/img1/pf/domino/left-1.png" alt=""> </div>', '<div><img src="https://milly55.github.io/img1/pf/domino/right-1.png" alt=""></div>']
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
}


$(function(){
    MySlider1__init();
})



function TabBox__a(){
    $('.tab-box > .head > ul > li').click(function() {
        var $clickedLi = $(this);
        var index = $clickedLi.index();
        
        $clickedLi.siblings('.active').removeClass('active');
        $clickedLi.addClass('active');
        
        var $tabBox = $clickedLi.closest('.tab-box');
        
        $tabBox.find('.body > ul > li').removeClass('active');
        $tabBox.find('.body > ul > li').eq(index).addClass('active');
    });
    
}

$(function(){
    TabBox__a(); 
 })


function Silder__a(){
  $('.carousel-1 > .slider-box').owlCarousel({
    navSpeed:150,
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    slideBy:4,
    mouseDrag:false,
    navText:['<div class="left-btn"></div>', '<div class="right-btn"></div>'],
    responsive:{
        0:{
            items:4
        }
    }
}); 
}

$(function(){
   Silder__a(); 
})



function MySlider2__init() {
  var owl = $(".meddil-silder-box");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    dots:true
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
}
$(function(){
    MySlider2__init();
})




