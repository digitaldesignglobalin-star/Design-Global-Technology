// HEADER

function goToHome() {
  window.location.href = "../../index.html";
}

// WEB-SERVICES

function goToWebDevelopment() {
  window.location.href = "../webdev/webdev.html";
}

function goToAppDevelopment() {
  window.location.href = "../app-development/app-development.html";
}

function goToEcommerceSolution() {
  window.location.href = "../ecommerce-solution/ecommerce-solution.html";
}

function goToCmsDevelopment() {
  window.location.href = "../cms-development/cms-development.html";
}

function goToPerformanceOptimization() {
  window.location.href =
    "../performance-optimization/performance-optimization.html";
}

function goToSecurityMaintenance() {
  window.location.href = "../security-maintenance/security-maintenance.html";
}

// OTHER-SERVICES

function goToWebDesign() {
  window.location.href = "../web-design/web-design.html";
}

function goToSeo() {
  window.location.href = "../seo/seo.html";
}

function goToDigMarket() {
  window.location.href = "../digital-marketing/digital-marketing.html";
}

function goToSocialMarket() {
  window.location.href = "../social-market/social-market.html";
}

function goToGraphicDesign() {
  window.location.href = "../graphic-design/graphic-design.html";
}

function goToBranding() {
  window.location.href = "../branding/branding.html";
}

// Initialize EmailJS
emailjs.init("ISzacFihQ-Z_xnO58");

const serviceID = "service_rvfrmpn";
const templateID = "template_i25a2mj";

// Form 1
document.getElementById("serviceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    service: document.getElementById("services").value,
  };

  emailjs
    .send(serviceID, templateID, templateParams)
    .then((response) => {
      console.log("Email sent successfully:", response.status, response.text);
      document.getElementById("formMessage").innerText =
        "Message sent successfully!";
      document.getElementById("formMessage").style.color = "green";
      document.getElementById("serviceForm").reset();
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      document.getElementById("formMessage").innerText =
        "Failed to send the message. Please try again.";
      document.getElementById("formMessage").style.color = "red";
    });
});

// Form 2
document
  .getElementById("serviceForm2")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const templateParams = {
      name: document.getElementById("name2").value,
      email: document.getElementById("email2").value,
      mobile: document.getElementById("mobile2").value,
      service: document.getElementById("services2").value,
    };

    emailjs
      .send(serviceID, templateID, templateParams)
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        alert("Form submitted successfully!");
        document.getElementById("serviceForm2").reset();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send the message. Please try again.");
      });
  });
