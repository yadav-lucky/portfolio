// Navigation effect
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll("nav ul li a").forEach(link => link.classList.remove("active"));
    link.classList.add("active");
  });
});

// Slow down the video playback rate to 0.4 (40% speed)
document.getElementById('video-background').playbackRate = 0.4;

