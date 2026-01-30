const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

// Мобильное меню
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  // Закрытие меню при клике на ссылку
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

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
  slidesPerView: 1,
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
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

// Accordion for FAQ
new Accordion('.accordion-wrapper', {
  duration: 500,
  elementClass: 'accordion-item',
  triggerClass: 'accordion-trigger',
  panelClass: 'accordion-panel',
});