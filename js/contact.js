// JavaScript pour le formulaire de contact

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Animation du bouton
        const submitBtn = this.querySelector('.form-submit');
        const originalText = submitBtn.querySelector('span').textContent;
        
        submitBtn.querySelector('span').textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        // Simuler l'envoi (remplacer par vraie logique)
        setTimeout(() => {
            submitBtn.querySelector('span').textContent = 'Message envoyé !';
            submitBtn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
            
            // Réinitialiser après 3 secondes
            setTimeout(() => {
                submitBtn.querySelector('span').textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                this.reset();
            }, 3000);
        }, 1500);
    });
    
    // Animation des champs au focus
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        input.addEventListener('blur', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

