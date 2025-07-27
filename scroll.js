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