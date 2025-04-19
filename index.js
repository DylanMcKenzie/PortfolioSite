document.addEventListener("DOMContentLoaded", function () {
  const experienceHeaders = document.querySelectorAll(".experience-header");

  experienceHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector(".toggle-icon");

      content.classList.toggle("active");
      icon.classList.toggle("active");
    });
  });
});
