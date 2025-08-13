window.addEventListener("DOMContentLoaded", () => {

// placeholder for header
fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("fetch-header").innerHTML = data;
});

// placeholder for footer
fetch("footer.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("fetch-footer").innerHTML = data;
    // Delay until DOM is updated
      setTimeout(initializeCountryDropdown, 100);
});

// dropdown choose country in footer
function initializeCountryDropdown() {
    if (window.$ && $('#country,.country').length) {
      $('#country,.country').select2({
        templateResult: formatOption,
        templateSelection: formatOption
      });
    }
  }

  function formatOption(state) {
    if (!state.id) return state.text;
    const img = $(state.element).data('image');
    if (!img) return state.text;
    return $('<span>' +state.text + '<img src="' + img + '" width="20;" style="margin-left:10px ;" />' + '</span>');
  }
});
  // Set your target date here
  const targetDate = new Date("2025-09-10T00:00:00").getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  };

  updateCountdown(); // initial call
  setInterval(updateCountdown, 1000); // update every second

