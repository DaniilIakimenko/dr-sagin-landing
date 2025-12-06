// Добавляем круги для разделителя
document.addEventListener('DOMContentLoaded', function () {
  const divider = document.querySelector('.about-divider');
  const positions = [11, 37, 63, 89];

  positions.forEach((position) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.top = `${position}%`;
    divider.appendChild(circle);
  });
});

// Swiper for Reviews
const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Accordion for FAQ
new Accordion('.accordion-wrapper', {
  duration: 500,
  elementClass: 'accordion-item',
  triggerClass: 'accordion-trigger',
  panelClass: 'accordion-panel',
});