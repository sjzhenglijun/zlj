/**
 * Created by zlj on 16/12/8.
 */
//自适应
(function (win, doc) {
    function change() {
        doc.documentElement.style.fontSize = doc.documentElement.clientWidth * 100 / 640 + 'px';
    }
    change();
    win.addEventListener('resize', change, false);
})(window, document);
