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

//array
let content= [
  {title: 'Car Rental',
  body: `Unique and varied rental services as follows:
  1- Car rental for foreign and local organizations, institutions, companies and ministries.
  2- Car rental for businessmen and VIPs.
  3- Annual, monthly, weekly and daily rentals.
  4- Renting limousines for weddings and events.`},
  {title:'Insurance',
  body:'The company is committed to insuring all of its cars through the largest insurance companies in the country'},
  {title: 'Car Rental',
  body: `Unique and varied rental services as follows:
  1- Car rental for foreign and local organizations, institutions, companies and ministries.
  2- Car rental for businessmen and VIPs.
  3- Annual, monthly, weekly and daily rentals.
  4- Renting limousines for weddings and events.`},
  {title:'Insurance',
  body:'The company is committed to insuring all of its cars through the largest insurance companies in the country'}
]