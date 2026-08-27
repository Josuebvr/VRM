window.addEventListener('DOMContentLoaded', () => {
    const introContainer = document.getElementById('intro-container');
    const logoWrapper = document.getElementById('logo-wrapper');
    const mainContent = document.getElementById('main-content');
    const heroPlattenbau = document.getElementById('hero-plattenbau');
    const textMask = document.getElementById('text-mask');

    // 1. Gera a grelha do Plattenbau dinamicamente
    const plattenbauGrid = document.getElementById('plattenbau-grid');
    if(plattenbauGrid) {
        for(let i = 0; i < 50; i++) {
            const panel = document.createElement('div');
            panel.classList.add('panel');
            plattenbauGrid.appendChild(panel);
        }
    }

    // 2. Orquestração da Transição VRM -> Plattenbau
    setTimeout(() => {
        // A) Dispara a animação nas próprias letras (Gira -> Pausa -> Mergulho)
        logoWrapper.classList.add('expand-to-plattenbau');

        // B) Prepara o conteúdo principal por baixo
        mainContent.style.display = 'block';

        // C) Inicia o crossfade aos 1200ms, quando a câmera já está mergulhando DENTRO das letras coloridas
        setTimeout(() => {
            introContainer.style.opacity = '0';
        }, 1200); 

        // D) Limpa a intro da memória aos 2100ms
        setTimeout(() => {
            introContainer.style.display = 'none'; 
            document.body.style.overflow = 'auto'; 
            window.scrollTo(0, 0);
            iniciarAnimacoesDeScroll();
        }, 2100); 

    }, 3200);
    // Lógica de Dinamismo (Scroll Reveal) continua igual...
    function iniciarAnimacoesDeScroll() {
        const elementosParaAnimar = document.querySelectorAll('.reveal');
        const configuracao = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entradas, observador) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('active'); 
                    observador.unobserve(entrada.target); 
                }
            });
        }, configuracao);
        elementosParaAnimar.forEach(elemento => observer.observe(elemento));
    }
});
