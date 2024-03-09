// js for the type js 
var typed = new Typed("#mySkills", {
    strings: ["(Designer)", "(Frontend Developer)", "(Mentor)"],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
})

// js for the carousel used here

$(document).ready(function () {

    // ************showcase cards carousel settings are here**************

    var showCaseOwl = $("#showcaseCardsCarousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        margin: 10,
        nav: false,
        smartSpeed: 1750,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            },
            1600: {
                items: 4
            }
        }
    });

    $('.customNextBtn').click(function () {
        showCaseOwl.trigger('next.owl.carousel');
    });

    // Go to the previous item
    $('.customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters have to be in square brackets '[]'
        showCaseOwl.trigger('prev.owl.carousel');
    });

});