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



function MobileSideBar() {
    $('.side-page-icon').click(function(){
        var $btn = $('.side-page-icon');

        if ( $btn.hasClass('active') ) {
            $btn.removeClass('active');
            $('.side-page-box-1').removeClass('active');

        }
        else {
            $btn.addClass('active');
            $('.side-page-box-1').addClass('active');
        }
    });
}
$(function(){
    MobileSideBar();
  })


  
function MobileSideBar__init() {
    $('.side-page-icon').click(MobileSideBar)
}

$(function() {
    MobileSideBar();
    MobileSideBar__init();
});