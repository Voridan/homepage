document.addEventListener('DOMContentLoaded', timeLine);

function timeLine() {
  const observableBlocks = document.querySelectorAll('.timeline__part');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('observed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observableBlocks.forEach((block) => {
    observer.observe(block);
  });
}
