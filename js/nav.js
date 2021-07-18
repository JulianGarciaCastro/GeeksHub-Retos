var num = 400; 
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('nav').addClass('fixed-top');
    } else {
        $('nav').removeClass('fixed-top');
    }
});