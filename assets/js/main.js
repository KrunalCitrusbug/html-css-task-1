// Simple button click example
const actionBtn = document.getElementById('action-btn');

actionBtn.addEventListener('click', () => {
  alert('Button clicked! 🎉');
});


// FAQ Toggle Functionality
document.querySelectorAll('.faq-box').forEach(faq => {
  const header = faq.querySelector('.faq-close, .faq-top');
  header.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});