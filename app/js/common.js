'use strict';
$(function() {
	// Пользовательские функции
    
    $(".link-to-top").click(function() {
        $('html, body').animate({
                    scrollTop: $(".header").offset().top
        }, 800);
    });

    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "/mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form").trigger("reset");
        });
            return false;
    });

    
    // var widthEqualHeight = function (el) {

    //     var width = el[1].offsetWidth;

    //     for (var i = 0; i < el.length; i++) {
    //         el[i].style.height = width + 'px';
    //     }
    // }

    // if (document.documentElement.clientWidth > 1024) {
    //     var el = document.querySelectorAll(".services-item");

    //     widthEqualHeight (el);

    //     window.resize = function() {
    //         widthEqualHeight (el);
    //     }
    // }
});
