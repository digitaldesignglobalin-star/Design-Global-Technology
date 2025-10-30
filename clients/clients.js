// toggel-btn-openandclose-script

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

// slider-Animation

document.addEventListener("DOMContentLoaded", function () {
  const ring = document.querySelector(".ring");
  const prevBtn = document.getElementById("prevBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pauseIcon = pauseBtn.querySelector("i");

  const images = [
    "../Assets/img/slider-1.jpeg",
    "../Assets/img/slider-2.jpeg",
    "../Assets/img/slider-4.jpeg",
    "../Assets/img/slider-5.jpeg",
    "../Assets/img/slider-6.jpeg",
    "../Assets/img/slider-7.jpeg",
    "../Assets/img/slider-8.jpeg",
    "../Assets/img/slider-3.jpeg",
  ];

  const imageDistance = 500; // z-distance for 3D effect
  const angle = 360 / images.length;
  let isPaused = false;
  let currentRotation = 0;

  // Create and position images in 3D space
  images.forEach((imageUrl, index) => {
    const imageElement = document.createElement("div");
    imageElement.className = "image";
    imageElement.style.backgroundImage = `url(${imageUrl})`;
    imageElement.style.transform = `rotateY(${
      index * angle
    }deg) translateZ(${imageDistance}px)`;

    // Add staggered animation delay for entrance effect
    imageElement.style.animation = `fadeIn 0.8s ease-out ${index * 0.1}s both`;

    ring.appendChild(imageElement);
  });

  // Pause/Play functionality
  pauseBtn.addEventListener("click", function () {
    isPaused = !isPaused;

    const pauseSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
      class="bi bi-pause" viewBox="0 0 16 16">
      <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4
        0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1
        0V4a.5.5 0 0 1 .5-.5"/>
    </svg>`;

    const playSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
      class="bi bi-play" viewBox="0 0 16 16">
      <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1
        0 1.392l-6.363 3.692C4.713 12.69 4 12.345
        4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
    </svg>`;

    if (isPaused) {
      ring.classList.add("paused");
      pauseBtn.innerHTML = playSVG; // Show play icon
    } else {
      ring.classList.remove("paused");
      pauseBtn.innerHTML = pauseSVG; // Show pause icon
    }
  });

  // Next button - rotate ring forward
  nextBtn.addEventListener("click", function () {
    currentRotation -= angle;
    ring.style.transform = `rotateY(${currentRotation}deg)`;
  });

  // Previous button - rotate ring backward
  prevBtn.addEventListener("click", function () {
    currentRotation += angle;
    ring.style.transform = `rotateY(${currentRotation}deg)`;
  });

  // Handle mobile touch events for basic interaction
  let touchStartX = 0;
  let isDragging = false;

  ring.addEventListener("touchstart", function (e) {
    touchStartX = e.touches[0].clientX;
    isDragging = true;
    ring.style.animationPlayState = "paused";
  });

  ring.addEventListener("touchmove", function (e) {
    if (!isDragging) return;

    const touchX = e.touches[0].clientX;
    const deltaX = touchX - touchStartX;

    // Calculate rotation based on drag distance
    const rotation = deltaX * 0.5;

    // Apply rotation directly
    ring.style.transform = `rotateY(${rotation}deg)`;
  });

  ring.addEventListener("touchend", function () {
    isDragging = false;
    if (!isPaused) {
      ring.style.animationPlayState = "running";
    }
  });
});
