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
const $nav = $('#Nav')

function setGrid() {
    if(isMoblie === true) {
        $grid.addClass('grid-2')
    }else {
        $grid.addClass('grid-3')
    }
}


function setScroll() {
    // 先判斷是否為手機板
    if(isMoblie === true) {
        // 在判斷捲動事件
        $(window).scroll(function() {
            if($(this).scrollTop() === 0) {
                $nav.removeClass('nav-active')
            }else {
                $nav.addClass('nav-active')
            }
    })
    }else {}
}


const $anchors = $('[data-fancybox]')
$anchors.fancybox({
    loop: true,
    media: {
        youtube: {
            params: {
                autoplay: false
            }
        }
    }
})







setGrid()
setScroll()