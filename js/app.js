$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.nav_top').addClass('nav_top_hide');
    } else {
        $('.nav_top').removeClass('nav_top_hide');
    }
});


// feedback 
$(document).ready(function () {
    $("#feedback").click(function () {
        $(".right_feedback_content").addClass("right_feedback_content_show");
    });
    $(".feedback_close").click(function () {
        $(".right_feedback_content").removeClass("right_feedback_content_show");
    });
});

// message 
$(document).ready(function () {
    $("#message").click(function () {
        $(".message_content").addClass("message_content_show");
    });
    $(".message_close").click(function () {
        $(".message_content").removeClass("message_content_show");
    });
});


// // left_bottom_content
$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        var condition = $('.left_bottom_content').hasClass('closed_once');        
        if (condition) {
            return false;
        } else {
            $('.left_bottom_content').addClass('left_bottom_content_show');
        }
    } else {
        $('.left_bottom_content').removeClass('left_bottom_content_show');
    }
    $(".left_bottom_content_close").click(function () {
        $(".left_bottom_content").removeClass("left_bottom_content_show");
        $(".left_bottom_content").addClass("closed_once");
    });
});





// typeform
(
function () {
    var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = "typef_orm", b = "https://embed.typeform.com/"; if (!gi.call(d, id)) { js = ce.call(d, "script"); js.id = id; js.src = b + "embed.js"; q = gt.call(d, "script")[0]; q.parentNode.insertBefore(js, q) }

})()