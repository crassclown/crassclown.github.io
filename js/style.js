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
}, 5000);

/* scroll function */
$(window).scroll(function () {
    const scroll = $(window).scrollTop();

    if (Math.abs(scroll - last_scroll) > $(window).height() * 0.1) {

        $('.skills').each(function (index) {
            if (isVisible($(this))) {
                animateBar();
            }
        });

    }
});

/* helper functions */
function isVisible(element) {
    const scroll_pos = $(window).scrollTop();
    const window_height = $(window).height();
    const el_top = $(element).offset().top;
    const el_height = $(element).height();
    const el_bottom = el_top + el_height;
    return ((el_bottom - el_height * 0.25 > scroll_pos) && (el_top < (scroll_pos + 0.5 * window_height)));
}

function animateBar() {
    $(".bar").each(function () {
        $(this).find(".bar-inner").animate({
            width: $(this).attr("data-width")
        }, 2000)
    });
}