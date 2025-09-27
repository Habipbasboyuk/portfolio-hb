const animatedElements = new Set(); // Track animated elements

const leftFadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !animatedElements.has(entry.target)) {
      entry.target.classList.add('fade-in');
      animatedElements.add(entry.target); // Mark as animated
      leftFadeObserver.unobserve(entry.target); // Stop observing this element
    }
  });
});

document.querySelectorAll('.animation').forEach((element) => {
  leftFadeObserver.observe(element);
});

const rightFadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !animatedElements.has(entry.target)) {
      entry.target.classList.add('fade-in-right');
      animatedElements.add(entry.target); // Mark as animated
      rightFadeObserver.unobserve(entry.target); // Stop observing this element
    }
  });
});

let image = document.querySelector('.intro__profile-content');
if (image) {
  rightFadeObserver.observe(image);
}