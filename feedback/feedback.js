document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default form submission

    // Get form values
    const name = encodeURIComponent(document.getElementById("name").value);
    const company = encodeURIComponent(
      document.getElementById("company").value
    );
    const email = encodeURIComponent(document.getElementById("email").value);
    const contact = encodeURIComponent(
      document.getElementById("contact").value
    );
    const message = encodeURIComponent(
      document.getElementById("message").value
    );

    // Construct WhatsApp message
    const whatsappMessage = `Name: ${name}%0ACompany: ${company}%0AEmail: ${email}%0AContact: ${contact}%0AMessage: ${message}`;

    // WhatsApp URL (replace number with your number, include country code)
    const whatsappURL = `https://wa.me/918420600137?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  });
