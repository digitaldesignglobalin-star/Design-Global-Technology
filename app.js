// Review-Cards-Scroll

function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".iner_container");

  const scrollSpeed = 5;
  const scrollInterval = 30;
  let scrollDirection = "right";

  function autoScroll() {
    if (scrollDirection === "right") {
      container.scrollLeft += scrollSpeed;

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        scrollDirection = "left";
      }
    } else if (scrollDirection === "left") {
      container.scrollLeft -= scrollSpeed;

      if (container.scrollLeft <= 0) {
        scrollDirection = "right";
      }
    }
  }

  let scrollIntervalId = setInterval(autoScroll, scrollInterval);

  container.addEventListener("mouseenter", () => {
    clearInterval(scrollIntervalId);
  });

  container.addEventListener("mouseleave", () => {
    scrollIntervalId = setInterval(autoScroll, scrollInterval);
  });

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      clearInterval(scrollIntervalId);
    });
  });
});

// Contact-Form-input-section

emailjs.init("ISzacFihQ-Z_xnO58");

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

// second Form

// Initialize EmailJS
(function () {
  emailjs.init("ISzacFihQ-Z_xnO58"); // Replace this
})();

function sendForm(event) {
  event.preventDefault();

  const email = document.getElementById("email-second").value;
  const mobile = document.getElementById("mobile-second").value;
  const service = document.getElementById("service-second").value;

  // if (service === "") {
  //   alert("Please select a service before submitting.");
  //   return;
  // }

  const templateParams = {
    name: "Website Enquiry",
    email: email,
    mobile: mobile,
    service: service,
  };

  const serviceID = "service_rvfrmpn";
  const templateID = "template_i25a2mj";

  emailjs
    .send(serviceID, templateID, templateParams)
    .then(() => {
      document.getElementById("formMessage").innerText =
        "✅ Message sent successfully!";
      document.getElementById("formMessage").style.color = "green";
      document.getElementById("serviceForm").reset();
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      document.getElementById("formMessage").innerText =
        "❌ Failed to send message. Please try again.";
      document.getElementById("formMessage").style.color = "red";
    });
}

// Contact-form-whatsapp-connect

function sendWhatsApp(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("number").value;
  let service = document.getElementById("service").value;
  let message_detail = document.getElementById("message_detail").value;

  let whatsappNumber = "918420600137";

  let message = `*New Enquiry*%0A
        *Name:* ${name}%0A
        *Email:* ${email}%0A
        *Phone:* ${phone}%0A
        *Service:* ${service}%0A
        *Message:* ${message_detail}`;

  let url = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(url, "_blank");
}

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

// new-window-open-function

function goToFeedback() {
  window.location.href = "feedback/feedback.html";
}

function goToPortfolio() {
  window.location.href = "portfolio/portfolio.html";
}

function goToAbout() {
  window.location.href = "about/about.html";
}

function goToBlog() {
  window.location.href = "blog/blog.html";
}

function goToContact() {
  window.location.href = "contact/contact.html";
}

function goToWebDev() {
  window.location.href = "service/webdev/webdev.html";
}

function goToWebDes() {
  window.location.href = "service/web-design/web-design.html";
}

function goToCmsDev() {
  window.location.href = "service/cms-development/cms-development.html";
}

function goToAppDev() {
  window.location.href = "service/app-development/app-development.html";
}

function goToSecurityMaintenance() {
  window.location.href =
    "service/security-maintenance/security-maintenance.html";
}

// function goToDigitalMarketing() {
//   window.location.href = "service/digital-marketing/digital-marketing.html";
// }

function goToSeo() {
  window.location.href = "service/seo/seo.html";
}

// function goToBranding() {
//   window.location.href = "service/branding/branding.html";
// }

function goToGraphicDesign() {
  window.location.href = "service/graphic-design/graphic-design.html";
}

function goToSocialMediaMaketing() {
  window.location.href = "service/social-market/social-market.html";
}

function goToOurClient() {
  window.location.href = "/clients/clients.html";
}

function goToEcommerce() {
  window.location.href = "service/ecommerce-solution/ecommerce-solution.html";
}

function goToPhotography() {
  window.location.href = "service/photography/photography.html";
}

function goToPerformance() {
  window.location.href =
    "service/performance-optimization/performance-optimization.html";
}
