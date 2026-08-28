window.addEventListener("DOMContentLoaded", () => {
    const introContainer = document.getElementById("intro-container");
    const logoWrapper = document.getElementById("logo-wrapper");
    const mainContent = document.getElementById("main-content");
    const heroPlattenbau = document.getElementById("hero-plattenbau");

    mainContent.style.display = "block";

    setTimeout(() => {
        logoWrapper.classList.add("expand-to-plattenbau");
    }, 1500);

    setTimeout(() => {
        introContainer.style.opacity = "0";
        heroPlattenbau.classList.add("reverse-zoom");
        dynamicBg.classList.add("reverse-zoom");
    }, 2500);

    setTimeout(() => {
        introContainer.style.display = "none";
        document.body.style.overflow = "auto";
        window.scrollTo(0, 0);

        if (heroPlattenbau) {
            heroPlattenbau.style.background = "transparent";
        }

        iniciarAnimacoesDeScroll();
    }, 3200);

    function iniciarAnimacoesDeScroll() {
        const elementosParaAnimar = document.querySelectorAll(".reveal");
        const configuracao = { root: null, rootMargin: "0px", threshold: 0.15 };

        const observer = new IntersectionObserver((entradas, observador) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("active");
                    observador.unobserve(entrada.target);
                }
            });
        }, configuracao);
        elementosParaAnimar.forEach((elemento) => observer.observe(elemento));
    }

    // --------------
    // Fundo dinâmico
    // --------------

    const dynamicBg = document.createElement("div");
    dynamicBg.style.position = "fixed";
    dynamicBg.style.top = "0";
    dynamicBg.style.left = "0";
    dynamicBg.style.width = "100%";
    dynamicBg.style.height = "100vh";
    dynamicBg.style.zIndex = "-2";
    document.body.appendChild(dynamicBg);

    const cards = document.querySelectorAll(".case-card");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;

        const progress = Math.min(scrollY / (vh * 0.8), 1);
        const angle = -25 + 25 * progress;

        const isMobile = window.innerWidth <= 768;
        const offset = isMobile ? 14 : 0;

        const p1 = 35 - offset;
        const p2 = 51.25 - offset;
        const p3 = 67.5 - offset;
        const p4 = 83.75 - offset;
        const p5 = 100 - offset;

        const h1 = (vh * p1) / 100;
        const h2 = (vh * p2) / 100;
        const h3 = (vh * p3) / 100;
        const h4 = (vh * p4) / 100;
        const h5 = (vh * p5) / 100;

        const c1 =
            cards.length > 4 ? vh - cards[4].getBoundingClientRect().bottom : h1;
        const c2 =
            cards.length > 4 ? vh - cards[4].getBoundingClientRect().top : h2;
        const c3 =
            cards.length > 3 ? vh - cards[3].getBoundingClientRect().top : h3;
        const c4 =
            cards.length > 2 ? vh - cards[2].getBoundingClientRect().top : h4;
        const c5 =
            cards.length > 0 ? vh - cards[0].getBoundingClientRect().top : h5;

        const s1 = h1 + (c1 - h1) * progress;
        const s2 = h2 + (c2 - h2) * progress;
        const s3 = h3 + (c3 - h3) * progress;
        const s4 = h4 + (c4 - h4) * progress;
        const s5 = h5 + (c5 - h5) * progress;

        dynamicBg.style.background = `linear-gradient(${angle}deg,
            #F6F3EB 0px, #F6F3EB ${s1}px,
            #e85c1c ${s1}px, #e85c1c ${s2}px,
            #c62222 ${s2}px, #c62222 ${s3}px,
            #e6a727 ${s3}px, #e6a727 ${s4}px,
            #205da1 ${s4}px, #205da1 ${s5}px,
            #F6F3EB ${s5}px, #F6F3EB 100vh
        )`;
    });

    window.dispatchEvent(new Event("scroll"));
});
