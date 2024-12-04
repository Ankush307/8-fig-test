function toggleAccordion(currentHeader) {
    const allItems = document.querySelectorAll('.accordion-item');
    const content = currentHeader.nextElementSibling;
    const icon = currentHeader.querySelector('.icon');

    allItems.forEach(item => {
        const otherContent = item.querySelector('.accordion-content');
        const otherIcon = item.querySelector('.icon');

        if (otherContent !== content) {
            otherContent.style.height = '0px';
            otherContent.classList.add('hidden');
            otherIcon.textContent = '+';
        }
    });

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        const contentHeight = content.scrollHeight + "px";
        content.style.height = contentHeight;
        icon.textContent = '-';
    } else {
        content.style.height = '0px';
        content.classList.add('hidden');
        icon.textContent = '+';
    }
}
// =================Back To Top ===================
const backToTop = document.getElementById('backToTop');
const heroSection = document.getElementById('hero');

window.addEventListener('scroll', () => {
  const heroBottom = heroSection.getBoundingClientRect().bottom;

  if (heroBottom < 0) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}