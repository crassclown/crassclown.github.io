let last_scroll = 0;

var typed = new Typed(".typed", {
    strings: ["Hendry Nugroho"],
    stringsElement: null,
    typeSpeed: 50,
    startDelay: 1200,
    backSpeed: 20,
    backDelay: 500,
    loop: !0,
    loopCount: 2,
    showCursor: !0,
    cursorChar: "|"
});

setTimeout(() => {
    $('#me-text').show("slow");
}, 3200);

/* scroll function */
animateBar();

/* helper functions */
function isVisible(element) {
    let scroll_pos = $(window).scrollTop();
    let window_height = $(window).height();
    let el_top = $(element).offset().top;
    let el_height = $(element).height();
    let el_bottom = el_top + el_height;
    return ((el_bottom - el_height * 0.25 > scroll_pos) && (el_top < (scroll_pos + 0.5 * window_height)));
}

function animateBar() {
    $(".bar").each(function () {
        $(this).find(".bar-inner").animate({
            width: $(this).attr("data-width")
        }, 2000)
    });
}