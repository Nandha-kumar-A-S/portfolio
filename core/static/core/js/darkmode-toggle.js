// Toggle dark mode and store preference
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-toggle");
  const body = document.body;

  // Load stored mode
  const storedMode = localStorage.getItem("theme");
  if (storedMode === "dark") {
    body.classList.add("dark");
  }

  // Toggle and store
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const mode = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", mode);
  });
});
