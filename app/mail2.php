<?php

    $recepient = "nina.vet2015@yandex.ru";
    $sitename = "Ветеринарная клиника";

    $phone = trim($_POST["phone-popup"]);
    $text = trim($_POST["message-popup"]);
    $message = "Телефон: $phone \nТекст: $text";

    $pagetitle = "Новая заявка с сайта \"$sitename\"";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
