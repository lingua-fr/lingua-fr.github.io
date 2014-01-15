$(function() {
    $(".slidshow-wrap").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
		visible: 1,
		vertical: false,
        auto: 2500,
        speed: 1000,
		easing: "easeOutCubic"
    });
});