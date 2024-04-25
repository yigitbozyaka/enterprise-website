const pricing = document.getElementById("pricing");
const features = document.getElementById("features");
const pricingBtns = document.querySelectorAll(".pricing-btn");
const featuresBtns = document.querySelectorAll(".features-btn");

pricingBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    smoothScrollTo(pricing, "pricing");
  });
});

featuresBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    smoothScrollTo(features, "features");
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
