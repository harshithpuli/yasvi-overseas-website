const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuToggle.textContent = isOpen ? '×' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = `Study Abroad Enquiry - ${data.get('name')}`;
  const body = [
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Preferred destination: ${data.get('destination')}`,
    `Message: ${data.get('message') || 'Not provided'}`
  ].join('\n');
  window.location.href = `mailto:yasvioverseas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
