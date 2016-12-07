/**
 * Created by zlj on 16/12/7.
 */
;(function (win, doc) {
    function change() {
        doc.documentElement.style.fontSize = doc.documentElement.clientWidth * 20 / 320 + 'px';
    }
    change();
    win.addEventListener('resize', change, false);
})(window, document);

$(function () {
    $('#cover a').on('click', function () {
        $('#cover').hide();
        $('#menu img').attr('src','img/fun.png')
    });

    $(document).on('click', '#menu', function () {

        if($('#cover').css('display')=='none')
        {
            $('#cover').show();
            $('#menu img').attr('src','img/cha.png')
        }else{

            $('#cover').hide();
            $('#menu img').attr('src','img/fun.png')
        }

    });
    
});
document.addEventListener('DOMContentLoaded',function(){
    var oNav=document.getElementById('tab-list');
    var aLi=oNav.children;
    var aShow = oNav.getElementsByTagName('a');
    var oDiv=document.getElementById('test');
    var aDiv=oDiv.children;
    var swiper = new Swiper('.swiper-container', {
        onSlideChangeEnd: function(swiper){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className='';
                aShow[i].className = '';
            }
            aLi[swiper.activeIndex].className='red';
            aShow[swiper.activeIndex].className = 'active';
        }
    });
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onclick=function(){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className='';
                aShow[i].className = '';
            }
            this.className='red';
            aShow[this.index].className = 'active';
            swiper.slideTo(this.index, 1000, false);
        };
    }
},false);
