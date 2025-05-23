// Animation for header on load
window.onload = function () {
  document.querySelector("header h1").classList.add("danger-animate");
};

// Add a little interactive touch
document.querySelectorAll(".projects li").forEach((item) => {
  item.addEventListener("click", () => {
    alert("Project: " + item.textContent.trim());
  });
});