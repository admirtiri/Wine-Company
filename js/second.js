
$("#winestock").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#gallery").offset().top)
    }, 1000);
});

$("#aboutone").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#about-header").offset().top)
    }, 1000);
});

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#myCarousel").offset().top)
    }, 1000);
});

$("#price").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#Prices").offset().top)
    }, 1000);
});
