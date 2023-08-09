document.addEventListener("DOMContentLoaded", function () {
  const applyButtons = document.querySelectorAll(".apply-btn");
  const modal = document.getElementById("application-modal");
  const closeModal = modal.querySelector(".close");
  const jobTitle = document.getElementById("job-title");
  const applicationForm = document.getElementById("application-form");

  applyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      jobTitle.textContent = this.getAttribute("data-job");
      modal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  applicationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Here, you would typically handle form submission via AJAX or fetch to a backend
    // to process the application and store the data.
    // For the sake of this example, we're not including the actual backend code.
    alert("Application submitted successfully!");
    modal.style.display = "none";
  });
});
