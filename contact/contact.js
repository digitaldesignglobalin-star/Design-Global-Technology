// toggel-btn-openandclose-script
// Top-level dropdown toggle (Services)
document
  .querySelectorAll(".material-dropdown > a")
  .forEach((dropdownToggle) => {
    dropdownToggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();

        const parent = this.parentElement;

        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        } else {
          document.querySelectorAll(".material-dropdown").forEach((el) => {
            el.classList.remove("active");
          });

          parent.classList.add("active");
        }
      }
    });
  });

document.querySelectorAll(".dropdown-submenu > a").forEach((submenuToggle) => {
  submenuToggle.addEventListener("click", function (e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();

      const parent = this.parentElement;

      if (parent.classList.contains("active")) {
        parent.classList.remove("active");
      } else {
        parent.parentElement
          .querySelectorAll(".dropdown-submenu")
          .forEach((el) => {
            el.classList.remove("active");
          });

        parent.classList.add("active");
      }
    }
  });
});

// Initialize EmailJS
emailjs.init("ISzacFihQ-Z_xnO58");

// Contact form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

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
        document.getElementById("status").innerText =
          "Message sent successfully!";
        document.getElementById("status").style.color = "green";
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        document.getElementById("status").innerText =
          "Failed to send the message. Please try again.";
        document.getElementById("status").style.color = "red";
      });
  });
