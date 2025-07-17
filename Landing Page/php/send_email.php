<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = isset($_POST["phone"]) ? trim($_POST["phone"]) : "";
    $message = strip_tags(trim($_POST["message"]));
    
    // Validate data
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['message' => 'Please fill all required fields correctly.']);
        exit;
    }
    
    // Set your email address
    $to = 'akeellan99@gmail.com';
    $subject = 'New Contact Form Submission from ' . $name;
    
    // Build email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: " . ($phone ? $phone : "Not provided") . "\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Build headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(['message' => 'Thank you! Your message has been sent.']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Oops! Something went wrong. Please try again later.']);
    }
} else {
    http_response_code(403);
    echo json_encode(['message' => 'There was a problem with your submission. Please try again.']);
}