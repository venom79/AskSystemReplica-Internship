const routes = document.querySelectorAll(".route a");

function setActiveClass() {
  routes.forEach((route) => {
    route.classList.remove("active");
    if (route.href === window.location.href) {
      route.classList.add("active");
    }
  });
}

// Set active class on page load
setActiveClass();

// Add click event listeners to all routes
routes.forEach((route) => {
  route.addEventListener("click", function (event) {
    routes.forEach((r) => r.classList.remove("active"));
    this.classList.add("active");
  });
});
