// Contact-Form-input-section

// Initialize EmailJS
emailjs.init("ISzacFihQ-Z_xnO58");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const status = document.getElementById("status");
    status.innerText = "Sending message...";
    status.style.color = "#555";

    const serviceID = "service_rvfrmpn";
    const templateID = "template_24iosn1";

    const templateParams = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      company: document.getElementById("company").value,
      phone: document.getElementById("number").value,
      service: document.getElementById("service").value,
      message: document.getElementById("message_detail").value,
    };

    emailjs
      .send(serviceID, templateID, templateParams)
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        status.innerText = "✅ Message sent successfully!";
        status.style.color = "green";
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        status.innerText = "❌ Failed to send the message. Please try again.";
        status.style.color = "red";
      });
  });

//  toggel-btn-openandclose-script

// Top-level dropdown toggle (Services)
document
  .querySelectorAll(".material-dropdown > a")
  .forEach((dropdownToggle) => {
    dropdownToggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();

        const parent = this.parentElement;

        // Toggle this dropdown
        if (parent.classList.contains("active")) {
          parent.classList.remove("active"); // close if open
        } else {
          // Close all other top-level dropdowns first
          document.querySelectorAll(".material-dropdown").forEach((el) => {
            el.classList.remove("active");
          });

          parent.classList.add("active"); // open this one
        }
      }
    });
  });

// Nested submenu toggle
document.querySelectorAll(".dropdown-submenu > a").forEach((submenuToggle) => {
  submenuToggle.addEventListener("click", function (e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();

      const parent = this.parentElement;

      // Toggle this submenu
      if (parent.classList.contains("active")) {
        parent.classList.remove("active"); // close if open
      } else {
        // Close sibling submenus
        parent.parentElement
          .querySelectorAll(".dropdown-submenu")
          .forEach((el) => {
            el.classList.remove("active");
          });

        parent.classList.add("active"); // open this one
      }
    }
  });
});

//slider-animation
