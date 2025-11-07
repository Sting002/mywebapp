// Toggle content visibility
const toggleBtn = document.getElementById("toggleBtn");
const extraInfo = document.getElementById("extraInfo");

toggleBtn.addEventListener("click", () => {
  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
    toggleBtn.textContent = "Show Less";
  } else {
    extraInfo.style.display = "none";
    toggleBtn.textContent = "Show More";
  }
});

// Bootstrap-like form validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
});
