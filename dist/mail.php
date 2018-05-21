<?php

    $recepient = "ochtihy.ivan@yandex.ru";
    $sitename = "Ветеринарная клиника";

    $phone = trim($_POST["phone"]);
    $text = trim($_POST["message"]);
    $message = "Телефон: $phone \nТекст: $text";

    $pagetitle = "Новая заявка с сайта \"$sitename\"";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
