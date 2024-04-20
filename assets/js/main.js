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








