document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    const section = document.querySelector("#contact-section");
    if (section) observer.observe(section);
  });

  

  document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll("[data-animate]");
  
    animatedElements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-1000");
    });
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target); // agar hanya animasi 1x
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    animatedElements.forEach((el) => observer.observe(el));
  });
  