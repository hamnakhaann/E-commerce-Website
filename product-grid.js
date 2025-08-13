
const sidebar = document.getElementById("sidebar");
const priceRange = document.getElementById("priceRange");
const rangeValue = document.getElementById("rangeValue");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown").forEach(dropdown => {
    dropdown.classList.add("open");
  });
});


document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const parent = toggle.closest(".dropdown");
    parent.classList.toggle("open");
  });
});

document.querySelectorAll(".see-all").forEach(btn => {
  btn.addEventListener("click", () => {
    const more = btn.previousElementSibling;
    more.classList.remove("hidden");
    btn.style.display = "none";
  });
});

priceRange.addEventListener("input", () => {
  rangeValue.textContent = priceRange.value;
});
