<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $email_from = 'chris.martin.95@hotmail.com';
  $email_subject = 'New message from '.$name.' via Parsecode.org!';
  $email_body = "You have received a new message from ".$visitor_email.":\n\n"
                .$message;
  $email_to = 'chris.martin.95@hotmail.com';
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  ini_set('SMTP', 'mail.tpg.com.au'); 
  ini_set('smtp_port', 25); 
  ini_set("sendmail_from", "chris.martin.95@hotmail.com");
  mail($email_to,$email_subject,$email_body,$headers);
  echo "<script>window.location = 'http://www.parsecode.org/#/thanks'</script>";
?>