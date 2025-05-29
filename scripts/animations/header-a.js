document.addEventListener('DOMContentLoaded', () => {

        gsap.to('.intro__image', { 
        y: -10, 
        duration: 2.5, 
        ease: "sine.inOut", 
        yoyo: true, 
        repeat: -1 // infinite loop
    });
    
        gsap.to('.intro__age', { 
        y: -10, 
        duration: 2.2, 
        ease: "sine.inOut", 
        yoyo: true, 
        repeat: -1
    });

});

const aboutSection = document.querySelector('.about__skills');
const aboutChecksAnimated = { value: false };

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
if (entry.isIntersecting && !aboutChecksAnimated.value) {
  gsap.to('.about__check', { 
    y: -3,                // more visible movement
    duration: 1,          // slower, smoother
    ease: "power1.inOut", // smooth easing
    yoyo: true, 
    repeat: -1, 
  });
  aboutChecksAnimated.value = true;
}
  });
});

if (aboutSection) {
  aboutObserver.observe(aboutSection);
}