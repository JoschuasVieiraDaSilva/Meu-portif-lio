$(document).ready(function () {
    scrollTo(0, 0);
    $("header > nav").hide();
    $(window).scroll(function () {
        if (scrollY == 0) {
            $("header > nav").fadeOut();
        } else {
            $("header > nav").fadeIn();
        }
    });
    $("#startNavigation").click(function(){
        scrollTo(0, $("#startMarker").offset().top);
    });
});