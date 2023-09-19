// JavaScript für Navigation-Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Anpassen des Scroll-Offsets
            behavior: 'smooth'
        });
    });
});

// JavaScript für Bildergalerie
const images = document.querySelectorAll('#gallery img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src;
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modalImage.addEventListener('click', (e) => {
    e.stopPropagation();
});