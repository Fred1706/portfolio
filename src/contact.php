<?php


// the logic for the contact form 

// store the various input into variables

// $name = $email = $subject = $message = "";

// if(isset($_POST['name'])){
//   $name = $_POST['name'];
// }
// if(isset($_POST['email'])){
//   $email = $_POST['email'];
// }
// if(isset($_POST['subject'])){
//   $subject = $_POST['subject'];
// }
// if(isset($_POST['message'])){
//   $message = $_POST['message'];
// }


// mail($to, $subject, $message);


$to = "fred-eric.auger@outlook.com";
$minMessageLength = 10; // Prevents very short spam messages

// Sanitize and validate inputs
$firstName = isset($_POST['firstname']) ? trim($_POST['firstname']) : '';
$lastName = isset($_POST['lastname']) ? trim($_POST['lastname']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
$message = isset($_POST['comment']) ? trim($_POST['comment']) : '';
$honeypot = isset($_POST['honeypot']) ? trim($_POST['honeypot']) : ''; // Hidden field for bots

// Anti-spam: Honeypot should be empty (bots often fill all fields)
if (!empty($honeypot)) {
    http_response_code(403);
    exit("Spam detected.");
}


// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit("Invalid email address.");
}
// Check message length
if (strlen($message) < $minMessageLength) {
    http_response_code(400);
    exit("Message is too short.");
}

// Sanitize input to prevent header injection
$subject = preg_replace("/[\r\n]+/", " ", $subject);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

$fullName = $firstName . ' ' . $lastName;

// Compose and send the email
$headers = "From: " . $fullName . " <" . $email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

$fullMessage = "From: $fullName\n";
$fullMessage .= "Email: $email\n";
$fullMessage .= "Message:\n$message";

if (mail($to, $subject, $fullMessage, $headers)) {
     header("Location: contact.html?success=1");
    exit();
} else {
    http_response_code(500);
    echo "Message failed to send.";
}

?>