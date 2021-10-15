//код для запуска слик-слайдера с классом carousel
/* $(document).ready(function(){
    $('.carousel').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_to_left.svg" alt="arrow to left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_to_right.svg" alt="arrow to right"></button>',
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    }); */

$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        fade: true,
    });
});