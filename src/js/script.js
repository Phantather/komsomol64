$('#demoDefaultSelection').ddslick({

    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }
});

$(".mobile-btn").on("click", function () {
    $(".mobile-btn").toggleClass("show-mobile-btn");
    $(".header__menu").toggleClass("show-header__menu");
    $(".header__link").toggleClass("show-header__link");
});

$(".header__menu").on("click", function () {
    $(".mobile-btn").removeClass("show-mobile-btn");
    $(".header__menu").removeClass("show-header__menu");
    $(".header__link").removeClass("show-header__link");
});


$(document).ready(function(){
    $(".carousel").owlCarousel({
        items: 1,
        loop: true,
        // nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        stagePadding: 100,
        responsive:{
            0:{
                items:1
            },
            320: {
                stagePadding: 10,
            },
            567:{
                stagePadding: 10,
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});
