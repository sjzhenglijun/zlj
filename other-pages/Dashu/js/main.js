/**
 * Created by zlj on 16/12/7.
 */
(function (win, doc) {
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
    
    //swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30,
        paginationType: 'progress'
    });
    //baiduMap
    var map = new BMap.Map("allmap");    // 创建Map实例
    var point = new BMap.Point(116.53075, 39.799871)
    map.centerAndZoom(point, 14);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
});
