<?php

$recepient = "rostik22988@gmail.com";
$sitename = "UPQODE";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["comment"]);
//$check = trim($_POST["check"]);
$message = "Имя: $name \nЕmail: $email \nДодатково: $comment";

$pagetitle = "\"$sitename\" Form";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>