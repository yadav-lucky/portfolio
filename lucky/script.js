// JavaScript file to handle dynamic features like navigation effects
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll("nav ul li a").forEach(link => link.classList.remove("active"));
      link.classList.add("active");
    });
  });
  