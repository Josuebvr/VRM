window.addEventListener('DOMContentLoaded', () => {
    const introContainer = document.getElementById('intro-container');
    const mainContent = document.getElementById('main-content');

    // Aguarda a mágica da animação acontecer
    setTimeout(() => {
        // Inicia o fade out da tela de entrada
        introContainer.style.opacity = '0'; 

        // Aguarda a transição de opacidade acabar para revelar o conteúdo
        setTimeout(() => {
            introContainer.style.display = 'none'; 
            mainContent.style.display = 'block'; 
            
            // Devolve a barra de rolagem ao usuário
            document.body.style.overflow = 'auto'; 
            
            // Rola suavemente para o topo caso a página seja recarregada no meio
            window.scrollTo(0, 0);
        }, 1000); 

    }, 5000); // 5 segundos é o tempo ideal para o voo + separação + efeito Netflix
});