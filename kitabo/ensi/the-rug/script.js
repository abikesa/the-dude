document.addEventListener("DOMContentLoaded", function () {
    // Expand/Collapse toggles
    const summaries = document.querySelectorAll("details.custom-details > summary");
    summaries.forEach(summary => {
      const details = summary.parentNode;
      summary.textContent = details.open ? "- Collapse" : "+ Expand";
      details.addEventListener("toggle", () => {
        summary.textContent = details.open ? "- Collapse" : "+ Expand";
      });
    });
  
    // Theme toggle
    const toggleBtn = document.getElementById("modeToggle");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleBtn.textContent = document.body.classList.contains("dark-mode")
        ? "🌚 Dark Mode"
        : "🌞 Light Mode";
    });
  });
  