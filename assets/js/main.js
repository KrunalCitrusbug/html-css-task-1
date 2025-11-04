// Simple button click example
const actionBtn = document.getElementById('action-btn');

actionBtn.addEventListener('click', () => {
  alert('Button clicked! 🎉');
});


document.addEventListener("DOMContentLoaded", function () {
  // Select all FAQ boxes
  const faqBoxes = document.querySelectorAll(".faq-box");

  faqBoxes.forEach((box) => {
    const closeSection = box.querySelector(".faq-box-close");
    const openSection = box.querySelector(".faq-box-open");

    // Initially hide all open sections
    openSection.style.display = "none";

    // Add click event
    closeSection.addEventListener("click", () => {
      const isOpen = openSection.style.display === "block";

      // Close all other FAQs
      faqBoxes.forEach((b) => {
        b.querySelector(".faq-box-open").style.display = "none";
        b.querySelector(".faq-box-close").style.display = "flex";
      });

      // Toggle the clicked one
      if (!isOpen) {
        openSection.style.display = "block";
        closeSection.style.display = "none";
      } else {
        openSection.style.display = "none";
        closeSection.style.display = "flex";
      }
    });

    // Also allow the open top to close it again
    const openTop = box.querySelector(".faq-box-open-top");
    openTop.addEventListener("click", () => {
      openSection.style.display = "none";
      closeSection.style.display = "flex";
    });
  });
});