<?php
$to = "cbryant8723@sdsu.edu";

$success = "Yay";
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $fname = htmlspecialchars(trim($_POST["fname"]));
    $lname = htmlspecialchars(trim($_POST["lname"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["contactMsg"]));

    // Validate fields
    if (empty($fname)) $errors[] = "First name is required.";
    if (empty($lname)) $errors[] = "Last name is required.";
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "A valid email is required.";
    if (empty($message)) $errors[] = "Message is required.";

    // If no errors, send email
    if (empty($errors)) {
        $subject = "New Message from $fname $lname";
        $body = "First Name: $fname\nLast Name: $lname\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $email\r\nReply-To: $email\r\n";

        if (mail($to, $subject, $body, $headers)) {
            $success = "Thank you, $fname! Your message has been sent.";
            // Optionally clear form fields after success
            $fname = $lname = $email = $message = "";
        } else {
            $errors[] = "Failed to send message. Please try again later.";
        }
    }
}
?>