document.addEventListener('DOMContentLoaded', function() {
    emailjs.init({ publicKey: 'c5x-pB0bci5IMaZea' });
    const form = document.getElementById('contactForm');
    const resultDiv = document.getElementById('result');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_5vxq1iu', 'template_ws5d3ce', form)
        .then(() => {
          resultDiv.textContent = "Message sent successfully!";
          form.reset();
        }, (error) => {
          resultDiv.textContent = "Failed to send message: " + error.text;
        });
    });
  });