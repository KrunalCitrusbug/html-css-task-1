document.addEventListener("DOMContentLoaded", function () {
  const faqBoxes = document.querySelectorAll(".faq-box");

  faqBoxes.forEach((box) => {
    const closeSection = box.querySelector(".faq-box-close");
    const openSection = box.querySelector(".faq-box-open");
    const openTop = box.querySelector(".faq-box-open-top");

    // hide initially
    openSection.style.display = "none";

    // click anywhere in header (including icon)
    closeSection.addEventListener("click", () => {
      const isOpen = openSection.style.display === "block";

      faqBoxes.forEach((b) => {
        b.querySelector(".faq-box-open").style.display = "none";
        b.querySelector(".faq-box-close").style.display = "flex";
      });

      if (!isOpen) {
        openSection.style.display = "block";
        closeSection.style.display = "none";
      }
    });

    // close when open header clicked
    openTop.addEventListener("click", () => {
      openSection.style.display = "none";
      closeSection.style.display = "flex";
    });
  });
});