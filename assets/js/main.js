//change bg header
const bgHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50
        ? header.classList.add('bg-header')
        : header.classList.remove('bg-header');
}

window.addEventListener('scroll', bgHeader);