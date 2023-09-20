function validation() {
  // Your existing validation code

  // Send the email using EmailJS
  emailjs.sendForm("service_pqygu28", "template_4jusihh", "#contactForm").then(
    function (response) {
      alert("Email sent successfully!");
    },
    function (error) {
      console.error("Email sending failed:", error);
      alert("Email sending failed. Please try again later.");
    }
  );

  return false; // Prevent the form from actually submitting
}
