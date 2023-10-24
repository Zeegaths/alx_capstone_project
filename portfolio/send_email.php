<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Replace these variables with your own email configuration
  $to = "zarahgathoni76@gmail.com";
  $subject = "Contact Form Submission";
  $headers = "From: $email";
  $messageBody = "Name: $name\nEmail: $email\nMessage:\n$message";

  $success = mail($to, $subject, $messageBody, $headers);

  if ($success) {
    echo json_encode(["success" => true]);
  } else {
    echo json_encode(["success" => false]);
  }
}
?>
