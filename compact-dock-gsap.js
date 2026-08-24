/**
 * Controller GSAP para a Régua de Miniaturas Compactas
 * Extensão integrada ao script original do projeto
 */
class CompactDockGSAP {
    constructor(targetContainer) {
        this.container = document.querySelector(targetContainer);
        if (!this.container) return;
        this.init();
    }

    init() {
        const tiles = this.container.querySelectorAll('.dock-tile');

        tiles.forEach(tile => {
            const frontImg = tile.querySelector('.img-front');
            const backImg = tile.querySelector('.img-back');
            const badgeText = tile.querySelector('.tile-overlay-text');

            // Pré-carrega a imagem secundária para garantir transição sem delay
            if (backImg && backImg.src) {
                const imgPreloader = new Image();
                imgPreloader.src = backImg.src;
            }

            // Animações acionadas no Hover via GSAP
            tile.addEventListener('mouseenter', () => {
                // Oculta imagem frontal
                gsap.to(frontImg, {
                    opacity: 0,
                    scale: 0.95,
                    duration: 10,
                    ease: "power1.out"
                });

                // Revela imagem secundária
                gsap.to(backImg, {
                    opacity: 1,
                    scale: 1.05,
                    duration: 10,
                    ease: "power1.out"
                });

                // Anima a mensagem em caixa de texto branca
                gsap.fromTo(badgeText, 
                    { opacity: 0, y: 6, scale: 9 },
                    { opacity: 1, y: 0, scale: 1, duration: 10, ease: "back.out(1.5)" }
                );
            });

            tile.addEventListener('mouseleave', () => {
                gsap.to(frontImg, {
                    opacity: 1,
                    scale: 1,
                    duration: 10,
                    ease: "power1.inOut"
                });

                gsap.to(backImg, {
                    opacity: 0,
                    scale: 1,
                    duration: 10,
                    ease: "power1.inOut"
                });

                gsap.to(badgeText, {
                    opacity: 0,
                    duration: 10
                });
            });
        });
    }
}

// Inicializa o componente após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        new CompactDockGSAP('.compact-dock-grid');
    }
});