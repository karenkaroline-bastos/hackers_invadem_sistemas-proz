// Seleção dos elementos
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;   // Índice do primeiro card visível
let autoSlide;   // Intervalo automático

// Função que calcula quantos cards aparecem por vez
function cardsPerView() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
}

// Move o carrossel para o índice atual
function moveCarousel() {
    const cardWidth = cards[0].offsetWidth + 10; // +10 para margem
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Avança o carrossel
function next() {
    const maxIndex = cards.length - cardsPerView();
    index = index < maxIndex ? index + 1 : 0;
    moveCarousel();
}

// Volta o carrossel
function prev() {
    const maxIndex = cards.length - cardsPerView();
    index = index > 0 ? index - 1 : maxIndex;
    moveCarousel();
}

// Inicia autoplay
function startAuto() {
    autoSlide = setInterval(next, 2000);
}

// Para autoplay
function stopAuto() {
    clearInterval(autoSlide);
}

// Botões
nextBtn.addEventListener('click', () => {
    stopAuto();
    next();
});

prevBtn.addEventListener('click', () => {
    stopAuto();
    prev();
});

// Para autoplay ao clicar em qualquer card
cards.forEach(card => {
    card.addEventListener('click', stopAuto);
});

// Ajusta carrossel ao redimensionar a tela
window.addEventListener('resize', moveCarousel);

// Inicializa autoplay
startAuto();
