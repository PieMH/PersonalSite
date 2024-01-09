const images = document.querySelectorAll('.mountains');
const maxWidth = document.body.offsetWidth;
const imageWidth = images[0].offsetWidth / 2;
const maxOffset = maxWidth - imageWidth;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const offset = (scrollPosition / window.innerHeight) * (maxOffset) / 25;
    images[0].style.left = `${-offset}px`;
    images[1].style.right = `${-offset}px`;
});