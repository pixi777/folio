// Navigation Animation
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
const close = document.getElementById('closeMenu');

btn.addEventListener('click', () => {
btn.classList.toggle('open');
menu.classList.toggle('hidden');
});

close.addEventListener('click', () => {
btn.classList.remove('open');
menu.classList.add('hidden');
});


// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('pop');
      } else {
          entry.target.classList.remove('pop');
      }
  });
});

const hiddenElements = document.querySelectorAll('.push');
hiddenElements.forEach((el) => observer.observe(el));