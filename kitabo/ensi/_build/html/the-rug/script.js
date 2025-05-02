const toggleBtn = document.getElementById("modeToggle");
const headerIcon = document.getElementById("headerIcon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "🌚 Dark Mode"
    : "🌞 Light Mode";

  // optional dark-mode logo swap
  headerIcon.src = document.body.classList.contains("dark-mode")
    ? "figures/ukubona-006-dm.jpg"
    : "figures/ukubona-006.jpg";
});
