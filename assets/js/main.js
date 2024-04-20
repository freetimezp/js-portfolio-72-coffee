//change bg header
const bgHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50
        ? header.classList.add('bg-header')
        : header.classList.remove('bg-header');
}

window.addEventListener('scroll', bgHeader);


//scrollup
const scrollup = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 250 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollup);



//set section active
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


//scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal(`.home__data, .products__data, .about__data, .testimonial__data`, { opacity: 0 });
sr.reveal(`.home__img, .testimonial__img, .about__img`, { scale: 0.1 });
sr.reveal(`.products__card, .steps__card, .footer__container`, { interval: 200 });




