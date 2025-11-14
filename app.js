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

// Cursor-animation
const shapes = [
  "D",
  "E",
  "S",
  "I",
  "G",
  "N",
  " ",
  "G",
  "L",
  "O",
  "B",
  "A",
  "L",
  " ",
  "T",
  "E",
  "C",
  "H",
  "N",
  "O",
  "L",
  "O",
  "G",
  "Y",
];
const colors = [
  "#3d83ea",
  "#74b139",
  "#ec9519",
  "#1fe4f9",
  "#052595",
  "#df4344",
  "#986299",
];

let lastX = 0;
let lastY = 0;
let isMoving = false;

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  if (!isMoving || Math.abs(x - lastX) > 10 || Math.abs(y - lastY) > 10) {
    isMoving = true;
    createShape(x, y);
  }

  lastX = x;
  lastY = y;
});

document.addEventListener("mouseleave", () => {
  isMoving = false;
});

function createShape(x, y) {
  const shape = document.createElement("div");
  shape.className = "shape";

  // Get random letter from the new array
  shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];

  shape.style.left = x - 15 + "px"; // Center the shape
  shape.style.top = y - 30 + "px"; // Start above the cursor

  // Use new color palette
  shape.style.color = colors[Math.floor(Math.random() * colors.length)];

  // Add spacing for space characters
  if (shape.textContent === " ") {
    shape.style.minWidth = "10px";
    shape.style.letterSpacing = "6px";
  }

  document.body.appendChild(shape);

  const animation = shape.animate(
    [
      { transform: "translateY(0)", opacity: 1 },
      { transform: "translateY(150px)", opacity: 0 },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    }
  );

  animation.onfinish = () => {
    shape.remove();
  };
}

// banner-effect

// Initialize parallax for banner
var bannerScene = document.getElementById("bannerParallax");
if (bannerScene) {
  var parallax = new Parallax(bannerScene, {
    selector: ".layer",
    hoverOnly: true, // Optional: only on mouse move
    relativeInput: true,
  });
}
