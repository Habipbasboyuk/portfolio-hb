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