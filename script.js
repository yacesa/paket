const cards = document.querySelectorAll('.card');

if (cards.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('show'), index * 120);
      }
    });
  }, { threshold: .12 });

  cards.forEach(card => io.observe(card));
}

const nav = document.querySelector('.navbar');

if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 80
      ? 'rgba(3,8,12,.76)'
      : 'rgba(3,8,12,.48)';

    nav.style.boxShadow = window.scrollY > 80
      ? '0 12px 35px rgba(0,0,0,.22)'
      : 'none';
  });
}
