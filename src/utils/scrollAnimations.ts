// Scroll Animation Utilities for Aurum Advisory

export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // For stagger animations
        if (entry.target.classList.contains('stagger-container')) {
          const items = entry.target.querySelectorAll('.stagger-item');
          items.forEach((item) => {
            item.classList.add('visible');
          });
        }
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((el) => observer.observe(el));

  // Observe stagger containers
  const staggerContainers = document.querySelectorAll('.stagger-container');
  staggerContainers.forEach((el) => observer.observe(el));
};

// Parallax effect for backgrounds
export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  
  const handleScroll = () => {
    parallaxElements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      const scrolled = window.pageYOffset;
      const rect = htmlElement.getBoundingClientRect();
      const speed = 0.5;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const yPos = -(scrolled - rect.top) * speed;
        htmlElement.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial call
};

// Initialize all animations
export const initAllAnimations = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations();
      initParallax();
    });
  } else {
    initScrollAnimations();
    initParallax();
  }
};
