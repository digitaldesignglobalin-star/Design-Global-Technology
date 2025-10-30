// // Countdown Timer
// function updateCountdown() {
//   const eventDate = new Date("October 17, 2025 01:26:00").getTime();
//   const now = new Date().getTime();
//   const distance = eventDate - now;

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
//   document.getElementById("hours").innerHTML = hours
//     .toString()
//     .padStart(2, "0");
//   document.getElementById("minutes").innerHTML = minutes
//     .toString()
//     .padStart(2, "0");
//   document.getElementById("seconds").innerHTML = seconds
//     .toString()
//     .padStart(2, "0");

//   if (distance < 0) {
//     clearInterval(countdownTimer);
//     document.getElementById("countdown").innerHTML = "Event Started!";
//   }
// }

// // Update countdown every second
// const countdownTimer = setInterval(updateCountdown, 1000);
// updateCountdown();

// // Form submission
// document
//   .getElementById("registrationForm")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert(
//       "Thank you for registering! We will contact you with further details."
//     );
//     this.reset();
//   });

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     const targetId = this.getAttribute("href");
//     if (targetId === "#") return;

//     const targetElement = document.querySelector(targetId);
//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop - 80,
//         behavior: "smooth",
//       });
//     }
//   });
// });

// Form submission
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "Thank you for registering! We will contact you with further details."
    );
    this.reset();
  });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
