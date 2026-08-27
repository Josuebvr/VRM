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

        // C) NOVO TEMPO: Inicia o crossfade e o zoom inverso aos 1800ms!
        // Isso garante que as letras já deram o zoom máximo e saíram da frente da câmera.
        setTimeout(() => {
            introContainer.style.opacity = '0';
            heroPlattenbau.classList.add('reverse-zoom');
        }, 1500); 

        // D) Limpa a intro da memória. 
        // Como adiamos o início do efeito, empurramos a limpeza e a liberação do scroll para 3000ms.
        setTimeout(() => {
            introContainer.style.display = 'none'; 
            document.body.style.overflow = 'auto'; 
            window.scrollTo(0, 0);
            iniciarAnimacoesDeScroll();
        }, 3000); 

    }, 2000);


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
