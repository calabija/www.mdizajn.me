<?php
	
	$name = $_POST['userName'];
	$email = $_POST['userEmail'];
	$phone = $_POST['subject'];
	$message = $_POST['content'];

	$formcontent="From: $name\nPhone: $phone\nEmail: $email\nMessage: $message";

    //Place your Email Here
    $recipient = "milojkovic96pn@gmail.com";
		
    $mailheader = "From: $email \r\n";

	if(mail($recipient, $name, $formcontent, $mailheader)) {
	print "<p class='success'>Uspesno ste poslali poruku. Ocekujte nas odgovor!</p>";
	} else {
	print "<p class='Error'>Greska , pokusajte kasnije!</p>";
}
?>