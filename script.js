const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.setAttribute("aria-label", open ? "Stäng meny" : "Öppna meny");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Öppna meny");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Förfrågan om elservice från ${name}`);
  const body = encodeURIComponent(
    `Hej Elservice Lund!\n\nNamn: ${name}\nE-post: ${email}\n\nJag behöver hjälp med:\n${message}\n\nMed vänlig hälsning,\n${name}`
  );

  window.location.href = `mailto:info@elservice-lund.se?subject=${subject}&body=${body}`;
  status.textContent = "Ditt e-postprogram öppnas nu.";
});
