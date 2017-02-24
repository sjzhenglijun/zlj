/**
 * Created by zlj on 17/2/18.
 */
$(function()
{
    //    禁止鼠标拖动img
    $('#noDrag').mousedown(function(){return false});

    //砖石插件
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 5
    });

})
