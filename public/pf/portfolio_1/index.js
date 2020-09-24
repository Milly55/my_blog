console.clear()
function Fullpage_1(){
    new fullpage('#fullpage', {
        verticalCentered: false,
        scrollBar:true,
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
        menu: '#menu',
      });
      
}

$(function(){
    Fullpage_1();
})