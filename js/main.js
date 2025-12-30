// ============================================
// PASS MAJOR - JAVASCRIPT PRINCIPAL
// Animations avancées avec GSAP
// ============================================

// Enregistrer les plugins GSAP
gsap.registerPlugin(ScrollTrigger);
if (typeof ScrollToPlugin !== 'undefined') {
    gsap.registerPlugin(ScrollToPlugin);
}

// ============================================
// LOADER - Inspiré de pulsor.agency
// ============================================

const loader = document.getElementById('loader');
const loaderPercentage = document.getElementById('loaderPercentage');
const body = document.body;

let progress = 0;
let progressInterval;
let isPageLoaded = false;

// Fonction pour mettre à jour le pourcentage de manière réaliste (2 secondes total)
function updateProgress() {
    if (!loaderPercentage) return;
    
    // Simulation de chargement progressif réaliste sur 2 secondes
    // Plus lent au début, accélère au milieu, ralentit à la fin
    let increment;
    let maxProgress = isPageLoaded ? 100 : 95; // Ne pas dépasser 95% tant que la page n'est pas chargée
    
    if (progress < 20) {
        // Début : progression lente (2-4%)
        increment = Math.random() * 2 + 2;
    } else if (progress < 50) {
        // Milieu début : progression moyenne (3-6%)
        increment = Math.random() * 3 + 3;
    } else if (progress < 80) {
        // Milieu : progression rapide (4-8%)
        increment = Math.random() * 4 + 4;
    } else if (progress < 95) {
        // Fin : progression lente (1-3%)
        increment = Math.random() * 2 + 1;
    } else {
        // Derniers pourcentages : très lent (0.5-1.5%)
        increment = Math.random() * 1 + 0.5;
    }
    
    progress = Math.min(progress + increment, maxProgress);
    loaderPercentage.textContent = Math.floor(progress) + '%';
    
    // Si on atteint 100% et que la page est chargée, on peut fermer
    if (progress >= 100 && isPageLoaded) {
        clearInterval(progressInterval);
        // Attendre un peu pour voir le 100%
        setTimeout(() => {
            if (loader) {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 600);
            }
        }, 200);
    }
}

// Démarrer l'animation du pourcentage (2 secondes total)
function startLoader() {
    if (loader && loaderPercentage) {
        // Démarrer à 0%
        loaderPercentage.textContent = '0%';
        
        // Commencer l'animation immédiatement
        progressInterval = setInterval(updateProgress, 40); // Mise à jour toutes les 40ms pour charger en ~2 secondes
    }
}

// Démarrer le loader dès que le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startLoader);
} else {
    // DOM déjà chargé
    startLoader();
}

// Masquer le loader une fois la page chargée
window.addEventListener('load', () => {
    isPageLoaded = true;
    body.classList.remove('loading');
    
    // Une fois la page chargée, permettre au pourcentage d'atteindre 100%
    // Le loader se fermera automatiquement quand progress atteindra 100%
    // Si on est déjà proche de 95%, accélérer légèrement vers 100%
    if (progress >= 95) {
        // Si déjà proche, finir rapidement
        const finishInterval = setInterval(() => {
            progress = Math.min(progress + 2, 100);
            if (loaderPercentage) {
                loaderPercentage.textContent = Math.floor(progress) + '%';
            }
            if (progress >= 100) {
                clearInterval(finishInterval);
                setTimeout(() => {
                    if (loader) {
                        loader.classList.add('hidden');
                        setTimeout(() => {
                            loader.style.display = 'none';
                        }, 600);
                    }
                }, 200);
            }
        }, 30);
    }
    
    // Animation d'apparition du contenu
    gsap.to('body', {
        opacity: 1,
        duration: 0.5
    });
});

// Si la page est déjà chargée
if (document.readyState === 'complete') {
    isPageLoaded = true;
    if (loaderPercentage) {
        // Si déjà chargé, afficher rapidement jusqu'à 100%
        progress = 95;
        if (progressInterval) {
            clearInterval(progressInterval);
        }
        progressInterval = setInterval(() => {
            progress = Math.min(progress + 0.5, 100);
            loaderPercentage.textContent = Math.floor(progress) + '%';
            if (progress >= 100) {
                clearInterval(progressInterval);
                if (loader) {
                    loader.classList.add('hidden');
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 600);
                }
            }
        }, 50);
    }
} else {
    body.classList.add('loading');
}

// ============================================
// NAVIGATION
// ============================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Menu mobile toggle
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        // Ajouter logique menu mobile si nécessaire
    });
}

// ============================================
// HERO SECTION ANIMATIONS
// ============================================

// Animation du titre hero
const titleWords = document.querySelectorAll('.title-word');
titleWords.forEach((word, index) => {
    gsap.fromTo(word, 
        {
            opacity: 0,
            y: 50,
            rotationX: -90
        },
        {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            delay: 0.3 + (index * 0.15),
            ease: "power3.out"
        }
    );
});

