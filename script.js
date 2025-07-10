document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const animSections = gsap.utils.toArray([
'.flyRight',
'.flyLeft',
  ]);

  animSections.forEach((animSection) => {
    gsap.to(animSection, {
      scrollTrigger: {
        trigger: animSection,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'back.out(1)',
    });
  });
});