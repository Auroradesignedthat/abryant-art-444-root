document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init({ publicKey: 'c5x-pB0bci5IMaZea' }); // Replace with your EmailJS public key
  
    const form = document.getElementById('contactForm');
    const resultDiv = document.getElementById('result');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Optional: Basic validation (already handled by HTML5 'required')
      const fname = document.getElementById('fname').value.trim();
      const lname = document.getElementById('lname').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!fname || !lname || !email || !message) {
        resultDiv.textContent = "All fields are required.";
        return;
      }
  
      // Send the form using EmailJS
      emailjs.sendForm('service_5vxq1iu', 'template_ws5d3ce', form)
        .then(() => {
          resultDiv.textContent = "Message sent successfully!";
          form.reset();
        }, (error) => {
          resultDiv.textContent = "Failed to send message: " + error.text;
        });
    });
  });