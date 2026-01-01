// ===== Highlight active navigation link =====
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });
});


// ===== Fade & slide elements on page load =====
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".js-fade");

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";

    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, index * 150);
  });
});


// ===== Fade & slide elements on scroll =====
function fadeOnScroll() {
  const elements = document.querySelectorAll(".js-fade-on-scroll");
  const windowBottom = window.innerHeight + window.scrollY;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top + window.scrollY;

    if (windowBottom > elementTop + 100) {
      el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateY(30px)";
    }
  });
}

window.addEventListener("scroll", fadeOnScroll);
window.addEventListener("load", fadeOnScroll);


// ===== Modal for Planner Images (UNCHANGED) =====
document.addEventListener("DOMContentLoaded", () => {
  const plannerModal = document.getElementById("plannerModal");
  const plannerImg = document.getElementById("modalImg");
  const plannerCloseBtn = document.querySelector("#plannerModal .modal-close");
  const plannerImages = document.querySelectorAll(".planner-box img");

  plannerImages.forEach(img => {
    img.addEventListener("click", () => {
      plannerModal.style.display = "flex";
      plannerImg.src = img.src;
    });
  });

  plannerCloseBtn.addEventListener("click", () => {
    plannerModal.style.display = "none";
  });

  plannerModal.addEventListener("click", e => {
    if (e.target === plannerModal) {
      plannerModal.style.display = "none";
    }
  });
});


// ===== Meal Prep Hero & Feature Box Animations =====
document.addEventListener("DOMContentLoaded", () => {
  const heroElements = document.querySelectorAll(
    ".mealprep-title-strip, .hero-left, .mealprep-hero-image"
  );

  heroElements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";

    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, index * 150);
  });

  const featureBoxes = document.querySelectorAll(".feature-box");

  featureBoxes.forEach((box, index) => {
    box.classList.add(index % 2 === 0 ? "slide-left" : "slide-right");
  });

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;
  }

  function handleScroll() {
    featureBoxes.forEach(box => {
      if (isInViewport(box)) {
        box.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);
});
