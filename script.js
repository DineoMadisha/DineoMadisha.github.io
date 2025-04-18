// Scroll spy for navigation highlight on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });
};

// ScrollReveal animations
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

// Typed.js text animation
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Web Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Form submission
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = form.fullname.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!fullname || !email || !phone || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const emailBody = `Full Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
    const mailtoUrl = `mailto:dineomadisha66@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
    form.reset();
    alert("Your message has been sent successfully!");
});

