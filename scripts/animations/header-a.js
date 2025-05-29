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

      gsap.to('.umlaut-dot', {
    opacity: 1,
    y: 0.1, // since your CSS starts at translateY(-10px), this brings it to 0
    duration: 0.3,
    stagger: 0,
    ease: ""
  });

});

const aboutSection = document.querySelector('.about__skills');
const aboutChecksAnimated = { value: false };

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
if (entry.isIntersecting && !aboutChecksAnimated.value) {
  gsap.to('.about__check', { 
    y: -3,
    duration: 1.5,
    ease: "power1.inOut",
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

// Add this to trigger the animation after a delay or on some event
document.querySelector('.umlaut-container').classList.add('animate');