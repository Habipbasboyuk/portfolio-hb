const leftFadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    } else {
      entry.target.classList.remove('fade-in');
    }
  });
});
document.querySelectorAll('.animation').forEach((element) => {
  leftFadeObserver.observe(element);
});

const rightFadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-right');
    } else {
      entry.target.classList.remove('fade-in-right');
    }
  });
});



let image = document.querySelector('.intro__profile-content');

rightFadeObserver.observe(image);