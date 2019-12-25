let bars = document.querySelector(".bars");
let nav = document.querySelector(".menu nav");
let links = document.querySelectorAll(".menu nav a");

bars.addEventListener("click", function() {
  nav.classList.toggle("open-nav");
  bars.classList.toggle("cross");
});
window.addEventListener("resize", function() {
  nav.classList.remove("open-nav");
  bars.classList.remove("cross");
});
links.forEach(function(link) {
  link.addEventListener("click", function() {
    nav.classList.remove("open-nav");
    bars.classList.remove("cross");
  });
});
