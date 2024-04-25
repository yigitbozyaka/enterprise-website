const pricing = document.getElementById("pricing");
const features = document.getElementById("features");
const pricingBtns = document.querySelectorAll(".pricing-btn");
const featuresBtns = document.querySelectorAll(".features-btn");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenu.style.display = "none";

pricingBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    smoothScrollTo(pricing, "pricing");
    mobileMenu.style.display = "none";
  });
});

featuresBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    smoothScrollTo(features, "features");
    mobileMenu.style.display = "none";
  });
});

function smoothScrollTo(element, path) {
  if (window.location.pathname === "/index.html") {
    window.scrollTo({
      left: element.offsetLeft,
      top: element.offsetTop,
      behavior: 'smooth'
    });
  } else {
    window.location.href = "/index.html#" + path;
  }
}

mobileMenuIcon.addEventListener("click", () => {
  mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
});