// Animation du sous-titre hero (Découvre PASS Major)
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    gsap.fromTo(heroSubtitle,
        {
            opacity: 0,
            y: 40,
            scale: 0.9
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            delay: 0.5,
            ease: "power3.out"
        }
    );
    
    // Animation subtile du texte avec effet de glow
    const subtitleText = heroSubtitle.querySelector('.subtitle-text');
    if (subtitleText) {
        gsap.to(subtitleText, {
            filter: "drop-shadow(0 0 20px rgba(0, 212, 255, 0.3))",
            duration: 2,
            delay: 1.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });
    }
}

// Animation des autres éléments hero
gsap.utils.toArray('[data-animate="fade-up"]').forEach((element, index) => {
    const delay = parseFloat(element.dataset.delay) || 0;
    gsap.fromTo(element,
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: delay / 1000,
            ease: "power3.out"
        }
    );
});

// Animation hero image
gsap.utils.toArray('[data-animate="fade-left"]').forEach((element) => {
    const delay = parseFloat(element.dataset.delay) || 0;
    gsap.fromTo(element,
        {
            opacity: 0,
            x: 50
        },
        {
            opacity: 1,
            x: 0,
            duration: 1.2,
            delay: delay / 1000,
            ease: "power3.out"
        }
    );
});

// Animation des cartes flottantes
const floatingCards = document.querySelectorAll('.floating-card');
const isMobile = window.innerWidth <= 640;

floatingCards.forEach((card, index) => {
    // Sur mobile, on laisse le CSS gérer le layout
    if (isMobile) {
        // Animation simple d'apparition seulement
        gsap.set(card, {
            opacity: 0,
            scale: 0.8
        });
        
        gsap.to(card,
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                delay: 0.5 + (index * 0.1),
                ease: "power2.out"
            }
        );
    } else {
        // Version desktop avec animations complètes
        const isConseils = card.classList.contains('card-5');
        const initialRotation = isConseils ? -15 : 0;
        
        // Définir l'état initial
        gsap.set(card, {
            rotation: initialRotation,
            opacity: 0,
            scale: 0.8
        });
        
        gsap.to(card,
            {
                opacity: 1,
                scale: 1,
                rotation: initialRotation,
                duration: 1,
                delay: 0.8 + (index * 0.2),
                ease: "back.out(1.7)"
            }
        );
        
        // Animation continue de flottement
        gsap.to(card, {
            y: "+=20",
            rotation: isConseils ? "+=2" : "+=5", // Moins de rotation pour Conseils car déjà penché
            duration: 3 + index,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.8 + (index * 0.2) // Démarrer après l'animation d'apparition
        });
    }
});

// ============================================
// STATS COUNTER ANIMATION
// ============================================

function animateCounter(element) {
    const target = parseFloat(element.dataset.target);
    const suffix = element.querySelector('.counter-suffix')?.textContent || '';
    const counterValue = element.querySelector('.counter-value');
    
    gsap.to({ value: 0 }, {
        value: target,
        duration: 2,
        ease: "power2.out",
        onUpdate: function() {
            if (suffix === '%') {
                counterValue.textContent = Math.round(this.targets()[0].value);
            } else {
                counterValue.textContent = Math.round(this.targets()[0].value);
            }
        }
    });
}

// Observer pour déclencher les compteurs
const statItems = document.querySelectorAll('[data-animate="counter"]');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

statItems.forEach(item => statsObserver.observe(item));

// ============================================
// SCROLL TRIGGERED ANIMATIONS
// ============================================

// Animation des sections
gsap.utils.toArray('.section-header, .feature-card, .stat-item').forEach((element) => {
    gsap.fromTo(element,
        {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Animation des cartes de features avec stagger
const featureCards = document.querySelectorAll('.feature-card');
gsap.fromTo(featureCards,
    {
        opacity: 0,
        y: 50,
        scale: 0.9
    },
    {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.features-grid',
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    }
);

// Animation Instagram CTA
gsap.fromTo('.instagram-card',
    {
        opacity: 0,
        scale: 0.8,
        rotation: -5
    },
    {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '.instagram-card',
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    }
);

// Animation CTA Section
gsap.fromTo('.cta-content',
    {
        opacity: 0,
        y: 50
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.cta-section',
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    }
);

// ============================================
// PARALLAX EFFECTS
// ============================================

// Parallax pour les orbs du hero
gsap.to('.orb-1', {
    y: 100,
    x: 50,
    scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to('.orb-2', {
    y: -100,
    x: -50,
    scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to('.orb-3', {
    y: 50,
    x: 30,
    scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

// ============================================
// CURSOR EFFECTS (optionnel)
// ============================================

// Effet de curseur personnalisé sur les boutons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    button.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// ============================================
// SMOOTH SCROLL
// ============================================

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: "power2.inOut"
            });
        }
    });
});

// ============================================
// LOADING ANIMATION
// ============================================

window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 0.5
    });
});

// ============================================
// INTERSECTION OBSERVER POUR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observer tous les éléments avec data-animate
document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Fonction pour réinitialiser les animations si nécessaire
function resetAnimations() {
    gsap.killTweensOf("*");
    ScrollTrigger.getAll().forEach(trigger => trigger.refresh());
}

// Rafraîchir les animations au resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ============================================
// CONSOLE LOG (pour debug)
// ============================================

console.log('🚀 Pass Major - Animations chargées');

