$(document).ready(function() {
    "use strict";
    $("#toTop").click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 400);
    });
});

$(document).ready(function() {
    $('#nav-icon4').click(function() {
        $('#nav-icon4').toggleClass('open');
        $('#gnavi').stop(0, 1).slideToggle();
        $("#toTop").toggleClass('none');
    });

});