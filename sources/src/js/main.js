"use strict";

$(document).ready(function () {
    // Your code here
    projectSlider()
    reviewsSlider()
});

// Your functions here

function projectSlider() {
    if($(window).width() < 1280) {
        var project = new Swiper(".project__slider-container", {
            slidesPerView: 'auto',
            spaceBetween: 59,
            navigation: {
                nextEl: ".project__next",
                prevEl: ".project__prev",
            },
            breakpoints: {
                768: {
                    spaceBetween: 75,
                },
            },
        });
    }
}

function reviewsSlider() {
    var reviews = new Swiper(".reviews__slider-container", {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".reviews__next",
            prevEl: ".reviews__prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 24,
            },
            1366: {
                slidesPerView: 'auto',
                spaceBetween: 48,
            },
            1900: {
                slidesPerView: 'auto',
                spaceBetween: 80,
            },
        },
    });
}