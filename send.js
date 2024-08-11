document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Capture form data
    let params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send("service_4iha0cn", "template_dm4wd9e", params)
    .then(function(response) {
        alert("Email Sent Successfully!");
    }, function(error) {
        alert("Failed to send email. Please try again later.");
        console.error("EmailJS Error:", error);
    });
});
