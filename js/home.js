/* =========================================================
   HOMEPAGE ONLY: FAQ accordion, testimonial carousel,
   animated stat counters, contact form handling.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq-item__q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const wasOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach((el) => {
        el.classList.remove("is-open");
        el.querySelector(".faq-item__q").setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---- Testimonial carousel ---- */
  const testimonials = document.querySelectorAll(".testimonial");
  const dotsWrap = document.getElementById("testimonialDots");
  let activeIndex = 0;
  let autoTimer = null;

  if (testimonials.length && dotsWrap) {
    testimonials.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Show testimonial ${i + 1}`);
      if (i === 0) dot.classList.add("is-active");
      dot.addEventListener("click", () => showTestimonial(i));
      dotsWrap.appendChild(dot);
    });

    function showTestimonial(i) {
      testimonials[activeIndex].classList.remove("is-active");
      dotsWrap.children[activeIndex].classList.remove("is-active");
      activeIndex = i;
      testimonials[activeIndex].classList.add("is-active");
      dotsWrap.children[activeIndex].classList.add("is-active");
    }

    function next() {
      showTestimonial((activeIndex + 1) % testimonials.length);
    }

    function startAuto() {
      autoTimer = setInterval(next, 6000);
    }
    startAuto();

    dotsWrap.addEventListener("click", () => {
      clearInterval(autoTimer);
      startAuto();
    });
  }

  /* ---- Animated stat counters (single reveal on scroll into view) ---- */
  const counters = document.querySelectorAll("[data-count-to]");
  if (counters.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCount(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => observer.observe(el));
  } else {
    counters.forEach((el) => (el.textContent = el.getAttribute("data-count-label")));
  }

  function animateCount(el) {
    const target = parseFloat(el.getAttribute("data-count-to"));
    const suffix = el.getAttribute("data-count-suffix") || "";
    const duration = 1100;
    const start = performance.now();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = target.toLocaleString() + suffix;
      return;
    }

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased * 10) / 10;
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---- Contact form (front-end only — no backend configured) ---- */
  const contactForm = document.getElementById("contactForm");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    contactForm.reset();
    showToast("Message sent — we'll get back to you shortly");
  });
});
