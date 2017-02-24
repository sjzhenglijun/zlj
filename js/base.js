/**
 * Created by zlj on 17/2/18.
 */
//    禁止鼠标拖动img
$('#noDrag').mousedown(function () {
    return false
});

//砖石插件

var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: 90,
    gutter: 15,
    stagger: 30

});

grid.addEventListener( 'click', function( event ) {
    // don't proceed if item was not clicked on
    if ( !matchesSelector( event.target, '.grid-item' ) ) {
        return;
    }
    // change size of item via class
    event.target.classList.toggle('grid-item--gigante');
    // trigger layout
    msnry.layout();
});
