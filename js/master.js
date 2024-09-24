// console.log($(window).width() <= 480);

// let isMoblie

// if($(window).width() <= 480) {
//     isMoblie = true
// }else {
//     isMoblie = false
// }
// console.log(isMoblie);


let isMoblie = $(window).width() <= 480
const $grid = $('#Grid')

function setGrid() {
    if(isMoblie === true) {
        $grid.addClass('grid-2')
    }else {
        $grid.addClass('grid-3')
    }
}

setGrid()
