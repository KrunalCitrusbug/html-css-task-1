document.addEventListener("DOMContentLoaded", function () {
  // FAQ functionality
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

  // UOS Carousel functionality
  const carousel = document.querySelector('.uos-boxs');
  const prevBtn = document.querySelector('.uos-btn-prev');
  const nextBtn = document.querySelector('.uos-btn-next');
  const originalCards = document.querySelectorAll('.uos-boxs .s2-gallery-item1');
  
  if (carousel && prevBtn && nextBtn && originalCards.length > 0) {
    let currentIndex = 0;
    let isTransitioning = false;
    
    // Create infinite loop by duplicating cards
    function createInfiniteLoop() {
      // Clear existing cards
      carousel.innerHTML = '';
      
      // Add multiple sets of cards for infinite scrolling
      for (let i = 0; i < 3; i++) { // 3 sets = 12 cards total
        originalCards.forEach(card => {
          const clonedCard = card.cloneNode(true);
          carousel.appendChild(clonedCard);
        });
      }
      
      // Start from the middle set to allow backward scrolling
      currentIndex = originalCards.length;
      updateCarousel(false);
    }
    
    // Get cards per view based on screen size
    function getCardsPerView() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) return 1; // Mobile: 1 card
      if (screenWidth <= 992) return 2; // Tablet: 2 cards
      return 4; // Desktop: 4 cards
    }
    
    // Calculate card width including gap
    function getCardWidth() {
      const cards = carousel.querySelectorAll('.s2-gallery-item1');
      if (cards.length === 0) return 300;
      
      const cardRect = cards[0].getBoundingClientRect();
      const gap = 20;
      return cardRect.width + gap;
    }
    
    // Update carousel position
    function updateCarousel(withTransition = true) {
      const cardWidth = getCardWidth();
      const translateX = -currentIndex * cardWidth;
      
      if (withTransition) {
        carousel.style.transition = 'transform 0.5s ease';
      } else {
        carousel.style.transition = 'none';
      }
      
      carousel.style.transform = `translateX(${translateX}px)`;
    }
    
    // Handle infinite loop reset
    function handleInfiniteLoop() {
      const totalCards = carousel.querySelectorAll('.s2-gallery-item1').length;
      const cardsPerSet = originalCards.length;
      
      // If we're at the beginning of first set, jump to beginning of middle set
      if (currentIndex < 0) {
        currentIndex = cardsPerSet + currentIndex;
        updateCarousel(false);
      }
      // If we're at the end of last set, jump to end of middle set
      else if (currentIndex >= totalCards - cardsPerSet) {
        currentIndex = cardsPerSet + (currentIndex - (totalCards - cardsPerSet));
        updateCarousel(false);
      }
    }
    
    // Next button functionality
    nextBtn.addEventListener('click', () => {
      if (isTransitioning) return;
      
      isTransitioning = true;
      currentIndex++;
      updateCarousel();
      
      setTimeout(() => {
        handleInfiniteLoop();
        isTransitioning = false;
      }, 500);
    });
    
    // Previous button functionality
    prevBtn.addEventListener('click', () => {
      if (isTransitioning) return;
      
      isTransitioning = true;
      currentIndex--;
      updateCarousel();
      
      setTimeout(() => {
        handleInfiniteLoop();
        isTransitioning = false;
      }, 500);
    });
    
    // Reset carousel on window resize
    window.addEventListener('resize', () => {
      updateCarousel(false);
    });
    
    // Initialize infinite carousel
    createInfiniteLoop();
  }
});