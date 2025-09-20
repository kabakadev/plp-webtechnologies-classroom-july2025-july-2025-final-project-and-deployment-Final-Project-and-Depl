/* Main site JS: nav toggle, slider, scroll-reveal, footer year, form validation */

/* Footer year */
document.addEventListener('DOMContentLoaded', () => {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
  
  /* Mobile nav toggle */
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  
    // close menu on link click (mobile)
    siteNav.addEventListener('click', (e) => {
      if (e.target.matches('a')) {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  /* Simple slider (Home) */
  (function initSlider(){
    const slider = document.querySelector('[data-slider]');
    if (!slider) return;
  
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const nextBtn = slider.querySelector('[data-next]');
    const prevBtn = slider.querySelector('[data-prev]');
    const dotsWrap = slider.querySelector('[data-dots]');
    let index = 0;
    let timer;
  
    function go(i){
      slides[index].classList.remove('is-active');
      dotsWrap.children[index].setAttribute('aria-selected', 'false');
      index = (i + slides.length) % slides.length;
      slides[index].classList.add('is-active');
      dotsWrap.children[index].setAttribute('aria-selected', 'true');
      restart();
    }
  
    // Build dots
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-controls', `slide-${i+1}`);
      b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      b.addEventListener('click', () => go(i));
      dotsWrap.appendChild(b);
    });
  
    nextBtn.addEventListener('click', () => go(index + 1));
    prevBtn.addEventListener('click', () => go(index - 1));
  
    function restart(){
      clearInterval(timer);
      timer = setInterval(() => go(index + 1), 6000);
    }
    restart();
  
    // Pause on hover/focus for accessibility
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', restart);
    slider.addEventListener('focusin', () => clearInterval(timer));
    slider.addEventListener('focusout', restart);
  })();
  
  /* Scroll reveal */
  (function revealOnScroll(){
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;
  
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    items.forEach(el => io.observe(el));
  })();
  
  /* Contact form validation */
  (function contactValidation(){
    const form = document.getElementById('contact-form');
    if (!form) return;
  
    const nameEl = form.querySelector('#name');
    const emailEl = form.querySelector('#email');
    const msgEl = form.querySelector('#message');
    const errName = form.querySelector('#err-name');
    const errEmail = form.querySelector('#err-email');
    const errMsg = form.querySelector('#err-message');
    const success = form.querySelector('#success');
  
    function showError(el, msgTarget, message){
      msgTarget.textContent = message;
      el.setAttribute('aria-invalid', 'true');
    }
    function clearError(el, msgTarget){
      msgTarget.textContent = '';
      el.removeAttribute('aria-invalid');
    }
    function isEmail(v){
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    }
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
  
      // Name
      if (!nameEl.value.trim() || nameEl.value.trim().length < 2) {
        showError(nameEl, errName, 'Please enter your name (min 2 characters).');
        ok = false;
      } else { clearError(nameEl, errName); }
  
      // Email
      if (!emailEl.value.trim() || !isEmail(emailEl.value.trim())) {
        showError(emailEl, errEmail, 'Please enter a valid email address.');
        ok = false;
      } else { clearError(emailEl, errEmail); }
  
      // Message
      if (!msgEl.value.trim() || msgEl.value.trim().length < 10) {
        showError(msgEl, errMsg, 'Message must be at least 10 characters.');
        ok = false;
      } else { clearError(msgEl, errMsg); }
  
      if (ok) {
        success.classList.remove('hide');
        form.reset();
        setTimeout(() => success.classList.add('hide'), 4000);
      }
    });
  })();
  