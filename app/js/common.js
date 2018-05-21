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
});
