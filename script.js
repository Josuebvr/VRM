window.addEventListener('DOMContentLoaded', () => {
    const introContainer = document.getElementById('intro-container');
    const mainContent = document.getElementById('main-content');

    // 1. Controle da Tela de Abertura
    setTimeout(() => {
        introContainer.style.opacity = '0'; 

        setTimeout(() => {
            introContainer.style.display = 'none'; 
            mainContent.style.display = 'block'; 
            document.body.style.overflow = 'auto'; 
            window.scrollTo(0, 0);

            // Assim que o site aparecer, chamamos a função que liga o dinamismo do scroll
            iniciarAnimacoesDeScroll();
        }, 1000); 

    }, 5000); 

    // 2. Lógica de Dinamismo (Scroll Reveal)
    function iniciarAnimacoesDeScroll() {
        const elementosParaAnimar = document.querySelectorAll('.reveal');

        // Configuração do observador: só dispara quando 15% do elemento estiver visível
        const configuracao = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 
        };

        const observer = new IntersectionObserver((entradas, observador) => {
            entradas.forEach(entrada => {
                // Se o elemento entrou na tela
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('active'); // Adiciona a classe que faz surgir
                    observador.unobserve(entrada.target); // Para de observar (anima só uma vez)
                }
            });
        }, configuracao);

        // Manda o observador vigiar todos os elementos com a classe .reveal
        elementosParaAnimar.forEach(elemento => {
            observer.observe(elemento);
        });
    }
});