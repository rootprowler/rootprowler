document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  const overlay = document.getElementById("transition-overlay");

  links.forEach(link => {
    if (link.hostname === window.location.hostname && !link.classList.contains("contact-link")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const destination = this.getAttribute("href");
        overlay.classList.add("show");
        setTimeout(() => {
          window.location.href = destination;
        }, 500);
      });
    }
  });
});
