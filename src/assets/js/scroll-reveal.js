(function () {
  const initializeScrollReveals = () => {
    const targets = document.querySelectorAll(
      '.hero-card, .intro-grid > div, .experience-card, .skill-card, .education-card, .contact-card'
    );

    if (!targets.length) {
      const appRoot = document.querySelector('app-root');
      if (appRoot) {
        const contentObserver = new MutationObserver(() => {
          if (appRoot.querySelector('.hero-card')) {
            contentObserver.disconnect();
            initializeScrollReveals();
          }
        });
        contentObserver.observe(appRoot, { childList: true, subtree: true });
      }
      return;
    }

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver((entries, revealObserver) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.dataset.scrollReveal = 'visible';
          revealObserver.unobserve(entry.target);
        }
      }
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    document.body.classList.add('scroll-animations-ready');
    for (const target of targets) {
      target.dataset.scrollReveal = 'pending';
      observer.observe(target);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeScrollReveals, { once: true });
  } else {
    initializeScrollReveals();
  }
})();
